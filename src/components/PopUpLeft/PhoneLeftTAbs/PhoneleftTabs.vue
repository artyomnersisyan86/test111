<template>
  
<v-container fluid pa-0 pl-2>
  <v-row no-gutters>
     <v-col cols="12" md="12" sm="6" xs="6">
     <v-system-bar  color="deep-purple lighten-2" dark>
      <v-icon>phone</v-icon>
      <span>Հեռախոսահամարներ</span>
      
    </v-system-bar>
     </v-col>
  </v-row>
  <v-row no-gutters>
 
   <v-col cols="12" md="12" sm="6" xs="6">
        <v-simple-table fixed-header dense height="390px">
          <template v-slot:default>
            <thead>
              <tr>
                
                <th> Կոդ </th>
                <th> Ակտիվ է </th>
                <th> Տեսակ </th>
                <th> Օպերատոր </th>
                <th> Հեռաղոսահամար </th>
                <th> Ողարկել sms հաղորդագրություն</th>
                <th> Նշումներ </th>
                <th> Մուտքագրող գործակալ </th>
                <th> Մուտքագրող </th>
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
name:'PhoneleftTabs',
data() {
    return {
        

    }
},
}
</script>

<style>

</style>