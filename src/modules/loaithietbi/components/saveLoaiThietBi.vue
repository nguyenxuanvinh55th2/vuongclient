<template>
  <div id="saveGiangDuong">
    <v-layout>
      <v-flex>
        <v-dialog v-model="dialog" max-width="400px">
          <v-btn color="#BFBFBF" small absolute bottom right fab slot="activator" style="margin-bottom: 20px;">
            <v-icon>add</v-icon>
          </v-btn>
          <v-card>
            <v-card-title>
              <v-icon>note_add</v-icon>
              <h2>Thêm loại thiết bị</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Tên loại thiết bị"
                      v-model="tenLoaiThietBi"
                      prepend-icon="stars"
                      :rules="inputRules"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      label="Xuất Xứ"
                      v-model="xuatXu"
                      prepend-icon="vertical_split"
                      :rules="inputRules"
                    ></v-text-field>
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
<script src = "./saveLoaiThietBi.js">
// import format from "date-fns/format";
</script>