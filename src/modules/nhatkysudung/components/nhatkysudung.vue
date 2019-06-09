<template>
  <div id="nhatkysudung">
    <v-layout row wrap  mx-2>
      <v-flex xs12 sm6 md4 mt-3>
        <v-card>
          <v-toolbar color="#75b5d2" height="40px">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Chọn phòng</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form ref="form">
            <v-layout ml-3>
              <h4 style="margin-top:30px;">Loại thiết bị:</h4>
              <v-flex xs12 xs8 md7>
                <v-select
                  v-model="filterLoaiThietBi"
                  style="margin-left:10px;"
                  :items="loaithietbis"
                  item-text="tenLoaiThietBi"
                  item-value="_id"
                ></v-select>
              </v-flex>
            </v-layout>
            <v-layout ml-3>
              <h4 style="margin-top:30px;">Tên thiết bị:</h4>
              <v-flex xs12 xs8 md7>
                <v-select
                  v-model="filterThietBi"
                  style="margin-left:15px;"
                  :items="dsThietBiFiltered"
                  item-text="tenThietBi"
                  item-value="_id"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md8 mt-3 ml-2 style="margin-right:-10px; padding-right:8px;">
        <v-toolbar color="#75b5d2" height="40px" >
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title style="margin-left:200px;">Nhật ký sử dụng thiết bị</v-toolbar-title>
          <v-spacer></v-spacer>
          <saveNhatKySuDung :dsThietBiFiltered="dsThietBiFiltered"></saveNhatKySuDung>
        </v-toolbar>
        <v-data-table
      :headers="headers"
      :items="dsNhatKySuDung || []"
      :search="search"
      hide-actions
      :pagination.sync="pagination"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.phongInfo.tenPhong }}</td>
        <td class="text-xs-center">{{ props.item.ngayNhap | formatDate('DD/MM/YYYY') }}</td>
        <td class="text-xs-center">{{ props.item.tinhTrangSoLuongTB }}</td>
        <td class="text-xs-center">{{ props.item.moTa }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
      </v-flex>
    </v-layout>
    
  </div>
</template>
<script src="./nhatkysudung.js"></script>
<style scoped>
  #nhatkysudung {
    background: #fff;
  }
</style>