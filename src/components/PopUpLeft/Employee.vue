<template>
  <v-container fluid  pa-0>
    <v-row  no-gutters>
<v-col cols="12" >
     
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 deep-purple--text" >Աշխատակից</v-expansion-panel-header>
        <v-expansion-panel-content  >

<v-container fluid  pa-0>
    
       <v-row  no-gutters class="pt-2" >
      
<!-- քաղաքացիական կացություն civil status -->
        <v-col cols="6" md="6" sm="3" xs="3">
        <v-select
 color="deep-purple lighten-2"

          :items="civilStatus"
          label="Քաղաք.. կացություն"
          placeholder="Քաղաքացիական կացություն"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>

<!-- Կրթություն Education-->
          <v-col cols="6" md="6" sm="3" xs="3">
        <v-select
 color="deep-purple lighten-2"

          :items="education"
          label="Կրթություն"
          placeholder="Կրթություն"
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-select>
      </v-col>
       </v-row>

<!-- լեզուների իմացություն   languages-->
<v-row no-gutters>

<v-col cols="12" md="12" sm="6" xs="3">

<template>
  <v-container fluid>
    <v-select
  class="caption"
      v-model="selectedLanguages"
      :items=" languages"
      placeholder="Lեզուների իմացություն "
      label="Լեզուների իմացություն "
      multiple
    >
      <template v-slot:prepend-item>
        <v-list-item
        class="deep-purple" 
        dark
          ripple
          @click="toggle"
        >
          <v-list-item-action>
            <v-icon :color="selectedLanguages.length > 0 ? 'deep-purple lighten-2' : ''">{{ icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Ընտրել բոլորը</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-2"></v-divider>
      </template>
      <template v-slot:append-item>
        <v-divider class="mb-2"></v-divider>
        <v-list-item disabled>
          <v-list-item-avatar color="deep-purple lighten-2" dark>
            <v-icon>language</v-icon>
          </v-list-item-avatar>

          <v-list-item-content v-if="likesAlllanguages">
            <v-list-item-title>Նշված են բոլոր լեզուները</v-list-item-title>
          </v-list-item-content>

          <v-list-item-content v-else-if="likesSomeLenguages">
            <v-list-item-title>Լեզուների քանակը</v-list-item-title>
            <v-list-item-subtitle>{{ selectedLanguages.length }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-content v-else>
            <v-list-item-title>
            Ոչ մի լեզու չգիտեք?
            </v-list-item-title>
           
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-select>
  </v-container>
</template>


</v-col>

</v-row  >

<v-row  no-gutters>
     <v-col cols="6" md="6" sm="3" xs="3">
     

           <v-form>
    <v-text-field
   color="deep-purple"
      class="caption"
            placeholder="ԷՀՄ․ իմացություն"
            label="ԷՀՄ․ իմացություն"
            outlined
     ></v-text-field>
      </v-form>
      </v-col>
         <v-col cols="6" md="6" sm="3" xs="3">
     

           <v-form>
    <v-text-field
   color="deep-purple"
   class="caption"
            placeholder="Ում կողմից է տրված "
            outlined
            label="Մասնագիտություն"
     ></v-text-field>
      </v-form>
      </v-col>

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
export default {
    name:'Employee',

    data() {
        return {
                 civilStatus:['Ամուրի','Ամուսնացած','Բաժանված','Այրի'],
                 education:['Բարձրագույն','Միջնակարգ','Միջնակարգ մասնագիտական','Թերի բարձրագույն'],

 languages:['Հայերեն','Ռուսերեն','Անգլերեն','ֆրանսերեն','Իտալերեն','Գերմաներեն','Իսպաներեն','Ուկրաիներեն','Ֆիններեն','Վրացերեն','Բուլղարերեն','Արաբերեն','Ադրբեջաներեն','Թուրքերեն','Էստոներեն'],
 selectedLanguages:[]
        }
    },

     computed: {
      likesAlllanguages () {
        return this.selectedLanguages.length === this.languages.length
      },
      likesSomeLenguages () {
        return this.selectedLanguages.length > 0 && !this.likesAlllanguages
      },
      icon () {
        if (this. likesAlllanguages) return 'mdi-close-box'
        if (this.likesSomeLenguages) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      },
    },

    methods: {
      toggle () {
        this.$nextTick(() => {
          if (this.likesAlllanguages) {
            this.selectedLanguages = []
          } else {
            this.selectedLanguages = this.languages.slice()
          }
        })
      },
    },

}
</script>

<style>

</style>