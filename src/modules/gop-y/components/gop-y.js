import Axios from 'axios'

export default {

  data() {
    return {
      formData: {}
    }
  },
  methods: {
    async sendEmail () {
      let {data} = await Axios.post('http://localhost:9002/api/v1/send-email', this.formData)
      console.log(data)
    }
  },
}