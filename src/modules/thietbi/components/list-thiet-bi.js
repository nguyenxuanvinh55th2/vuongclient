import saveThietBi from './saveThietBi.vue'
import updateThietBi from './updateThietBi.vue'
import thietbiDetail from './thiet-bi-detail.vue'

export default {
  props:{
    dsthietbi: {
      type: Array
    }
  },
  components:{
    saveThietBi,
    updateThietBi,
    thietbiDetail
  },
  data: () => ({
    thietbiSelect:{},
    selectDetail:{},
    dialog: false,
    headers: [
      {
        text: 'Tên thiết bị',
        align: 'center',
        value: 'tenThietBi'
      },
      { text: 'Hình ảnh',sortable: false,align: 'center', value: 'hinhAnhs' },
      { text: 'Mô tả',sortable: false,align: 'center', value: 'moTa' },
      { text: 'Chi tiết',sortable: false,align: 'center', value: 'chiTiet' },
      { text: 'Actions', value: 'name',align: 'center', sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      tenThietBi: '',
      hinhAnhs: '',
      moTa: '',
    },
    defaultItem: {
      tenThietBi: '',
      hinhAnhs: '',
      moTa: '',
    },
    showPopupDetail: false
  }),

  computed: {
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.fetchData()
  },

  methods: {
    editItem (item) {
     this.thietbiSelect = item
     this.dialog = true
    },

    deleteItem (id) {
      confirm('Are you sure you want to delete this item?')
       this.$store.dispatch('ThietBi/deleteThietBi',id)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    fetchData(){
      this.$store.dispatch('ThietBi/getDsThietBi')
    },
    goDetail(detail){
      this.selectDetail = detail
      this.showPopupDetail = true
     
    }
  }
}