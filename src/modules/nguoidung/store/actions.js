import NguoiDungService from '../service.js'

const getDsNguoiDung = async (context) =>{
  let {data} = await NguoiDungService.getDsNguoiDung()
  context.commit('loadDsnguoiDung',data)
}

const saveNguoiDung = async (context, payload) =>{
  let {data} = await NguoiDungService.saveNguoiDung(payload)
  context.commit('updateDsNguoiDung',data)
  return data
}

const deleteNguoiDung = async (context, id) =>{
  let {data} = await NguoiDungService.deleteNguoiDung(id)
  context.commit('deleteNguoiDung', data)
  return data
}

export default {
  getDsNguoiDung,
  saveNguoiDung,
  deleteNguoiDung
}