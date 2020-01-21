<template>
  <v-dialog v-model="dialog" max-width="1150px" transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-btn color="deep-purple"   dark v-on="on">Ֆիզիկական անձ</v-btn>
    </template>

    <v-card>
      <v-toolbar dark color="deep-purple" height="32px">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="caption">Անձի խմբագրում</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <PopUpMenuTabs />
      <hr class="deep-purple" />
      <PopUpLeftTabs />
    </v-card>
  </v-dialog>
</template> 
<script>
import PopUpMenuTabs from "../DirectoryOfPersons/PopUpMenuTabs";
import PopUpLeftTabs from "../DirectoryOfPersons/../PopUpLeft/PopUpLeftTabs";

export default {
  components: {
    PopUpMenuTabs,
    PopUpLeftTabs
  },

  data() {
    return {
      dialog: false,
      tab: null,
    };
  }
};
</script>

<style>
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>