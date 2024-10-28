<template>
  <div class="container">
    <Breadcrumb :items="['menu.system_manage', 'menu.system_manage.orgs_manage']" />
    <a-card class="general-card" :title="$t('menu.system_manage.orgs_manage')">
      <a-card style="width: 100%;" title="Arco Card">

        <template #title>
          <a-button type="primary" @click="addOrgClick" style="margin-right: 20px;">添加组织</a-button>
          <a-button type="primary">同步组织</a-button>
        </template>
        <template #extra>
          <a-input style="width: 320px;margin-right: 20px;" v-model="listQuery.org_name" placeholder="请输入组织名称"
            allow-clear />
          <a-button type="primary" @click="get_org_tree">查询</a-button>

        </template>
        <a-table :bordered="{ cell: true }" stripe :default-expanded-keys="expandedKeys" :columns="columns"
          :loading="loading" :data="orgTreeData" style="margin-top: 20px">
          <template #state="{ record, rowIndex }">
            <span :class="{ 'normal': record.state === 1, 'disabled': record.state !== 1 }">
              {{ record.state === 1 ? '正常' : '禁用' }}
            </span>
          </template>
          <template #is_ds="{ record, rowIndex }">
            {{ record.is_ds === 1 ? '是' : '否' }}
          </template>
          <template #cz="{ record, rowIndex }">
            <a-button type="primary" style="margin-right: 20px;" @click="updateOrgClick(record, rowIndex)">编辑</a-button>
            <a-button type="primary" @click="clickDeleteOrg(record, rowIndex)">删除</a-button>
          </template>
        </a-table>
      </a-card>
    </a-card>

    <a-modal v-model:visible="addOrgVisible" @ok="handleOk" @cancel="handleCancel">
      <template #title>
        {{ Modaltite }}
      </template>
      <a-spin :loading="submitLoading">
        <a-form ref="formRef" :model="addOrgForm" auto-label-width @submit="handleSubmit">

          <!-- 
            selected-keys 受控模式，基于外部传入
            select 选中哪个节点
            -->

          <!-- <a-form-item field="partent_id" label="父组织">
              <a-tree :data="addOrgTreeData" v-model:selected-keys="selectedKeys" @select="selectNode" />
            </a-form-item> -->

          <a-form-item :style="{ width: '400px' }" field="parent" label="父组织名称" required>
            <!--
                fieldNames 指定展示的字段数据 key使用org_id来充当
                tree-props 可以控制展开层级，传入tree支持的props,default-expanded-keys默认展开圆心科技层级
                filter-tree-node 搜索过滤
                -->
            <a-tree-select :data="addOrgTreeData" v-model="addOrgForm.parent" :loading="addOrgLoading"
              :fieldNames="{ key: 'org_id', title: 'title', children: 'children' }" :filter-tree-node="filterTreeNode"
              :tree-props="{ 'default-expanded-keys': ['3f615c8f0dce11e99d340242ac110003'] }" allow-search
              placeholder="Please select ..." @change="addSelectOrg" style="width: 300px"></a-tree-select>
          </a-form-item>

          <a-form-item :style="{ width: '400px' }" field="org_id" label="组织id" required>
            <a-input v-model="addOrgForm.org_id" placeholder="请输入组织id..." />
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="org_name" label="组织名称" required>
            <a-input v-model="addOrgForm.org_name" placeholder="请输入组织名称..." />
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="org_type" label="组织类型" :field-names="{}" required>
            <a-select v-model="addOrgForm.org_type" :style="{ width: '320px' }" placeholder="请选择组织类型..."
              @change="orgTypeChange">
              <!-- 将key处理成int是用于编辑的时候，组织类型能够回显，类型必须一致 -->
              <a-option v-for="(label, key) in addOrgTypeData" :key="key" :value="parseInt(key)">
                {{ label }}
              </a-option>
              <!-- <a-option v-for="item of addOrgTypeData" :value="item" :label="item.label" /> -->

            </a-select>
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="org_code" label="组织编码" required>
            <a-input v-model="addOrgForm.org_code" placeholder="请输入组织编码..." />
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="state" label="状态" required>
            <a-radio-group v-model="addOrgForm.state">
              <a-radio :value="1">正常</a-radio>
              <a-radio :value="0">禁用</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-form-item :style="{ width: '400px' }" field="is_ds" label="是否电商" required>
            <a-radio-group v-model="addOrgForm.is_ds">
              <a-radio :value="1">是</a-radio>
              <a-radio :value="0">否</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item :style="{ width: '400px' }" field="order_index" label="序号" required>
            <a-input-number v-model="addOrgForm.order_index" :default-value="1000" mode="button" class="input-demo" />
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
import { Message } from '@arco-design/web-vue';

