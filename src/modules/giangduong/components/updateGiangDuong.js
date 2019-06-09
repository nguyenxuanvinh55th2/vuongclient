
export default {
  props: { giangduong: {} },

  computed: {
    quanlys() {
      return this.$store.state.QuanLy.quanlys
    }
  },
  watch: {
    giangduong() {
      if (this.giangduong && this.giangduong && this.giangduong.hinhAnhs) {
        this.imageSrc = `//localhost:9002/api/v1/image/` + this.giangduong.hinhAnhs
        this.giangduong.hinhAnhs = this.giangduong && this.giangduong.hinhAnhs && this.giangduong.hinhAnhs[0]
      }
    }
  },
  data() {
    return {
      // quanly_id: null,
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
      imageSrc: null
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
        this.imageSrc = this.imageURL
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]

    },
    save() {
      //gop base 64 imageURL va name hinh anh: image thanh 1 doi tuong
      let img = { image: this.image.name, imageURL: this.imageURL }
      let payload = {
        _id: this.giangduong._id,
        ten: this.giangduong.ten,
        quanLyID: this.giangduong.quanLyID._id,
        soTang: this.giangduong.soTang,
      }
      if (this.image && this.image.name) {
        payload.hinhAnhs = img
      } else {
        payload.hinhAnhs = this.giangduong.hinhAnhs
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
    },
  },
  created() {

  },
};