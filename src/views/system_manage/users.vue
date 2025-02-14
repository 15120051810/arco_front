<template>
  <div class="container">
    <Breadcrumb :items="['menu.system_manage', 'menu.system_manage.user_manage']" />
    <a-card class="general-card" :title="$t('menu.system_manage.user_manage')">

      <template #title>
        <a-button type="primary" @click="addUserClick" style="margin-right: 20px;">添加用户</a-button>
      </template>
      <template #extra>
        <a-input style="width: 320px;margin-right: 20px;" v-model="listQuery.name" placeholder="请输入用户名称" allow-clear />
        <a-button type="primary" @click="get_user_data">查询</a-button>
      </template>
      <a-table :bordered="{ cell: true }" row-key="id" stripe :columns="columns" :loading="loading" :data="userData"
        column-resizable :scroll="{ x: 1000 }" style="margin-top: 20px">

        <template #orgs_data="{ record, rowIndex }">
          <a-popover style="max-width:50%;">
            <div :style="{ width: '200px' }">
              <a-overflow-list>
                <a-tag color="arcoblue" v-for="(v, index) in record.orgs_data" :key="index"><icon-apps
                    style="margin-right:5px" /> {{ v.org_name }}</a-tag>
              </a-overflow-list>
            </div>

            <template #content>
              <a-tag color="arcoblue" v-for="(v, index) in record.orgs_data" :key="index"><icon-apps
                  style="margin-right:5px" /> {{ v.org_name }}</a-tag>
            </template>
          </a-popover>
        </template>

        <!-- <template #orgs_select="{ record, rowIndex }">
          <a-tree-select :allow-search="true" :allow-clear="true" v-model="record.orgs"
            :fieldNames="{ key: 'id', title: 'title', children: 'children' }" 
            :data="orgTreeData"
            :filter-tree-node="filterTreeNode" placeholder="Please select ..."></a-tree-select>
        </template> -->
        
        <!-- default-expand-all 不展开所有节点 default-expanded-key 默认展开的节点 defaultValue 选中默认节点-->
        <template #orgs_tree="{ record, rowIndex }">
          <a-tree-select :data="record.orgs_tree" :fieldNames="{ key: 'key', title: 'title', children: 'children' }"
            :tree-props="{'default-expand-all':false,'default-expanded-keys':['3f615c8f0dce11e99d340242ac110003'],'show-line':true}" 
            :defaultValue="record.orgs_tree.length>0 ? '3f615c8f0dce11e99d340242ac110003': ''" />
        </template>


        <template #is_active="{ record, rowIndex }">
          <span :style="{ color: record.is_active == 0 ? 'red' : 'blue' }"> {{ record.is_active == 0 ? '禁用' : '正常'
            }}</span>
        </template>

        <template #is_superuser="{ record, rowIndex }">
          <span :style="{ color: record.is_superuser == 0 ? 'blue' : 'red' }"> {{ record.is_superuser == 0 ? '否' : '是'
            }}</span>
        </template>

        <template #home_page="{ record, rowIndex }">
          <span> {{ record.home_page_data?.title }}</span>
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
          <a-button type="primary" style="margin-right: 20px;" @click="updateUserClick(record, rowIndex)">编辑</a-button>
          <a-button type="primary" @click="clickDeleteUser(record, rowIndex)">删除</a-button>
        </template>
      </a-table>
    </a-card>


    <a-modal width="600px" v-model:visible="addUserModalVisible" @ok="handleOk" @cancel="handleCancel">
      <template #title>
        {{ Modaltite }}
      </template>
      <a-spin :loading="submitLoading">
        <a-form  size="large" ref="formRef" :model="addUserForm" auto-label-width @submit="handleSubmit">

          <a-form-item :style="{ width: '400px' }" field="username" label="用户名" required>
            <a-input v-model="addUserForm.username" placeholder="请输入用户唯一名称..." />
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="name" label="姓名" required>
            <a-input v-model="addUserForm.name" placeholder="请输入用户中文名称..." />
          </a-form-item>

          <a-form-item :style="{ width: '400px' }" field="email" label="邮箱" required>
            <a-input v-model="addUserForm.email" placeholder="请输入用户邮箱..." />
          </a-form-item>

          <a-form-item :style="{ width: '400px' }" field="mobile" label="手机号" required>
            <a-input v-model="addUserForm.mobile" placeholder="请输入用户手机号..." />
          </a-form-item>

          <a-form-item :style="{ width: '400px' }" field="roles" label="用户所属角色" required>
            <a-select v-model="addUserForm.roles" placeholder="请输选择用户所属角色..." multiple :max-tag-count="2" allow-clear
              @change="addSelectRole">
              <a-option v-for="item in roleSelect" :key="item.id" :value="item.id">{{ item.name }}</a-option>
            </a-select>
          </a-form-item>

          <a-form-item :style="{ width: '400px' }" field="home_page" label="用户首页" required>
            <a-tree-select :loading="orgTreeLoading" v-model="addUserForm.home_page" :data="routerSelect"
              :field-names="{ key: 'id', title: 'title', children: 'children' }" placeholder="用户首页..."
              @change="addSelectRouter" style="width: 300px"></a-tree-select>
          </a-form-item>

          <a-form-item  field="orgs" label="组织勾选" required>
            <a-tree-select  :loading="orgTreeLoading" v-model="addUserForm.orgs" :allow-search="true"
              :fieldNames="{ key: 'id', title: 'title', children: 'children' }" :filter-tree-node="filterTreeNode"
              :max-tag-count="1" :allow-clear="true" :tree-checkable="true"
              :tree-props="{ 'default-expand-all': false,'default-expanded-keys':[1] }"
               @change="addSelectOrg"
              :tree-check-strictly="treeCheckStrictly" :data="orgTreeData" placeholder="Please select ..."
              style="width: 450px;"></a-tree-select>
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
  req_org_manage_org_api,
  req_user_manage_list_user_api,
  req_router_manage_list_router_api,
  req_user_manage_create_user_api,
  req_user_manage_update_user_api,
  req_user_manage_delete_user_api,
  req_role_manage_list_role_api
} from '@/api/system_manage'


