<template>
  
<v-container fluid pa-0 pt-3>
<v-row no-gutters >
<v-col cols="6" md="6" sm="6" xs="6">

  <v-select
 
 color="deep-purple lighten-2"

          :items="branch"
          label="Մասնաճյուղ"
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

          :items="branch"
          label="Լրացման ճշտություն"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>


</v-col>

</v-row>
<v-row no-gutters class="pt-0">
    <v-col cols="12" class="">

 <v-form>
    <v-text-field
   color="deep-purple"
   class="caption"
   height="32"
            placeholder="Արտոնագրի համար"
            label="Արտոնագրի համար"
            outlined
     ></v-text-field>
      </v-form>
    </v-col>
</v-row>

<BranchDatePicer/>
<v-row no-gutters class="pt-0">
    <v-col cols="12" class="">

 <v-form>
    <v-text-field
   color="deep-purple"
   class="caption"
   height="32"
            placeholder="Առկա է նույն անուն անձ"
            label="Առկա է նույն անուն անձ"
            outlined
     ></v-text-field>
      </v-form>
    </v-col>
</v-row>

</v-container>


</template>

<script>
import BranchDatePicer from '../OtherBasicInformationLeftTabs/BranchDatePicer'


export default {
name:'BranchOtherBasicinfo',
components:{
    BranchDatePicer
},
data() {
    return {
        branch:[]
    }
},
}
</script>

<style>

</style>