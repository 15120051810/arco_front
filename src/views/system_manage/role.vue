<template>
  <div class="container">
    <Breadcrumb :items="['menu.system_manage', 'menu.system_manage.role_manage']" />
    <a-card class="general-card" :title="$t('menu.system_manage.role_manage')">

      <template #title>
        <a-button type="primary" @click="addRoleClick" style="margin-right: 20px;">添加角色</a-button>
      </template>
      <template #extra>
        <a-input style="width: 320px;margin-right: 20px;" v-model="listQuery.name" placeholder="请输入角色名称" allow-clear />
        <a-button type="primary" @click="get_role_tree">查询</a-button>
      </template>
      <a-table :bordered="{ cell: true }" row-key="id" stripe :columns="columns" :loading="loading" :data="roleData"
        style="margin-top: 20px">

        <template #type="{ record, rowIndex }">
          {{ record.type == 0 ? 'PC' : 'APP' }}
        </template>

        <template #permission="{ record, rowIndex }">
          <a-popover>
            <template #content>
              <a-space>
                <a-tag v-for="(tag, index) of record.routers_data" :key="tag" bordered color="orangered">
                  {{ tag.title }}
                </a-tag>
              </a-space>
            </template>
            <a-button>权限列表</a-button>
          </a-popover>
        </template>

        <template #cz="{ record, rowIndex }">
          <a-button type="primary" style="margin-right: 20px;" @click="updateRoleClick(record, rowIndex)">编辑</a-button>
          <a-button type="primary" @click="clickDeleteRole(record, rowIndex)">删除</a-button>
        </template>
      </a-table>
    </a-card>


    <a-modal v-model:visible="addRoleVisible" @ok="handleOk" @cancel="handleCancel">
      <template #title>
        {{ Modaltite }}
      </template>
      <a-spin :loading="submitLoading">
        <a-form ref="formRef" :model="addRoleForm" auto-label-width @submit="handleSubmit">

          <a-form-item :style="{ width: '400px' }" field="name" label="角色名称" required>
            <a-input v-model="addRoleForm.name" placeholder="请输入角色名称..." />
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="remarks" label="角色描述" required>
            <a-input v-model="addRoleForm.remarks" placeholder="请输入角色描述..." />
          </a-form-item>

          <a-form-item :style="{ width: '400px' }" field="remarks" label="角色关键字" required>
            <a-input v-model="addRoleForm.keyword" placeholder="请输入角色关键字..." />
          </a-form-item>

          <a-form-item :style="{ width: '400px' }" field="type" label="角色类型" required>
            <a-radio-group v-model="addRoleForm.type">
              <a-radio :value="0">PC</a-radio>
              <a-radio :value="1">APP</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-form-item :style="{ width: '400px' }" field="routers" label="权限勾选" required>
            <a-tree-select :loading="routerTreeLoading" v-model="addRoleForm.routers" :allow-search="true" :max-tag-count='2'
              :fieldNames="{ key: 'id', title: 'title', children: 'children' }" :filter-tree-node="filterTreeNode"
              :allow-clear="true" :tree-checkable="true" :tree-props="{ 'default-expand-all': false }"
              @change="addSelectRouter" :tree-check-strictly="treeCheckStrictly" :data="routerTreeData"
              placeholder="Please select ..." style="width: 300px;"></a-tree-select>

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
  req_role_manage_list_role_api,
  req_router_manage_list_router_api,
  req_role_manage_create_role_api,
  req_role_manage_update_role_api,
  req_role_manage_delete_role_api
} from '@/api/system_manage'


const roleData = ref();
const routerTreeData = ref();
const treeCheckStrictly = ref(true);
const loading = ref(false);
const Modaltite = ref('')
const submitLoading = ref(false);
const routerTreeLoading = ref(false);
const addRoleVisible = ref(false);
const updateRoleId = ref();
const addRoleForm = reactive({
  name: '',
  remarks: '',
  keyword:'',
  routers: [],
  type: 0,
});

