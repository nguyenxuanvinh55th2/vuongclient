import Axios from 'axios'

const getDsQuanLyGiangDuong = async () =>{
  return await Axios.get('http://localhost:9002/api/v1/get-quanly')
}

const addQuanLyGiangDuong = async (payload) =>{
  return await Axios.post('http://localhost:9002/api/v1/quanly', payload)
}

const deleteQuanLyGiangDuong = async(id) =>{
  return await Axios.delete(`http://localhost:9002/api/v1/delete-quanly/${id}`)
}


export default {
  getDsQuanLyGiangDuong,
  addQuanLyGiangDuong,
  deleteQuanLyGiangDuong
}