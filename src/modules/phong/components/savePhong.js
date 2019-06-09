
import options from '../options'
// import  XLSX from "xlsx"
export default {
  computed: {
    giangduongs(){
      return this.$store.state.GiangDuong.giangduongs
    }
  },
  watch: {
  },
  data() {
    return {
      options,
      giangduongID: null,
      imageURL: '',
      image: {},
      dialog: false,
      isloading: false,
      tenPhong: '',
      sucChua: '',
      tinhTrang: '',
      hinhAnhs: '',
      giangDuongID: '',
      editedItem: {
        tenPhong: '',
        sucChua: '',
        tinhTrang: '',
        hinhAnhs: '',
        giangDuongID: ''
      },
      defaultItem: {
        tenPhong: '',
        sucChua: '',
        tinhTrang: '',
        hinhAnhs: '',
        giangDuongID: ''
      },
      inputRules: [v => v.length >= 1 || "Phải lớn hơn 1 ký tự"],
      // items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
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

      // process file
      // var oFile = event.target.files[0];
      // var sFilename = oFile.name;

      // var reader = new FileReader();
      // var result = {};
      // let nameSheet = '';
      // reader.onload = function (e) {
      //     var data = e.target.result;
      //     data = new Uint8Array(data);
      //     var workbook = XLSX.read(data, {type: 'array'});
      //     console.log(workbook)
          // var result = {};
          // workbook.SheetNames.forEach(function (sheetName) {
          //   nameSheet = sheetName;
          //     var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1});
          //     if (roa.length) result[sheetName] = roa;
          // });
          // see the result, caution: it works after reader event is done.
          // console.log( result);
          // for (let i = 9; i<= result[nameSheet].length; i++){
          //   console.log(result[nameSheet][i])
          // }
          // console.log(result[nameSheet][9])
      // };
      // reader.readAsArrayBuffer(oFile);
    },
    save() {
      //gop base 64 imageURL va name hinh anh: image thanh 1 doi tuong

      let img = { image: this.image.name, imageURL: this.imageURL }
      let payload = {
        tenPhong: this.tenPhong, sucChua: this.sucChua, tinhTrang: this.tinhTrang, hinhAnhs: img, giangDuongID: this.giangduongID
      }
      this.$store.dispatch('Phong/savePhong', payload)
      alert('Thêm phòng thành công !')
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
      this.$store.dispatch('Phong/getDsPhong')
    }
  },
  created() {
    
  },

};