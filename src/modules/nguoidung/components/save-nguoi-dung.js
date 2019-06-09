
export default {
  props:{
    dsnguoidung:{
      type: Array
    }
  },
  computed: {

  },
  watch: {
  },
  data() {
    return {
      loainguoidungID: null,
      imageURL: '',
      image: {},
      dialog: false,
      isloading: false,
      tenNguoiDung: '',
      ngaySinh: '',
      gioiTinh: '',
      soDT: '',
      email: '',
      hinhAnhs:'',
      userName: '',
      password: '',
      loaiNguoiDungID: '',
      editedItem: {
        tenNguoiDung: '',
        ngaySinh: '',
        gioiTinh: '',
        soDT: '',
        email: '',
        hinhAnhs:'',
        userName: '',
        password: '',
        loaiNguoiDungID: ''
      },
      defaultItem: {
        tenNguoiDung: '',
        ngaySinh: '',
        gioiTinh: '',
        soDT: '',
        email: '',
        hinhAnhs:'',
        userName: '',
        password: '',    
        loaiNguoiDungID: ''
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
        tenNguoiDung: this.tenNguoiDung,
         ngaySinh: this.ngaySinh,
         gioiTinh: this.gioiTinh,
         soDT: this.soDT,
         email: this.email,
         hinhAnhs: img,
         userName: this.userName,
         password: this.password,
         loaiNguoiDungID: this.dsnguoidung[0].loaiNguoiDungID
      }
      this.$store.dispatch('NguoiDung/saveNguoiDung', payload)
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
      this.$store.dispatch('NguoiDung/getDsNguoiDung')
    }
  },
  created() {
  },
};