<template>
  <div id="phong">
    <v-layout class="mt-1 mx-2">
      <v-flex>
        <v-toolbar color="#75b5d2" height="40px">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title style="margin-left:245px;">Danh mục phòng học</v-toolbar-title>
          <v-spacer></v-spacer>
          <div>
            <!-- <v-btn icon ripple color="#BFBFBF">
              <v-icon>add</v-icon>
            </v-btn>-->
            <savePhong v-if="!laGiangVien"></savePhong>
          </div>
        </v-toolbar>
        <v-card-title>
          Tìm phòng
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="search" label="Search" single-line></v-text-field>
        </v-card-title>
        <div>
          <v-data-table
            :headers="headers"
            :items="dsphong"
            :search="search"
            hide-actions
            :pagination.sync="pagination"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td class="text-xs-center">{{ props.item.tenPhong }}</td>
              <td class="text-xs-center">{{ props.item.sucChua }}</td>
              <td class="text-xs-center" style="width:120px;">
                <v-chip
                  :color="props.item.tinhTrang === 'tot'?'green':'blue'"
                  text-color="white"
                >{{ props.item.tinhTrang | getTinhTrang}}</v-chip>
              </td>
              <td class="justify-center">
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
                <!-- {{ props.item.thietBis }} -->
                <v-btn flat small color="blue">
                  <span
                    style="text-transform: initial;"
                    @click="$router.push({name: 'phongThietBi', params:{id: props.item._id}  })"
                  >Xem thiết bị</span>
                </v-btn>
              </td>

              <!-- button goi popup -->

              <td class="justify-center layout" style="margin-top:15px;">
                <!-- @click edit(truyen props.item) -->

                <v-btn
                  v-if="!laGiangVien"
                  style="margin-bottom:35px;"
                  small
                  icon
                  ripple
                  color="#BFBFBF"
                >
                  <v-icon small @click="edit(props.item)">edit</v-icon>
                </v-btn>
                <v-btn
                  v-if="!laGiangVien"
                  small
                  icon
                  ripple
                  color="#BFBFBF"
                  @click="deletePhong(props.item._id)"
                >
                  <v-icon small>delete</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
          </div>
        </div>
      </v-flex>
    </v-layout>

    <!-- popup -->
    <updatePhong v-model="dialog" :phong="phongSelect || {}"></updatePhong>
  </div>
</template>
<script src = "./list-phong.js"/>
