import PhongService from '../service'

const getDsPhong = async (context) =>{
  let {data} = await PhongService.getDsPhong()
  context.commit('loadDsPhong',data)
}

const savePhong = async (context, payload) =>{
  let {data} = await PhongService.savePhong(payload)
  context.commit('updateDsPhong',data)
  return data
}

const deletePhong = async (context, id) =>{
  let {data} = await PhongService.deletePhong(id)
  context.commit('deletePhong', data)
  return data
}

const getDsPhongById = async(context, id) =>{
  let {data} = await PhongService.getDsPhongById(id)
  context.commit('loadDsPhong', data)
  return data
}

export default {
  getDsPhong,
  savePhong,
  deletePhong,
  getDsPhongById
}