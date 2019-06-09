import _ from 'lodash'
import baohong from './bao-hong.vue'
import options from '../options.js'
export default {
  components:{
    baohong
  },
  props: {
    phong: {}
  },
  data: () => ({
    thietbiSelect:{},
    options,
    dialog: false,
    thietBiId: null,
    thietbiId: '',
    soLuong: 0,
    tinhTrang: '',
    ghiChu: '',
    headers: [
      {
        text: 'Tên thiết bị',
        align: 'center',
        sortable: false,
        value: 'tenThietBi'
      },
      { text: 'Số lượng', align: 'center', sortable: false, value: 'soLuong' },
      { text: 'Tình trạng', align: 'center', sortable: false, value: 'tinhTrang' },
      // { text: 'Hình ảnh', align: 'center', sortable: false, value: 'hinhAnh' },
      { text: 'Ghi chú', align: 'center', sortable: false, value: 'ghiChu' },
      { text: 'Báo hỏng', align: 'center', sortable: false, value: 'baoHong' },
      { text: 'Actions', align: 'center', sortable: false, value: 'name' }
    ],

    editedIndex: -1,
    editedItem: {
      thietbiId: '',
      soLuong: '',
      tinhTrang: '',
      ghiChu: '',
    },
    defaultItem: {
      thietbiId: '',
      soLuong: '',
      tinhTrang: '',
      ghiChu: '',
    },
    showPopupBaoHong: false,
    tinhTrangSoLuong: [{}]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New thiết bị' : 'Edit thiết bị'
    },
    formData() {
      return this.phong
    },
    dsThietBi () {
      return ((this.phong && this.phong.thietBis) || []).map(thietBi => {
        let sumSoLuong = 0
        let tinhTrangSoLuongText = []
        if (Array.isArray(thietBi.tinhTrangSoLuong) && thietBi.tinhTrangSoLuong.length) {
          for (let item of thietBi.tinhTrangSoLuong) {
            tinhTrangSoLuongText.push(`${item.tinhTrang || '-'}: ${item.soLuong || '0'}`)
            sumSoLuong += item.soLuong 
          }
        }
        return {
          ...thietBi,
          tinhTrangSoLuongText: tinhTrangSoLuongText.join('| '),
          soLuong : sumSoLuong,
        }
      })
    },
    thietbis() {
      return this.$store.state.ThietBi.thietbis
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    editedItem () {
      if (this.editedItem) {
        this.thietBiId = (this.editedItem.item && this.editedItem.item._id) || this.editedItem.item
        this.tinhTrangSoLuong = this.editedItem.tinhTrangSoLuong || [{}]
        this.ghiChu = this.editedItem.ghiChu
      }
    }
  },

  created() {
    this.$store.dispatch('ThietBi/getDsThietBi')
  },

  methods: {
    addTinhTrangSoLuong () {
      this.tinhTrangSoLuong.push({})
    },
    getPhong () {
      this.$store.dispatch('Phong/getDsPhong')
    },
    editItem(item) {
      this.editedIndex = this.formData.thietBis.indexOf(item)
      this.editedItem = _.cloneDeep(item)
      this.dialog = true
    },

    deleteItem(_id) {
      let sendData = {
        phongId: this.formData._id,
        _id: _id
      }
      const index = this.formData.thietBis.indexOf(_id)
      confirm('Are you sure you want to delete this item?') && this.formData.thietBis.splice(index, 1)
      this.$store.dispatch('PhongThietBi/deletePhongThietBi', sendData)
    },

    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    async save() {
      let payload = {
        phongId: this.formData._id,
        thietbiId: this.thietBiId,
        tinhTrangSoLuong: this.tinhTrangSoLuong,
        // soLuong: this.soLuong,
        // tinhTrang: this.tinhTrang,
        ghiChu: this.ghiChu
      }
      if (this.editedItem) {
        payload._id = this.editedItem._id
      }
      await this.$store.dispatch('PhongThietBi/savePhongThietBi', payload)
      await this.$nextTick()
      await this.$store.dispatch('Phong/getDsPhongById', this.phong && this.phong._id)
      this.editedItem = null
      this.close()
    },
    goBaoHong(item){
      this.thietbiSelect = item
      this.showPopupBaoHong = true
    }
  }
}