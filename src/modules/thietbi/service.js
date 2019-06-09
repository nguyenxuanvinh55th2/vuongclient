import Axios from 'axios'

const getDsThietBi = async() =>{
  return await Axios.get('http://localhost:9002/api/v1/get-thietbi')
}

const saveThietBi = async(payload) =>{
  return await Axios.post('http://localhost:9002/api/v1/thietbi',payload)
}

const deleteThietBi = async(id)=>{
  return await Axios.delete(`http://localhost:9002/api/v1/delete-thietbi/${id}`)
}

export default {
  getDsThietBi,
  saveThietBi, 
  deleteThietBi
}