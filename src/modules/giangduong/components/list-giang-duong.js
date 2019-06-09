import _ from "lodash"

import saveGiangDuong from "./saveGiangDuong.vue"
import detailgiangduong from "./giang-duong-detail.vue"
import listPhong from "../../phong/components/list-phong.vue"
export default {
  components: {
    detailgiangduong,
    listPhong,
    saveGiangDuong,
  },
  name: 'list-giang-duong',
  filter: {},
  computed: {
    giangduongs() {
      return this.$store.state.GiangDuong.giangduongs
    }
  },
  watch: {
    giangduongs () {
      if (this.giangduongs && this.giangduongs.length && !this.giangduong) {
        this.goDetail(this.giangduongs[0])
      }
    }
  },
  data() {
    return {
      selectedFile: null,
      giangduong: null,
      dsphong: [],
      quanly: {},
    }
  },
  methods: {
    goDetail(gd) {
      this.giangduong = _.cloneDeep(gd)
      this.dsphong = _.cloneDeep(gd).dsphongs
      this.quanly = _.cloneDeep(gd).quanLyID
    },
    fetchData() {
      this.$store.dispatch('GiangDuong/getDsGiangDuong')
    },
  },
  mounted () {
    this.fetchData()
  }
}