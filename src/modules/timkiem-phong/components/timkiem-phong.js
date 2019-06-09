import _ from 'lodash'
import  XLSX from "xlsx"
import options from '../../phong/options.js'
export default {
  data () {
    return {
      options,
      e1: 'Tất cả giảng đường',
      search: '',
      pagination: {},
      selected: [],
      giangduong: null,
      dsphong: [],
      headers: [
        {
          text: 'Tên phòng',
          align: 'center',
          value: 'tenPhong'
        },
        { text: 'Sức chứa', align: 'center', value: 'sucChua' },
        { text: 'Tình Trạng',sortable: false, align: 'center', value: 'tinhTrangs' },
        { text: 'Hình ảnh',sortable: false, align: 'center', value: 'hinhAnh' },
        { text: 'Thiết bị', align: 'center',sortable: false, value: 'thietBis' }
      ],
      filterGiangDuong: null
    }
  },
  filters: {
    getTinhTrang(value) {
      let item = options.tinhTrangs.find(item => item.value === value)
      if (item) {
        return item.label
      }
      return ''
    }
  },
  methods: {
    fetchData() {
      this.$store.dispatch('GiangDuong/getDsGiangDuong')
    },
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

       //process file
       var oFile = event.target.files[0];
       var sFilename = oFile.name;

       var reader = new FileReader();
       var result = {};
       let nameSheet = '';
       reader.onload = function (e) {
           var data = e.target.result;
           data = new Uint8Array(data);
           var workbook = XLSX.read(data, {type: 'array'});
          // console.log(workbook)
           var result = {};
           workbook.SheetNames.forEach(function (sheetName) {
             nameSheet = sheetName;
               var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1});
               if (roa.length) result[sheetName] = roa;
           });
           //see the result, caution: it works after reader event is done.
           console.log( result);
           for (let i = 9; i<= result[nameSheet].length; i++){
            // console.log(result[nameSheet][i])
           }
          // console.log(result[nameSheet][9])
       };
       reader.readAsArrayBuffer(oFile);
    }
  },
  computed: {
    pages() {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0
      else
        //phải lấy được tất cả các số lượng mới phân trang dc
        this.pagination.totalItems = this.getDsPhong.length
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    },
    giangduongs() {
      return this.$store.state.GiangDuong.giangduongs
    },
    
    getDsPhong(){
      let listPhong = []
      for(let item of this.giangduongs) {
        listPhong.push(...item.dsphongs)
      }
      return listPhong
    },

    dsPhongFiltered () {
      let listPhong = _.cloneDeep(this.getDsPhong)
      if (this.filterGiangDuong) {
        listPhong = listPhong.filter(item => item.giangDuongID === this.filterGiangDuong)
      }
      return listPhong
    }
  },
  mounted() {
    this.fetchData()
  }
}