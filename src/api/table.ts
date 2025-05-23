import axios from 'axios';



export function getBaseUseData() {
  return axios.get("/api/dj_tabl0es/base_use");
}


