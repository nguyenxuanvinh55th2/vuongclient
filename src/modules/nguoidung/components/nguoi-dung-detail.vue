<template>
  <div id="thietBiDetail">
    <v-layout>
      <v-flex style="margin-bottom: 30px;">
        <v-dialog :value="value" @input="hide" max-width="800px" content-class="dia">
          <!-- <v-btn flat  small absolute color="blue" slot="activator" >
            <span style="text-transform: initial;">Xem chi tiết</span>
          </v-btn>-->
          <v-card color="grey lighten-4" flat tile>
            <v-toolbar dense color="#75b5d2">
              <v-toolbar-side-icon></v-toolbar-side-icon>

              <v-toolbar-title>Chi tiết người dùng </v-toolbar-title>
              <v-spacer></v-spacer>
              <h3>bac</h3>
            </v-toolbar>
          </v-card>
          <v-data-table
            :headers="headers"
            :items="nguoidung || {}"
            :loading="true"
            class="elevation-1 mx-2"
          >
            <v-progress-linear v-slot:progress color="blue"></v-progress-linear>
            <template v-slot:items="props">
              
              <td class="text-xs-center"></td>
             
              <td class="text-xs-center"></td>
              <td class="text-xs-center"></td>
            </template>
          </v-data-table>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src = "./nguoi-dung-detail.js"></script>

<style>
.dia {
  background: #fff;
}
</style>
