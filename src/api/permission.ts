import axios from 'axios';

// 组织管理
export function get_system_manage_org_list(listQuery:object) {
    return axios.get('/api/system_manage/org_list/',{
        params: listQuery
    });
}
export function sync_system_manage_org() {
    return axios.post('/api/system_manage/org_sync/');
}
export function add_system_manage_org(data:object) {
    return axios.post('/api/system_manage/org_create/', data);
}
export function edit_system_manage_org(data:{[propName:string]:any}) {
    return axios.put('/api/system_manage/org_update/' + data.id + '/', data);
}
export function del_system_manage_org(id:number) {
    return axios.delete('/api/system_manage/org_destroy/' + id + '/');
}

// 用户管理
export function get_system_manage_user_list(listQuery:object) {
    return axios.get('/api/system_manage/user_list/', {
        params:listQuery
    });
}
export function add_system_manage_user(data:object) {
    return axios.post('/api/system_manage/user_create/', data);
}
export function edit_system_manage_user(data:{[propName:string]:any}) {
    return axios.put('/api/system_manage/user_update/' + data.id + '/', data);
}
export function del_system_manage_user(id:number) {
    return axios.delete('/api/system_manage/user_destroy/' + id + '/');
}

// 角色管理
export function get_system_manage_role_select() {
    return axios.get('/api/system_manage/role_select/');
}
export function get_system_manage_role_list(listQuery:object) {
    return axios.get('/api/system_manage/role_list/', {
        params: listQuery
    });
}
export function add_system_manage_role(data:object) {
    return axios.post('/api/system_manage/role_create/', data);
}
export function edit_system_manage_role(data:{[propName:string]:any}) {
    return axios.put('/api/system_manage/role_update/' + data.id + '/', data);
}
export function del_system_manage_role(id:number) {
    return axios.delete('/api/system_manage/role_destroy/' + id + '/');
}


// 菜单管理
export function get_system_manage_router_select(listQuery:object) {
    return axios.get('/api/system_manage/router_select/', {
        params:listQuery
    });
}
export function get_system_manage_router_list(listQuery:object) {
    return axios.get('/api/system_manage/router_list/',{
        params:listQuery
    });
}
export function add_system_manage_router(data:object) {
    return axios.post('/api/system_manage/router_create/', data);
}
export function edit_system_manage_router(data:{[propName:string]:any}) {
    return axios.put('/api/system_manage/router_update/' + data.id + '/', data);
}
export function del_system_manage_router(id:number) {
    return axios.delete('/api/system_manage/router_destroy/' + id + '/');
}


// 接口管理
export function get_system_manage_api_select() {
    return axios.get('/api/system_manage/api_select/');
}
export function get_system_manage_api_list(name:any) {
    return axios.get('/api/system_manage/api_list/?name=' + name);
}
export function add_system_manage_api(data:object) {
    return axios.post('/api/system_manage/api_create/', data);
}
export function edit_system_manage_api(data:{[propName:string]:any}) {
    return axios.put('/api/system_manage/api_update/' + data.id + '/', data);
}
export function del_system_manage_api(id:number) {
    return axios.delete('/api/system_manage/api_destroy/' + id + '/');
}


export function get_system_manage_chanel_shop_list() {
    return axios.get('/api/system_manage/chanel_shop_list/');
}
export function get_system_manage_departmental_project_list() {
    return axios.get('/api/system_manage/departmental_project_list/');
}
export function get_system_manage_medical_worker_dp_list() {
    return axios.get('/api/system_manage/medical_worker_dp_list/');
}