const userData = ref();
const roleSelect = ref();
const routerSelect = ref();
const orgTreeData = ref();

const treeCheckStrictly = ref(false);
const loading = ref(false);
const Modaltite = ref('')
const submitLoading = ref(false);
const orgTreeLoading = ref(false);
const addUserModalVisible = ref(false);
const updateUserId = ref();
const addUserForm = reactive({
  name: '',
  username: '',
  email: '',
  mobile: '',
  home_page: '',
  roles: [],
  orgs: [],
});

const columns = [
  { title: '姓名', dataIndex: 'name', width: 100 },
  { title: '用户名', dataIndex: 'username', width: 100 },
  // { title: '所属组织', slotName: 'orgs_data',width: 200 },
  // { title: '所属组织树', slotName: 'orgs_select', width: 200 },
  { title: '组织展示', slotName: 'orgs_tree', width: 200 },
  // { title: '所属渠道', slotName: 'channel_data' },
  { title: '邮箱', dataIndex: 'email', width: 200 },
  { title: '手机号', dataIndex: 'mobile', width: 200 },
  { title: '用户状态', slotName: 'is_active', width: 100 },
  { title: '是否超级用户', slotName: 'is_superuser', width: 200 },
  { title: '首页', slotName: 'home_page', width: 100 },
  { title: '操作', slotName: 'cz' }
];


onMounted(async () => {
  await Promise.all([
    get_org_data(), // 事先获取组织架构，在编辑用的时候，用户回显用户已勾选的组织，不用在请求一遍了。
    get_role_select(),
    get_router_select(),
    get_user_data(),

  ])

})

const listQuery = ref({
  name: ""
})

// 获取角色下拉
const get_role_select = async () => {
  try {
    const res = await req_role_manage_list_role_api()
    roleSelect.value = res
    console.log('获取角色下拉-下拉', res)
  } catch (error) {
    console.log('获取角色下拉-失败', error)
  }
}

// 获取菜单下拉
const get_router_select = async () => {
  try {
    const res = await req_router_manage_list_router_api()
    routerSelect.value = res
    console.log('获取菜单下拉', res)
  } catch (error) {
    console.log('获取菜单下拉-失败', error)
  }
}