const columns = [
  { title: '角色标题', dataIndex: 'name' },
  { title: '角色描述', dataIndex: 'remarks' },
  { title: '角色关键字', dataIndex: 'keyword' },
  { title: '角色类型', slotName: 'type' },
  { title: '角色权限', slotName: 'permission' },
  { title: '操作', slotName: 'cz' }
];


onMounted(async () => {
  await get_role_tree()
})

const listQuery = ref({
  name: ""
})

// 点击添加角色按钮
const addRoleClick = async () => {
  Modaltite.value = '添加角色'
  addRoleVisible.value = true;
  routerTreeLoading.value = true;

  addRoleForm.name = ''
  addRoleForm.remarks = ''
  addRoleForm.keyword =''
  addRoleForm.routers = []
  addRoleForm.type= 0

  try {
    const res = await req_router_manage_list_router_api()
    routerTreeData.value = res

    console.log('获取菜单树-下拉', res)
    routerTreeLoading.value = false;

  } catch (error) {
    console.log('获取添加角色-下拉失败', error)
  } finally {
    // addRoleVisible.value = false;
  }
};


// 编辑角色按钮点击
const updateRoleClick = async (record, rowIndex) => {

  Modaltite.value = '编辑角色'
  console.log('编辑角色', record)
  addRoleVisible.value = true;
  routerTreeLoading.value = true;
  updateRoleId.value = record.id;

  addRoleForm.routers = '';
  addRoleForm.name = record.name;
  addRoleForm.type = record.type;
  addRoleForm.remarks = record.remarks;
  addRoleForm.keyword = record.keyword;


  try {
    const res = await req_router_manage_list_router_api()
    console.log('获取菜单树-下拉', res)
    routerTreeData.value = res

    // 回显数据
    addRoleForm.routers = record.routers; // 确保存在值

    console.log('编辑角色回显Form数据', JSON.stringify(addRoleForm))
    routerTreeLoading.value = false;

  } catch (error) {
    console.log('获取角色树以及角色下拉失败', error)
  } finally {
    // addOrgVisible.value = false;
  }
};

// 获取角色树-主页  带标题搜索
const get_role_tree = async () => {
  try {
    loading.value = true
    const res = await req_role_manage_list_role_api(listQuery.value)
    roleData.value = res
    console.log('获取角色树-->', res)
  } catch (error) {
    console.log('获取角色树失败-->', error)
  } finally {
    loading.value = false
  }
}

const filterTreeNode = (searchValue, nodeData) => {
  // console.log('searchValue-->',searchValue)
  return nodeData.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
}

// 添加角色Modal 菜单树下拉 选中改变
const addSelectRouter = (v) => {
  console.log('选中', v, JSON.stringify(addRoleForm.routers))
}


// 删除角色
const clickDeleteRole = async (record, rowIndex) => {
  console.log('删除角色名称', record.title, record.id)
  try {
    const addRes = await req_role_manage_delete_role_api(record.id)
    Message.info('删除角色成功')
    await get_role_tree()

  } catch (error) {
    Message.error('删除角色失败')
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
    if (Modaltite.value === '添加角色') {
      console.log('添加角色', values)
      await req_role_manage_create_role_api(values)
    } else {
      console.log('编辑角色', values)
      await req_role_manage_update_role_api(updateRoleId.value, values)
    }
    Message.info(`${Modaltite.value}成功`)
    // await addRoleClick() // 重新获取角色树

  } catch (error) {
    console.error('error->', error)
    Message.error(`${Modaltite.value}失败`)
  } finally {
    submitLoading.value = false
    // 更新主页角色树 与 modal角色树
    if (!listQuery.value.name) {
      const res = await req_role_manage_list_role_api()
      roleData.value = res
    } // 主页没有查询角色名称的时候，在更新主页
  }
}


// 重置表单的函数
const resetaddRoleForm = () => {
  Object.assign(addRoleForm, {
    name: '',
    remarks: '',
    routers: [],
    type: 1,
  });
};

const handleOk = () => {
  addRoleVisible.value = false;
  console.log('重置Form')
  resetaddRoleForm()
};
const handleCancel = () => {
  addRoleVisible.value = false;
  console.log('重置Form')
  resetaddRoleForm()
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