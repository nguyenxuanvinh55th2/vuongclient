import _ from 'lodash'
export default {
  props:{loaithietbi:{}},
  computed: {
    
  },
  watch: {
    loaithietbi() {
      this.formData = _.cloneDeep(this.loaithietbi)
    }
  },
  data() {
    return {
      formData:{},
      dialog: false,
      isloading: false,
      tenLoaiThietBi: '',
      xuatXu: '',
      editedItem: {
        tenLoaiThietBi: '',
        xuatXu: ''
      },
      defaultItem: {
        tenLoaiThietBi: '',
        xuatXu: ''
      },
      inputRules: [v => v.length >= 1 || "Phải lớn hơn 1 ký tự"],
      items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    };

  },
  methods: {
    save() {
      let payload = {
        tenLoaiThietBi: this.tenLoaiThietBi, xuatXu: this.xuatXu
      }
      this.$store.dispatch('LoaiThietBi/addLoaiThietBi', payload)
      this.close()
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
  },
  created() {
    this.$store.dispatch('LoaiThietBi/getDsLoaiThietBi')
  },
};