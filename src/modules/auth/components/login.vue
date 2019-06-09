<template>
  <div>
    <v-app id="inspire">
      <v-content>
        <div class="background align-center py-4">
          <h1 style="text-align:center;color:white">TRƯỜNG ĐẠI HỌC NHA TRANG</h1>
          <h3 style="text-align:center;color:white">Hệ Thống Quản Lý Trang Thiết Bị Giảng Đường</h3>
        </div>

        <v-container fluid fill-height class="hinhnen">
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card style="opacity: 0.7;"  class="elevation-12">
                <v-toolbar dark >
                  <v-toolbar-title  >Đăng nhập</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form dark >
                    <v-text-field
                      v-model="formData.userName"
                      prepend-icon="person"
                      name="login"
                      label="Login"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      v-model="formData.password"
                      id="password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                    <quenmatkhau/> 
                  <v-spacer></v-spacer>
                  <v-btn dark  @click="login">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import AuthService from "../service.js";
import quenmatkhau from './quenmatkhau.vue'
export default {
  components:{
    quenmatkhau
  },
  data: () => ({
    formData: {},
    drawer: null
  }),
  methods: {
    async login() {
      let { data } = await AuthService.login(this.formData);
      if (data.login) {
        this.$session.set("login", true);
        this.$session.set("loginUser", data);
        this.$router.push({ path: "/content" });
      } else {
        alert("Username hoặc password không đúng !");
      }
    },
    logout() {
      this.$session.clear();
      this.loginStatus = false;
      this.$router.push({ path: "/login" });
    }
  },
  props: {
    source: String
  }
};
</script>
<style scoped>
.hinhnen {
  width: 100%;
  height: 500px;
  /* padding-bottom: 100px; */
  /* background-image: url("https://photo-2-baomoi.zadn.vn/w1000_r1/2018_10_21_329_28247368/3be01d4cb20d5b53021c.jpg");*/
  background-image: url("../../../assets/b2.jpg") ; 
  background-color:#EEEEEE; 
  background-position: center;
  background-size: cover;
}

</style>
