import axios from 'axios';

// 获取组织树管理
export function req_org_manage_org_api(listQuery: object) {
    return axios.get('/api/system_manage/org/', {
        params: listQuery
    });
}

// 组织类型下拉
export function req_org_manage_org_type_api(listQuery: object) {
    return axios.get('/api/system_manage/org_type/', {
        params: listQuery
    });
}

// 添加组织
export function req_org_manage_create_org_api(data: object) {
    return axios.post('/api/system_manage/org/', data);
}

// 编辑组织
export function req_org_manage_update_org_api(id: number,data: object) {
    return axios.put(`/api/system_manage/org/${id}/`, data);
}

// 删除一个组织
export function req_org_manage_delete_org_api(id: number) {
    return axios.delete(`/api/system_manage/org/${id}/`);
}




// 获取菜单树下拉
export function req_router_manage_list_router_api(listQuery: object) {
    return axios.get('/api/system_manage/router/', {
        params: listQuery
    });
}


// 添加菜单
export function req_router_manage_create_router_api(data: object) {
    return axios.post('/api/system_manage/router/', data);
}


// 编辑菜单
export function req_router_manage_update_router_api(id: number,data: object) {
    return axios.put(`/api/system_manage/router/${id}/`, data);
}

// 删除一个菜单
export function req_router_manage_delete_router_api(id: number) {
    return axios.delete(`/api/system_manage/router/${id}/`);
}

// 获取角色下拉
export function req_role_manage_list_role_api(listQuery: object) {
    return axios.get('/api/system_manage/role/', {
        params: listQuery
    });
}

// 添加角色
export function req_role_manage_create_role_api(data: object) {
    return axios.post('/api/system_manage/role/', data);
}

// 编辑角色
export function req_role_manage_update_role_api(id: number,data: object) {
    return axios.put(`/api/system_manage/role/${id}/`, data);
}

// 删除一个角色
export function req_role_manage_delete_role_api(id: number) {
    return axios.delete(`/api/system_manage/role/${id}/`);
}



// 获取用户下拉
export function req_user_manage_list_user_api(listQuery: object) {
    return axios.get('/api/system_manage/user/', {
        params: listQuery
    });
}

// 添加用户
export function req_user_manage_create_user_api(data: object) {
    return axios.post('/api/system_manage/user/', data);
}

// 编辑用户
export function req_user_manage_update_user_api(id: number,data: object) {
    return axios.put(`/api/system_manage/user/${id}/`, data);
}

// 删除一个用户
export function req_user_manage_delete_user_api(id: number) {
    return axios.delete(`/api/system_manage/user/${id}/`);
}