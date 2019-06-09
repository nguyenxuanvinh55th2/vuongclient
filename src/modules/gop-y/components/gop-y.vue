<template>
  <div id="gopy">
    <v-layout class="formgopy" app row wrap>
      <v-flex class="mt-5">
        <h2 style="text-align: center;">Thông tin góp ý</h2>
        <div style="margin-left: 200px;">
          <v-flex xs12 sm6 md10 mt-3>
            <v-text-field v-model="formData.hoTen" name="hovaten" label="Họ và tên" solo box></v-text-field>
            <v-text-field v-model="formData.email" name="email" label="Nhập vào email" solo box></v-text-field>
            <v-text-field v-model="formData.soDienThoai" name="sodienthoai" label="Nhập số điện thoại" solo box></v-text-field>
            <v-text-field v-model="formData.title" name="tieude" label="Nhập tiêu đề" solo box></v-text-field>
            <v-textarea v-model="formData.message" solo box name="noidung" label="Nội dung"></v-textarea>
          </v-flex>
        </div>
      </v-flex>
    </v-layout>
    <v-layout class="justify-center mb-2">
      <v-btn class="success" @click="sendEmail">Góp ý</v-btn>
    </v-layout>
  </div>
</template>
<script src='./gop-y.js'></script>
<style>
#gopy {
  background: #fff;
}
</style>
