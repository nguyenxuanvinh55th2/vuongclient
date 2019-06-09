export default {
  data: () => ({
    dialog: false,
    tenNguoiQL: '',
    ngaySinh: '',
    gioiTinh: true,
    SDT: '',
    diaChi: '',
    headers: [
      {
        text: 'Name',
        align: 'center',
        sortable: false,
        value: 'name'
      },
      { text: 'Ngày sinh', align: 'center', sortable: false, value: 'ngaySinh' },
      { text: 'Giới tính', align: 'center', sortable: false, value: 'gioiTinh' },
      { text: 'Số ĐT', align: 'center', sortable: false, value: 'sdt' },
      { text: 'Địa chỉ', align: 'center', sortable: false, value: 'diaChi' },
    ],
    editedIndex: -1,
    editedItem: {
      tenNguoiQL: '',
      ngaySinh: '',
      gioiTinh: true,
      SDT: '',
      diaChi: ''
    },
    defaultItem: {
      tenNguoiQL: '',
      ngaySinh: '',
      gioiTinh: true,
      SDT: '',
      diaChi: ''
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Add new' : 'Edit Info'
    },
    quanlys() {
      return this.$store.state.QuanLy.quanlys
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    }
  },

  created() {
    this.$store.dispatch('QuanLy/getDsQuanLyGiangDuong')
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.quanlys.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.quanlys.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.quanlys.splice(index, 1)
      this.$store.dispatch('QuanLy/deleteQuanLyGiangDuong',item)
    },

    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save() {
      this.$store.dispatch('QuanLy/addQuanLyGiangDuong', this.editedItem)
      this.close()
    }
  }
}