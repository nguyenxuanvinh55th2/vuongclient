import Axios from 'axios'

const saveNhatKySuDung  = async(payload) =>{
  let {data} = await Axios.post('http://localhost:9002/api/v1/nhatkysudung',payload)
  return data
}

export default { saveNhatKySuDung}

