<template>
  <div class="listNguoiDung">
    <v-layout row wrap class="mt-2 mx-2">
      <v-flex>
        <v-toolbar color="#75b5d2" height="40px">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title style="margin-left:275px;">Danh mục người dùng</v-toolbar-title>
          <v-spacer></v-spacer>
          <template>
            <saveNguoiDung :dsnguoidung="dsnguoidung"></saveNguoiDung>
          </template>
          <div></div>
        </v-toolbar>
        <v-data-table :headers="headers" :items="dsnguoidung" class="elevation-1">
          <template v-slot:items="props">
            <td class="text-xs-left">
              <img
                style="border-radius:50%;  height: 100px; text-align: center; width: 100px;"
                aspect-ratio
                class="mt-2"
                :src="`//localhost:9002/api/v1/image/`+  props.item.hinhAnhs"
                alt
              >
            </td>
            <td class="text-xs-left">{{ props.item.tenNguoiDung }}</td>
            <td class="text-xs-left">{{ props.item.ngaySinh | formatDate('DD/MM/YYYY') }}</td>
            <!-- <td class="text-xs-left">{{ props.item.chucVu }}</td> -->
            <td class="text-xs-left">{{ props.item.gioiTinh }}</td>
            <td class="text-xs-left">{{ props.item.soDT }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">{{ props.item.userName }}</td>
            <td class="text-xs-left">{{ props.item.password }}</td>
            <td class="justify-left ">
              <!-- @click edit(truyen props.item) -->

              <v-btn small icon ripple color="#BFBFBF" @click="editItem(props.item)">
                <v-icon small>edit</v-icon>
              </v-btn>
              <v-btn small icon ripple color="#BFBFBF" @click="deleteItem(props.item._id)">
                <v-icon small>delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <updateNguoiDung v-model="dialog" :nguoidung="nguoiDungSelect || {}" ></updateNguoiDung>
    <!-- <chiTietNguoiDung v-model="showPopupDetail" :nguoidung="selectDetail || {}"></chiTietNguoiDung> -->
  </div>
</template>
<script src = './list-nguoi-dung.js'></script>