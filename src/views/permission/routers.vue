<template>
  <div class="container">
    <Breadcrumb :items="['menu.system_manage', 'menu.routers_manage']" />
    <a-card class="general-card" :title="$t('menu.routers_manage')">
      <a-space direction="vertical" size="medium" fill>
        <div>
          <span v-has="'permission:router_create'">
            <a-button type="primary" @click="add_router()">添加菜单</a-button>
          </span>
          
          <div :style="{float: 'right' }">
            <a-radio-group v-model:model-value="listQuery.system" @change="getData()">
              <a-radio :value="0">PC 端</a-radio>
              <a-radio :value="1">移动端</a-radio>
            </a-radio-group>
            <a-input-search :style="{ width: '320px'}" v-model="listQuery.title" placeholder="请输入菜单标题"
              search-button @search="getData()" />
          </div>
        </div>

        <a-table :data="data" :loading="loading" :pagination="false" :hide-expand-button-on-empty="true" row-key="id"
          :bordered="{ cell: true }">
          <template #columns>
            <a-table-column title="菜单标题" data-index="title"></a-table-column>
            <a-table-column title="菜单类型" data-index="type">
              <template #cell="{ record }">
                <a-tag v-if="record.type == 0" color="gray" bordered>
                  <template #icon><icon-folder-add /></template>目录
                </a-tag>
                <a-tag v-else-if="record.type == 1" color="gray" bordered>
                  <template #icon><icon-file /></template>页面
                </a-tag>
                <a-tag v-else-if="record.type == 2" color="gray" bordered>
                  <template #icon><icon-poweroff /></template>按钮
                </a-tag>
              </template>
            </a-table-column>
            <a-table-column title="路由唯一名称" data-index="name"></a-table-column>
            <a-table-column title="组件名称" data-index="component"></a-table-column>
            <a-table-column title="是否显示" data-index="show">
              <template #cell="{ record }">
                <p v-if="record.show == true"><icon-check-circle style="color:green;" /></p>
                <p v-else-if="record.show == false"><icon-close-circle style="color:red;" /></p>
              </template>
            </a-table-column>
            <a-table-column title="排序" data-index="order_index"></a-table-column>
            <a-table-column title="权限关键字" data-index="keyword"></a-table-column>
            <a-table-column title="操作">
              <template #cell="{ record }">
                <a-space>
                  <div v-has="'permission:router_update'">
                    <a-button type="primary" @click="edit_router(record)">编辑</a-button>
                  </div>
                  <div v-has="'permission:router_destroy'">
                    <a-popconfirm content="你确定要删除这个菜单吗 ?" @ok="del_router(record)">
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

          <a-form-item field="type" label="菜单类型">
            <a-radio-group v-model="form_dict.type">
              <a-radio :value='0'>目录</a-radio>
              <a-radio :value='1'>页面</a-radio>
              <a-radio :value='2'>按钮</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-form-item field="title" label="菜单标题">
            <a-input v-model="form_dict.title" placeholder="请输入菜单标题" />
          </a-form-item>
          <a-form-item field="name" label="路由唯一名称" v-if="form_dict.type != 2">
            <a-input v-model="form_dict.name" placeholder="请输入路由唯一名称" />
          </a-form-item>
          <a-form-item field="component" label="组件名称" v-if="form_dict.type != 2">
            <a-input v-model="form_dict.component" placeholder="请输入组件名称" />
          </a-form-item>

          <a-divider orientation="center" v-if="form_dict.type != 2">Meta</a-divider>

          <a-form-item field="locale_title" label="菜单多语配置" v-if="form_dict.type != 2">
            <a-input v-model="form_dict.locale_title" placeholder="请输入菜单多语配置" />
          </a-form-item>
          <a-form-item field="icon" label="菜单图标" v-if="form_dict.type != 2">
            <a-input v-model="form_dict.icon" placeholder="请输入菜单图标" />
          </a-form-item>
          <a-form-item field="redirect" label="跳转路径" v-if="form_dict.type != 2">
            <a-input v-model="form_dict.redirect" placeholder="请输入跳转路径" />
          </a-form-item>

          <a-form-item field="keyword" label="权限关键字" v-if="form_dict.type == 2">
            <a-input v-model="form_dict.keyword" placeholder="请输入权限关键字" />
          </a-form-item>

          <a-form-item field="order_index" label="排序">
            <a-input-number placeholder="请输入排序值" mode="button" size="large" class="input-demo"
              v-model="form_dict.order_index" />
          </a-form-item>
          <a-form-item field="show" label="是否展示">
            <a-radio-group v-model="form_dict.show">
              <a-radio :value='1'>展示</a-radio>
              <a-radio :value='0'>不展示</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-divider orientation="center">Correlation</a-divider>

          <a-form-item field="parent" label="父菜单">
            <a-select placeholder="请选择父菜单" v-model="form_dict.parent" allow-search allow-clear>
              <a-option v-for="i in router_select" :key="i.id" :label="i.title" :value="i.id">{{ i.title }}</a-option>
            </a-select>
          </a-form-item>

          <a-form-item field="apis" label="访问接口">
            <a-select placeholder="请选择该菜单能访问的接口" v-model="form_dict.apis" allow-search allow-clear multiple>
              <a-option v-for="i in api_select" :key="i.id" :label="i.name" :value="i.id">{{ i.name + ' : ' + i.abs_path
              }}</a-option>
            </a-select>
          </a-form-item>

          <a-form-item field="system" label="系统类型">
            <a-radio-group v-model="form_dict.system">
              <a-radio :value='0'>PC端</a-radio>
              <a-radio :value='1'>移动端</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts">
