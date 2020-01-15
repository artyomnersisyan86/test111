<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-content>
      <router-view></router-view>
      
    </v-content>
    
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
<style>
/* #app{
font-size: 12px
}
 */
*{
  font-size: 13px !important;
 
}

</style>

