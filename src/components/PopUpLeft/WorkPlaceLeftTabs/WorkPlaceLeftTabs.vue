<template>
  <v-container fluid  pa-0>
    <v-row  no-gutters>
<v-col cols="12" >
     
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 deep-purple--text" >Աշխատավայր</v-expansion-panel-header>
        <v-expansion-panel-content  >

<v-container fluid  pa-0>
    
       <v-row  no-gutters class="pt-2" >
      
<!-- քաղաքացիական կացություն civil status -->
      <v-col cols="6" md="6" sm="3" xs="3">
       

<WorkPlaseleftTabsPopUp/>
       
      </v-col>

<!-- Կրթություն Education-->
        <v-col cols="12" md="6" sm="3" xs="3">
        <v-select
 color="deep-purple lighten-2"

          :items="selected"
          label="Ընտրել"
          placeholder="Ընտրել"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>
       </v-row>

<v-row  no-gutters  >

     <v-col cols="6" md="6" sm="3" xs="3" class="pt-3">
     

           <v-form>
    <v-text-field
   color="deep-purple"
      class="caption"
            placeholder="Պայմանագրի համար"
            label="Պայմանագրի համար"
            outlined
     ></v-text-field>
      </v-form>
      </v-col>
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
   placeholder="Պայմանագրի սկիզբ"
        label="Պայմանագրի սկիզբ"
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
<v-row  no-gutters  >

     <v-col cols="12" md="12" sm="6" xs="3">
     

           <v-form>
    <v-text-field
   color="deep-purple"
      class="caption"
            placeholder="Ընտանիքի Ֆինանսական կախյալ անդամների թիվ"
            label="Ընտանիքի Ֆինանսական կախյալ անդամների թիվ"
            outlined
     ></v-text-field>
      </v-form>
      </v-col>
</v-row>
</v-container>

  

         
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  
      </v-col>


    </v-row>
  </v-container>







</template>

<script>
import WorkPlaseleftTabsPopUp from '../WorkPlaceLeftTabs/WorkPlaseleftTabsPopUp'
export default {
    name:'WorkPlaceLeftTabs',
components:{
  WorkPlaseleftTabsPopUp
},
    data() {
        return {
                 selected:[],
date: null,
menu: false, 
        }
    },watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    }

  

   

}
</script>

<style>

</style>