import PhongThietBiService from '../service'

const savePhongThietBi = async (context, payload) =>{
  let {data} = await PhongThietBiService.savePhongThietBi(payload)
  context.commit('updateDsPhongThietBi',data)
}

const deletePhongThietBi = async (context, payload) =>{
  let {data} = await PhongThietBiService.deletePhongThietBi(payload)
  context.commit('deletePhongThietBi',data)
}

export default {
  savePhongThietBi,
  deletePhongThietBi
}