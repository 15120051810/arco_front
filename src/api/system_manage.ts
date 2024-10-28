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

// // 组织类型下拉
// export function req_org_manage_org_type_api(listQuery: object) {
//     return axios.get('/api/system_manage/org_type/', {
//         params: listQuery
//     });
// }

// // 添加组织
// export function req_org_manage_create_org_api(data: object) {
//     return axios.post('/api/system_manage/org/', data);
// }

// // 编辑组织
// export function req_org_manage_update_org_api(id: number,data: object) {
//     return axios.put(`/api/system_manage/org/${id}/`, data);
// }

// // 删除一个组织
// export function req_org_manage_delete_org_api(id: number) {
//     return axios.delete(`/api/system_manage/org/${id}/`);
// }