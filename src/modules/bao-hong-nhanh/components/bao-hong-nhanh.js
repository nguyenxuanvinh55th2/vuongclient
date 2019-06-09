import _ from 'lodash'
import baohong from '../../phong-thietbi/components/bao-hong.vue'
export default {
  components:{
    baohong
  },
  data() {
    return {
      thietbiSelect: {},
      showPopupBaoHong: false,
      tinhTrangSoLuong: [{}],
      filterPhong: null,
      filterGiangDuong: null,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      search: '',
      pagination: {},
      selected: [],
      headers: [
        {
          text: 'Tên thiết bị',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Tình trạng - Số lượng', align: 'center', value: 'calories' },
        { text: 'Ghi chú', align: 'center', value: 'carbs' },
        { text: 'Báo hỏng', align: 'center', value: 'protein' }
      ]
    }
  },
  methods: {
    fetchData() {
      this.$store.dispatch('GiangDuong/getDsGiangDuong')
    },
    convertDsTinhTrangToString(arr) {
      if(arr === null || arr.lenght <= 0)
        return s = "No data"
      var s = ""
      arr.map(value => {
        s += value.tinhTrang + " " + value.soLuong + " | "
      })
      return s.substring(0,s.length - 2)
    },
    goBaoHong(item){
      this.thietbiSelect = item
      this.showPopupBaoHong = true
    }

  },
  computed: {
    pages() {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0
        this.pagination.totalItems = this.dsThietBi.length
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    },
    giangduongs() {
      return this.$store.state.GiangDuong.giangduongs
    },
    getDsPhong() {
      let listPhong = []
      for (let item of this.giangduongs) {
        listPhong.push(...item.dsphongs)
      }
      return listPhong
    },
    dsPhongFiltered() {
      if (this.filterGiangDuong) {
        let listPhong = _.cloneDeep(this.getDsPhong)
        listPhong = listPhong.filter(item => item.giangDuongID === this.filterGiangDuong)
        return listPhong
      }
      return []
    },
    dsThietBi() {

      if (this.filterPhong) {
        
        let index = this.dsPhongFiltered.findIndex(item => item._id === this.filterPhong)
        if (index !== -1) {
          return _.cloneDeep(this.dsPhongFiltered[index].thietBis || [])

        }
      }
      return [

      ]
    }
  },

  mounted() {
    this.fetchData()
  },
}