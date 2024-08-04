<template>
  <div class="container">
    <Breadcrumb :items="['menu.system_manage', 'menu.orgs_manage']" />
    <a-card class="general-card" :title="$t('menu.orgs_manage')">
      <a-space direction="vertical"  size="medium" fill>
        <div>
            <a-space>
              <span v-has="'permission:org_create'">
                <a-button type="primary" @click="add_org()">添加组织</a-button>
              </span>
              <span v-has="'permission:org_sync'">
                <a-button type="primary" @click="sync_org()" :loading="sync_org_button_loading">同步组织</a-button>
              </span>
          </a-space>
            <a-input-search :style="{width:'320px', float:'right'}" v-model="query_org_name" placeholder="请输入组织名称" search-button @search="getData('query')"/>
        </div>

        <a-table :data="data" :bordered="{cell:true}" :loading="loading" :pagination="false" :hide-expand-button-on-empty="true" row-key="org_id" :default-expanded-keys="['3f615c8f0dce11e99d340242ac110003']">
          <template #columns>
              <a-table-column title="组织名称" data-index="org_name"></a-table-column>
              <a-table-column title="机构id" data-index="org_id"></a-table-column>
              <!-- <a-table-column title="组织编码" data-index="org_code"></a-table-column> -->
              <a-table-column title="组织类型" data-index="org_type">
                <template #cell="{ record }">
                  <p v-if="record.org_type==1">大区</p>
                  <p v-else-if="record.org_type==2">省份</p>
                  <p v-else-if="record.org_type==3">城市</p>
                  <p v-else-if="record.org_type==4">片区</p>
                  <p v-else-if="record.org_type==5">电商</p>
                  <p v-else-if="record.org_type==6">门店</p>
                  <p v-else-if="record.org_type==7">作废闭店机构</p>
                  <p v-else-if="record.org_type==8">其他</p>
                  <p v-else></p>
                </template>
              </a-table-column>
              <a-table-column title="序号" data-index="order_index"></a-table-column>
              <a-table-column title="状态" data-index="state">
                <template #cell="{ record }">
                  <p v-if="record.state==0"><icon-close-circle style="color:red;"/> 禁用</p>
                  <p v-else-if="record.state==1"><icon-check-circle style="color:green;"/> 正常</p>
                </template>
              </a-table-column>
              <a-table-column title="是否是电商" data-index="state">
                <template #cell="{ record }">
                  <p v-if="record.is_ds==0">否</p>
                  <p v-else-if="record.is_ds==1">是</p>
                </template>
              </a-table-column>
              <a-table-column title="操作">
                <template #cell="{ record }">
                    <a-space>
                        <div v-has="'permission:org_update'">
                            <a-button type="primary" @click="edit_org(record)">编辑</a-button>
                        </div>
                        <div v-has="'permission:org_destroy'">
                            <a-popconfirm content="你确定要删除这个菜单吗 ?" @ok="del_org(record)">
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
              <a-form-item field="" label="父组织">
                <a-tree
                  :fieldNames="{ key: 'org_id', title: 'org_name' }"
                  :data="all_data"
                  :show-line="true"
                  
                  v-model:selected-keys="selectedKeys"
                  v-model:expanded-keys="expandedKeys"
                />
              </a-form-item>
              <a-form-item field="org_id" label="组织id">
                  <a-input v-model="form_dict.org_id" placeholder="请输入组织id" />
              </a-form-item>
              <a-form-item field="org_name" label="组织名称">
                  <a-input v-model="form_dict.org_name" placeholder="请输入组织名称" />
              </a-form-item>
              <a-form-item field="org_name" label="组织类型">
                <a-select v-model="form_dict.org_type" placeholder="请选择组织类型">
                  <a-option :value="1" label="大区" />
                  <a-option :value="2" label="省份" />
                  <a-option :value="3" label="城市" />
                  <a-option :value="4" label="片区" />
                  <a-option :value="5" label="电商" />
                  <a-option :value="6" label="门店" />
                  <a-option :value="7" label="作废闭店机构" />
                  <a-option :value="8" label="其他" />
                </a-select>
              </a-form-item>
              <a-form-item field="org_code" label="组织编码">
                  <a-input v-model="form_dict.org_code" placeholder="请输入组织编码" />
              </a-form-item>

              <a-form-item field="org_name" label="状态">
                <a-radio-group v-model="form_dict.state">
                  <a-radio :value='1'>正常</a-radio>
                  <a-radio :value='0'>禁用</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item field="org_name" label="是否电商">
                <a-radio-group v-model="form_dict.is_ds">
                  <a-radio :value='0'>否</a-radio>
                  <a-radio :value='1'>是</a-radio>
                </a-radio-group>
              </a-form-item>

              <a-form-item field="order_index" label="序号">
                  <a-input-number placeholder="请输入序号值" mode="button" size="large" class="input-demo" 
                      v-model="form_dict.order_index"/>
              </a-form-item>

            </a-form>
        </div>
    </a-modal>
  </div>
