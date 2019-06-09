<template>
  <div id="phongThietbi">
    <v-layout app row wrap>
      <v-flex xs12 sm10 md9 class="mt-2" style="margin-left: 150px; margin-bottom:10px;">
        <v-toolbar color="#75b5d2" height="40px">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title style="margin-left:280px;">Danh sách thiết bị</v-toolbar-title>
          <v-dialog v-model="dialog" max-width="800px" persistent>
            <template>
              <v-btn color="#BFBFBF" small absolute bottom right fab class="mb-2" slot="activator">
                <v-icon>add</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-layout row wrap>
                  <v-flex>
                    <v-select
                      v-model="thietBiId"
                      prepend-icon="accessibility"
                      :items="thietbis"
                      item-text="tenThietBi"
                      item-value="_id"
                      label="Tên thiết bị"
                    ></v-select>
                  </v-flex>
                </v-layout>

                <h3>Tình trạng số lượng</h3>
                <div v-for="(item, index) in tinhTrangSoLuong" :key="`tinhTrangSoLuong-${index}`">
                  <v-layout>
                    <v-flex>
                      <v-text-field v-model="item.soLuong" label="Số lượng"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                       <v-autocomplete
                        :items="options.tinhTrangs"
                        item-text="label"
                        item-value="label"
                        label="Tình trạng"
                        v-model="item.tinhTrang"
                      ></v-autocomplete>
                    </v-flex>
                  </v-layout>
                </div>
                <v-btn @click="addTinhTrangSoLuong">Thêm tình trạng số lượng</v-btn>


                <v-layout>
                  <v-flex>
                    <v-text-field v-model="ghiChu" prepend-icon="accessibility" label="Ghi chú"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
        <v-data-table :headers="headers" :items="dsThietBi" class="elevation-1">
          <template v-slot:items="props">
            <td
              class="text-xs-center"
            >{{ props.item && props.item.item && props.item.item.tenThietBi }}</td>
            <td class="text-xs-center">{{ props.item.soLuong }}</td>
            <td class="text-xs-center">{{ props.item.tinhTrangSoLuongText }}</td>
            <!-- <td class="text-xs-center">{{ props.item.hinhAnh }}</td> -->
            <td class="text-xs-center">{{ props.item.ghiChu }}</td>
            <td class="justify-center" style="width:20%;">
              <v-btn flat small color="blue">
                <span
                  style="text-transform: initial;"
                  @click="goBaoHong(props.item)"
                >Báo hỏng thiết bị này</span>
              </v-btn>
            </td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
              <v-icon small @click="deleteItem(props.item._id)">delete</v-icon>
            </td>
          </template>
          <!-- <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>-->
        </v-data-table>
      </v-flex>
    </v-layout>
    <baohong v-model="showPopupBaoHong" :thietbi="thietbiSelect || {}"></baohong>
  </div>
</template>
<script src = "./list-phong-thietbi.js"></script>
<style scoped>
#phongThietbi {
  background: white;
}
</style>