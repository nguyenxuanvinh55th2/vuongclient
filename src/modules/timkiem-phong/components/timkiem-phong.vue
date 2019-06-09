<template>
  <div id="timkiem">
    <v-layout app row wrap>
      <v-flex xs12 sm10 md9 class="mt-2" style="margin-left: 150px; margin-bottom:10px;">
        <v-card>
          <v-toolbar color="#75b5d2" height="40px">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title style="margin-left:280px;">Thông tin tìm kiếm</v-toolbar-title>
            <v-spacer></v-spacer>
           <v-layout>
              <v-flex xs12 sm6 md3>
                  <v-btn color="#FAFAFA" @click="onPickFile" raised small style="margin-left: 200px;" >Upload file</v-btn>
                    <input
                      type="file"
                      style="display:none"
                      ref="fileInput"
                      @change="onFilePicked"
                    >
                </v-flex>
           </v-layout>
          </v-toolbar>
          <v-form ref="form">
            <v-layout class="justify-center mt-2">
              <v-layout ml-2>
                <h4 style="margin-top:30px;">Giảng đường:</h4>
                <v-flex xs12 sm6 md6>
                  <v-select
                    class="justify-center"
                    v-model="filterGiangDuong"
                    :items="giangduongs"
                    item-text="ten"
                    item-value="_id"
                    style="margin-left:10px;"
                  ></v-select>
                </v-flex>
              </v-layout>
              <v-layout>
                <h4 style="margin-top:30px;">Tên phòng:</h4>
                <v-flex xs12 sm6 md6>
                  <v-text-field v-model="search" style="margin-left:10px;"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <h4 style="margin-top:30px;">Sức chứa:</h4>
                <v-flex xs12 sm6 md6>
                  <v-text-field v-model="search" style="margin-left:10px;"></v-text-field>
                </v-flex>
              </v-layout>
            </v-layout>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout app row wrap>
      <v-flex xs12 sm10 md9 style="margin-left: 150px; margin-bottom:10px;">
        <v-card>
          <v-toolbar class="mt-1" color="#75b5d2" height="40px">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title style="margin-left:280px;">Kết quả tìm kiếm</v-toolbar-title>
          </v-toolbar>

          <v-data-table
            :headers="headers"
            :items="dsPhongFiltered"
            :search="search"
            hide-actions
            :pagination.sync="pagination"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td class="text-xs-center">{{ props.item.tenPhong }}</td>
              <td class="text-xs-center">{{ props.item.sucChua }}</td>
              <td class="text-xs-center">
                <v-chip
                  :color="props.item.tinhTrang === 'tot'?'green':'blue'"
                  text-color="white"
                >{{ props.item.tinhTrang | getTinhTrang}}</v-chip>
              </td>
              <td class="text-xs-center">
                <img
                  class="mt-3"
                  style="margin-left: 25px;"
                  width="100px;"
                  height="50px;"
                  :src="`//localhost:9002/api/v1/image/`+  props.item.hinhAnhs"
                  alt
                >
              </td>
              <td class="text-xs-center">
                <v-btn flat small color="blue">
                  <span
                    style="text-transform: initial;"
                    @click="$router.push({name: 'phongThietBi', params:{id: props.item._id}  })"
                  >Xem thiết bị</span>
                </v-btn>
              </td>
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
<script src="./timkiem-phong.js"></script>
<style scoped>
#timkiem {
  background: #fff;
}
</style>