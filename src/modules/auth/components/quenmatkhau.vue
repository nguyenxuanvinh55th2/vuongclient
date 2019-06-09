<template>
  <div id="saveGiangDuong">
    <v-layout>
      <v-flex>
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn flat small color="blue" slot="activator">
            <span style="text-transform: initial;">Quên mật khẩu?</span>
          </v-btn>
          <v-card>
            <v-card-title>
              <v-icon>edit</v-icon>
              <h2>Quên mật khẩu</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-layout row>
                  <v-flex>
                    <v-text-field label="Username" prepend-icon="vertical_split"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field label="Mật khẩu mới" prepend-icon="vertical_split"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field label="Nhập lại mật khẩu" prepend-icon="vertical_split"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-spacer></v-spacer>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1"  flat >Save</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false" >Close</v-btn>
              <!-- <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src='./quenmatkhau.js'></script>