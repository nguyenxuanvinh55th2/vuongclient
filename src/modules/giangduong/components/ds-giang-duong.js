// import {mapGetters} from 'vuex'
// import saveGiangDuong from "./saveGiangDuong.vue"
// export default {
//   components:{saveGiangDuong},
//   name: 'ds-giang-duong',
//   filters: {},
//   computed: {
//     ...mapGetters({
//       items: 'GiangDuong/items'
//     }),
//     giangduongs() {
//       return this.$store.state.GiangDuong.giangduongs
//     }
//   },
//   watch: {
//   },
//   data() {
//     return {
//       selectedFile: null
//     }

//   },
//   methods: {
//     viewPhong() {
//       this.$router.push({ path: '/phonghoc' })
//     }   
// },
//   created() {
//     this.$store.dispatch('GiangDuong/getDsGiangDuong')
//   }
// }
