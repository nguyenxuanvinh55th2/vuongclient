<template>
  <div id="baohongnhanh">
    <v-layout app row wrap>
      <v-flex xs12 sm6 md4 mt-3>
        <v-card>
          <v-toolbar color="#75b5d2" height="40px">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Chọn phòng</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form ref="form">
            <v-layout ml-3>
              <h4 style="margin-top:30px;">Giảng đường:</h4>
              <v-flex xs12 xs8 md7>
                <v-select
                  v-model="filterGiangDuong"
                  style="margin-left:10px;"
                  :items="giangduongs"
                  item-text="ten"
                  item-value="_id"
                ></v-select>
              </v-flex>
            </v-layout>
            <v-layout ml-3>
              <h4 style="margin-top:30px;">Tên phòng:</h4>
              <v-flex xs12 xs8 md7>
                <v-select
                  v-model="filterPhong"
                  style="margin-left:25px;"
                  :items="dsPhongFiltered"
                  item-text="tenPhong"
                  item-value="_id"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md8 mt-3 ml-2 style="margin-right:-10px; padding-right:8px;">
        <v-toolbar color="#75b5d2" height="40px">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Danh sách thiết bị</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-data-table
          :headers="headers"
          :items="dsThietBi || []"
          :search="search"
          hide-actions
          :pagination.sync="pagination"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{props.item.item && props.item.item.tenThietBi }}</td>
            <td class="text-xs-center">{{convertDsTinhTrangToString(props.item.tinhTrangSoLuong) }}</td>
            <td class="text-xs-center">{{ props.item.ghiChu }}</td>
            <td class="justify-center" style="width:20%;">
              <v-btn flat small color="blue">
                <span
                  style="text-transform: initial;"
                  @click="goBaoHong(props.item)"
                >Báo hỏng thiết bị này</span>
              </v-btn>
            </td>
          </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
      </v-flex>
    </v-layout>
    <baohong v-model="showPopupBaoHong" :thietbi="thietbiSelect || {}"></baohong>
  </div>
</template>
<script src="./bao-hong-nhanh.js"></script>
<style scoped>
#baohongnhanh {
  background: #fff;
}
</style>