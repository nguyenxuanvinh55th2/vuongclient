<template>
  <div id="giangduong">
    <v-layout app row wrap>
      <v-flex xs12 sm6 md3 mt-3>
        <v-card>
          <v-toolbar color="#75b5d2" height="40px">
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title>Giảng đường</v-toolbar-title>

            <v-spacer></v-spacer>

            <template>
              <saveGiangDuong v-if="!laGiangVien && !laNhanVienSuaChua"   @save="fetchData()"/>
              <!-- <saveGiangDuong v-if="!laQuanTri" @save="fetchData()"/> -->
            </template>
          </v-toolbar>

          <v-list class="list">
            <v-list-tile v-for="gd in giangduongs" :key="gd.ten" avatar @click="goDetail(gd)">
              <v-list-tile-content>
                <v-list-tile-title>
                  <v-icon left>apps</v-icon>
                  <span class="text-xs-center" style="margin-left: 30px;">Giảng đường {{ gd.ten }}</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md9>
        <detailgiangduong  :giangduong="giangduong || {}"></detailgiangduong>
        <listPhong :dsphong="dsphong || {}"/>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src="./list-giang-duong.js"></script>

