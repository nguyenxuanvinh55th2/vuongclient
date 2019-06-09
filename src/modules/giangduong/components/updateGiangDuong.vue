<template>
  <div id="updateGiangDuong">
    <v-layout>
      <v-flex>
        <v-dialog v-model="dialog" max-width="600px">
           <v-btn  slot="activator"  color="#BFBFBF"  icon>
          <v-icon >edit</v-icon>
        </v-btn>
          <v-card>
            <v-card-title>
              <v-icon>edit</v-icon>
              <h2>Edit giảng đường</h2>
            </v-card-title>
            <!-- <div v-if="giangduong && giangduong.length > 0 && giangduong[0].quanLyID" > -->
              <v-card-text>
                <v-form class="px-3" ref="form">
                  <v-layout row>
                    <v-flex>
                      <v-text-field
                        label="Tên giảng đường"
                        v-model="giangduong.ten"
                        prepend-icon="vertical_split"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row v-if="giangduong.quanLyID ">
                    <v-flex>
                      <!-- item-text lay ra ten va item-value chon gia tri _id -->
                      <!-- v-select -->
                      <!-- v-model: de lay ra id -->
                      <!-- i-tems: de lay ra array quan ly -->
                      <v-select
                        v-model="giangduong.quanLyID._id"
                        prepend-icon="accessibility"
                        :items="quanlys"
                        item-text="tenNguoiQL"
                        item-value="_id"
                        label="Nhân viên quản lý"
                      ></v-select>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex>
                      <v-combobox
                        v-model="giangduong.soTang"
                        prepend-icon="reorder"
                        :items="items"
                        label="Số tầng"
                      ></v-combobox>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex>
                      <v-btn raised @click="onPickFile" class="success">Upload image</v-btn>
                      <input
                        type="file"
                        style="display:none"
                        ref="fileInput"
                        accept="image/*"
                        @change="onFilePicked"
                      >
                    </v-flex>
                    <v-flex v-if="imageSrc" xs12 sm6 md10>
                      <img :src="imageSrc" height="150px">
                    </v-flex>
                  </v-layout>

                  <v-spacer></v-spacer>
                </v-form>
              </v-card-text>
            <!-- </div> -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" :loading="isloading" flat @click="save">Save</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <!-- <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src = "./updateGiangDuong.js">
// import format from "date-fns/format";
</script>