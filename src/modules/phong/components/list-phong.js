import savePhong from "./savePhong.vue"
import updatePhong from './updatePhong.vue'
import options from '../options'

export default {
  props: {
    dsphong: {
      type: Array
    }
  },
  components: {
    savePhong,
    updatePhong
  },
  filters: {
    getTinhTrang(value) {
      let item = options.tinhTrangs.find(item => item.value === value)
      if (item) {
        return item.label
      }
      return ''
    }
  },
  data() {
    return {
      options,
      //Tao phongSelect thanh doi duong
      dialog: false,
      phongSelect: {},
      search: '',
      pagination: {},
      selected: [],
      headers: [
        {
          text: 'Tên phòng',
          align: 'center',
          value: 'tenPhong'
        },
        {
          text: 'Sức chứa', align: 'center',
          value: 'sucChua', sortable: false,
        },
        {
          text: 'Tình trạng', align: 'center',
          value: 'tinhTrang', sortable: false,
        },
        {
          text: 'Hình ảnh', align: 'center',
          value: 'hinhAnhs', sortable: false,
        },
        {
          text: 'Thiết bị', align: 'center',
          value: 'thietBis', sortable: false,
        },
        { text: 'Actions', value: 'name', align: 'center', sortable: false }
      ],
    }
  },
  computed: {
    pages() {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0
      else
        //phải lấy được tất cả các số lượng mới phân trang dc
        this.pagination.totalItems = this.dsphong.length
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    },

  },
  methods: {
    //prop
    edit(item) {
      this.phongSelect = item
      this.dialog = true
    },
    deletePhong(id) {
      confirm('Are you sure you want to delete this item?') &&
      this.$store.dispatch('Phong/deletePhong', id)
    },
    fetchData() {
      this.$store.dispatch('Phong/getDsPhong')
    }
  },
  created() {
    this.fetchData()
  },

}