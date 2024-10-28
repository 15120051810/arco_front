<template>
  <div class="container">
    <Breadcrumb :items="['menu.system_manage', 'menu.system_manage.routers_manage']" />
    <a-card class="general-card" :title="$t('menu.system_manage.routers_manage')">

      <template #title>
        <a-button type="primary" @click="addRouterClick" style="margin-right: 20px;">添加菜单</a-button>
      </template>
      <template #extra>
        <a-input style="width: 320px;margin-right: 20px;" v-model="listQuery.router_name" placeholder="请输入菜单名称"
          allow-clear />
        <a-button type="primary" @click="get_router_tree">查询</a-button>

      </template>
      <a-table :bordered="{ cell: true }" row-key="id" stripe v-model:expandedKeys="expandedKeys" :columns="columns"
        :loading="loading" :data="routerTreeData" style="margin-top: 20px">
        <template #type="{ record, rowIndex }">
          <div class="iconContainer">
            <icon-font :type="`${record.type === 0 ? 'icon-mulu' : 'icon-yemian'}`" :size="20"> </icon-font>
            <span style="font-size: 15px;">{{ record.type === 0 ? '目录' : '页面' }} </span>
          </div>
        </template>
        <template #show="{ record, rowIndex }">
          <div style="">
            <icon-check v-if="record.show == 1 ? true : false" :style="{ fontSize: '18px', color: 'blue' }" />
            <icon-close v-else :style="{ fontSize: '18px', color: 'red' }" />
          </div>
        </template>

        <template #cz="{ record, rowIndex }">
          <a-button type="primary" style="margin-right: 20px;"
            @click="updateRouterClick(record, rowIndex)">编辑</a-button>
          <a-button type="primary" @click="clickDeleteRouter(record, rowIndex)">删除</a-button>
        </template>
      </a-table>
    </a-card>


    <a-modal v-model:visible="addRouterVisible" @ok="handleOk" @cancel="handleCancel">
      <template #title>
        {{ Modaltite }}
      </template>
      <a-spin :loading="submitLoading">
        <a-form ref="formRef" :model="addRouterForm" auto-label-width @submit="handleSubmit">

          <a-form-item :style="{ width: '400px' }" field="type" label="菜单类型" required>
            <a-radio-group v-model="addRouterForm.type">
              <a-radio :value="1">正常</a-radio>
              <a-radio :value="0">禁用</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-form-item>
            <a-space>
              <a-button html-type="submit">提交</a-button>
              <a-button @click="$refs.formRef.resetFields()">重置</a-button>
            </a-space>
          </a-form-item>
        </a-form>
      </a-spin>

    </a-modal>
  </div>
</template>

<script setup>
import { Icon } from '@arco-design/web-vue';
import { Message } from '@arco-design/web-vue';
import { ref, reactive, onMounted } from 'vue';
import {
  req_router_manage_list_router_api,
} from '@/api/system_manage'

const IconFont = Icon.addFromIconFontCn({ src: 'https://at.alicdn.com/t/c/font_4250691_p452lbhnp0c.js' });


const expandedKeys = ref([]);
const routerTreeData = ref();
const addRouterTreeData = ref(); // 写两份 是为了防止在页面搜索的时候，回显到Modal
const addRouterTypeData = ref();

const loading = ref(false);
const selectedKeys = ref([]);
const Modaltite = ref('')
const submitLoading = ref(false);
const addRouterLoading = ref(false);
const addRouterVisible = ref(false);
const updateRouterId = ref();
const addRouterForm = reactive({
  parent: '',
  name: '',
  title: '',
  local_title: '',
  component: '',
  redirect: '',
  icon: 0,
  show: 0,
  order_index: 1000,
  type: 0,
  system: 1000,
  keyword: '',
});

const columns = [
  { title: '菜单标题', dataIndex: 'title' },
  { title: '菜单类型', slotName: 'type' },
  { title: '路由唯一名称', dataIndex: 'name' },
  { title: '组件名称', dataIndex: 'order_index' },
  { title: '是否展示', slotName: 'show' },
  { title: '排序', dataIndex: 'order_index' },
  { title: '权限关键字', dataIndex: 'keyword' },
  { title: '操作', slotName: 'cz' }
];


onMounted(async () => {
  await get_router_tree()
})

const listQuery = ref({
  title: ""
})

// 添加菜单按钮
const addRouterClick = async () => {
  Modaltite.value = '添加菜单'
  addRouterVisible.value = true;
  try {


  } catch (error) {
    console.log('添加菜单-下拉失败', error)
  } finally {
    // addRouterVisible.value = false;
  }
};

const get_router_tree = async () => {
  try {
    loading.value = true
    const res = await req_router_manage_list_router_api(listQuery.value)
    routerTreeData.value = res
    console.log('获取菜单树-->', res)
  } catch (error) {
    console.log('获取菜单树失败-->', error)
  } finally {
    loading.value = false
  }
}


</script>

<style scoped>
.container {
  padding: 0 20px 20px 20px;
}

.iconContainer {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 3px;
}
</style>