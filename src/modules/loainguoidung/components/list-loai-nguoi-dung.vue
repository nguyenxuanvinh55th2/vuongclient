<template>
  <div id="loainguoidung">
    <v-layout app row wrap>
      <v-flex xs12 sm6 md3 mt-2>
        <v-card>
          <v-toolbar color="#75b5d2" height="40px">
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title>Loại người dùng</v-toolbar-title>

            <v-spacer></v-spacer>
            <div>
              <!-- <saveLoaiThietBi></saveLoaiThietBi> -->
            </div>
          </v-toolbar>

          <v-list two-line subheader>
            <v-list-tile v-for="lnd in loainguoidungs" :key="lnd.tenLoaiNguoiDung" avatar @click="goDetail(lnd)">
              <v-list-tile-content>
                <v-list-tile-title>
                  <v-icon left>apps</v-icon>
                  <span>{{ lnd.tenLoaiNguoiDung }}</span>
                </v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
            
                <!-- <loaiThietBiDetail></loaiThietBiDetail> -->
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md9>
        <listNguoiDung :dsnguoidung="dsnguoidung || {}"></listNguoiDung>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src = './list-loai-nguoi-dung.js' ></script>
<style >
  #loainguoidung{
    background: #fff;
  }
</style>