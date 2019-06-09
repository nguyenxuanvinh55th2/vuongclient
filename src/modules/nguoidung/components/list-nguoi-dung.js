import saveNguoiDung from '../components/save-nguoi-dung.vue'
// import chiTietNguoiDung from '../components/nguoi-dung-detail.vue'
import updateNguoiDung from '../components/updateNguoiDung.vue'
export default {
  props:{
    dsnguoidung: {
      type: Array
    }
  },
  components:{
    saveNguoiDung,
    updateNguoiDung
    // chiTietNguoiDung
  },
  data: () => ({
    nguoiDungSelect:{},
    selectDetail:{},
    dialog: false,
    headers: [
      { text: 'Hình ảnh',sortable: false,align: 'left', value: 'hinhAnhs' },
      {
        text: 'Tên người dùng',
        align: 'left',
        value: 'tenNguoiDung'
      },
      { text: 'Ngày sinh',sortable: false,align: 'left', value: 'ngaySinh' },
      { text: 'Giới tính',sortable: false,align: 'left', value: 'gioiTinh' },
      { text: 'Điện thoại',sortable: false,align: 'left', value: 'soDT' },
      { text: 'Email',sortable: false,align: 'center', value: 'email' },
      { text: 'Username',sortable: false,align: 'left', value: 'userName' },
      { text: 'Password',sortable: false,align: 'left', value: 'password' },
      { text: 'Actions', value: 'actions',align: 'center', sortable: false }
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
     this.nguoiDungSelect = item
     this.dialog = true
    },

    deleteItem (id) {
      confirm('Are you sure you want to delete this item?') &&
       this.$store.dispatch('NguoiDung/deleteNguoiDung',id)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    fetchData(){
      this.$store.dispatch('NguoiDung/getDsNguoiDung')
    },
    goDetail(detail){
      this.selectDetail = detail
      this.showPopupDetail = true
     
    }
  }
}