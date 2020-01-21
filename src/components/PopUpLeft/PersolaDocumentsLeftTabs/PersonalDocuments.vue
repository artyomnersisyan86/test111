<template>
  
<v-container fluid pa-0 pl-2>
    <v-row no-gutters>
   <v-col cols="12" md="12" sm="6" xs="6">
        <v-simple-table fixed-header dense height="380px">
          <template v-slot:default>
            <thead>
              <tr>
                
                <th> Կոդ </th>
                <th> Փաստաթղթի տեսակ </th>
                <th> Պետություն </th>
                <th> Փաստաթղթի համար </th>
                <th> Ում Կողմից է տրված </th>
                <th> Տրման ամսաթիվ </th>
                <th> Ուժի մեջ է մինչև </th>
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
name:'PersonalDocuments',
data() {
    return {
        
    }
},
}
</script>

<style>

</style>