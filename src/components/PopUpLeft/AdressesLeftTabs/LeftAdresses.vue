<template>
  <v-container fluid  pa-0 >
    <v-row  no-gutters>
<v-col cols="12" >
     
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 deep-purple--text" >Գրանցման տվյալներ</v-expansion-panel-header>
        <v-expansion-panel-content  >

<v-container fluid  pa-0>
  
       <v-row  no-gutters class="pt-2" >
      
<!-- State Պետություն -->
      <v-col cols="6" md="6" sm="6" xs="6">
        <v-select
 color="deep-purple lighten-2"

          :items="state"
          label="Պետություն"
          placeholder="Պետություն"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>

<!-- Մարզ Region-->
        <v-col cols="6" md="6" sm="6" xs="6">
        <v-select
 color="deep-purple lighten-2"

          :items="region"
          label="Մարզ"
          placeholder="Մարզ"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>
       </v-row>

<!-- residence  Բնակավայր-->
      <v-row  no-gutters class="pa-0" >
<v-col cols="6" md="6" sm="6" xs="6">
        <v-select
 color="deep-purple lighten-2"

          :items="residence"
          label="Բնակավայր"
          placeholder="Բնակավայր"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>
       
       <!-- Street Փողոց -->
     <v-col cols="6" md="6" sm="6" xs="6">
     

           <v-form>
    <v-text-field
   color="deep-purple"
      class="caption"
            placeholder="Փողոց"
            label="Փողոց"
            outlined
     ></v-text-field>
      </v-form>
      </v-col>
      </v-row>
 
 <v-row  no-gutters class="pa-0" >

     <!-- Տիպ type -->
<v-col cols="6" md="5" sm="6" xs="6">
        <v-select
 color="deep-purple lighten-2"

          :items="type"
          label="Տիպ"
          placeholder="Տիպ"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>
       
       <!-- Street Փողոց -->
     <v-col cols="6" md="3" sm="3" xs="3">
     

           <v-form>
    <v-text-field
   color="deep-purple"
      class="caption"
            placeholder="Շենք"
            label="Շենք"
            outlined
     ></v-text-field>
      </v-form>
      </v-col>
      <v-col cols="6" md="4" sm="3" xs="3">
     

           <v-form>
    <v-text-field
   color="deep-purple"
      class="caption"
            placeholder="Բնակարան"
            label="Բնակարան"
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
export default {
    name:'LeftAdresses',

    data() {
        return {
                 state:[],
                 region:[],
                 residence:[],
                 type:[],

 
        }
    },

     

}
</script>

<style>

</style>