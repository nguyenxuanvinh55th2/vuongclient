import _ from 'lodash'
export default {
  props: {
    thietbi: {},
    value: Boolean
  },
  computed: {
  },
  watch: {
    value(v) {
      if (v) {
        this.formData = _.cloneDeep(this.thietbi)
      }
    },
    thietbi() {
      if (this.formData && this.formData && this.formData.hinhAnhs) {
        this.imageSrc = `//localhost:9002/api/v1/image/` + this.formData.hinhAnhs
        this.formData.hinhAnhs = this.formData && this.formData.hinhAnhs && this.formData.hinhAnhs[0]
      }
    }
  },
  data() {
    return {
      formData: {},
      imageURL: '',
      image: {},
      imageSrc: null,
      dialog: false,
      isloading: false,
      tenThietBi: '',
      moTa: '',
      hinhAnhs: '',
      loaiThietBiID: '',
      // giangDuongID: '',
      editedItem: {
        tenThietBi: '',
        moTa: '',
        hinhAnhs: '',
        loaiThietBiID: '',
      },
      defaultItem: {
        tenThietBi: '',
        moTa: '',
        hinhAnhs: '',
        loaiThietBiID: '',
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
        this.imageSrc = this.imageURL
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    save() {
      //gop base 64 imageURL va name hinh anh: image thanh 1 doi tuong
      let img = { image: this.image.name, imageURL: this.imageURL }
      let payload = {
        _id: this.formData._id,
        tenThietBi: this.formData.tenThietBi,
        moTa: this.formData.moTa,
        loaiThietBiID: this.formData.loaiThietBiID
      }
      if (this.image && this.image.name) {
        payload.hinhAnhs = img
      } else {
        payload.hinhAnhs = this.formData.hinhAnhs
      }
      this.$store.dispatch('ThietBi/saveThietBi', payload)
      this.$emit('save')
      this.close()
    },
    close() {
      //emit 
      this.$emit('input', false)
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    fetchData() {
      this.$emit('fetchData')
    }
  },

};