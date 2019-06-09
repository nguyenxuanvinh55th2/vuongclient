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
              <h2>Thêm phòng</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Tên phòng"
                      v-model="tenPhong"
                      prepend-icon="vertical_split"
                      :rules="inputRules"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Sức chứa"
                      v-model="sucChua"
                      prepend-icon="vertical_split"
                      :rules="inputRules"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-autocomplete
                      :items="options.tinhTrangs"
                      item-text="label"
                      item-value="value"
                      label="Tình trạng"
                      v-model="tinhTrang"
                      prepend-icon="vertical_split"
                      :rules="inputRules"
                    ></v-autocomplete>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <!-- item-text lay ra ten va item-value chon gia tri _id -->
                    <!-- v-select -->
                    <!-- v-model: de lay ra id -->
                    <!-- i-tems: de lay ra array quan ly -->
                    <v-select
                      v-model="giangduongID"
                      prepend-icon="accessibility"
                      :items="giangduongs"
                      item-text="ten"
                      item-value="_id"
                      label="Giảng đường"
                    ></v-select>
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
                     <!-- <input
                      type="file"
                      style="display:none"
                      ref="fileInput"
                      @change="onFilePicked"
                    > -->
                  </v-flex>
                  <v-flex xs12 sm6 md10>
                    <img :src="imageURL" height="150px">
                  </v-flex>
                </v-layout>
                <v-spacer></v-spacer>
              </v-form>
            </v-card-text>
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
<script src = "./savePhong.js"></script>