// 点击添加用户按钮 请求组织列表，角色列表
const addUserClick = async () => {
  Modaltite.value = '添加用户'
  addUserModalVisible.value = true;
  updateUserId.value = '';
  addUserForm.routers = [];
  addUserForm.name = '';
  addUserForm.username = '';
  addUserForm.email = '';
  addUserForm.mobile = '';
  addUserForm.roles = [];
  addUserForm.home_page = '';
  addUserForm.orgs = [];

};


// 编辑用户按钮点击
const updateUserClick = async (record, rowIndex) => {
  Modaltite.value = '编辑用户'
  // console.log('编辑用户', JSON.stringify(record))
  addUserModalVisible.value = true;
  updateUserId.value = record.id;
  addUserForm.routers = record.router;
  addUserForm.name = record.name;
  addUserForm.username = record.username;
  addUserForm.email = record.email;
  addUserForm.mobile = record.mobile;
  addUserForm.roles = record.roles;
  addUserForm.home_page = record.home_page;
  addUserForm.orgs = record.orgs;
};

// 获取用户树-主页  带标题搜索
const get_user_data = async () => {
  try {
    loading.value = true
    const res = await req_user_manage_list_user_api(listQuery.value)
    userData.value = res
    console.log('获取用户列表-->', res)
  } catch (error) {
    console.log('获取用户列表失败-->', error)
  } finally {
    loading.value = false
  }
}

// 获取机构树
const get_org_data = async () => {
  try {
    const res = await req_org_manage_org_api()
    orgTreeData.value = res
    console.log('获取机构树-->', res)
  } catch (error) {
    console.error('获取机构树失败-->', error)
  }
}

const addSelectRole = (v, record) => {
  console.log('选中->角色', v, JSON.stringify(record))
}


const filterTreeNode = (searchValue, nodeData) => {
  // console.log('searchValue-->',searchValue)
  return nodeData.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
}

// 添加用户Modal 菜单树下拉 选中改变
const addSelectRouter = (v) => {
  console.log('选中首页', v, JSON.stringify(addUserForm.home_page))
}


// 添加用户Modal 机构树下拉 选中改变
const orgChangeFlag = ref(false)
const addSelectOrg = (v) => {
  console.log('选中', v, JSON.stringify(addUserForm.orgs))
  orgChangeFlag.value = true
}


// 删除用户
const clickDeleteUser = async (record, rowIndex) => {
  console.log('删除用户名称', record.title, record.id)
  try {
    const addRes = await req_user_manage_delete_user_api(record.id)
    Message.info('删除用户成功')
    await get_user_data()

  } catch (error) {
    Message.error('删除用户失败')
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
    if (Modaltite.value === '添加用户') {
      console.log('添加用户', values)
      await req_user_manage_create_user_api(values)
    } else {
      values['orgChangeFlag'] = orgChangeFlag.value
      console.log('编辑用户', values)
      await req_user_manage_update_user_api(updateUserId.value, values)
    }
    Message.info(`${Modaltite.value}成功`)
    addUserModalVisible.value = false;
    // await addUserClick() // 重新获取用户树

  } catch (error) {
    console.error('error->', error)
    Message.error(`${Modaltite.value}失败`)
  } finally {
    submitLoading.value = false
    orgChangeFlag.value = false
    // 更新主页用户树 与 modal用户树
    // if (!listQuery.value.name) {
    //   loading.value = true
    //   const res = await req_user_manage_list_user_api()
    //   userData.value = res
    //   loading.value = false
    // } // 主页没有查询用户名称的时候，在更新主页
    await get_user_data()
  }
}


// 重置表单的函数
const resetaddUserForm = () => {
  Object.assign(addUserForm, {
    name: '',
    remarks: '',
    routers: [],
    type: 1,
  });
};

const handleOk = () => {
  addUserModalVisible.value = false;
  console.log('重置Form')
  resetaddUserForm()
};
const handleCancel = () => {
  addUserModalVisible.value = false;
  console.log('重置Form')
  resetaddUserForm()
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