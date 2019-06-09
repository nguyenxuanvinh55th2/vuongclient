import service from '../service.js'
export default {
  props:{
    dsThietBiFiltered: {
      type: Array
    }
  },
  data() {
    return {
      dialog: false,
      thietbiID: null,
      phongid:null,
      isloading: false,
      thietBiID: '',
      phongID: '',
      ngayNhap:'',
      moTa: ''
    }
  },
  methods: {
    async save(){
      let payload = {
        thietBiID: this.thietbiID,
        phongID: this.phongid,
        ngayNhap: this.ngayNhap,
        moTa: this.moTa
      }
      await service.saveNhatKySuDung(payload)
      this.close()
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  },
  computed: {
    phongs(){
      return this.$store.state.Phong.phongs
    }
  },
  created() {
    this.$store.dispatch('Phong/getDsPhong')
  },
}