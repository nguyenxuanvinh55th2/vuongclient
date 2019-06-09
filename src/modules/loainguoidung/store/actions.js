import LoaiNguoiDung from '../service'

const getDsLoaiNguoiDung = async (context) =>{
  let {data} = await LoaiNguoiDung.getDsLoaiNguoiDung()
  context.commit('loadDsLoaiNguoiDung', data)
}

const saveLoaiNguoiDung = async (context, payload) =>{
  let {data} = await LoaiNguoiDung.saveLoaiNguoiDung(payload)
  context.commit('updateDsLoaiNguoiDung', data)
}

export default { 
  getDsLoaiNguoiDung,
  saveLoaiNguoiDung
}