<template>
<v-container fluid pa-0 mt-0>
<v-row no-gutters="">
    <v-col cols="12" md-6 mx-3 class=" pa-0">
    <v-tabs vertical  color="deep-purple" height="350px" >
      <v-tab :key="tab1" class="text-capitalize caption">
        <v-icon left small>mdi-account</v-icon>
        Տվյալներ
      </v-tab>
      <v-tab :key="tab2" class="text-capitalize caption">
                  <v-icon left small >list_alt</v-icon>անձնական փաստաթղթեր
        
      </v-tab>


      <v-tab :key="tab3" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Հասցեներ
       
      </v-tab>

       <v-tab :key="PhoneleftTabs" class="text-capitalize caption">
                  <v-icon left small >phone</v-icon>Հեռախոսներ
       
      </v-tab>
      <!--BankAccounts բանկային հաշիվներ  -->
      <v-tab :key="BankAccounts" class="text-capitalize caption">
                  <v-icon left small ></v-icon>բանկային հաշիվներ
       
      </v-tab>
      <!-- Կապակցված անձիք  affiliatedPerson:-->

<v-tab :key="affiliatedPerson" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Կապակցված անձիք
       
      </v-tab>

 <!--  Դասակարգումներ Classifications:-->

<v-tab :key="classifications" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Դասակարգումներ
       
      </v-tab>

<!-- Այլ որոշիչներ Otherdeterminants -->

<v-tab :key="otherdeterminants" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Այլ որոշիչներ
       
      </v-tab>


<!-- Կցվող փաստաթղթերր AttachmentDocument -->

<v-tab :key="attachmentDocument" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Կցվող փաստաթղթեր
       
      </v-tab>
<!-- Նույնանուն անձ  PersonSameName-->

<v-tab :key="personSameName" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Նույնանուն անձ 
       
      </v-tab>
<!-- BMClasses ԲՄ Դասեր -->


<v-tab :key="personSameName" class="text-capitalize caption">
                  <v-icon left small ></v-icon>ԲՄ Դասեր
       
      </v-tab>

<!-- Questionnaire Հարցաշար -->


<v-tab :key="questionnaire" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Հարցաշար
       
      </v-tab>




      <v-tab-item key="tab1">
       <v-container pa-0>
           <v-row no-gutters>
               <v-col cols="6" class="pt-0">
<v-system-bar  color="deep-purple" dark >
      
      <span >Ֆիզիկական Անձ</span>
      
      
    </v-system-bar>
  
 <div>
    <v-system-bar color="deep-purple lighten-2" dark >
      
      <span >Հայերեն</span>
      
      
    </v-system-bar>
    <div>
      <v-form>
    <v-text-field
   color="deep-purple"
   
            placeholder="Անուն"
            outlined
     ></v-text-field>
      </v-form>
    </div>
    <div>
      <v-form>
      <v-text-field
   color="deep-purple"
            placeholder="Ազգանուն"
            outlined
     ></v-text-field>
      </v-form>
    </div>
    <div>
      <v-form>
      <v-text-field
   color="deep-purple"
            placeholder="Հայրանուն"
            outlined
     ></v-text-field>
      </v-form>
     </div>

  </div>
<LeftTabsExpensions/>
<LeftTbasGender/>
<AddBirtDeathdayLeftTabs/>

<EmailBloodGroupsleftTabs/>
<IDCardPasport/>
<Employee/>
<WorkPlaceLeftTabs/>
  <!-- Exp Panel for English and Russia -->

<!-- ------------------------------- -->
<!-- gender citizenship place of birth:etc.  սեռ քաղաքացիությունծննդավայր և այլն    -->


  
    
               </v-col>
               <v-col cols="6">
<OtherBasicInformation/>

               </v-col>
           </v-row>
       </v-container>
      </v-tab-item>

<!-- Անձնական փաստաթղթեր Personal documents -->
      
      <v-tab-item key="tab2">
       
<PersonalDocuments/>

      </v-tab-item>

<!-- ////////////////// -->
<!-- AdresseLeftTabs Հասցեներ-->

      <v-tab-item key="tab3">
        <AdresseLeftTabs/>
      </v-tab-item>
