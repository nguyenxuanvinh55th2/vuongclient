import Axios from 'axios'

const login = async (payload) => {
  return await Axios.post('http://localhost:9002/api/v1/login', payload)
}

export default {
  login
}