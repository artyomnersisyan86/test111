<template>
  <v-container fluid pa-0>
     
<v-row no-gutters>



        <v-col cols="6" md="6" sm="3" xs="3">

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
        label="Ծննդյան ամսաթիվ"
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
  

            <v-col cols="6" md="6" sm="3" xs="3">


<v-menu
    ref="menu1"
    v-model="menu1"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
   
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date1"
        class="caption"
        label="Մահվան ամսաթիվ"
        prepend-icon="event"
        readonly
        v-on="on"
        
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
   color="deep-purple"

      v-model="date1"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="saveDeath"
    ></v-date-picker>
  </v-menu>

    </v-col> 
  


</v-row>


  </v-container>


</template>

<script>
export default {

name:'AddBirtDeathdayLeftTabs',

    data() {
        return {
           date: null,
           date1:null,
      menu: false, 
      menu1:false,
        }
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
      menu1 (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      saveDeath (date1) {
        this.$refs.menu1.save(date1)
      },
    },

}
</script>

<style>

</style>