<template>
  

<v-container fluid pa-0 pt-2>
<v-row no-gutters >
<v-col cols="12" md="12" sm="6" xs="3">

  <v-select
 
 color="deep-purple lighten-2"

          :items="registration"
          label="Հաշվառման հասցե տիպ"
          placeholder="Հաշվառման հասցե տիպ"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>


</v-col>
</v-row>
<v-row no-gutters >
<v-col cols="6" md="12" sm="6" xs="3">
<v-form>
    <v-text-field
    class="caption"
   color="deep-purple"
   label="Փոստային հասցե"
            placeholder="Փոստային հասցե"
            outlined
     ></v-text-field>
      </v-form>

</v-col>




   <v-col cols="6" md="8" sm="6" xs="3">

<v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
   
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
         class="caption"
   color="deep-purple"
        label="Գրանցման ամսաթիվ"
        prepend-icon="event"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
    header-color="deep-purple"

      ref="picker"
      v-model="date"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="save"


    ></v-date-picker>
  </v-menu>

    </v-col>
</v-row>

</v-container>

</template>

<script>
export default {
name:'registrationTypeLeftAdresses',
data() {
    return {
        registration:[],
         date: null,
           menu: false, 
    }
    
},
watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
},
 methods: {
      save (date) {
        this.$refs.menu.save(date)
      }
 }

}
</script>

<style>

</style>