<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md8 class="mt-3 mx-2">
      <v-toolbar color="#75b5d2" height="40px">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title>Thông tin giảng đường</v-toolbar-title>

        <v-spacer></v-spacer>

        <updateGiangDuong v-if="!laGiangVien" :giangduong="giangduong" @save="fetchData()"></updateGiangDuong>
        <v-btn v-if="!laGiangVien" color="#BFBFBF" icon @click="deleteGd(giangduong._id)">
          <v-icon>delete</v-icon>
        </v-btn>
      </v-toolbar>

      <div>
        <v-layout flat row wrap style="opacity:0.8">
          <v-flex xs12 sm4 md3>
            <v-card flat class="text-xs-center">
              <v-card-text>
                <p>Tên giảng đường</p>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <span>{{formData.ten}}</span>
              </v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md3 lg-3>
            <v-card flat class="text-xs-center">
              <v-card-text>
                <p>Quản lý</p>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <span>{{formData.quanLyID && formData.quanLyID.tenNguoiQL}}</span>
              </v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md3 lg-3>
            <v-card flat class="text-xs-center">
              <v-card-text>
                <p>Số tầng</p>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <span>{{formData.soTang}}</span>
              </v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md3 lg-3>
            <v-card flat class="text-xs-center">
              <v-card-text>
                <p>Số phòng</p>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <span>{{formData.dsphongs && formData.dsphongs.length}}</span>
              </v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-flex>
    <template v-if="formData && formData.hinhAnhs">
      <v-flex class="mt-3 mr-2">
        <v-toolbar class="text-xs-center" color="#75b5d2" height="40px">
          <v-toolbar-title style="margin-left: 70px;">Hình Ảnh</v-toolbar-title>
        </v-toolbar>
        <img
          width="260px;"
          height="150px;"
          :src="`//localhost:9002/api/v1/image/`+  formData.hinhAnhs"
          alt
        >
      </v-flex>
    </template>
  </v-layout>
</template>
<script src="./giang-duong-detail.js"></script>
