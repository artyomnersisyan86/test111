<template>

<v-container fluid pt-2 pa-0 ma-0>
    <v-row class="no-gutters">
        <v-col cols="6"  md="6" sm="3" xs="4">
      <v-form>
    <v-text-field
    class="caption"
   color="deep-purple"
   label="Էլ․ փոստ"
            placeholder="Էլ․ փոստ"
            outlined
            height="32"
            
     ></v-text-field>
      </v-form>
  </v-col>
  <v-col cols="6"  md="6" sm="3" xs="4">
      <v-form>
    <v-text-field
    class="caption"
   color="deep-purple"
   label="ՀԾՀ"
            placeholder="ՀԾՀ"
            outlined
            
     ></v-text-field>
      </v-form>
  </v-col>
    </v-row>
    <v-row  no-gutters class="pt-2" >
      

      <v-col cols="6" md="6" sm="6" xs="6">
        <v-select
 
 color="deep-purple lighten-2"

          :items="bloodGroup"
          label="Արյան խումբ"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>

      
<v-col cols="6"  md="6" sm="3" xs="4">
      <v-form>
    <v-text-field
    class="caption"
   color="deep-purple"
   label="Հաշմանդամություն"
            placeholder="Հաշմանդամություն"
            outlined
            
     ></v-text-field>
      </v-form>
  </v-col>

    </v-row>
    
    
    
    
    </v-container>  





</template>

<script>
export default {
name:'EmailBloodGroupsleftTabs',
data() {
    return {
        bloodGroup:['I-','II+','II-','III+','III-','IV+','IV-']
    }
},


}
</script>

<style>

</style>