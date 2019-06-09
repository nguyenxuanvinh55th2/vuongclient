<template>
  <div id="saveGiangDuong">
    <v-layout>
      <v-flex>
        <v-dialog v-model="dialog" max-width="400px">
          <v-btn icon ripple slot="activator">
            <v-icon color="grey lighten-1">info</v-icon>
          </v-btn>
        <v-toolbar color="#75b5d2" height="40px">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title style="margin-left:70px;">Chi tiết loại thiết bị</v-toolbar-title>
          <!-- <v-spacer></v-spacer> -->
        </v-toolbar>
        <v-layout>
          <v-flex md4>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <h4>Tên loại thiết bị</h4>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md8>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <span>{{formData.tenLoaiThietBi}}</span>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout >
          <v-flex md4>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <h4>Xuất xứ</h4>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md8>
            <v-card class="text-xs-center">
              <v-card-text style="height:45px;">
                <span>{{formData.xuatXu}}</span>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src = "./loai-thiet-bi-detail.js">
// import format from "date-fns/format";
</script>