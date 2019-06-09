import Axios from 'axios'

const getDsLoaiThietBi = async () =>{
  return await Axios.get('http://localhost:9002/api/v1/get-loaithietbi')
}

const addLoaiThietBi = async (payload)=>{
  return await Axios.post('http://localhost:9002/api/v1/loaithietbi', payload)
}

export default {
  getDsLoaiThietBi,
  addLoaiThietBi
}