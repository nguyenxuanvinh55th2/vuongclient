import ThietBiService from '../service'

const getDsThietBi = async (context) =>{
  let {data} = await ThietBiService.getDsThietBi()
  context.commit('loadDsThietBi', data)
}

const saveThietBi = async (context, payload)=>{
  let {data} = await ThietBiService.saveThietBi(payload)
  context.commit('updateDsThietBi', data)
  return data
}

const deleteThietBi = async(context, id) =>{
  let {data} = await ThietBiService.deleteThietBi(id)
  context.commit('deleteThietBi',data)
  return data
}

export default {
  getDsThietBi,
  saveThietBi,
  deleteThietBi
}