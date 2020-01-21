<template>
  
<v-container fluid pa-0 pl-2>
<v-row no-gutters >
<v-col cols="12"  class="pt-0">
 <v-system-bar color="deep-purple" dark>
     
      <span>Այլ հիմնական տվյալներ </span>
     
    </v-system-bar>
    
</v-col>
</v-row>
<v-row>
    <v-col cols="12" class="pa-0 pl-3" >

 <v-form>
    <v-text-field
   color="deep-purple"
   class="caption"
   height="25px"
            placeholder="Ազգանուն Անուն"
            
            outlined
     ></v-text-field>
      </v-form>

    </v-col>
</v-row>

<v-row no-gutters class="pt-1">
    <v-col cols="6" >

 <v-form>
    <v-text-field
   color="deep-purple"
   class="caption"
   height="32px"
            placeholder="Կոդ"
            label="Կոդ"
            outlined
     ></v-text-field>
      </v-form>

    </v-col>
    <v-col cols="6" >

 <v-form>
    <v-text-field
   color="deep-purple"
   class="caption"
   height="32px"
            placeholder="Ներքին համար"
            label="Ներքին համար"
            outlined
     ></v-text-field>
      </v-form>

    </v-col>
</v-row>
<v-row no-gutters class="pt-2 pa">
    <v-col cols="6" class="">

 <v-form>
    <v-text-field
   color="deep-purple"
   class="caption"
   height="32"
            placeholder="Նոր կոդ"
            label="Նոր կոդ"
            outlined
     ></v-text-field>
      </v-form>

    </v-col>
   <v-col cols="6" md="6" sm="6" xs="6">
        <v-select
 
 color="deep-purple lighten-2"

          :items="personType"
          label="Անձի տեսակ"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>
       
      
</v-row>
<v-row no-gutters class=" pa-0">
    <v-col cols="6" class="">
 <v-select
 
 color="deep-purple lighten-2"

          :items=" registrationOfCountry"
          label="Հաշվառման երկիր"
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

          :items="dualCitizenship"
          label="Երկքաղաքացիություն"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>
       
      
</v-row>
<v-row no-gutters>
   
       <v-col cols="6" class="">

 <v-form>
    <v-text-field
   color="deep-purple"
   class="caption"
   height="32"
            placeholder="Հաշվառման հասցե"
            label="Հաշվառման հասցե"
            outlined
     ></v-text-field>
      </v-form>

    </v-col>
    <v-col cols="6" class="">

 <v-form>
    <v-text-field
   color="deep-purple"
   class="caption"
   height="32"
            placeholder="Հաշվառման հասցե տիպ"
            label="Հաշվառման հասցե տիպ"
            outlined
     ></v-text-field>
      </v-form>

    </v-col>
</v-row>
<BranchOtherBasicinfo/>
</v-container>



</template>

<script>
import BranchOtherBasicinfo from '../OtherBasicInformationLeftTabs/BranchOtherBasicinfo'

export default {
name:'OtherBasicInformation',
components:{
    BranchOtherBasicinfo
},
data() {
    return {
        personType:[],
         registrationOfCountry:[],
         dualCitizenship:[]
    }
},

}
</script>

<style>

</style>