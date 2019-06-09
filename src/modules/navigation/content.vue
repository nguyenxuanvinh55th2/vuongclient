<template>
  <div>
    <v-card>
      <v-layout app row wrap>
        <v-flex md8>
          <div class="pt-4">
            <ul
              v-for="link in computedLinks"
              :key="link.text"
              @click="goToRoute(link)"
            >
              <a href="http://www.ntu.edu.vn/ttpvth/vi-vn/trangch%E1%BB%A7.aspx" target="_blank" v-if="link.route === '/hotro'">
                <li class="abc">
                  <v-icon style="font-size:90px;">{{link.icon}}</v-icon>
                  <br>
                  <span style=" font-size:18px; ">{{link.text}}</span>
                </li>
              </a>
              <template v-else>
                <li class="abc">
                  <v-icon style="font-size:90px;">{{link.icon}}</v-icon>
                  <br>
                  <span style=" font-size:18px; ">{{link.text}}</span>
                </li>
              </template>
            </ul>
          </div>
        </v-flex>
        <v-layout>
          <v-flex xs12 sm6 md11 class="pt-4 mb-2">
            <v-toolbar color="#75b5d2" height="30px">
              <v-toolbar-side-icon></v-toolbar-side-icon>
              <v-toolbar-title style="margin-left:50px;">Hình ảnh</v-toolbar-title>
              <!-- <v-spacer></v-spacer> -->
            </v-toolbar>
            <div class="content-right" style="height:90%"></div>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    goToRoute (link) {
      if (link.route !== '/hotro') {
        this.$router.push({path: link.route})
      }
    }
  },
  computed: {
    computedLinks() {
      if (this.laQuanTri) {
        return [
          // { icon: "home", text: "Quản Lý Giảng Đường", route: "/quanly" },
          { icon: "dashboard", text: "Giảng Đường", route: "/giangduong" },
          {
            icon: "library_books",
            text: "Thiết Bị",
            route: "/thietbi"
          },
          { icon: "dvr", text: "Thống Kê", route: "/thongke" },
          { icon: "chrome_reader_mode", text: "Nhật Ký Sử Dụng", route: "/nhatkysudung" },
          { icon: "volume_up", text: "Báo Hỏng Nhanh", route: "/baohongnhanh" },
          { icon: "move_to_inbox", text: "Góp Ý", route: "/gopy" },
          { icon: "person", text: "Nhân Viên", route: "/nguoidung" },
          { icon: "help", text: "Hỗ Trợ", route: "/hotro" }
          // { icon: "phongThietBi", text: "Phong-ThietBi", route: "/phongThietBi" }
        ]
      } else 
        if(this.laGiangVien){
           return [
          // { icon: "home", text: "Quản Lý Giảng Đường", route: "/quanly" },
          { icon: "dashboard", text: "Giảng đường", route: "/giangduong" },
          {
            icon: "library_books",
            text: "Thiết Bị",
            route: "/thietbi"
          },
          // { icon: "dvr", text: "Thống Kê", route: "/thongke" },
          { icon: "volume_up", text: "Báo Hỏng Nhanh", route: "/baohongnhanh" },
          { icon: "move_to_inbox", text: "Góp Ý", route: "/gopy" },
          // { icon: "person", text: "Nhân Viên", route: "/nguoidung" },
          { icon: "help", text: "Hỗ Trợ", route: "/hotro" }
          // { icon: "phongThietBi", text: "Phong-ThietBi", route: "/phongThietBi" }
        ]
        }
       else 
        if(this.laNhanVienSuaChua){
           return [
          // { icon: "home", text: "Quản Lý Giảng Đường", route: "/quanly" },
          { icon: "dashboard", text: "Giảng đường", route: "/giangduong" },
          {
            icon: "library_books",
            text: "Thiết Bị",
            route: "/thietbi"
          },
          // { icon: "dvr", text: "Thống Kê", route: "/thongke" },
          { icon: "volume_up", text: "Báo Hỏng Nhanh", route: "/baohongnhanh" },
          // { icon: "move_to_inbox", text: "Góp Ý", route: "/gopy" },
          // { icon: "person", text: "Nhân Viên", route: "/nguoidung" },
          { icon: "help", text: "Hỗ Trợ", route: "/hotro" }
          // { icon: "phongThietBi", text: "Phong-ThietBi", route: "/phongThietBi" }
        ]
        }
    }
  }
}
</script>

<style>
#giangduong {
  background: #fff;
}
.abc {
  width: 160px;
  height: 160px;
  padding: 10px;
  list-style: none;
  border: 2px solid #000;
  border-radius: 5%;
  text-align: center;
  color: #1565C0;
  float: left;
  margin-left: 15px;
  margin-bottom: 10px;
}
.abc:hover {
  color: #616161;
  border: 2px solid #616161;
  translate: all 3s;
}
.content-right {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://datxanhnhatrang.com.vn/wp-content/uploads/2018/09/a1.jpg");
}
</style>