import _ from 'lodash'
import saveNhatKySuDung from './saveNhatKySuDung.vue'
export default {
  components:{
    saveNhatKySuDung
  },
  data () {
    return {
      filterLoaiThietBi: null,
      filterThietBi: null,
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
        { text: 'Ngày nhập',align: 'center', value: 'ngayNhap' },
        { text: 'Tình trạng - Số lượng',align: 'center', value: 'tinhTrangs' },
        { text: 'Mô tả',align: 'center', value: 'moTa' }
      ]
    }
  },
  methods: {
    fetchData(){
      this.$store.dispatch('LoaiThietBi/getDsLoaiThietBi')
    },
    convertDsTinhTrangToString(arr) {
      if(arr === null || arr.lenght <= 0)
        return s = "No data"
      var s = ""
      arr.map(value => {
        s += value.tinhTrang + " " + value.soLuong + " | "
      })
      return s.substring(0,s.length - 2)
    }
  },
  computed: {
    loaithietbis() {
      return this.$store.state.LoaiThietBi.loaithietbis
    },
    getDsThietBi(){
      let listThietBi = []
      for(let item of this.loaithietbis){
        listThietBi.push(...item.dsthietbis)
      }
      return listThietBi
    },
    dsThietBiFiltered(){
      if(this.filterLoaiThietBi){
        let listThietBi = _.cloneDeep(this.getDsThietBi)
        listThietBi = listThietBi.filter(item => item.loaiThietBiID === this.filterLoaiThietBi)
        return listThietBi
      }
      return []
    },
    dsNhatKySuDung () {
      let result = []
      let tinhTrangSoLuongTB = ''
      if (this.filterThietBi) {
        let index = this.dsThietBiFiltered.findIndex(item => item._id === this.filterThietBi)
        if (index !== -1) {
          let thietBiInfo = this.dsThietBiFiltered[index]
          for (let phong of (thietBiInfo.dsphongsudung || [])) {
            let tbIndex = (phong.thietBis || []).findIndex(tb => (tb.item && tb.item._id || tb.item) === this.filterThietBi)
            if (tbIndex !== -1) {
              let arr = phong.thietBis[tbIndex].tinhTrangSoLuong.map(item => `${item.tinhTrang || '-'}: ${item.soLuong || '0'} `)
              tinhTrangSoLuongTB = arr.join(' | ')
              result = [...result, ...(phong.thietBis[tbIndex].dsNhatKySuDung || []).map(nhatKy => {
                return {
                  ...nhatKy,
                  tinhTrangSoLuongTB,
                  phongInfo: phong,
                  thietBiInfo: thietBiInfo,
                }
              })]
            }
            
          }
        }
      }
      return result
    },
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0
        this.pagination.totalItems = this.dsNhatKySuDung.length
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },
  mounted() {
    this.fetchData()
  },
  watch: {
   
  },
}