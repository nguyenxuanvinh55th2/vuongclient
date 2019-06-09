
export default {
  props:{
    dsthietbi:{
      type: Array
    }
  },
  computed: {
    
  },
  watch: {
  },
  data() {
    return {
      imageURL: '',
      image: {},
      dialog: false,
      isloading: false,
      tenThietBi: '',
      moTa: '',
      hinhAnhs: '',
      loaiThietBiID: '',
      editedItem: {
        tenThietBi: '',
        moTa: '',
        hinhAnhs: '',
        loaiThietBiID: ''
      },
      defaultItem: {
        tenThietBi: '',
      moTa: '',
      hinhAnhs: '',
      loaiThietBiID: ''
      },
      inputRules: [v => v.length >= 1 || "Phải lớn hơn 1 ký tự"],
      items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    };

  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file !')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageURL = fileReader.result;
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    save() {
      //gop base 64 imageURL va name hinh anh: image thanh 1 doi tuong

      let img = { image: this.image.name, imageURL: this.imageURL }
      let payload = {
        tenThietBi: this.tenThietBi, moTa: this.moTa, hinhAnhs: img, loaiThietBiID: this.dsthietbi[0].loaiThietBiID
      }
      this.$store.dispatch('ThietBi/saveThietBi', payload)
      this.fetchData()
      this.close()
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    fetchData(){
      this.$store.dispatch('ThietBi/getDsThietBi')
    }
  },
  created() {
    
  },
  

};