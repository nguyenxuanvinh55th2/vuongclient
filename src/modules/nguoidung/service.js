import Axios from 'axios'

const getDsNguoiDung = async () => {
  return await Axios.get('http://localhost:9002/api/v1/get-nguoidungs')
}

const saveNguoiDung = async (payload) => {
  return await Axios.post('http://localhost:9002/api/v1/nguoidung',payload)
}

const deleteNguoiDung = async (id) => {
  return await Axios.delete(`http://localhost:9002/api/v1/delete-nguoidung/${id}`)
}

export default {
  getDsNguoiDung,
  saveNguoiDung,
  deleteNguoiDung
}