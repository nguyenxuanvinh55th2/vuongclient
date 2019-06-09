<template>
  <div id="saveThietBi">
    <v-layout>
      <v-flex>
        <v-dialog v-model="dialog" max-width="600px">
          <v-btn color="#BFBFBF" small absolute bottom right fab class="mb-2" slot="activator">
            <v-icon>add</v-icon>
          </v-btn>
          <v-card>
            <v-card-title>
              <v-icon>add</v-icon>
              <h2>Thêm thiết bị</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Tên thiết bị"
                      v-model="tenThietBi"
                      prepend-icon="vertical_split"
                      :rules="inputRules"
                    ></v-text-field>
                  </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                    <v-text-field
                      label="Mô tả"
                      v-model="moTa"
                      prepend-icon="vertical_split"
                      :rules="inputRules"
                    ></v-text-field>
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
<script src = "./saveThietBi.js"></script>