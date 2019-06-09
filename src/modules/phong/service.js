import Axios from 'axios'

const getDsPhong = async ()=>{
  return await Axios.get('http://localhost:9002/api/v1/get-phongs')
}

const savePhong = async (payload)=>{
  return await Axios.post('http://localhost:9002/api/v1/phong',payload)
}

const deletePhong = async (id)=>{
  return await Axios.delete(`http://localhost:9002/api/v1/delete-phong/${id}`)
}

const getDsPhongById = async (id) =>{
  return await Axios.get(`http://localhost:9002/api/v1/getbyid-phong/${id}`)
}

export default {
  getDsPhong,
  savePhong,
  deletePhong,
  getDsPhongById
}