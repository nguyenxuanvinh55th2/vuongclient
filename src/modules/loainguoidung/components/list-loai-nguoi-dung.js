import listNguoiDung from '../../nguoidung/components/list-nguoi-dung.vue'
import _ from 'lodash'
export default {
  components:{
    listNguoiDung
  },
  computed: {
    loainguoidungs() {
      return this.$store.state.LoaiNguoiDung.loainguoidungs
    }
  },
  data() {
    return {
      dsnguoidung: []
    }
  },
  watch: {
    loainguoidungs() {
      if (this.loainguoidungs && this.loainguoidungs.length && !this.loainguoidung) {
        this.goDetail(this.loainguoidungs[0])
      }
    }
  },
  methods: {
    goDetail(lnd) {
      this.dsnguoidung = _.cloneDeep(lnd).dsnguoidungs
    },
    fetchData() {
      this.$store.dispatch('LoaiNguoiDung/getDsLoaiNguoiDung')
    }
  },
  created() {
    this.fetchData()
  },
  mounted() {
    
  },
}