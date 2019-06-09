
export default {
  computed: {
    quanlys() {
      return this.$store.state.QuanLy.quanlys
    }
  },
  watch: {
  },
  data() {
    return {
      quanly_id: null,
      imageURL: '',
      image: {},
      dialog: false,
      isloading: false,
      ten: '',
      soTang: '',
      quanLyID: '',
      hinhAnhs: '',
      editedItem: {
        ten: '',
        soTang: '',
        quanLyID: '',
        hinhAnhs: '',
      },
      defaultItem: {
        ten: '',
        soTang: '',
        quanLyID: '',
        hinhAnhs: '',
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


    // //upload file len server
    // onUpload() {
    //   let fd = new FormData()
    //   fd.append('image',this.files, this.files.name)
    //   Axios.post('')
    // },

    save() {
      //gop base 64 imageURL va name hinh anh: image thanh 1 doi tuong

      let img = { image: this.image.name, imageURL: this.imageURL }
      let payload = {
        ten: this.ten, quanLyID: this.quanly_id, soTang: this.soTang, hinhAnhs: img
      }
      this.$store.dispatch('GiangDuong/addGiangDuong', payload)
      this.$emit('save')
      this.close()
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  },
  created() {
    this.$store.dispatch('QuanLy/getDsQuanLyGiangDuong')
  },
};