import { ref, reactive, onMounted } from 'vue';
import {
  req_org_manage_org_api, req_org_manage_org_type_api, req_org_manage_create_org_api, req_org_manage_delete_org_api,
  req_org_manage_update_org_api
} from '@/api/system_manage'

const expandedKeys = ref([1]);
const orgTreeData = ref();
const addOrgTreeData = ref(); // 写两份 是为了防止在页面搜索的时候，回显到Modal
const addOrgTypeData = ref();

const loading = ref(false);
const selectedKeys = ref([]);
const Modaltite = ref('')
const submitLoading = ref(false);
const addOrgLoading = ref(false);
const addOrgVisible = ref(false);
const updateOrgId = ref();
const addOrgForm = reactive({
  parent: '',
  org_id: '',
  org_name: '',
  org_type: '',
  org_code: '',
  state: 0,
  is_ds: 0,
  order_index: 1000,
});

const columns = [
  { title: '组织名称', dataIndex: 'org_name' },
  { title: '机构id', dataIndex: 'org_id' },
  { title: '组织类型', dataIndex: 'org_type_label' }, // 加这个变量目的 1 前端不用写插槽判断每个数字对应的什么类型了 2 如果采用了前端判断的方式，后端加了组织类型，前端还需要修改
  { title: '序号', dataIndex: 'order_index' },
  { title: '状态', slotName: 'state' },
  { title: '是否电商', slotName: 'is_ds' }, // 使用插槽定义新的列
  // { title: '是否商业', dataIndex: '' },
  { title: '操作', slotName: 'cz' }
];


onMounted(async () => {
  await Promise.all(
    [get_org_tree(),
    get_org_type()]
  )
})
const listQuery = ref({
  org_name: ""
})

const get_org_tree = async () => {
  try {
    loading.value = true
    const res = await req_org_manage_org_api(listQuery.value)
    orgTreeData.value = res
    console.log('获取组织树-->', res)
  } catch (error) {
    console.log('获取组织树失败-->', error)
  } finally {
    loading.value = false
  }
}

const get_org_type = async () => {
  try {
    const res = await req_org_manage_org_type_api()
    addOrgTypeData.value = res
    console.log('获取组织类型-->', res)
  } catch (error) {
    console.log('获取组织类型失败-->', error)
  }
}


const selectNode = (selectedKeys, data) => {
  // console.log('选中', selectedKeys, 'data', JSON.stringify(data))
  addOrgForm.partent_org_name = data.selectedNodes[0].title
  addOrgForm.parent = data.selectedNodes[0].org_id

  console.log('选中', addOrgForm.partent_org_name, addOrgForm.parent)

}

// 规则：组织id是否已经存在 1 调接口 2 递归便利组织树看是否存在
// const rulesOrgID = [{
//       validator: (value, cb) => {
//         console.log('value',cb)
//         return req_org_manage_org_api({})
//       }
//     }]

// 添加组织Modal 组织树下拉 选中改变
const addSelectOrg = (v) => {
  console.log('选中', v, addOrgForm.parent)
}

const orgTypeChange = (v) => {
  console.log('组织类型选中', typeof v, addOrgForm.org_type)

}

