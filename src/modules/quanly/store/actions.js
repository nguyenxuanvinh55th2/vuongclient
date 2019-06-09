import QuanLyGiangDuongService from '../service'

const getDsQuanLyGiangDuong = async(context) =>{
  let {data} = await QuanLyGiangDuongService.getDsQuanLyGiangDuong()
  context.commit('loadDsQuanLyGiangDuong', data)
}

const addQuanLyGiangDuong = async(context, payload) =>{
  let {data} = await QuanLyGiangDuongService.addQuanLyGiangDuong(payload)
  context.commit('updateDsQuanLyGiangDuong', data)
}

const deleteQuanLyGiangDuong = async(context, id) =>{
  let {data} = await QuanLyGiangDuongService.deleteQuanLyGiangDuong(id)
  context.commit('deleteQuanLyGiangDuong', data)
}

export default {
  getDsQuanLyGiangDuong,
  addQuanLyGiangDuong,
  deleteQuanLyGiangDuong
}