import Vue from 'vue'
import Vuex from 'vuex'
import GiangDuong from './giangduong/store/index'
import QuanLy from './quanly/store/index'
import Phong from './phong/store/index'
import LoaiThietBi from './loaithietbi/store/index'
import ThietBi from './thietbi/store/index'
import PhongThietBi from './phong-thietbi/store/index'
import LoaiNguoiDung from './loainguoidung/store/index'
import NguoiDung from './nguoidung/store/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:  {
        GiangDuong: GiangDuong,
        QuanLy: QuanLy,
        Phong: Phong,
        LoaiThietBi: LoaiThietBi,
        ThietBi: ThietBi,
        PhongThietBi: PhongThietBi,
        LoaiNguoiDung: LoaiNguoiDung,
        NguoiDung: NguoiDung
    }
})