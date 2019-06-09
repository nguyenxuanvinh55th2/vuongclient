import content from './content.vue'
import giangDuong from '../giangduong/components/list-giang-duong.vue'
import quanLy from '../quanly/components/list-quanly.vue'
import thietBi from '../loaithietbi/components/list-loai-thiet-bi.vue'
import nav from './navbar.vue'
import phongThietbi from '../phong-thietbi/components/detail-phong-thietbi.vue'
import nguoiDung from '../loainguoidung/components/list-loai-nguoi-dung.vue'
import Login from '../auth/components/login.vue'
import thongKe from '../thongke/components/thongke.vue'
import timKiemPhong from '../timkiem-phong/components/timkiem-phong.vue'
import baoHongNhanh from '../bao-hong-nhanh/components/bao-hong-nhanh.vue'
import gopY from '../gop-y/components/gop-y.vue'
import nhatKySuDung from '../nhatkysudung/components/nhatkysudung.vue'

export default [
  {
    path: '/',
    component: Login
  },
  {
    path: '/nav',
    component: nav,
    meta: {
      requiresAuth: true
     },
    children: [{
      name: 'home',
      path: '/content',
      component: content,
      meta: {
       requiresAuth: true
      }
    },
    {
      path: '/giangduong',
      component: giangDuong,
      children: [],
      meta: {
       requiresAuth: true
      }
    },
    {
      name: 'phongThietBi',
      path: '/giangduong/phongThietbi/:id',
      component: phongThietbi,
      meta: {
       requiresAuth: true
      }
    },
    // {
    //   path:'/phongThietbi',
    //   component:phongThietbi
    // },
    {
      path: '/quanly',
      component: quanLy,
      meta: {
       requiresAuth: true
      }
    },
    {
      path: '/thietbi',
      component: thietBi,
      meta: {
       requiresAuth: true
      }
    },
    {
      path:'/nguoidung',
      component: nguoiDung,
      meta: {
       requiresAuth: true
      }
    },
    {
      path:'/thongke',
      component: thongKe,
      meta: {
       requiresAuth: true
      }
    },
    {
      name:'timkiem',
      path:'/timkiem-phong',
      component: timKiemPhong,
      meta: {
       requiresAuth: true
      }
    },
    {
      path:'/baohongnhanh',
      component: baoHongNhanh,
      meta: {
       requiresAuth: true
      }
    },
    {
      path:'/gopy',
      component: gopY,
      meta: {
       requiresAuth: true
      }
    },
    {
      name: 'nhatkysudung',
      path:'/nhatkysudung',
      component: nhatKySuDung,
      meta: {
       requiresAuth: true
      }
    },
  ]
  },
  
]