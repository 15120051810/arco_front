<template>
  <div class="container">
    <Breadcrumb :items="['menu.system_manage', 'menu.users_manage']" />

    <a-row class="grid-demo" :gutter="15">
      <a-col :span="5">
        <a-card class="general-card" :title="$t('menu.organizational_structure')">
          <a-scrollbar style="overflow: auto;">
            <a-tree style="width: 500px;height: 400px;" :fieldNames="{ key: 'id', title: 'org_name' }" :data="org_data"
              :show-line="true" v-model:selected-keys="listQuery.org_id" v-model:expanded-keys="expandedKeys" />
          </a-scrollbar>
        </a-card>

        <a-card class="general-card" :title="$t('menu.channel_shop')" style="margin-top: 10px;">
          <a-scrollbar style="overflow: auto;">
            <a-tree style="width: 500px; height: 400px;" :fieldNames="{ key: 'id', title: 'name' }"
              :data="chanel_shop_data" :show-line="true" v-model:selected-keys="listQuery.channel_shop_id"
              v-model:expanded-keys="expandedKeys_cs" />
          </a-scrollbar>
        </a-card>

        <a-card class="general-card" :title="$t('menu.departmental_project')" style="margin-top: 10px;">
          <a-scrollbar style="overflow: auto;">
            <a-tree style="width: 500px; " :fieldNames="{ key: 'id', title: 'name' }"
              :data="departmental_project_data" :show-line="true" v-model:selected-keys="listQuery.departmental_project_id"
              v-model:expanded-keys="expandedKeys_dp" />
          </a-scrollbar>
        </a-card>

        <a-card class="general-card" :title="$t('menu.medical_worker_dp')" style="margin-top: 10px;">
          <a-scrollbar style="overflow: auto;">
            <a-tree style="width: 500px; " :fieldNames="{ key: 'id', title: 'name' }"
              :data="medical_worker_dp_data" :show-line="true" v-model:selected-keys="listQuery.medical_worker_dp_id"
              v-model:expanded-keys="expandedKeys_yg_dp" />
          </a-scrollbar>
        </a-card>
      </a-col>

      <a-col :span="19">
        <a-card class="general-card" :title="$t('menu.users_manage')">
          <a-space direction="vertical" size="medium" fill>
            <div>
              <span v-has="'permission:user_create'">
                <a-button type="primary" @click="add_user()">添加用户</a-button>
              </span>
              <a-input-search :style="{ width: '320px', float: 'right' }" v-model="listQuery.name"
                placeholder="请输入用户名或姓名" search-button @search="search" />
            </div>

            <a-table :data="data" :loading="loading" :bordered="{ cell: true }" column-resizable :pagination="false">
              <template #columns>
                <a-table-column title="姓名" data-index="name" :width="flexColumnWidth(data, '姓名', 'name')" fixed="left"></a-table-column>

                <a-table-column title="用户名" data-index="username" :width="flexColumnWidth(data, '用户名', 'username')"></a-table-column>
                
                <a-table-column title="用户角色" data-index="roles">
                  <template #cell="{ record }">
                    <a-popover style="max-width:50%;">
                      <div :style="{ width: `200px` }">
                        <a-overflow-list>
                          <a-tag color="arcoblue" v-for="(v, index) in record.roles" :key="index"><icon-user
                              style="margin-right:5px" /> {{ v.name }}</a-tag>
                        </a-overflow-list>
                      </div>
                      <template #content>
                        <a-tag color="arcoblue" style="margin:3px; " v-for="(v, index) in record.roles"
                          :key="index"><icon-user style="margin-right:5px" /> {{ v.name }}</a-tag>
                      </template>
                    </a-popover>
                  </template>
                </a-table-column>

                <a-table-column title="所属部门" :width="200">
                  <template #cell="{ record }">
                    <a-popover style="max-width:50%;">
                      <div :style="{ width: `200px` }">
                        <a-overflow-list>
                          <a-tag color="arcoblue" v-for="(v, index) in record.orgs" :key="index"><icon-apps
                              style="margin-right:5px" /> {{ v.org_name }}</a-tag>
                        </a-overflow-list>
                      </div>
                      <template #content>
                        <a-tag color="arcoblue" style="margin:3px" v-for="(v, index) in record.orgs"
                          :key="index"><icon-apps style="margin-right:5px" /> {{ v.org_name }}</a-tag>
                      </template>
                    </a-popover>
                  </template>
                </a-table-column>

                <a-table-column title="所属渠道店铺" :width="200">
                  <template #cell="{ record }">
                    <a-popover style="max-width:50%;">
                      <div :style="{ width: `200px` }">
                        <a-overflow-list>
                          <a-tag color="arcoblue" v-for="(v, index) in record.channel_shop" :key="index"><icon-apps
                              style="margin-right:5px" /> {{ v.name }}</a-tag>
                        </a-overflow-list>
                      </div>
                      <template #content>
                        <a-tag color="arcoblue" style="margin:3px;" v-for="(v, index) in record.channel_shop"
                          :key="index"><icon-apps style="margin-right:5px" /> {{ v.name }}</a-tag>
                      </template>
                    </a-popover>
                  </template>
                </a-table-column>

                <a-table-column title="所属部门项目" :width="200">
                  <template #cell="{ record }">
                    <a-popover style="max-width:50%;">
                      <div :style="{ width: `200px` }">
                        <a-overflow-list>
                          <a-tag color="arcoblue" v-for="(v, index) in record.departmental_project" :key="index"><icon-apps
                              style="margin-right:5px" /> {{ v.name }}</a-tag>
                        </a-overflow-list>
                      </div>
                      <template #content>
                        <a-tag color="arcoblue" style="margin:3px;" v-for="(v, index) in record.departmental_project"
                          :key="index"><icon-apps style="margin-right:5px" /> {{ v.name }}</a-tag>
                      </template>
                    </a-popover>
                  </template>
                </a-table-column>


                <a-table-column title="所属医工部门项目" :width="200">
                  <template #cell="{ record }">
                    <a-popover style="max-width:50%;">
                      <div :style="{ width: `200px` }">
                        <a-overflow-list>
                          <a-tag color="arcoblue" v-for="(v, index) in record.medical_worker_dp" :key="index"><icon-apps
                              style="margin-right:5px" /> {{ v.name }}</a-tag>
                        </a-overflow-list>
                      </div>
                      <template #content>
                        <a-tag color="arcoblue" style="margin:3px;" v-for="(v, index) in record.medical_worker_dp"
                          :key="index"><icon-apps style="margin-right:5px" /> {{ v.name }}</a-tag>
                      </template>
                    </a-popover>
                  </template>
                </a-table-column>

                <a-table-column title="邮箱" data-index="email"
                  :width="flexColumnWidth(data, '邮箱', 'email')"></a-table-column>
                <a-table-column title="手机号" data-index="mobile"
                  :width="flexColumnWidth(data, '手机号', 'mobile')"></a-table-column>
                <a-table-column title="使用状态" data-index="is_active" :width="flexColumnWidth(data, '使用状态', 'is_active')">
                  <template #cell="{ record }">
                    <a-tag color="#00b42a" v-if="record.is_active">启用</a-tag>
                    <a-tag color="#f53f3f" v-else>禁用</a-tag>
                  </template>
                </a-table-column>
                <a-table-column title="超级用户" data-index="is_superuser"
                  :width="flexColumnWidth(data, '超级用户', 'is_superuser')">
                  <template #cell="{ record }">
                    <a-tag color="#00b42a" v-if="record.is_superuser">是</a-tag>
                    <a-tag color="#f53f3f" v-else>否</a-tag>
                  </template>
                </a-table-column>
                <a-table-column title="首页" :width="130">
                  <template #cell="{ record }">
                    <a-tag color="arcoblue" v-if="record.home_page?.title"><icon-layout style="margin-right:5px" /> {{
      record.home_page?.title }}</a-tag>
                  </template>
                </a-table-column>

                <a-table-column title="操作" fixed="right" :width="160">
                  <template #cell="{ record }">
                    <a-space>
                      <div v-has="'permission:user_update'">
                        <a-button type="primary" @click="edit_user(record)">编辑</a-button>
                      </div>
                      <div v-has="'permission:user_destroy'">
                        <a-popconfirm content="你确定要删除这个用户吗 ?" @ok="del_user(record)">
                          <a-button type="primary">删除</a-button>
                        </a-popconfirm>
                      </div>
                    </a-space>
                  </template>
                </a-table-column>
              </template>
            </a-table>
            <a-pagination :total="total" show-total show-jumper show-page-size :current="listQuery.page"
              :page-size="listQuery.page_size" @change="CurrentChange" @page-size-change="SizeChange" />
          </a-space>
        </a-card>
      </a-col>
    </a-row>

    <a-modal v-model:visible="visible" @ok="ok_add_edit()" :okLoading="ok_loading" draggable>
      <template #title>{{ modal_title }}</template>
      <div>
        <a-form :model="form_dict" layout="horizontal" size="large" :auto-label-width="true">
          <a-form-item field="username" label="用户名">
            <a-input v-model="form_dict.username" placeholder="请输入用户名" />
          </a-form-item>

          <a-form-item field="name" label="姓名">
            <a-input v-model="form_dict.name" placeholder="请输入用户姓名" />
          </a-form-item>

          <a-form-item field="email" label="邮箱名">
            <a-input v-model="form_dict.email" placeholder="请输入邮箱名" />
          </a-form-item>

          <a-form-item field="mobile" label="手机号">
            <a-input v-model="form_dict.mobile" placeholder="请输入手机号" />
          </a-form-item>

          <a-form-item field="roles" label="角色分配">
            <a-select placeholder="请选择角色" v-model="form_dict.roles" allow-search allow-clear multiple>
              <a-option v-for="i in roles_select" :key="i.id" :label="i.name" :value="i.id">{{ i.name }}</a-option>
            </a-select>
          </a-form-item>

          <a-form-item field="home_page" label="配置首页">
            <a-select placeholder="请选择首页(选填)" v-model="form_dict.home_page" allow-search allow-clear>
              <a-option v-for="i in routers_select" :key="i.id" :label="i.title" :value="i.id">{{ i.title }}</a-option>
            </a-select>
          </a-form-item>

          <a-form-item field="orgs" label="所属机构">
            <a-scrollbar style="overflow: auto;">
              <a-tree :fieldNames="{ key: 'id', title: 'org_name' }" :data="org_data_ae" :checkable="true" style="width: 410px; height: 400px;"
                :check-strictly="true" v-model:checked-keys="form_dict.orgs" v-model:expanded-keys="expandedKeys_ae" />
            </a-scrollbar>
          </a-form-item>

          <a-form-item field="channel_shop" label="渠道店铺">
            <a-scrollbar style="overflow: auto;">
              <a-tree :fieldNames="{ key: 'id', title: 'name' }" :data="chanel_shop_data_ae" :checkable="true"  style="width: 410px; height: 400px;"
                :check-strictly="true" v-model:checked-keys="form_dict.channel_shop"
                v-model:expanded-keys="expandedKeys_cs_ae" />
            </a-scrollbar>
          </a-form-item>

          <a-form-item field="departmental_project" label="部门项目">
            <a-scrollbar style="overflow: auto;">
              <a-tree :fieldNames="{ key: 'id', title: 'name' }" :data="departmental_project_data_ae" :checkable="true"  style="width: 410px; height: 200px;"
                :check-strictly="true" v-model:checked-keys="form_dict.departmental_project"
                v-model:expanded-keys="expandedKeys_dp_ae" />
            </a-scrollbar>
          </a-form-item>

          <a-form-item field="medical_worker_dp" label="部门项目">
            <a-scrollbar style="overflow: auto;">
              <a-tree :fieldNames="{ key: 'id', title: 'name' }" :data="medical_worker_dp_data_ae" :checkable="true"  style="width: 410px; height: 200px;"
                :check-strictly="true" v-model:checked-keys="form_dict.medical_worker_dp"
                v-model:expanded-keys="expandedKeys_yg_dp_ae" />
            </a-scrollbar>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts">
