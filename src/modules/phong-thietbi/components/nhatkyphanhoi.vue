<template>
  <div>
    <v-layout>
      <v-flex>
        <v-dialog :value="value" @input="hide" max-width="1200px">
          <v-card color="grey lighten-4" flat tile>
            <v-toolbar dense color="#75b5d2">
              <v-toolbar-side-icon></v-toolbar-side-icon>
              <v-toolbar-title>Nhật ký phản hồi</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
          </v-card>

          <v-dialog v-model="dialog" max-width="1000px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4 v-if="editedItem.thietBiInfo">
                      <v-text-field
                        v-model="editedItem.thietBiInfo.tenThietBi"
                        disabled
                        label="Tên thiết bị"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-autocomplete
                        :items="options.tinhTrangs"
                        item-text="label"
                        item-value="label"
                        label="Tình trạng"
                        v-model="editedItem.tinhTrang"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.soLuong" label="Số lượng"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4 v-if="editedItem.nguoiYeuCauID">
                      <v-text-field
                        v-model="editedItem.nguoiYeuCauID.tenNguoiDung"
                        disabled
                        label="Người gửi yêu cầu"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4 v-if="editedItem.nguoiPheDuyetId">
                      <v-text-field
                        v-model="editedItem.nguoiPheDuyetId.tenNguoiDung"
                        disabled
                        label="Người phê duyệt"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.ngayPhanHoi" disabled label="Thời gian gửi"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="editedItem.thoiGianDuyet"
                        disabled
                        label="Thời gian duyệt"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-autocomplete
                        :items="optionsTrangThai.trangThais"
                        item-text="label"
                        item-value="label"
                        label="Trạng thái"
                        v-model="editedItem.trangThai"
                      ></v-autocomplete>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-data-table :headers="headers" :items="dsNhatKyPhanHoiComputed" class="elevation-1">
            <template v-slot:items="props">
              <td
                class="text-xs-center"
              >{{ props.item.thietBiInfo && props.item.thietBiInfo.tenThietBi }}</td>
              <td class="text-xs-center">{{ props.item.tinhTrang }}</td>
              <td class="text-xs-center">{{ props.item.soLuong }}</td>
              <td
                class="text-xs-center"
              >{{ props.item.nguoiYeuCauID && props.item.nguoiYeuCauID.tenNguoiDung }}</td>
              <td
                class="text-xs-center"
              >{{ props.item.nguoiPheDuyetId && props.item.nguoiPheDuyetId.tenNguoiDung }}</td>

              <td
                class="text-xs-center"
              >{{ props.item.ngayPhanHoi | formatDate('DD/MM/YYYY - HH:mm') }}</td>
              <td
                class="text-xs-center"
              >{{ props.item.thoiGianDuyet | formatDate('DD/MM/YYYY - HH:mm') }}</td>
              <td class="text-xs-center">{{ props.item.trangThai }}</td>
              <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                <v-icon small @click="deleteItem(props.item._id)">delete</v-icon>
              </td>
            </template>
          </v-data-table>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src="./nhatkyphanhoi.js"></script>