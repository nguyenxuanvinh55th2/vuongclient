<template>
  <div id="detailPhongThietBi">
    <v-layout app row wrap style="margin-left:150px;">
      <v-flex xs12 sm6 md6 class="mt-2">
        <v-toolbar color="#75b5d2" height="40px">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title style="margin-left:70px;">Chi tiết phòng học</v-toolbar-title>
          <!-- <v-spacer></v-spacer> -->
        </v-toolbar>
        <v-layout style=" opacity:0.8;">
          <v-flex md4>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <h4>Tên giảng đường</h4>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md8>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <span>{{phong.giangDuongID && phong.giangDuongID.ten}}</span>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout style=" opacity:0.8;">
          <v-flex md4>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <h4>Tên phòng</h4>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md8>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <span>{{phong.tenPhong}}</span>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout style=" opacity:0.8;">
          <v-flex md4>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <h4>Sức chứa</h4>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md8>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <span>{{phong.sucChua}}</span>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout style=" opacity:0.8;">
          <v-flex md4>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <h4>Tình trạng</h4>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md8>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <v-chip style="margin-top:-7px;"  :color="phong.tinhTrang === 'tot'?'green':'blue'" text-color="white" >
                {{ phong.tinhTrang | getTinhTrang}}
              </v-chip>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm6 md4 class="mt-2 mx-2">
        <v-toolbar color="#75b5d2" height="40px" style="width:349px;">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title style="margin-left: 70px;">Hình Ảnh</v-toolbar-title>
          <!-- <v-spacer></v-spacer> -->
        </v-toolbar>
        <template v-if="phong && phong.hinhAnhs">
          <img
            width="349px;"
            height="180px;"
            :src="`//localhost:9002/api/v1/image/`+  phong.hinhAnhs"
            alt
          >
        </template>
      </v-flex>
      <v-flex>
        <v-btn
          color="#BFBFBF"
          bottom
          right
          fab
          class="mb-2"
          slot="activator"
          style="margin-left:60px;
          height: 80px;
          width: 80px;
          "
           @click="goNhatKy()"
        >
          <h4 style="white-space: normal;">Nhật ký phản hồi</h4>
        </v-btn>
        
      </v-flex>
    </v-layout>
    <nhatkyphanhoi :idPhong="this.$route.params.id" v-model="showPopupNhatKy"></nhatkyphanhoi>
    <listPhongThietBi :phong="phong"></listPhongThietBi>
  </div>
</template>
<script src = "./detail-phong-thietbi.js"></script>
<style scoped>
#detailPhongThietBi {
  background: white;
}
</style>