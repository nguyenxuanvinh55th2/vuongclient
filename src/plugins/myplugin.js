import moment from 'moment'

const MyPlugin = {
  install(Vue) {
    /* Register prototype */
    // Vue.prototype._helpers = Helpers

    Vue.mixin({
      filters: {
        formatDate(date, format = 'DD/MM/YYYY') {
          if (date) {
            return moment(date).format(format)
          }
          return '-'
        }
      },
      data: () => ({
        loginStatus: false,
        loginUser: null
      }),
      computed: {
        laQuanTri() {
          if (this.loginUser && this.loginUser.loaiNguoiDungID === '5cd14e22d1719d2084171e8a') {
            return true
          } else {
            return false
          }
        },
        laNhanVien() {
          if (this.loginUser && this.loginUser.loaiNguoiDungID === '5cd14e34d1719d2084171e8b') {
            return true
          } else {
            return false
          }
        },
        laGiangVien() {
          if (this.loginUser && this.loginUser.loaiNguoiDungID === '5cd14e54d1719d2084171e8c') {
            return true
          } else {
            return false
          }
        },
        laNhanVienSuaChua() {
          if (this.loginUser && this.loginUser.loaiNguoiDungID === '5cd14e99d1719d2084171e8d') {
            return true
          } else {
            return false
          }
        },
        laSinhVien() {
          if (this.loginUser && this.loginUser.loaiNguoiDungID === '5cd14e54d1719d2084171e8c') {
            return true
          } else {
            return false
          }
        }
      },

      created() {
        this.getInfoLogin()
      },

      methods: {
        getInfoLogin() {
          let loginStatus = this.$session.get('login')
          if (loginStatus) {
            this.loginStatus = true
            let loginUser = this.$session.get('loginUser')
            if (loginUser) {
              this.loginUser = loginUser
            }
          } else {
            this.loginStatus = false
          }
        }
      }
    })
  }
}

export default MyPlugin
