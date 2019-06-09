<template>
  <div id="baohong">
    <v-layout app row wrap>
      <v-flex xs12 sm6 md4>
        <v-dialog :value="value" @input="hide" max-width="600px" content-class="bao-hong-class">
          <v-toolbar color="#75b5d2" height="40px">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title style="margin-left:170px;">Báo hỏng thiết bị</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form ref="form">
            <v-layout class="justify-center mt-3">
              <h4 style="margin-top:30px;">Tên thiết bị:</h4>
              <v-flex xs12 sm6 md6>
                <v-text-field :value="formData.thietBiText" disabled style="margin-left:10px;" soDo></v-text-field>
              </v-flex>
            </v-layout>
            <!-- <v-layout class="justify-center mt-3 custom">
              <h4 style="margin-top:10px;">Tên thiết bị:</h4>
              <v-flex xs12 sm6 md6>ss
                <v-text-field outline hide-details height class="mx-2"></v-text-field>
              </v-flex>
            </v-layout>-->
            <v-layout class="justify-center mt-1">
              <h4 style="margin-top:30px;">Tình trạng:</h4>
              <v-flex xs12 sm6 md6>
                <v-select
                  v-model="formData.tinhTrang"
                  :items="options.tinhTrangs"
                  item-text="label"
                  item-value="label"
                  style="margin-left:13px;"
                ></v-select>
              </v-flex>
            </v-layout>
            <v-layout class="justify-center mt-1">
              <h4 style="margin-top:30px;">Số lượng:</h4>
              <v-flex xs12 sm6 md6>
                <v-text-field v-model="formData.soLuong" style="margin-left:16px;" soDo></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout class="justify-center mt-1">
              <h4 style="margin-top:30px;">Mô tả:</h4>
              <v-flex xs12 sm6 md6>
                <v-textarea v-model="formData.moTa" style="margin-left:19px;" auto-grow rows="1"></v-textarea>
              </v-flex>
            </v-layout>
            <v-layout class="justify-center mb-3">
              <v-btn color="#75b5d2" @click="baoHong()">Xác nhận báo hỏng</v-btn>
            </v-layout>
          </v-form>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src = "./bao-hong.js"></script>
<style>
.bao-hong-class {
  background: #fff;
}
.bao-hong-class .custom input {
  margin-top: 0px !important;
}
.bao-hong-class .custom .v-text-field--outline .v-input__slot {
  min-height: 0px !important;
}
</style>