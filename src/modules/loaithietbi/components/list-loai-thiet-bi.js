import listThietBi from '../../thietbi/components/list-thiet-bi.vue'
import saveLoaiThietBi from './saveLoaiThietBi.vue'
import loaiThietBiDetail from './loai-thiet-bi-detail.vue'
import _ from 'lodash'

export default {
  components: { listThietBi, saveLoaiThietBi, loaiThietBiDetail },
  computed: {
    loaithietbis() {
      return this.$store.state.LoaiThietBi.loaithietbis
    }
  },
  data() {
    return {
      dsthietbi: [],
      thietbi:null,
      loaithietbi: null
    }
  },
  watch: {
    loaithietbis() {
      if (this.loaithietbis && this.loaithietbis.length && !this.loaithietbi) {
        this.goDetail(this.loaithietbis[0])
      }
    }
  },
  methods: {
    goDetail(ltb) {
      this.loaithietbi = _.cloneDeep(ltb)
      this.dsthietbi = _.cloneDeep(ltb).dsthietbis
    },
    fetchData() {
      this.$store.dispatch('LoaiThietBi/getDsLoaiThietBi')
    }
  },
  created() {
    this.fetchData()
  },
  mounted() {
    
  },
}