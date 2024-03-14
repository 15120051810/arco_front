import axios from 'axios';



export function getBaseUseData() {
  return axios.get("/api/dj_tables/base_use");
}


