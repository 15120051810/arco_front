<template>
  <div class="container">
    <Breadcrumb :items="['menu.system_manage', 'menu.apis_manage']" />
    <a-card class="general-card" :title="$t('menu.apis_manage')">
      <a-space direction="vertical"  size="medium" fill>
        <div>
          <span v-has="'permission:api_create'">
            <a-button type="primary" @click="add_router()">添加接口</a-button>
          </span>
          <a-input-search :style="{width:'320px', float:'right'}" v-model="query_name" placeholder="请输入接口名称" search-button @search="getData()"/>
        </div>

        <a-table :data="data" :loading="loading" :pagination="false" :hide-expand-button-on-empty="true" row-key="id" :bordered="{cell:true}">
          <template #columns>
            <a-table-column title="接口名称" data-index="name"></a-table-column>
            <a-table-column title="绝对路径" data-index="abs_path"></a-table-column>
            <a-table-column title="排序" data-index="order_index"></a-table-column>
            <a-table-column title="操作">
                <template #cell="{ record }">
                    <a-space>
                        <div v-has="'permission:api_update'">
                          <a-button type="primary" @click="edit_router(record)">编辑</a-button>
                        </div>
                        <div v-has="'permission:api_destroy'">
                          <a-popconfirm content="你确定要删除这个接口吗 ?" @ok="del_router(record)">
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
          <a-form-item field="name" label="接口名称">
              <a-input v-model="form_dict.name" placeholder="请输入接口名称" />
          </a-form-item>
          <a-form-item field="abs_path" label="绝对路径">
              <a-input v-model="form_dict.abs_path" placeholder="请输入接口绝对路劲不包括域名" />
          </a-form-item>
          <a-form-item field="order_index" label="排序">
              <a-input-number placeholder="请输入排序值" mode="button" size="large" class="input-demo" 
                  v-model="form_dict.order_index"/>
          </a-form-item>
          <a-form-item field="parent" label="父菜单">
              <a-select placeholder="请选择父菜单" v-model="form_dict.parent" allow-search allow-clear > 
                  <a-option v-for="i in api_select" :key="i.id" :label="i.name" :value="i.id">{{ i.name + ' : ' + i.abs_path }}</a-option>
              </a-select>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>
  
<script lang="ts">
import { 
  get_system_manage_api_list, 
  get_system_manage_api_select, 
  edit_system_manage_api, 
  add_system_manage_api, 
  del_system_manage_api } from '@/api/permission'

export default {
  name: 'apis',
  created() {
    this.getData();
  },
  data(){
    let data:any;
    let api_select:any
    return {
        data,
        api_select,
        loading:false,
        ok_loading:false,
        visible:false,
        modal_title:'',
        query_name:'',
        form_dict:{
          id:'',
          name:'',
          abs_path:'',
          order_index:1000,
          parent:''
        }
    }
  },
  methods:{
    getData(){
      this.loading = true
      get_system_manage_api_list(this.query_name).then(res=>{
        console.log('获取接口数据 ---> ', res)
        this.data = res
        this.loading = false
      }).catch(res=>{
        this.loading = false
      })

      get_system_manage_api_select().then(res=>{
        this.api_select = res
      })
    },
    add_router(){
        this.visible = true
        this.modal_title = '添加接口'
        // 格式化表单
        this.form_dict = {
          id:'',
          name:'',
          abs_path:'',
          order_index:1000,
          parent:''
        }
    },
    edit_router(record:{[propName:string]:any}){
      this.visible = true
      this.modal_title = '编辑 ' + record.name + ' 接口'
      // 格式化表单
      this.form_dict.id = record.id
      this.form_dict.name = record.name
      this.form_dict.abs_path = record.abs_path
      this.form_dict.order_index = record.order_index
      this.form_dict.parent = record.parent?.id
    },
    ok_add_edit(){
      this.ok_loading = true

      if(this.form_dict.id){
        console.log('提交了 编辑 操作', this.form_dict)
        edit_system_manage_api(this.form_dict).then(res=>{
          this.$notification.success(this.form_dict.name + ' 接口编辑成功...')
          this.ok_loading = false
          this.getData()
        }).catch(res=>{
          this.ok_loading = false
          this.$notification.error('接口编辑失败!!!')
        })
      }
      else{
        console.log('提交了 添加 操作', this.form_dict)
        add_system_manage_api(this.form_dict).then(res=>{
          this.$notification.success(this.form_dict.name + ' 接口添加成功...')
          this.ok_loading = false
          this.getData()
        }).catch(res=>{
          this.ok_loading = false
          this.$notification.error('接口添加失败!!!')
        })
      }
    },
    del_router(record:{[propName:string]:any}){
      console.log('提交了 删除 操作', record)
      del_system_manage_api(record.id).then(res => {
        this.$notification.success(record.name + ' 接口删除成功...')
        this.getData()
      }).catch(res=>{
        this.$notification.error('接口删除失败!!!')
        this.getData()
      })
    }
  }
};
</script>

<style lang="less" scoped>
  .container {
      padding: 0 20px 20px 20px;
  }
</style>