<template>
  <div id="toolbar">
    <v-card>
      <div class="background align-center py-4" @click="$router.push({name: 'home'})">
        <h1 style="text-align:center;color:white">TRƯỜNG ĐẠI HỌC NHA TRANG</h1>
        <h3 style="text-align:center;color:white">Hệ Thống Quản Lý Trang Thiết Bị Giảng Đường</h3>
      </div>
      <v-bottom-nav
        :active.sync="activeBtn"
        :value="showNav"
        color="background"
        style="position:relative;"
        height="40px"
        class="mt-1"
      >
        <v-layout class="btn">
          <v-btn color="#FAFAFA">
            <a
              style="color: antiquewhite;text-decoration: none;"
              href="http://www.ntu.edu.vn/"
              target="_blank"
            >NTU</a>
          </v-btn>
          <v-btn flat color="#FAFAFA" @click="$router.push({name: 'home'})">
            <span style="color: antiquewhite;">Trang chủ</span>
          </v-btn>
          <v-btn flat color="#FAFAFA" @click="$router.push({name: 'timkiem'})">
            <span style="color: antiquewhite;">Tìm phòng</span>
          </v-btn>
         <v-btn flat color="#FAFAFA">
            <span style="color: antiquewhite;">Thông tin</span>
          </v-btn>
          <!-- <v-menu offset-y >
             <v-btn flat slot="activator" color="#FAFAFA">
               <v-icon left>expand_more</v-icon>
            <span style="color: antiquewhite;">Thông tin</span>
          </v-btn>
          <v-list v-for="tt in Thongtins" :key="tt.text">
            <v-list-tile-title>{{tt.text}}</v-list-tile-title>
          </v-list>
          </v-menu> -->
          <v-btn flat color="#FAFAFA">
            <a
              style="color: antiquewhite;text-decoration: none;"
              href="https://www.facebook.com/profile.php?id=100009200443095"
              target="_blank"
            >Liên hệ</a>
          </v-btn>
        </v-layout>

        <v-layout class="nav">
          <v-layout
            style="margin-top:9px; color:#fff; justify-content: flex-end; align-items: end; padding-right: 12px;"
          >Tài khoản: {{this.loginUser.tenNguoiDung}}</v-layout>
          <v-btn style="max-width: 80px;" small flat color="#EF5350" @click="logout">
            <v-icon color="#FAFAFA">exit_to_app</v-icon>
          </v-btn>
          <viTriGiangDuong></viTriGiangDuong>
        </v-layout>
      </v-bottom-nav>
    </v-card>
    <router-view></router-view>
  </div>
</template>

<script>
import viTriGiangDuong from "../tim-vi-tri-giangduong/components/tam.vue";
export default {
  components: { viTriGiangDuong },
  data() {
    return {
      Thongtins: [{text: 'Thông tin 1'},{text: 'Thông tin 1'},{text: 'Thông tin 1'}],
      activeBtn: 0,
      showNav: true,
      bottomNav: 1
    };
  },
  methods: {
    logout() {
      let isOK = confirm("Bạn có muốn thoát hay không ?");

      if (isOK) {
        this.$session.clear();
        this.loginStatus = false;
        this.$router.push({ path: "/" });
      }
    }
  },
  computed: {}
};
</script>
<style scoped>
.nav {
  margin-left: 190px;
}
.abc {
  width: 160px;
  height: 160px;
  padding: 10px;
  list-style: none;
  border: 2px solid #000;
  border-radius: 5%;
  text-align: center;
  color:#42A5F5;
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
  background-image: url("https://photo-2-baomoi.zadn.vn/w1000_r1/2018_10_21_329_28247368/3be01d4cb20d5b53021c.jpg");
}
</style>