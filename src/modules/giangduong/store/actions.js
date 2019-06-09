import GiangDuongService from '../service'

const getDsGiangDuong = async (context) => {
  let {data} = await GiangDuongService.getDsGiangDuong()
  // let {data} = await axios.get('http://localhost:9002/api/v1/get-giangduong')
  context.commit('loadDsGiangDuong', data)
}

const getGiangDuongById = async(context, id) =>{
  let {data} = await GiangDuongService.getGiangDuongById(id)
  context.commit('loadGiangDuongById', data)
  return data
  
}

const addGiangDuong = async (context, payload) =>{
    let {data} = await GiangDuongService.addGiangDuong(payload)
    context.commit('updateDsGiangDuong',data)
}

const deleteGiangDuong = async (context, id)=>{
  let {data} = await GiangDuongService.deleteGiangDuong(id)
  context.commit('deleteGiangDuong', data)
}

export default{
  getDsGiangDuong,
  getGiangDuongById,
  addGiangDuong,
  deleteGiangDuong
}
