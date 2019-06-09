export default {
  props: {
    nguoidung: {},
    value: {
      type: Boolean,
      default: false
    }
  },
  watch: {

  },
  computed: {

  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: 'Tên người dùng',
          align: 'center',
          value: 'tenNguoiDung'
        },
        {
          text: 'Ngày sinh', align: 'center',
          sortable: false, value: 'ngaySinh'
        },
        {
          text: 'Email', align: 'center',
          sortable: false, value: 'ghiChu'
        },
        {
          text: 'Username', align: 'center',
          sortable: false, value: 'userName'
        },
        {
          text: 'Password', align: 'center',
          sortable: false, value: 'password'
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