</template>
  
<script lang="ts">
  import { ref } from 'vue';  
  import { 
    get_system_manage_org_list, 
    add_system_manage_org, 
    edit_system_manage_org, 
    sync_system_manage_org, 
    del_system_manage_org } from "@/api/permission"
  export default {
    name: 'orgs',
    created(){
      this.getData('create')
    },
    data(){
      let data:any;
      let all_data:any;
      let expandedKeys:any = ref([]);
      let selectedKeys:any = ref([]);

      return {
        data,
        all_data,
        selectedKeys,
        expandedKeys,

        sync_org_button_loading: false,
        loading:false,  // 表格加载
        query_org_name:'',  // 查询
        
        
        visible:false,  // 对话框是否弹出
        modal_title:"", // 对话框标题
        ok_loading:false,  // 对话框表单提交确定键加载
        
        form_dict:{
          id:'',
          org_id:'',
          org_name:'',
          org_type:'',
          org_code:'',
          state:1,
          is_ds:0,
          order_index: 1000,
          parent:''
        }
      }
    },
    methods:{
      getData(type:string){
        this.loading = true
        get_system_manage_org_list({'org_name': this.query_org_name}).then(res=>{
          console.log("获取组织树 ---> ", res)
          this.data = res
          // 只在最开始拿到一份全部数据
          if(type=='create'){ this.all_data = this.data };
          this.loading = false
        }).catch(res=>{
          this.loading = false
        })
      },
      add_org(){
        this.visible = true
        this.modal_title = "添加组织"
        // 格式化表单
        this.form_dict = {
          id:'',
          org_id:'',
          org_name:'',
          org_code:'',
          state:1,
          is_ds:0,
          org_type:'',
          order_index: 1000,
          parent:'3f615c8f0dce11e99d340242ac110003'
        }
        this.selectedKeys = ['3f615c8f0dce11e99d340242ac110003']
        this.expandedKeys= ['3f615c8f0dce11e99d340242ac110003']
      },
      edit_org(record:{[propName:string]:any}){
        console.log(record)
        this.visible = true
        this.modal_title = "编辑 " + record.org_name + " 组织"
        // 格式化表单
        this.form_dict = {
          id:record.id,
          org_id:record.org_id,
          org_type:record.org_type,
          org_name: record.org_name,
          org_code:record.org_code,
          state:record.state,
          is_ds:record.is_ds,
          order_index: record.order_index,
          parent:record.parent?.org_id
        }
        this.selectedKeys = [record.parent?.org_id]
        this.expandedKeys= [record.parent?.org_id, record.parent?.parent]
      },
      ok_add_edit(){
        this.form_dict.parent = this.selectedKeys.pop()
        this.ok_loading = true

        if(this.form_dict.id){
          console.log('提交了 编辑 操作', this.form_dict)
          edit_system_manage_org(this.form_dict).then(res=>{
            this.$notification.success(this.form_dict.org_name + ' 组织编辑成功...')
            this.ok_loading = false
            this.getData('edit')
          }).catch(res=>{
            this.ok_loading = false
            this.$notification.error('组织编辑失败!!!')
          })
        }
        else{
          console.log('提交了 添加 操作', this.form_dict)
          add_system_manage_org(this.form_dict).then(res=>{
            this.$notification.success(this.form_dict.org_name + ' 组织添加成功...')
            this.ok_loading = false
            this.getData('add')
          }).catch(res=>{
            this.ok_loading = false
            this.$notification.error('组织添加失败!!!')
          })
        }
      },
      del_org(record:any){
        console.log('提交了 删除 操作', record)
        del_system_manage_org(record.id).then(res => {
          this.$notification.success(record.org_name + ' 组织删除成功...')
          this.getData('del')
        }).catch(res=>{
          this.$notification.error('组织删除失败!!!')
          this.getData('del')
        })
      },
      sync_org(){
        this.sync_org_button_loading = true
        sync_system_manage_org().then(res=>{
          this.getData('create')
          this.sync_org_button_loading = false
        })
      }
    },
  };
</script>
  
<style lang="less" scoped>
  .container {
      padding: 0 20px 20px 20px;
  }
</style>