<template>
  <div id="loaithietbi">
    <v-layout app row wrap>
      <v-flex xs12 sm6 md3 mt-2>
        <v-card>
          <v-toolbar color="#75b5d2" height="40px">
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title>Loại thiết bị</v-toolbar-title>

            <v-spacer></v-spacer>
            <div>
              <saveLoaiThietBi v-if="!laGiangVien"></saveLoaiThietBi>
            </div>
          </v-toolbar>

          <v-list two-line subheader>
            <v-list-tile
              v-for="ltb in loaithietbis"
              :key="ltb.tenLoaiThietBi"
              avatar
              @click="goDetail(ltb)"
            >
              <v-list-tile-content>
                <v-list-tile-title>
                  <v-icon left>apps</v-icon>
                  <span>{{ ltb.tenLoaiThietBi }}</span>
                </v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <!-- <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>-->
                <loaiThietBiDetail v-if="!laGiangVien" :loaithietbi="loaithietbi || {}"></loaiThietBiDetail>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md9>
        <listThietBi :dsthietbi="dsthietbi || {}"></listThietBi>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src = './list-loai-thiet-bi.js'></script>
<style scoped>
#loaithietbi {
  background: #fff;
}
</style>