<!-- ---------- -->
<!-- Phone -->
 <v-tab-item key="PhoneleftTabs">
        <PhoneleftTabs/>

      </v-tab-item>

<!--BankAccounts Բանկային Հաշիվներ-->

<v-tab-item key="BankAccounts">
        <BankAccounts/>

      </v-tab-item>
  <!-- Կապակցված անձիք  affiliatedPerson:-->
<v-tab-item key="affiliatedPerson">
        <AffiliatedPerson/>

      </v-tab-item>
<!-- Classifications -->

<v-tab-item key="classifications">
        <Classifications/>

      </v-tab-item>

<!-- Otherdeterminants -->

<v-tab-item key="otherdeterminants">
        <Otherdeterminants/>

      </v-tab-item>


<!--Կցվող փաստաթղթեր Attachments -->

<v-tab-item key="attachmentDocument">
        <AttachmentDocument/>

      </v-tab-item>
<!-- Նույնանուն անձ  PersonSameName-->

<v-tab-item key="personSameName">
        <PersonSameName/>

      </v-tab-item>
<!-- BMClasses ԲՄ Դասեր -->
<v-tab-item key="bMClasses">
        <BMClasses/>

      </v-tab-item>
<!-- Questionnaire Հարցաշար -->
<v-tab-item key="questionnaire">
        <Questionnaire/>

      </v-tab-item>

    </v-tabs>

    </v-col>


</v-row>



</v-container>







</template>

<script>
import LeftTabsExpensions from '../PopUpLeft/LeftTabsExpensions'
import LeftTbasGender from '../PopUpLeft/LeftTbasGender'
import  AddBirtDeathdayLeftTabs from '../PopUpLeft/AddBirtDeathdayLeftTabs'
import EmailBloodGroupsleftTabs from '../PopUpLeft/EmailBloodGroupsleftTabs'
import IDCardPasport from '../PopUpLeft/IDCardPasport'
import Employee from '../PopUpLeft/Employee'
import WorkPlaceLeftTabs from '../PopUpLeft/WorkPlaceLeftTabs/WorkPlaceLeftTabs'
import OtherBasicInformation from '../PopUpLeft/OtherBasicInformationLeftTabs/OtherBasicInformation'
import PersonalDocuments from './PersolaDocumentsLeftTabs/PersonalDocuments'
import AdresseLeftTabs from './AdressesLeftTabs/AdresseLeftTabs'
import PhoneleftTabs from '../PopUpLeft/PhoneLeftTAbs/PhoneleftTabs'
import BankAccounts from '../PopUpLeft/BankAccounts/BankAccounts'
import AffiliatedPerson from '../PopUpLeft/AffiliatedPerson/AffiliatedPerson'
import Classifications from '../PopUpLeft/Classifications/Classifications'
import Otherdeterminants from '../PopUpLeft/Otherdeterminants/Otherdeterminants'
import AttachmentDocument from '../PopUpLeft/AttachmentDocument/AttachmentDocument'
import PersonSameName from '../PopUpLeft/PersonSameName/PersonSameName'
import BMClasses from '../PopUpLeft/BMClasses/BMClasses'
import Questionnaire from '../PopUpLeft/Questionnaire/Questionnaire'
export default {
    name:'PopUpLeftTabs',

    components:{
LeftTabsExpensions,
LeftTbasGender,
AddBirtDeathdayLeftTabs,
EmailBloodGroupsleftTabs,
IDCardPasport,
Employee,
WorkPlaceLeftTabs,
OtherBasicInformation,
PersonalDocuments,
AdresseLeftTabs,
PhoneleftTabs,
BankAccounts,
AffiliatedPerson,
Classifications,
Otherdeterminants,
AttachmentDocument,
PersonSameName,
BMClasses,
Questionnaire
    },
data() {
    return {
        tab1:null,
        tab2:null,
        tab3:null,
        PhoneleftTabs:null,
        BankAccounts:null,
        affiliatedPerson:null,
        classifications:null,
        otherdeterminants:null,
        attachmentDocument:null,
        personSameName:null,
        bMClasses:null,
        questionnaire:null
   
    }
},



}
</script>

<style>

</style>