<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">{{ $t('login.form.title') }}</div>
    <div class="login-form-sub-title">{{ $t('login.form.title') }}</div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>
    <a-form ref="loginForm" :model="userInfo" class="login-form" layout="vertical" @submit="handleSubmit">
      <a-form-item field="username" :rules="[{ required: true, message: $t('login.form.userName.errMsg') }]"
        :validate-trigger="['change', 'blur']" hide-label>
        <a-input v-model="userInfo.username" :placeholder="$t('login.form.userName.placeholder')">
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item field="password" :rules="[{ required: true, message: $t('login.form.password.errMsg') }]"
        :validate-trigger="['change', 'blur']" hide-label>
        <a-input-password v-model="userInfo.password" :placeholder="$t('login.form.password.placeholder')" allow-clear>
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-space :size="16" direction="vertical">
        <div class="login-form-password-actions">
          <a-checkbox checked="rememberPassword" :model-value="loginConfig.rememberPassword"
            @change="setRememberPassword as any">
            {{ $t('login.form.rememberPassword') }}
          </a-checkbox>
          <a-link>{{ $t('login.form.forgetPassword') }}</a-link>
        </div>
        <a-button type="primary" html-type="submit" long :loading="loading">
          {{ $t('login.form.login') }}
        </a-button>
        <a-button type="text" long class="login-form-register-btn">
          {{ $t('login.form.register') }}
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
const filePath = new URL('', import.meta.url).pathname

import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';
import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
import { useI18n } from 'vue-i18n'; // 引入 Vue I18n 国际化插件，用于多语言支持。
import { useStorage } from '@vueuse/core';
import { useUserStore } from '@/store';
import useLoading from '@/hooks/loading';
import type { LoginData } from '@/api/user';

const router = useRouter();
const { t } = useI18n(); // 获取 $t 方法用于多语言的翻译功能。
const errorMessage = ref('');
const { loading, setLoading } = useLoading(); // 使用自定义 hook 获取 loading 状态和设置加载状态的函数 setLoading。
const userStore = useUserStore();


// useStorage用于在本地存储中管理数据。它可能将数据持久化到浏览器的 localStorage 或 sessionStorage 中。
const loginConfig = useStorage('login-config',// 'login-config' 是存储在本地存储中的键名，用于标识这个配置项。
{ rememberPassword: true, // { rememberPassword: true, username: 'admin', password: 'admin' } 是默认值，如果本地存储中没有相应的值，则使用这些默认值。
  username: 'liuxiangyu', // 演示默认值
  password: 'Miao13456', // demo default value
});

const userInfo = reactive({
  username: loginConfig.value.username,
  password: loginConfig.value.password,
});

const handleSubmit = async ({
  errors, // 表单校验的错误信息，类型为 Record<string, ValidatedError> | undefined。
  values, // 表单提交的数据，类型为 Record<string, any>。
}: {
  errors: Record<string, ValidatedError> | undefined;
  values: Record<string, any>;
}) => {
  console.log(filePath,"开始登录", errors, values)
  if (loading.value) return; // 如果 loading.value 为 true，则直接返回，避免重复提交。
  if (!errors) { // 如果 errors 为 undefined，即没有错误，则继续处理提交
    setLoading(true);  // 调用 setLoading(true)，表示正在处理登录。
    try {
      await userStore.login(values as LoginData);

      const { redirect, ...othersQuery } = router.currentRoute.value.query; // 获取当前路由的查询参数，并尝试重定向到 redirect 或默认页面 'Workplace'。

      console.log(filePath,'登录后->router.currentRoute.value.query;', router.currentRoute.value.query)
      console.log(filePath,'登录后解包->redirect', redirect)
      console.log(filePath,'登录后解包->othersQuery', othersQuery)

      // router.push 用于页面导航，跳转到新的路由。 获取当前路由的查询参数后，并尝试重定向到 redirect 或默认页面 'Workplace'。
      router.push({
        name: (redirect as string) || 'workplace',
        query: {
          ...othersQuery,
        },
      }).catch((err) => {
        console.error('路由跳转失败：', err);
      });
      Message.success(t('login.form.login.success'));
      const { rememberPassword } = loginConfig.value;
      const { username, password } = values;
      // 实际生产环境需要进行加密存储。
      // The actual production environment requires encrypted storage.
      // 根据 rememberPassword 的值，更新 loginConfig 中的用户名和密码。注意这里的密码存储方式只是演示，生产环境中需要加密存储。
      loginConfig.value.username = rememberPassword ? username : '';
      loginConfig.value.password = rememberPassword ? password : '';
    } catch (err) {
      // 如果登录过程中发生错误，将错误信息赋值给 errorMessage。
      errorMessage.value = (err as Error).message;
    } finally {
      //  登录处理完成后，无论成功还是失败，都调用 setLoading(false)，重置加载状态。
      setLoading(false);
    }
  }
};

// 更新 loginConfig.value.rememberPassword 的值
const setRememberPassword = (value: boolean) => {
  loginConfig.value.rememberPassword = value;
};
</script>

<style lang="less" scoped>
.login-form {
  &-wrapper {
    width: 320px;
  }

  &-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-sub-title {
    color: var(--color-text-3);
    font-size: 16px;
    line-height: 24px;
  }

  &-error-msg {
    height: 32px;
    color: rgb(var(--red-6));
    line-height: 32px;
  }

  &-password-actions {
    display: flex;
    justify-content: space-between;
  }

  &-register-btn {
    color: var(--color-text-3) !important;
  }
}
</style>
