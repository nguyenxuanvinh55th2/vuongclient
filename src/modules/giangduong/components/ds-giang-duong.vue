 <!--template>
  < <div class="giangduong"> 
    <h1 class="subheading grey--text mt-3">GIẢNG ĐƯỜNG</h1>
    <template>
        <saveGiangDuong/>
      </template>
    <v-container>
      <v-layout app row wrap>
        <v-flex xs12 sm6 md3 v-for="gd in giangduongs" :key="gd.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive>
              <v-avatar size="50" class="grey lighten-2">
                <img :src="`//localhost:9002/api/v1/image/`+ gd.image"
                >
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">Giảng đường: {{gd.name}}</div>
              <div class="grey-text">Bao gồm: {{gd.floor}} tầng</div>
            </v-card-text>
            <v-card-actions>
              <v-btn small flat color="grey" @click="viewPhong">
                <v-icon small left>view_comfy</v-icon>
                <span>View</span>
              </v-btn>
              <v-btn small flat color="grey">
                <v-icon small left>edit</v-icon>
                <span>Edit</span>
              </v-btn>
              <v-btn small flat color="grey">
                <v-icon small left>delete</v-icon>
                <span>Delete</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script src="./ds-giang-duong.js"></script--!>