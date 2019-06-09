<template>
  <div id="thongke">
    <v-layout app row wrap>
      <v-flex xs12 sm10 md9 class="mt-2" style="margin-left: 150px; margin-bottom:10px;">
        <v-card>
          <v-toolbar color="#75b5d2" height="40px">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title style="margin-left:280px;">Thông tin thống kê</v-toolbar-title>
          </v-toolbar>
          <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <v-menu v-model="menu1" :close-on-content-click="false" full-width max-width="290">
            <template v-slot:activator="{ on }">
              <!-- :value="computedDateFormattedMomentjs" -->
              <v-text-field v-model="startDate" clearable label="Ngày bắt đầu" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="startDate" @change="menu1 = false"></v-date-picker>
          </v-menu>
        </v-flex>

        <v-flex xs12 lg6>
          <v-menu v-model="menu2" :close-on-content-click="false" full-width max-width="290">
            <template v-slot:activator="{ on }">
              <!-- :value="computedDateFormattedDatefns" -->
              <v-text-field v-model="endDate" clearable label="Ngày kết thúc" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="endDate" @change="menu2 = false"></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-container>
        </v-card>
      </v-flex>
    </v-layout>

     <v-layout app row wrap>
      <v-flex xs12 sm10 md9 style="margin-left: 150px; margin-bottom:10px;">
        <v-card>
          <v-toolbar class="mt-1" color="#75b5d2" height="40px">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title style="margin-left:280px;">Kết quả thống kê</v-toolbar-title>
        </v-toolbar>

        <v-data-table
      :headers="headers"
      :items="dsNhatKyPhanHoiAfterFilter"
      :search="search"
      hide-actions
      :pagination.sync="pagination"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.phongID.tenPhong }}</td>
        <td class="text-xs-center">{{ props.item.thietBiInfo && props.item.thietBiInfo.tenThietBi }}</td>
        <td class="text-xs-center">{{ props.item.tinhTrang }}</td>
        <td class="text-xs-center">{{ props.item.soLuong }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
        </v-card>
      
        </v-flex>
    </v-layout>
  </div>
</template>
<script src='./thongke.js'></script>
<style>
#thongke {
  background: #fff;
}
</style>
