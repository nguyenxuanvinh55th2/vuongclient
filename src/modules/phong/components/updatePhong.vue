<template>
  <div id="updatePhong">
    <v-layout>
      <v-flex>
        <v-dialog :value="value" max-width="600px">
          <v-card>
            <v-card-title>
              <v-icon>edit</v-icon>
              <h2>Update phòng</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Tên phòng"
                      v-model="formData.tenPhong"
                      prepend-icon="vertical_split"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Sức chứa"
                      v-model="formData.sucChua"
                      prepend-icon="vertical_split"
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
                      v-model="formData.tinhTrang"
                      prepend-icon="vertical_split"
                      
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
                      v-model="formData.giangDuongID"
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
                  </v-flex>
                  <v-flex v-if="imageSrc" xs12 sm6 md10>
                    <img :src="imageSrc" height="150px">
                  </v-flex>
                </v-layout>
                <v-spacer></v-spacer>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" :loading="isloading" flat @click="save">Save</v-btn>
              <v-btn color="blue darken-1" flat @click="close">Close</v-btn>
              <!-- <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src = "./updatePhong.js"></script>