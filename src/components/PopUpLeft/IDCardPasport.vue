<template>
  
<v-container fluid  pa-0>
    <v-row  no-gutters>
      
<!-- Id CArd -->
      <v-col cols="12" >
     
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 deep-purple--text" >ID card</v-expansion-panel-header>
        <v-expansion-panel-content  >

<v-container fluid pt-2 pa-0>
    <v-row  no-gutters>
      

     <v-col cols="6" md="6" sm="6" xs="6">
     

           <v-form>
    <v-text-field
   color="deep-purple"
      class="caption"
            placeholder="Համար"
            label="Համար"
            outlined
     ></v-text-field>
      </v-form>
      </v-col>
 <v-col cols="6" >
     

           <v-form>
    <v-text-field
   color="deep-purple"
   class="caption"
            placeholder="Ում կողմից է տրված "
            label="Ում կողմից է տրված"
            outlined
     ></v-text-field>
      </v-form>
      </v-col>

    </v-row>
<v-row  no-gutters>
      

     

<IDCardDAtePicker/>
    
</v-row>

</v-container>

  

         
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  
      </v-col>
         <!-- Pasport -->
   
   <v-col cols="12" >
     
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 deep-purple--text" >Անձը հաստատող փաստաթուղթ</v-expansion-panel-header>
        <v-expansion-panel-content  >

<v-container fluid  pa-0>
    <v-row  no-gutters>
       <v-row  no-gutters class="pt-2" >
      

      <v-col cols="12" md="12" sm="" xs="6">
        <v-select
 color="deep-purple lighten-2"

          :items="typeDocument"
          label="Տեսակ"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>
       </v-row>

 <v-row  no-gutters>
     <v-col cols="6" md="6" sm="6" xs="6">
     

           <v-form>
    <v-text-field
   color="deep-purple"
      class="caption"
            placeholder="Համար"
            label="Համար"
            outlined
     ></v-text-field>
      </v-form>
      </v-col>
 <v-col cols="6" >
     

           <v-form>
    <v-text-field
   color="deep-purple"
   class="caption"
            placeholder="Ում կողմից է տրված "
            outlined
            label="Ում կողմից է տրված"
     ></v-text-field>
      </v-form>
      </v-col>

    </v-row>

      

     

<IDCardDAtePicker/>
    
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
import IDCardDAtePicker from '../PopUpLeft/IDCardDAtePicker'
export default {
name:'IDCard',
components:{
    IDCardDAtePicker
},
data() {
  return {
     typeDocument:['Անձնագիր','Նույնականացման քարտ','Ծննդյան վկայական','Կացության վկայական','Օտարերկրյա անձնագիր(ՌԴ քաղաքացի)','Օտարերկրյա անձնագիր','Հին նույնականացման քարտ','Մահվան վկայական',
     'Ճամփորդական փաստատուղթ'
     ]
  }
},


}
</script>

<style>

</style>