import _ from 'lodash'
import updateGiangDuong from './updateGiangDuong.vue'
export default {
  props: {
    giangduong: {}
  },
  components: {
    updateGiangDuong
  },
  filter: {},
  computed: {

  },
  watch: {
    giangduong() {
      this.formData = _.cloneDeep(this.giangduong)
    }
  },
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    fetchData() {
      this.$emit('save')
    },
    deleteGd(id){
      confirm('Are you sure you want to delete this item?') &&
      this.$store.dispatch('GiangDuong/deleteGiangDuong',id)
    }
  }
}