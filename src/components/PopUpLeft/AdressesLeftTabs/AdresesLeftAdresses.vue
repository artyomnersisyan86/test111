<template>
  <v-container fluid pa-0 mt-0>
<v-row no-gutters>
    <v-col cols="12"  md="12" sm="3" xs="4">
      
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 deep-purple--text" >Հասցե</v-expansion-panel-header>
        <v-expansion-panel-content>
           <v-form>
    <v-text-field
   color="deep-purple"
   
            placeholder="Հայերեն"
            outlined
     ></v-text-field>
      </v-form>
  <v-form>
    <v-text-field
   color="deep-purple"
   
            placeholder="English"
            outlined
     ></v-text-field>
      </v-form>
        <v-form>
    <v-text-field
   color="deep-purple"
   
            placeholder="Russian"
            outlined
     ></v-text-field>
      </v-form>

         
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </v-col>
</v-row>


  </v-container>


</template>

<script>
export default {
name:'AdresesLeftAdresses'
}
</script>

<style>

</style>