const filterTreeNode = (searchValue, nodeData) => {
  // console.log('searchValue-->',searchValue)
  return nodeData.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
}

// 添加组织按钮
const addOrgClick = async () => {
  Modaltite.value = '添加组织'
  addOrgVisible.value = true;
  addOrgLoading.value = true;
  try {
    const res = await req_org_manage_org_api()
    addOrgTreeData.value = res

    console.log('获取组织树-下拉', res)
    addOrgLoading.value = false;

  } catch (error) {
    console.log('获取组织树-下拉失败', error)
  } finally {
    // addOrgVisible.value = false;
  }
};

// 编辑组织按钮点击
const updateOrgClick = async (record, rowIndex) => {

  Modaltite.value = '编辑组织'
  console.log('编辑组织', record)
  addOrgVisible.value = true;
  addOrgLoading.value = true;
  updateOrgId.value = record.id;

  addOrgForm.parent = '';
  addOrgForm.org_id = record.org_id;
  addOrgForm.org_name = record.org_name;
  addOrgForm.org_code = record.org_code;
  addOrgForm.org_type = record.org_type;
  addOrgForm.state = record.state;
  addOrgForm.is_ds = record.is_ds;
  addOrgForm.order_index = record.order_index;

  try {
    const res = await req_org_manage_org_api()
    addOrgTreeData.value = res

    console.log('获取组织树-下拉', res)

    // 回显数据
    addOrgForm.parent = record.parent; // 确保存在值

    console.log('编辑组织回显Form数据', JSON.stringify(addOrgForm))
    addOrgLoading.value = false;

  } catch (error) {
    console.log('获取组织树以及组织来下下拉失败', error)
  } finally {
    // addOrgVisible.value = false;
  }
};




// 删除组织
const clickDeleteOrg = async (record, rowIndex) => {
  console.log('删除组织名称', record.title, record.id)
  try {
    const addRes = await req_org_manage_delete_org_api(record.id)
    Message.info('删除组织成功')
    await get_org_tree()

  } catch (error) {
    Message.error('删除组织失败')
  } finally {

  }
}

// 提交验证
const handleSubmit = async ({ values, errors }) => {
  console.log('values:', values, '\nerrors:', errors)
  if (errors) {
    // Message.error(errors)
    return
  }
  // console.assert(Modaltite.value === '添加组织', "不想待啊");
  // console.log('Modaltite.value', Modaltite.value)
  submitLoading.value = true

  try {
    if (Modaltite.value === '添加组织') {
      console.log('开始添加组织', values)
      await req_org_manage_create_org_api(values)
    } else {
      await req_org_manage_update_org_api(updateOrgId.value, values)

    }
    Message.info(`${Modaltite.value}成功`)
    // await addOrgClick() // 重新获取组织树

  } catch (error) {
    console.log('error->',error)
    Message.error(`${Modaltite.value}失败`)
  } finally {
    submitLoading.value = false
    // 更新主页组织树 与 modal组织树
    const res = await req_org_manage_org_api()
    addOrgTreeData.value = res
    if (!listQuery.value.org_name) {orgTreeData.value=res} // 主页没有查询组织名称的时候，在更新主页
  }
}

// 重置表单的函数
const resetAddOrgForm = () => {
  Object.assign(addOrgForm, {
    parent: '',
    org_id: '',
    org_name: '',
    org_type: null,
    org_code: '',
    state: 0,
    is_ds: 0,
    order_index: 1000,
  });
};

const handleOk = () => {
  addOrgVisible.value = false;
  console.log('重置Form')
  resetAddOrgForm()
};
const handleCancel = () => {
  addOrgVisible.value = false;
  console.log('重置Form')
  resetAddOrgForm()
}


</script>

<style lang="less" scoped>
.container {
  padding: 0 20px 20px 20px;
}

.normal {
  color: blue;
}

.disabled {
  color: red;
}
</style>