<template>
  <div id="saveNguoiDung">
    <v-layout>
      <v-flex>
        <v-dialog v-model="dialog" max-width="900px">
          <v-btn color="#BFBFBF" small absolute bottom right fab class="mb-2" slot="activator">
            <v-icon>add</v-icon>
          </v-btn>
          <v-card>
            <v-card-title>
              <v-icon>add</v-icon>
              <h2>Thêm người dùng</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Tên người dùng"
                      v-model="tenNguoiDung"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Ngày sinh"
                      v-model="ngaySinh"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Giới tính"
                      v-model="gioiTinh"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Số điện thoại"
                      v-model="soDT"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Email"
                      v-model="email"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Username"
                      v-model="userName"
                      prepend-icon="vertical_split"
                      
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Password"
                      v-model="password"
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
<script src = "./save-nguoi-dung.js">
// import format from "date-fns/format";
</script>