// import _ from 'lodash'
import { mapGetters } from 'vuex'
import nhatkyphanhoi from './nhatkyphanhoi.vue'
import listPhongThietBi from './list-phong-thietbi.vue'
import options from '../../phong/options.js'
export default {
  components: {
    listPhongThietBi,
    nhatkyphanhoi
  },
  computed: {
    ...mapGetters({
      phong : 'Phong/items'
    })
  },

  watch: {
  },
  data() {
    return {
      showPopupNhatKy: false,
      options
    }
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
  methods: {
    goNhatKy(){
      this.showPopupNhatKy = true
    }
    
  },
  mounted() {
    // this.fetchData()
  },
  created() {
    // console.log('route',this.$route)
    this.$store.dispatch('Phong/getDsPhongById', this.$route.params.id)
  },
}