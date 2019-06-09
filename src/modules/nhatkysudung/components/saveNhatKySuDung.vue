<template>
  <div id="saveGiangDuong">
    <v-layout>
      <v-flex>
        <v-dialog v-model="dialog" max-width="600px">
          <v-btn color="#BFBFBF" small absolute bottom right fab class="mb-2" slot="activator">
            <v-icon>add</v-icon>
          </v-btn>
          <v-card>
            <v-card-title>
              <v-icon>add</v-icon>
              <h2>Thêm nhật ký sử dụng</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-layout row>
                  <v-flex >
                    <v-select
                    v-model="thietbiID"
                    :items="dsThietBiFiltered"
                      prepend-icon="accessibility"
                      item-text="tenThietBi"
                      item-value="_id"
                      label="Tên thiết bị"
                    ></v-select>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-select
                    v-model="phongid"
                      prepend-icon="accessibility"
                      :items="phongs"
                      item-text="tenPhong"
                      item-value="_id"
                      label="Tên phòng"
                    ></v-select>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field label="Ngày nhập" v-model="ngayNhap" prepend-icon="vertical_split"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field label="Mô tả" v-model="moTa" prepend-icon="vertical_split"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-spacer></v-spacer>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" :loading="isloading" @click="save" flat>Save</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <!-- <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src = "./saveNhatKySuDung.js"></script>