import {
  get_system_manage_user_list,
  get_system_manage_org_list,
  get_system_manage_role_select,
  get_system_manage_router_select,
  add_system_manage_user,
  edit_system_manage_user,
  get_system_manage_chanel_shop_list,
  get_system_manage_departmental_project_list,
  get_system_manage_medical_worker_dp_list,
  del_system_manage_user
} from "@/api/permission"

export default {
  name: 'users',
  data() {
    let data: any
    let org_data: any;
    let chanel_shop_data: any;
    let departmental_project_data: any;
    let medical_worker_dp_data: any;
    let org_data_ae: any;
    let chanel_shop_data_ae: any;
    let departmental_project_data_ae: any;
    let medical_worker_dp_data_ae:any;
    let expandedKeys: any;
    let expandedKeys_cs: any;
    let expandedKeys_dp: any;
    let expandedKeys_yg_dp: any;
    let roles_select: any;
    let expandedKeys_ae: any;
    let expandedKeys_cs_ae: any;
    let expandedKeys_dp_ae: any;
    let expandedKeys_yg_dp_ae: any;
    let routers_select: any;

    return {
      total: 0,
      data,
      org_data,
      org_data_ae,
      chanel_shop_data,
      chanel_shop_data_ae,
      departmental_project_data,
      departmental_project_data_ae,
      medical_worker_dp_data,
      medical_worker_dp_data_ae,
      roles_select,
      routers_select,
      expandedKeys,
      expandedKeys_cs,
      expandedKeys_dp,
      expandedKeys_yg_dp,
      expandedKeys_ae,
      expandedKeys_cs_ae,
      expandedKeys_dp_ae,
      expandedKeys_yg_dp_ae,
      loading: false,
      visible: false,
      ok_loading: false,
      modal_title: '',

      listQuery: {
        page: 1,
        page_size: 20,
        org_id: [],
        channel_shop_id: [],
        name: '',
        departmental_project_id: [],
        medical_worker_dp_id: [], 
      },

      form_dict: {
        id: '',
        username: '',
        password: 'Miao13456',
        name: '',
        email: '',
        roles: [],
        mobile: "",
        orgs: [],
        channel_shop: [],
        departmental_project: [],
        medical_worker_dp: [],
        home_page: ''
      }
    }
  },

  created() {
    get_system_manage_org_list({}).then((res: { [propName: string]: any }) => {
      console.log("org_list ---> ", res);

      this.org_data = res
      this.org_data_ae = res
      this.expandedKeys = res.map((v: { [propName: string]: any }) => {
        if (v.org_id == '3f615c8f0dce11e99d340242ac110003') {
          return v.id;
        }
      });
    })

    get_system_manage_chanel_shop_list().then(res => {
      console.log("chanel_shop_list ---> ", res);
      this.chanel_shop_data = res;
      this.chanel_shop_data_ae = res;
    })

    get_system_manage_departmental_project_list().then(res => {
      console.log("get_system_manage_departmental_project_list ---> ", res);
      this.departmental_project_data = res;
      this.departmental_project_data_ae = res;
    })

    get_system_manage_medical_worker_dp_list().then(res => {
      console.log("get_system_manage_medical_worker_dp_list ---> ", res);
      this.medical_worker_dp_data = res;
      this.medical_worker_dp_data_ae = res;
    })

    get_system_manage_role_select().then(res => {
      this.roles_select = res
    })

    get_system_manage_router_select({ "type": "users" }).then(res => {
      this.routers_select = res
    })
    
    this.getData();
  },

  methods: {
    getData() {
      this.loading = true
      console.log('查询条件 ---> ', this.listQuery)
      get_system_manage_user_list(this.listQuery).then((res: { [propName: string]: any }) => {
        console.log("获取用户数据 ---> ", res)
        this.total = res.count
        this.data = res.results
        this.loading = false
      }).catch(res => {
        this.loading = false
      })
    },
    search() {
      this.listQuery.page = 1;
      this.listQuery.page_size = 20;
      this.getData();
    },
    CurrentChange(current: number) {
      this.listQuery.page = current
      this.getData()
    },
    SizeChange(page_size: number) {
      this.listQuery.page_size = page_size
      this.getData()
    },
    add_user() {
      this.visible = true
      this.modal_title = '添加用户'
      // 格式化
      this.form_dict = {
        id: '',
        username: '',
        password: 'Miao13456',
        name: '',
        email: '',
        roles: [],
        orgs: [],
        channel_shop: [],
        departmental_project: [],
        medical_worker_dp: [],
        mobile: "",
        home_page: ''
      }

      this.expandedKeys_ae = this.org_data_ae.map((v: { [propName: string]: any }) => {
        if (v.org_id == '3f615c8f0dce11e99d340242ac110003') {
          return v.id;
        }
      });
    },
    edit_user(record: any) {
      this.visible = true
      this.modal_title = '编辑 ' + record.name ? record.name : record.username + ' 用户'
      // 格式化
      this.form_dict = {
        id: record.id,
        username: record.username,
        password: 'Miao13456',
        name: record.name,
        email: record.email,
        mobile: record.mobile,
        roles: record.roles ? record.roles.map((v: { [propName: string]: any }) => { return v.id }) : [],
        orgs: record.orgs ? record.orgs.map((v: { [propName: string]: any }) => { return v.id }) : [],
        channel_shop: record.channel_shop ? record.channel_shop.map((v: { [propName: string]: any }) => { return v.id }) : [],
        departmental_project: record.departmental_project ? record.departmental_project.map((v: { [propName: string]: any }) => { return v.id }) : [],
        medical_worker_dp: record.medical_worker_dp ? record.medical_worker_dp.map((v: { [propName: string]: any }) => { return v.id }) : [],
        home_page: record.home_page ? record.home_page.id : ''
      }

      this.expandedKeys_ae = this.org_data_ae.map((v: { [propName: string]: any }) => {
        if (v.org_id == '3f615c8f0dce11e99d340242ac110003') {
          return v.id;
        }
      });

      this.expandedKeys_ae = this.expandedKeys_ae.concat(this.form_dict.orgs)
      this.expandedKeys_cs_ae = this.form_dict.channel_shop;
      this.expandedKeys_dp_ae = this.form_dict.departmental_project;
      this.expandedKeys_yg_dp_ae = this.form_dict.medical_worker_dp;
    },
    ok_add_edit() {
      this.ok_loading = true

      if (this.form_dict.id) {
        console.log('提交了 编辑 操作', this.form_dict)
        edit_system_manage_user(this.form_dict).then(res => {
          this.$notification.success(this.form_dict.name + ' 用户编辑成功...')
          this.ok_loading = false
          this.getData()
        }).catch(res => {
          this.ok_loading = false
          this.$notification.error('用户编辑失败!!!')
        })
      }
      else {
        console.log('提交了 添加 操作', this.form_dict)
        add_system_manage_user(this.form_dict).then(res => {
          this.$notification.success(this.form_dict.name + ' 用户添加成功...')
          this.ok_loading = false
          this.getData()
        }).catch(res => {
          this.ok_loading = false
          this.$notification.error('用户添加失败!!!')
        })
      }
    },
    del_user(record: any) {
      console.log('提交了 删除 操作', record)
      del_system_manage_user(record.id).then(res => {
        this.$notification.success(record.name + ' 用户删除成功...')
        this.getData()
      }).catch(res => {
        this.$notification.error('用户删除失败!!!')
        this.getData()
      })
    },

    // 单元格自适应文本内容
    getMaxLength(arr: string[]) {
      return arr?.reduce((acc, item) => {
        if (item) {
          const calcLen = this.getTextWidth(item)
          if (acc < calcLen) {
            acc = calcLen
          }
        }
        return acc
      }, 0)
    },
    getTextWidth(str: string) {
      let width: any = 0;
      const html = document.createElement('span')
      html.innerText = str
      html.className = 'getTextWidth'
      document.querySelector('body')?.appendChild(html)
      width = document.querySelector<HTMLElement>('.getTextWidth')?.offsetWidth
      document.querySelector('.getTextWidth')?.remove()
      return width
    },
    flexColumnWidth(data: any, label: string, prop: string) {
      // 1.获取该列的所有数据
      let arr = data?.map((x: any) => x[prop])
      arr?.push(label) // 把每列的表头也加进去算
      return this.getMaxLength(arr) + 40
    },
  },

  watch: {
    'listQuery.org_id': function (newVal, oldVal) {
      if (newVal[0] == oldVal[0]) this.listQuery.org_id = [];
      this.getData()
    },
    'listQuery.channel_shop_id': function (newVal, oldVal) {
      if (newVal[0] == oldVal[0]) this.listQuery.channel_shop_id = [];
      this.getData()
    },
    'listQuery.departmental_project_id': function (newVal, oldVal) {
      if (newVal[0] == oldVal[0]) this.listQuery.departmental_project_id = [];
      this.getData()
    },
    'listQuery.medical_worker_dp_id': function (newVal, oldVal) {
      if (newVal[0] == oldVal[0]) this.listQuery.medical_worker_dp_id = [];
      this.getData()
    },
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 20px 20px 20px;
}
</style>