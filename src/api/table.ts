import axios from 'axios';



export function getBaseUseData() {
  return axios.get("/api/dj_tables/base_use");
}





// 权限案例
export function getColumnsPermisson() {
  return axios.get("/api/table/columns_permisson");
}