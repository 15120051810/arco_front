<template>
    <div class="container">
        <Breadcrumb :items="['menu.system_manage', 'menu.roles_manage']" />
        <a-card class="general-card" :title="$t('menu.roles_manage')">
          <a-space direction="vertical"  size="medium" fill>
            <div>
                <span v-has="'permission:role_create'">
                  <a-button type="primary" @click="add_role()">添加角色</a-button>
                </span>
                <a-input-search :style="{width:'320px', float:'right'}" v-model="listQuery.name" placeholder="请输入角色名称" search-button @search="getData()"/>
            </div>

            <a-table :data="data" :loading="loading" :bordered="{cell:true}">
              <template #columns>
                  <a-table-column title="角色名" data-index="name"></a-table-column>
                  <a-table-column title="角色描述" data-index="remarks"></a-table-column>
                  <a-table-column title="角色权限" data-index="routers">
                    <template #cell="{ record }">

                      <a-popover title="权限列表" style="max-width:60%;">
                        <a-button type="outline">展示权限</a-button>
                        <template #content>
                          <a-space wrap><a-tag v-for="(content, index) of record.routers" :key="index" color="#0fc6c2" size="small">{{ content.title }}</a-tag></a-space>
                        </template>
                      </a-popover>

                    </template> 
                  </a-table-column>
                  <a-table-column title="操作">
                      <template #cell="{ record }">
                          <a-space>
                              <div v-has="'permission:role_update'">
                                  <a-button type="primary" @click="edit_role(record)">编辑</a-button>
                              </div>
                              <div v-has="'permission:role_destroy'">
                                  <a-popconfirm content="你确定要删除这个菜单吗 ?" @ok="del_role(record)">
                                      <a-button type="primary">删除</a-button>
                                  </a-popconfirm>
                              </div>
                          </a-space>
                      </template>
                  </a-table-column>
              </template>
            </a-table>
          </a-space>
        </a-card>

        <a-modal v-model:visible="visible" @ok="ok_add_edit()" :okLoading="ok_loading" draggable>
            <template #title>{{ modal_title }}</template>
            <div>
                <a-form :model="form_dict" layout="horizontal" size="large" :auto-label-width="true">
                    <a-form-item field="name" label="角色名">
                      <a-input v-model="form_dict.name" placeholder="请输入角色名" />
                    </a-form-item>

                    <a-form-item field="remarks" label="角色描述">
                      <a-textarea v-model="form_dict.remarks" placeholder="请输入角色描述"/>
                    </a-form-item>

                    <a-form-item field="type" label="角色类型">
                      <a-radio-group v-model:model-value="system">
                        <a-radio :value="0">PC 端</a-radio>
                        <a-radio :value="1">移动端</a-radio>
                      </a-radio-group>
                    </a-form-item>
                    
                    <a-form-item field="" label="分配权限">
                      <a-tree 
                        :fieldNames="{ key: 'id', title: 'title' }"
                        :data="router_tree_list"
                        :checkable="true"
                        :check-strictly="true"

                        v-model:checked-keys="form_dict.routers"
                        v-model:expanded-keys="expandedKeys"
                      />
                    </a-form-item>
                </a-form>
            </div>
        </a-modal>
    </div>
  </template>

<script lang="ts">
  import { 
    get_system_manage_role_list, 
    get_system_manage_router_list, 
    add_system_manage_role, 
    del_system_manage_role, 
    edit_system_manage_role } from '@/api/permission'
  export default {
    name: 'roles',
    created() {
      this.getData();
    },
  data(){
    let data:any;
    let router_tree_list:any;
    let expandedKeys:any;
    return {
        data,
        router_tree_list,
        expandedKeys,
        loading:false,
        ok_loading:false,
        visible:false,
        modal_title:'',
        system: 0,

        listQuery: {
          name: ""
        },
        
        form_dict:{
          id:'',
          name:'',
          remarks:'',
          routers:[]
        }
    }
  },
  methods:{
    getData(){
      this.loading = true
      get_system_manage_role_list(this.listQuery).then(res=>{
        console.log('获取角色数据 ---> ', res)
        this.data = res
        this.loading = false
      }).catch(res=>{
        this.loading = false
      })

      this.get_system_manage_router_list_func();
    },
    get_system_manage_router_list_func(){
      get_system_manage_router_list({'type': 'small_tree', 'system': this.system}).then(res=>{
        console.log('获取菜单树 ---> ', res)
        this.router_tree_list = res
      })
    },
    add_role(){
      this.visible = true
      this.modal_title = '添加角色'
      // 格式化
      this.form_dict = {
        id:'',
        name:'',
        remarks:'',
        routers:[]
      }
    },
    edit_role(record:{[propName:string]:any}){
      this.visible = true
      this.modal_title = '编辑 ' + record.name + ' 角色'
      // 格式化
      // this.form_dict = {
      //   id: record.id,
      //   name: record.name,
      //   system: record.system,
      //   remarks: record.remarks,
      //   routers: record.routers?record.routers.map((v:{[propName:string]:any}) => { return v.id }):[]
      // }
      this.form_dict.id = record.id;
      this.form_dict.name = record.name;
      this.form_dict.remarks = record.remarks;
      this.form_dict.routers = record.routers?record.routers.map((v:{[propName:string]:any}) => { return v.id }):[];

      this.expandedKeys = this.form_dict.routers
    },
    ok_add_edit(){
      this.ok_loading = true

      if(this.form_dict.id){
        console.log('提交了 编辑 操作', this.form_dict)
        edit_system_manage_role(this.form_dict).then(res=>{
          this.$notification.success(this.form_dict.name + ' 角色编辑成功...')
          this.ok_loading = false
          this.getData()
        }).catch(res=>{
          this.ok_loading = false
          this.$notification.error('角色编辑失败!!!')
        })
      }
      else{
        console.log('提交了 添加 操作', this.form_dict)
        add_system_manage_role(this.form_dict).then(res=>{
          this.$notification.success(this.form_dict.name + ' 角色添加成功...')
          this.ok_loading = false
          this.getData()
        }).catch(res=>{
          this.ok_loading = false
          this.$notification.error('角色添加失败!!!')
        })
      }
    },
    del_role(record:{[propName:string]:any}){
      console.log('提交了 删除 操作', record)
      del_system_manage_role(record.id).then(res => {
        this.$notification.success(record.name + ' 角色删除成功...')
        this.getData()
      }).catch(res=>{
        this.$notification.error('角色删除失败!!!')
        this.getData()
      })
    }
  },
  watch:{
    system: function(newVal, oldVal){
      this.get_system_manage_router_list_func();
    }
  }
};
</script>
  
  <style lang="less" scoped>
    .container {
        padding: 0 20px 20px 20px;
    }
  </style>