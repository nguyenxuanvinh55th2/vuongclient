import _ from 'lodash'
import options from '../options.js'
import optionsTrangThai from '../optionsTrangThai.js'
import NhatKyPhanHoiService from '../service.nhat-ky-phan-hoi.js'
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    idPhong: {
      type:String
    }
  },
  // filters: {
  //   getTrangThai(value) {
  //     let item = optionsTrangThai.trangThais.find(item => item.value === value)
  //     if (item) {
  //       return item.label
  //     }
  //     return ''
  //   }
  // },
  data: () => ({
    options,
    optionsTrangThai,
    dialog: false,
    headers: [
      {
        text: 'Tên thiết bị',
        align: 'center',
        sortable: false,
        value: 'tenThietBi'
      },
      {
        text: 'Tình trạng', align: 'center',
        sortable: false, value: 'tinhTrang'
      },
      {
        text: 'Số lượng', align: 'center',
        sortable: false, value: 'soLuong'
      },
      {
        text: 'Người gửi yêu cầu', align: 'center',
        sortable: false, value: 'nguoiGuiYeuCau'
      },
      {
        text: 'Người phê duyệt', align: 'center',
        sortable: false, value: 'nguoiPheDuyet'
      },
      {
        text: 'Thời gian gửi', align: 'center',
         value: 'thoiGianGui', sortable: false
      },
      {
        text: 'Thời gian duyệt', align: 'center',
         value: 'thoiGianDuyet', sortable: false
      },
      {
        text: 'Trạng thái', align: 'center',
         value: 'trangThai', sortable: false
      },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    dsNhatKyPhanHoi:[]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Chỉnh sửa thông tin phản hồi' : 'Chỉnh sửa thông tin phản hồi'
    },
    dsNhatKyPhanHoiComputed () {
      return _.cloneDeep(this.dsNhatKyPhanHoi).map(item => {
        let thietBiInfo
        let index = (item.phongID && item.phongID.thietBis || []).findIndex(tItem => tItem._id === item.thietBiID)
        if (index !== -1) {
          thietBiInfo = item.phongID.thietBis[index].item
        }
        return {
          ...item,
          thietBiInfo
        }
      })
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    value (v){
      if(v) {
        this.dsNhatKyPhanHoi = this.dsNhatKyPhanHoi.filter(item => {
          return item.phongID._id === this.idPhong
        })
      }
    }
  },
  filters: {
    getTinhTrang(value) {
      let item = options.trangThais.find(item => item.value === value)
      if (item) {
        return item.label
      }
      return ''
    }
  },
  created() { 
    NhatKyPhanHoiService.getNhatKyPhanHoi().then(res => {
      this.dsNhatKyPhanHoi = res
    })
    this.initialize()
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        }
      ]

    },

    editItem(item) {
      this.editedIndex = this.dsNhatKyPhanHoiComputed.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(id) {
      confirm('Are you sure you want to delete this item?') && NhatKyPhanHoiService.deleteNhatKyPhanHoi(id)
    },

    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    async save() {
      let loginUser = this.$session.get('loginUser')
      let sendData = {
        ...this.editedItem,
        nguoiYeuCauID: (this.editedItem.nguoiYeuCauID && this.editedItem.nguoiYeuCauID._id) || this.editedItem.nguoiYeuCauID,
        nguoiPheDuyetId: loginUser._id,
        thoiGianDuyet: Date.now()
      }
      await NhatKyPhanHoiService.saveNhatKyPhanHoi(sendData)
      this.close()
    },
    hide() {
      this.$emit('input', false)
    }
  }

}