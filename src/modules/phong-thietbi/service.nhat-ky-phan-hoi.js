import Axios from 'axios'

const saveNhatKyPhanHoi = async (payload) =>{
  return await Axios.post('http://localhost:9002/api/v1/nhatkyphanhoi', payload)
}
const getNhatKyPhanHoi = async () =>{
  let {data} = await  Axios.get('http://localhost:9002/api/v1/get-nhatkyphanhoi')
  return data
}
const deleteNhatKyPhanHoi = async (id) =>{
  let {data} = await Axios.delete(`http://localhost:9002/api/v1/delete-nhatkyphanhoi/${id}`)
  return data
}
export default {
  saveNhatKyPhanHoi,
  getNhatKyPhanHoi,
  deleteNhatKyPhanHoi
}