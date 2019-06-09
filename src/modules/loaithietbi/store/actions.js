import LoaiThietBiService from '../service'

const getDsLoaiThietBi = async (context) =>{
  let {data} = await LoaiThietBiService.getDsLoaiThietBi()
  context.commit('loadDsLoaiThietBi', data)
}

const addLoaiThietBi = async (context, payload) =>{
  let {data} = await LoaiThietBiService.addLoaiThietBi(payload)
  context.commit('updateDsLoaiThietBi', data)
}

export default {
  getDsLoaiThietBi, addLoaiThietBi
}