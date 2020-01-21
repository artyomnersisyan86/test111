<template>
  <v-container fluid pa-0 pl-2>
    <v-row no-gutters>
     <v-col cols="6" md="6" sm="6" xs="6">
        <v-simple-table fixed-header dense height="380px">
          <template v-slot:default>
            <thead>
              <tr>
                
                <th> Հաշվառման երկիր</th>
                <th> Հասցե </th>
                <th> Ամսաթիվ </th>
                <th> Կապ </th>
                <th> Կոդ </th>
                
              </tr>
            </thead>
            <tbody>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>


            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="6" md="6" sm="6" xs="6" class="pl-2">

          <v-row no-gutters>
              <v-col cols="12">
                  <v-system-bar color="deep-purple lighten-2" dark>
     
      <a href="#" class="white--text caption"> Դիտել քարտեզի վրա </a>
      <v-spacer></v-spacer>
      <span class="caption">Ընտրել ցուցակից</span>
     
    </v-system-bar>

<LeftAdresses/>
<AdresesLeftAdresses/>
<registrationTypeLeftAdresses/>
              </v-col>
          </v-row>
 


      </v-col>
    </v-row>
</v-container>





</template>

<script>

import LeftAdresses from '../AdressesLeftTabs/LeftAdresses'
import AdresesLeftAdresses from '../AdressesLeftTabs/AdresesLeftAdresses'
import registrationTypeLeftAdresses from '../AdressesLeftTabs/registrationTypeLeftAdresses'
export default {
name:'AdresseLeftTabs',

components:{
    LeftAdresses,
    AdresesLeftAdresses,
    registrationTypeLeftAdresses
}
}
</script>

<style>

</style>