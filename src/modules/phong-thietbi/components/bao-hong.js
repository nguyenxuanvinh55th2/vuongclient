// import info from '../../send-email/send-email.js'
import options from'../options.js'
// import _ from 'lodash'
import NhatKyPhanHoiService from '../service.nhat-ky-phan-hoi.js'
import {mapGetters} from 'vuex'

export default {

  props: {
    thietbi: {},
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      phong : 'Phong/items'
    })
  },
  watch: {
    value (v) {
      if (v) {
        if (this.thietbi && this.thietbi._id) {
          this.formData.thietBiText = this.thietbi && this.thietbi.item && this.thietbi.item.tenThietBi
          this.formData.thietBiID = this.thietbi._id
        }
      }
    }
  },
  methods: {
    hide(){
      this.$emit('input',false)
    },
    async baoHong() {
      let loginUser = this.$session.get('loginUser')
      let sendData = {
        ...this.formData,
        phongID: this.phong && this.phong._id,
        nguoiYeuCauID: loginUser._id
      }
      await NhatKyPhanHoiService.saveNhatKyPhanHoi(sendData)
      this.hide()
    }
  },
  data() {
    return {
      options,
      formData:{},
      moTa: ''
    }
  }
}