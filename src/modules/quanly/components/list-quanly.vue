<template >
  <div id="quanly">
    <v-layout app row wrap>
      <v-flex>
        <v-container>
          <v-toolbar flat color="white">
            <v-toolbar-title>Danh Mục Quản Lý Giảng Đường</v-toolbar-title>
            <v-divider class="mx-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="#BDBDBD"  class="mb-2" v-on="on">New Quản Lý</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm6 md4>
                        <!-- v-model="tenNguoiQL": truyen xuong model -->
                        <v-text-field v-model="editedItem.tenNguoiQL" label="Tên"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.ngaySinh"  label="Ngày sinh"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.gioiTinh"  label="Giới tính"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.SDT"  label="Số điện thoại"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.diaChi"  label="Địa chỉ"></v-text-field>
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
          </v-toolbar>
          <v-data-table :headers="headers" :items="quanlys" class="elevation-1">
            <template v-slot:items="props">
              <td class="text-xs-center">{{ props.item.tenNguoiQL }}</td>
              <td class="text-xs-center">{{ props.item.ngaySinh }}</td>
              <td class="text-xs-center">{{ props.item.gioiTinh }}</td>
              <td class="text-xs-center">{{ props.item.SDT }}</td>
              <td class="text-xs-center">{{ props.item.diaChi }}</td>
              <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                <v-icon small @click="deleteItem(props.item._id)">delete</v-icon>
              </td>
            </template>
          </v-data-table>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src = "./list-quanly.js">
</script>
<style scoped>
#quanly
{
  background: #fff;
}
</style>