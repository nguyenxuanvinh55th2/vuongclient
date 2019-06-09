<template>
  <v-app>
    <div class="wrap-app" >
      <v-container background-color="primary">
        <router-view>
          <contents/>
        </router-view>
        <footers/>
      </v-container>
    </div>
  </v-app>
</template>
<style>
.wrap-app {
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxu9XuZp2zq6zNWk5WhPBbXY4bhfm0gWuioTBXIOW9wZ8h5cr');
  background-size: 100% 100%;
}
</style>

<script>

import contents from "./modules/navigation/content.vue"
import footers from "./modules/navigation/footer.vue"
export default {
  components: { contents, footers},
  name: "App",
  data() {
    return {
    };
  }
};
</script>
