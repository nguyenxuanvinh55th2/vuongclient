import Axios from 'axios'

const getDsLoaiNguoiDung = async ()=>{
    return await Axios.get('http://localhost:9002/api/v1/get-loainguoidung')
}

const saveLoaiNguoiDung = async (payload)=>{
    return await Axios.post('http://localhost:9002/api/v1/loainguoidung',payload)
}

export default {
  getDsLoaiNguoiDung,
  saveLoaiNguoiDung
}