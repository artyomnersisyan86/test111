<template>
  
<v-container fluid pa-0 pl-2>
    <!-- Հաճախորդների ցանկ -->
  <v-row no-gutters>
     <v-col cols="12" md="12" sm="6" xs="6">
     <v-system-bar  color="deep-purple lighten-2" dark>
      <v-icon></v-icon>
      <span>Հաճախորդների ցանկ</span>
      
    </v-system-bar>
     </v-col>
  </v-row>
  <v-row no-gutters>
 
   <v-col cols="12" md="12" sm="3" xs="3">
        <v-simple-table fixed-header dense height="150px">
          <template v-slot:default>
            <thead>
              <tr>
                
               <th>Կոդ</th>
               <th>Անվանում</th>
               <th>Ծննդյան ամսաթիվ</th>
               <th>Նոյնականացման քարտ</th>
               <th>ՀԾՀ</th>
               <th>Անձը հաստատող փաստաթուղթ</th>
              </tr>
            </thead>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

<!-- Ահաբեկիչների ցանկ -->
    <v-row no-gutters>
     <v-col cols="12" md="12" sm="3" xs="3">
     <v-system-bar  color="deep-purple lighten-2" dark>
      <v-icon></v-icon>
      <span>Ահաբեկիչների ցանկ</span>
      
    </v-system-bar>
     </v-col>
  </v-row>
  <v-row no-gutters>
 
   <v-col cols="12" md="12" sm="6" xs="6">
        <v-simple-table fixed-header dense height="150px">
          <template v-slot:default>
            <thead>
              <tr>
                
               <th>Կոդ</th>
               <th>Ներմուծման ցանկի համար</th>
               <th>Անձի տեսակ</th>
               <th>Արտաքին համար</th>
               <th>Տարբերակ</th>
               <th>Անվանում/ԱԱՀ(տարբերակ 1)</th>
               <th>Անվանում/ԱԱՀ(տարբերակ 2)</th>
               <th>Անվանում/ԱԱՀ(տարբերակ 3)</th>
               <th>Անվանում/ԱԱՀ(տարբերակ 4)</th>
               <th>Օրիգինալ անվանում</th>
               <th>Նշումներ(տարբերակ 1)</th>
               <th>Նշումներ(տարբերակ 2)</th>
               <th>տեսակավորման բանալի</th>
               <th>տեսակավորման ամսաթիվ</th>
               <th>Տեսակ</th>
               <th>Տեղեկանքի համար</th>
               <th>Ներառման ամսաթիվ</th>
               <th>Համընկնումների քանակ</th>
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
name:'PersonSameName',
data() {
    return {
        

    }
},
}
</script>

<style>

</style>