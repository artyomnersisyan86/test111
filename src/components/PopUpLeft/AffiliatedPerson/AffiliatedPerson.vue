<template>
  
<v-container fluid pa-0 pl-2>
  <v-row no-gutters>
     <v-col cols="12" md="12" sm="6" xs="6">
     <v-system-bar  color="deep-purple lighten-2" dark>
      <v-icon></v-icon>
      <span>Կապակցված անձիք </span>
      
    </v-system-bar>
     </v-col>
  </v-row>
  <v-row no-gutters>
 
   <v-col cols="12" md="12" sm="6" xs="6">
        <v-simple-table fixed-header dense height="390px">
          <template v-slot:default>
            <thead>
              <tr>
                
              <th>Կարգավիճակ</th>
              <th>Կապակցված անձի կոդ</th>
              <th>Կապակցված անձի Ա․Ա․Հ/Անվանում</th>
              <th>Նշումներ</th>
              
              </tr>
            </thead>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
</v-container>

</template>

<script>
export default {
name:'AffiliatedPerson',
data() {
    return {
        

    }
},
}
</script>

<style>

</style>