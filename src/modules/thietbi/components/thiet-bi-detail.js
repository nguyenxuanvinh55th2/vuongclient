export default {
  props: {
    thietbi: {},
    value: {
      type: Boolean,
      default: false
    }
  },
  watch: {

  },
  computed: {
    // dsPhongDung() {
    //   return ((this.thietbi && this.thietbi.dsphongsudung ) || []).map(phong => {
    //     let tinhTrangSoLuongTB = []
    //     // let ghiChuTB = ''
    //     if (Array.isArray(phong.tinhTrangSoLuong) && phong.tinhTrangSoLuong.length){
    //       for(let item of phong.tinhTrangSoLuong){
    //         tinhTrangSoLuongTB.push(`${item.tinhTrang || '-'}: ${item.soLuong || '-'} `)
    //       }
    //     }
    //     return {
    //       ...phong,
    //       tinhTrangSoLuongTB: tinhTrangSoLuongTB.join('|')
    //     }
    //   })
    // }
    dsPhongDung() {
      return ((this.thietbi && this.thietbi.dsphongsudung) || []).map(phong => {
        let tinhTrangSoLuongTB = "";
        let ghiChuTB = ''
        let index = (phong.thietBis || []).findIndex(item => item.item === (this.thietbi && this.thietbi._id))
        if (index !== -1) {
          if (Array.isArray(phong.thietBis)) {
            // phong.thietBis.map(value => {
            //   value.tinhTrangSoLuong.map(ob => {
            //     tinhTrangSoLuongTB +=(`${ob.tinhTrang || '-'}: ${ob.soLuong || '-'} `)
            //   })
            // })
            let arr = phong.thietBis[index].tinhTrangSoLuong.map(item => `${item.tinhTrang || '-'}: ${item.soLuong || '0'} `)
            tinhTrangSoLuongTB = arr.join(' | ')
            ghiChuTB = phong.thietBis[index].ghiChu
          }
        }

        return {
          ...phong,
          // tinhTrangSoLuongTB: tinhTrangSoLuongTB.join('|'),
          tinhTrangSoLuongTB,
          ghiChuTB
        }
      })
    }
  },
  data() {
    return {
      tinhTrangSoLuong: [{}],
      dialog: false,
      headers: [
        {
          text: 'Tên phòng trang bị',
          align: 'center',
          value: 'tenPhong'
        },
        {
          text: 'Tình trạng - Số lượng', align: 'center',
          sortable: false, value: 'tinhTrangSoLuong'
        },
        {
          text: 'Ghi chú', align: 'center',
          sortable: false, value: 'ghiChu'
        },
      ],

    }
  },
  methods: {
    hide() {
      this.$emit('input', false)
    }
  }
}