import {
  get_system_manage_api_select,
  get_system_manage_router_list,
  get_system_manage_router_select,
  add_system_manage_router,
  edit_system_manage_router,
  del_system_manage_router
} from "@/api/permission"

export default {
  name: 'routers',
  created() {
    this.getData();
  },
  data() {
    let data: any;
    let router_select: any
    let api_select: any
    return {
      data,
      router_select,
      api_select,
      loading: false,
      ok_loading: false,
      visible: false,
      modal_title: '',
      listQuery: {
        title: "",
        type: "tree_table",
        system: 0
      },

      form_dict: {
        id: '',
        type: 0,
        title: '',
        name: '',
        component: '',
        icon: '',
        redirect: '',
        show: 1,
        order_index: 1000,
        locale_title: "",
        parent: '',
        keyword: '',
        apis: [],
        system: 0
      }
    }
  },
  methods: {
    getData() {
      this.loading = true
      get_system_manage_router_list(this.listQuery).then(res => {
        this.data = res
        this.loading = false
      }).catch(res => {
        this.loading = false
      })

      get_system_manage_router_select({ 'type': '' }).then(res => {
        this.router_select = res
      })
      get_system_manage_api_select().then(res => {
        this.api_select = res
      })
    },

    add_router() {
      this.visible = true
      this.modal_title = '添加菜单'
      // 格式化表单
      this.form_dict = {
        id: '',
        type: 0,
        title: '',
        name: '',
        component: '',
        icon: '',
        redirect: '',
        show: 1,
        order_index: 1000,
        locale_title: "",
        parent: '',
        keyword: '',
        apis: [],
        system: 0
      }
    },
    edit_router(record: { [propName: string]: any }) {
      this.visible = true
      this.modal_title = '编辑 ' + record.title + ' 菜单'
      // 格式化表单
      this.form_dict.id = record.id
      this.form_dict.type = record.type
      this.form_dict.title = record.title
      this.form_dict.name = record.name
      this.form_dict.component = record.component
      this.form_dict.icon = record.icon
      this.form_dict.redirect = record.redirect
      this.form_dict.show = record.show ? 1 : 0
      this.form_dict.order_index = record.order_index
      this.form_dict.locale_title = record.locale_title
      this.form_dict.parent = record.parent?.id
      this.form_dict.keyword = record.keyword
      this.form_dict.apis = record.apis.map((v: { [propName: string]: any }) => { return v.id; });
      this.form_dict.system = record.system;
    },
    ok_add_edit() {
      this.ok_loading = true

      if (this.form_dict.id) {
        console.log('提交了 编辑 操作', this.form_dict)
        edit_system_manage_router(this.form_dict).then(res => {
          this.$notification.success(this.form_dict.title + ' 菜单编辑成功...')
          this.ok_loading = false
          this.getData()
        }).catch(res => {
          this.ok_loading = false
          this.$notification.error('菜单编辑失败!!!')
        })
      }
      else {
        console.log('提交了 添加 操作', this.form_dict)
        add_system_manage_router(this.form_dict).then(res => {
          this.$notification.success(this.form_dict.title + ' 菜单添加成功...')
          this.ok_loading = false
          this.getData()
        }).catch(res => {
          this.ok_loading = false
          this.$notification.error('菜单添加失败!!!')
        })
      }
    },
    del_router(record: { [propName: string]: any }) {
      console.log('提交了 删除 操作', record)
      del_system_manage_router(record.id).then(res => {
        this.$notification.success(record.title + ' 菜单删除成功...')
        this.getData()
      }).catch(res => {
        this.$notification.error('菜单删除失败!!!')
        this.getData()
      })
    },
  },

};
</script>

<style lang="less" scoped>.container {
  padding: 0 20px 20px 20px;
}</style>