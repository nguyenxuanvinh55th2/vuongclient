import moment from 'moment'
import _ from 'lodash'
// import format from 'date-fns/format'
import NhatKyPhanHoiService from '../../phong-thietbi/service.nhat-ky-phan-hoi.js'

  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      startDate: null,
      endDate: null,
      dsNhatKyPhanHoi: [],

      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      search: '',
      pagination: {},
      selected: [],
      headers: [
        {
          text: 'Tên phòng',
          align: 'center',
          sortable: false,
          value: 'tenPhong'
        },
        { text: 'Tên thiết bị', align: 'center', value: 'tenThietBi' },
        { text: 'Tình Trạng', align: 'center', value: 'tinhTrangs' },
        { text: 'Số lượng', align: 'center', value: 'hinhAnh' }
      ]
    }),

    computed: {
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
      },
      dsNhatKyPhanHoiAfterFilter () {
        return _.cloneDeep(this.dsNhatKyPhanHoiComputed).filter(item => {
          if (this.startDate && this.endDate) {
            return moment(item.ngayPhanHoi).isBetween(this.startDate, this.endDate)
          }
          return true
        })
      },
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0
        this.pagination.totalItems = this.dsNhatKyPhanHoiAfterFilter.length
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    methods: {
      async fetchData () {
        let data = await NhatKyPhanHoiService.getNhatKyPhanHoi()
        this.dsNhatKyPhanHoi = data || []
      }
    },
    created () {
      this.fetchData()
    }
  }