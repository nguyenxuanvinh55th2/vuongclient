import Axios from 'axios'

const savePhongThietBi = async (payload) =>{
  return await Axios.post('http://localhost:9002/api/v1/phong-thietbi', payload)
}

const deletePhongThietBi = async (payload) =>{
  return await Axios.delete(`http://localhost:9002/api/v1/phong/${payload.phongId}/delete-phong-thietbi/${payload._id}`)
}

export default {
  savePhongThietBi,
  deletePhongThietBi
}