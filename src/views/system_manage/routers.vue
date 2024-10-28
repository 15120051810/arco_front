<template>
  <div class="container">
    <Breadcrumb :items="['menu.system_manage', 'menu.system_manage.routers_manage']" />
    <a-card class="general-card" :title="$t('menu.system_manage.routers_manage')">

      <template #title>
        <a-button type="primary" @click="addRouterClick" style="margin-right: 20px;">添加菜单</a-button>
      </template>
      <template #extra>
        <a-input style="width: 320px;margin-right: 20px;" v-model="listQuery.title" placeholder="请输入菜单名称"
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
          <div>
            <icon-check v-if="record.show ? 1 : 0" :style="{ fontSize: '18px', color: 'blue' }" />
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
              <a-radio :value="0">目录</a-radio>
              <a-radio :value="1">页面</a-radio>
              <a-radio :value="2">按钮</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="title" label="菜单标题" required>
            <a-input v-model="addRouterForm.title" placeholder="请输入菜单名称..." />
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="name" label="路由path" required>
            <a-input v-model="addRouterForm.name" placeholder="请输入路由唯一path..." />
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="component" label="组件component" required>
            <a-input v-model="addRouterForm.component" placeholder="请输入组件名称..." />
          </a-form-item>

          <a-divider orientation="center">Meta</a-divider>

          <a-form-item :style="{ width: '400px' }" field="locale_title" label="菜单多语言配置" required>
            <a-input v-model="addRouterForm.locale_title" placeholder="请输入菜单多语言配置..." />
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="icon" label="菜单图标">
            <a-input v-model="addRouterForm.icon" placeholder="请输入菜单图标..." />
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="redirect" label="跳转路径">
            <a-input v-model="addRouterForm.redirect" placeholder="请输入跳转路径..." />
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="order_index" label="排序">
            <a-input-number v-model="addRouterForm.order_index" :default-value="1000" mode="button"
              class="input-demo" />
          </a-form-item>

          <a-form-item :style="{ width: '400px' }" field="show" label="是否展示" required>
            <a-radio-group v-model="addRouterForm.show">
              <a-radio :value="1">展示</a-radio>
              <a-radio :value="0">不展示</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-divider orientation="center">Correlation</a-divider>

          <a-form-item :style="{ width: '400px' }" field="parent" label="父菜单名称" required>
            <a-tree-select :data="addRouterTreeData" v-model="addRouterForm.parent" :loading="addRouterLoading"
              :fieldNames="{ key: 'id', title: 'title', children: 'children' }" :filter-tree-node="filterTreeNode"
              allow-search placeholder="Please select ..." @change="addSelectRouter" style="width: 300px">
            </a-tree-select>
          </a-form-item>

          <a-form-item :style="{ width: '400px' }" field="system" label="所属系统" required>
            <a-radio-group v-model="addRouterForm.system">
              <a-radio :value="1">PC</a-radio>
              <a-radio :value="0">APP</a-radio>
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
  req_router_manage_create_router_api,
  req_router_manage_update_router_api,
  req_router_manage_delete_router_api
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
  locale_title: '',
  component: '',
  redirect: '',
  icon: '',
  show: 1,
  order_index: 1000,
  type: 0,
  system: 1,
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

// 点击添加菜单按钮
const addRouterClick = async () => {
  Modaltite.value = '添加菜单'
  addRouterVisible.value = true;
  addRouterLoading.value = true;
  try {
    const res = await req_router_manage_list_router_api()
    addRouterTreeData.value = res

    console.log('获取添加菜单-下拉', res)
    addRouterLoading.value = false;

  } catch (error) {
    console.log('获取添加菜单-下拉失败', error)
  } finally {
    // addRouterVisible.value = false;
  }
};


// 编辑菜单按钮点击
const updateRouterClick = async (record, rowIndex) => {

  Modaltite.value = '编辑菜单'
  console.log('编辑菜单', record)
  addRouterVisible.value = true;
  addRouterLoading.value = true;
  updateRouterId.value = record.id;

  addRouterForm.parent = '';
  addRouterForm.name = record.name;
  addRouterForm.title = record.title;
  addRouterForm.locale_title = record.locale_title;
  addRouterForm.type = record.type;
  addRouterForm.show = record.show ? 1 : 0;
  addRouterForm.order_index = record.order_index;
  addRouterForm.redirect = record.redirect;
  addRouterForm.component = record.component;
  addRouterForm.icon = record.icon;
  addRouterForm.system = record.system;


  try {
    const res = await req_router_manage_list_router_api()
    addRouterTreeData.value = res

    console.log('获取菜单树-下拉', res)

    // 回显数据
    addRouterForm.parent = record.parent; // 确保存在值

    console.log('编辑菜单回显Form数据', JSON.stringify(addRouterForm))
    addRouterLoading.value = false;

  } catch (error) {
    console.log('获取菜单树以及菜单下拉失败', error)
  } finally {
    // addOrgVisible.value = false;
  }
};

// 获取菜单树-主页  带标题搜索
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

const filterTreeNode = (searchValue, nodeData) => {
  // console.log('searchValue-->',searchValue)
  return nodeData.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
}

// 添加菜单Modal 菜单树下拉 选中改变
const addSelectRouter = (v) => {
  console.log('选中', v, addRouterForm.parent)
}


// 删除菜单
const clickDeleteRouter = async (record, rowIndex) => {
  console.log('删除菜单名称', record.title, record.id)
  try {
    const addRes = await req_router_manage_delete_router_api(record.id)
    Message.info('删除菜单成功')
    await get_router_tree()

  } catch (error) {
    Message.error('删除菜单失败')
  } 
}

// 提交验证
const handleSubmit = async ({ values, errors }) => {
  console.log('values:', values, '\nerrors:', errors)
  if (errors) {
    // Message.error(errors)
    return
  }
  console.log('Modaltite.value', Modaltite.value)
  submitLoading.value = true

  try {
    if (Modaltite.value === '添加菜单') {
      console.log('添加菜单', values)
      await req_router_manage_create_router_api(values)
    } else {
      console.log('编辑菜单', values)
      await req_router_manage_update_router_api(updateRouterId.value, values)
    }
    Message.info(`${Modaltite.value}成功`)
    // await addRouterClick() // 重新获取组织树

  } catch (error) {
    console.error('error->', error)
    Message.error(`${Modaltite.value}失败`)
  } finally {
    submitLoading.value = false
    // 更新主页组织树 与 modal组织树
    const res = await req_router_manage_list_router_api()
    addRouterTreeData.value = res
    if (!listQuery.value.title) { routerTreeData.value = res } // 主页没有查询组织名称的时候，在更新主页
  }
}


// 重置表单的函数
const resetaddRouterForm = () => {
  Object.assign(addRouterForm, {
    parent: '',
    name: '',
    title: '',
    locale_title: '',
    component: '',
    redirect: '',
    icon: '',
    show: 1,
    order_index: 1000,
    type: 0,
    system: 1,
    keyword: '',
  });
};

const handleOk = () => {
  addRouterVisible.value = false;
  console.log('重置Form')
  resetaddRouterForm()
};
const handleCancel = () => {
  addRouterVisible.value = false;
  console.log('重置Form')
  resetaddRouterForm()
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