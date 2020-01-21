<template>
 <v-container fluid pa-0 mt-0>
<v-row no-gutters>
    <v-col cols="6"  md="6" sm="3" xs="4">
      
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 deep-purple--text" >Русски</v-expansion-panel-header>
        <v-expansion-panel-content>
           <v-form>
    <v-text-field
   color="deep-purple"
   
            placeholder="Имя"
            outlined
     ></v-text-field>
      </v-form>
  <v-form>
    <v-text-field
   color="deep-purple"
   
            placeholder="Фамиля"
            outlined
     ></v-text-field>
      </v-form>
        <v-form>
    <v-text-field
   color="deep-purple"
   
            placeholder="Очество"
            outlined
     ></v-text-field>
      </v-form>

         
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  
    </v-col>

  <v-col cols="6"  md="6" sm="3" xs="4">
<v-expansion-panels :popout="false" :focusable="true" :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 deep-purple--text"> English</v-expansion-panel-header>
        <v-expansion-panel-content >
           <v-form>
    <v-text-field
   color="deep-purple"
   
            placeholder="Name"
            outlined
     ></v-text-field>
      </v-form>
  <v-form>
    <v-text-field
   color="deep-purple"
   
            placeholder="Last Name"
            outlined
     ></v-text-field>
      </v-form>
        <v-form>
    <v-text-field
   color="deep-purple"
   
            placeholder="Middle Name"
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
name:'LeftTabsExpensions',
}
</script>

<style>


</style>