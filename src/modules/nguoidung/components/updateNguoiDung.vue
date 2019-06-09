<template>
  <div>
    <v-layout>
      <v-flex>
        <v-dialog :value="value" max-width="900px">
          <v-card>
            <v-card-title>
              <v-icon>edit</v-icon>
              <h2>Update người dùng</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3" ref="form">
               <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Tên người dùng"
                      v-model="formData.tenNguoiDung"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Ngày sinh"
                      v-model="formData.ngaySinh"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Giới tính"
                      v-model="formData.gioiTinh"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Số điện thoại"
                      v-model="formData.soDT"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Email"
                      v-model="formData.email"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Username"
                      v-model="formData.userName"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Password"
                      v-model="formData.password"
                      prepend-icon="vertical_split"
                      
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
<script src='./updateNguoiDung.js'></script>