<template>
  
<v-container fluid pt-2 pa-0>
    <v-row  no-gutters>
      

      <v-col cols="6" md="6" sm="6" xs="6">
        <v-select
 
 color="deep-purple lighten-2"

          :items="genders"
          label="Սեռ"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>

      <v-col cols="6" md="6" sm="6" xs="6">
        <v-select
 
 color="deep-purple lighten-2"
 height="32"
          :items="sitizenship"
          label="Քաղաքացիություն"
          dense
          outlined
           filled
             class="caption"
            
        ></v-select>
      </v-col>
    </v-row>

<v-row no-gutters>
  <v-col cols="6"  md="6" sm="3" xs="4">
      <v-form>
    <v-text-field
    class="caption"
   color="deep-purple"
   label="Ծննդավայր"
            placeholder="Ծննդավայր"
            outlined
            
     ></v-text-field>
      </v-form>
  </v-col>
  <v-col cols="6"  md="6" sm="3" xs="4">
      <v-form>
    <v-text-field
    class="caption"
   color="deep-purple"
   label="Հրաժարման տեղեկանքի №"
            placeholder="Հրաժարման տեղեկանքի №"
            outlined
            
     ></v-text-field>
      </v-form>
  </v-col>
</v-row>
  </v-container>
  



</template>

<script>
export default {
name:'LeftTbasGender',
data() {
    return {
               genders: ['Իգական','Արական'],
  sitizenship:['Ռեզիդենտ','Ոչ ռեզիդենտ'],
    }
},
}
</script>

<style>

</style>