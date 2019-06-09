<template>
  <div class="listThietBi">
    <v-layout row wrap class="mt-2 mx-2">
      <v-flex>
        <v-toolbar color="#75b5d2" height="40px">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title style="margin-left:275px;">Danh mục thiết bị</v-toolbar-title>

          <v-spacer></v-spacer>
          <div>
            <saveThietBi :dsthietbi="dsthietbi"></saveThietBi>
          </div>
        </v-toolbar>
        <v-data-table :headers="headers" :items="dsthietbi" class="elevation-1">
          <template v-slot:items="props">
            <td class="text-xs-center">{{ props.item.tenThietBi }}</td>

            <td class="text-xs-center">
              <img
                class="mt-2"
                width="100px;"
                height="50px;"
                :src="`//localhost:9002/api/v1/image/`+  props.item.hinhAnhs"
                alt
              >
            </td>

            <td class="text-xs-center">{{ props.item.moTa }}</td>
            <td class="justify-center ">
             <v-btn flat  small absolute color="blue" style="margin-top: -10px;">
            <span style="text-transform: initial;" @click="goDetail(props.item)">Xem chi tiết</span>
          </v-btn>
            </td>
            <td class="justify-center layout px-0">
              <v-icon
                small
                class="mr-2"
                style="margin-top: 15px;"
                @click="editItem(props.item)"
              >edit</v-icon>
              <v-icon small style="margin-top: 15px;" @click="deleteItem(props.item._id)">delete</v-icon>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <!-- popup update thiet bi -->
     <thietbiDetail v-model="showPopupDetail" :thietbi="selectDetail || {}"  ></thietbiDetail>
    <updateThietBi v-model="dialog" :thietbi="thietbiSelect || {}"></updateThietBi>
    
  </div>
</template>
<script src = './list-thiet-bi.js'></script>