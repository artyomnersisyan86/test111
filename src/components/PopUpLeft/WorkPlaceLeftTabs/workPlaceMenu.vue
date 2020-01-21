<template>
   <v-tabs background-color="deep-purple lighten-2 " dark hide-slider height="32px">
          <v-tabs-slider></v-tabs-slider>

         
          <v-tab :key="tab2">Որոնում</v-tab>

          

          <v-tab-item key="tab2">
            <v-container fluid>
            <v-row no-gutters>
              <v-col>
                <!-- Update button (Նորացնել) -->

                <div>
                  <v-btn
                    color="deep-purple"
                    width="200"
                    height="32"
                    outlined
                    class="text-capitalize"
                    small
                    dark
                    
                  >
                    <v-icon color="dark" left>mdi-autorenew</v-icon>

                    <span>Նորացնել</span>
                  </v-btn>
                </div>
                <div>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        color="deep-purple"
                        width="200"
                        class="text-capitalize"
                        height="32"
                        outlined
                        small
                        dark
                        v-on="on"
                      >
                        <v-icon left color="dark">add</v-icon>

                        <span>Ավելացնել</span>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        class="deep-purple"
                        v-for="(item, index) in items"
                        :key="index"
                        router
                        :to="item.route"
                      >
                        <!--route to nodal -->
                        <v-list-item-title class="white--text caption p-0">{{item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
                <div>
                  <v-btn
                    color="deep-purple"
                    class="text-capitalize"
                    width="200"
                    height="32"
                    outlined
                    small
                    dark
                  >
                    <v-icon left color="dark">edit</v-icon>
                    <span>Փոփոխել</span>
                  </v-btn>
                </div>
              </v-col>
              <v-col>
                <div>
                  <v-btn
                    color="deep-purple"
                    class="text-capitalize"
                    width="200"
                    height="32"
                    outlined
                    small
                    dark
                  >
                    <v-icon left color="dark">delete_forever</v-icon>
                    <span>Հեռացնել</span>
                  </v-btn>
                 
                </div>
                <div>
                  <v-btn
                    color="deep-purple"
                    class="text-capitalize"
                    width="200"
                    height="32"
                    outlined
                    small
                    dark
                  >
                    <v-icon left color="dark">emoji_people</v-icon>
                    <span>Կասեցնել</span>
                  </v-btn>
                </div>
                <div>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        color="deep-purple"
                        width="200"
                        class="text-capitalize"
                        height="32"
                        outlined
                        small
                        dark
                        v-on="on"
                      >
                        <v-icon left color="dark">done_all</v-icon>

                        <span>Որոշիչ</span>
                      </v-btn>
                    </template>
                    <v-list style="max-height: 200px" class="overflow-y-auto">
                      <v-list-item class="deep-purple" v-for="(item, index) in decisive" :key="index">
                        <v-list-item-title class="white--text caption p-0">{{item}}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </v-col>
              <v-col>
                
                <div>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        color="deep-purple"
                        width="200"
                        class="text-capitalize"
                        height="32"
                        outlined
                        small
                        dark
                        v-on="on"
                      >
                        <v-icon left color="dark">subtitles</v-icon>

                        <span>Տեսակ</span>
                      </v-btn>
                    </template>
                    <v-list style="max-height: 200px" class="overflow-y-auto">
                      <v-list-item class="deep-purple" v-for="(item, index) in typeDocuments" :key="index">
                        <v-list-item-title class="white--text caption p-0">{{item}}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
                <div class="heightWidthClass caption">
                  <v-form>
                    <v-text-field
                      background-color
                      color="deep-purple"
                      outlined
                      placeholder="Փաստաթուղթ"
                      label="Փաստաթուղթ"
                      solo
                      class="caption"
                      prepend-inner-icon="description"
                    ></v-text-field>
                  </v-form>
                </div>
                 <div class="heightWidthClass caption">
                  <v-form>
                    <v-text-field
                      background-color
                      color="deep-purple"
                      outlined
                      placeholder="Ներքին կոդ"
                      label="Ներքին կոդ"
                      solo
                      class="caption"
                      prepend-inner-icon="description"
                    ></v-text-field>
                  </v-form>
                </div>
              </v-col>
              <v-col>
                <div>
                  <v-form>
                    <v-text-field
                      background-color
                      color="deep-purple"
                      outlined
                      placeholder="Անուն"
                      label="Անուն"
                      solo
                       class="caption"
                      prepend-inner-icon="people"
                    ></v-text-field>
                  </v-form>
                </div>

                <div>
                  <v-form>
                    <v-text-field
                      background-color
                      color="deep-purple"
                      outlined
                      label="Ազգանուն"
                      placeholder="Ազգանուն"
                      solo
                      prepend-inner-icon="people"
                       class="caption"
                    ></v-text-field>
                  </v-form>
                </div>
                <div class="heightWidthClass ">
                  <v-form>
                    <v-text-field
                      background-color
                      color="deep-purple"
                      outlined
                      placeholder="Անձի կոդ"
                      label="Անձի կոդ"
                      
                      class="caption"
                      
                      solo
                      prepend-inner-icon="people"
                    ></v-text-field>
                  </v-form>
                </div>
              </v-col>

              <v-col>
               
                <div class="heightWidthClass caption">
                  <v-form>
                    <v-text-field
                      background-color
                      color="deep-purple"
                      outlined
                      placeholder="Հեռախոս"
                      label="Հեռախոս"
                      solo
                      class="caption"
                      prepend-inner-icon="phone"
                    ></v-text-field>
                  </v-form>
                </div>
 <div>
                  <v-btn
                    color="deep-purple"
                    class="text-capitalize"
                    width="200"
                    height="32"
                    outlined
                    small
                    dark
                  >
                    <v-icon left color="dark">description</v-icon>
                    <span>Պայմանագրեր</span>
                  </v-btn>
                </div>
                     <div>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        color="deep-purple"
                        class="text-capitalize"
                        width="200"
                        height="32"
                        outlined
                        small
                        dark
                        v-on="on"
                      >
                        <v-icon left color="dark">help</v-icon>

                        <span> հարցում</span>
                      </v-btn>
                    </template>
                    <v-list style="max-height: 200px" class="overflow-y-auto">
                      <v-list-item class="deep-purple" v-for="(item, index) in personQuery" :key="index">
                        <v-list-item-title class="white--text p-0 caption">{{item}}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>



              </v-col>

            
             
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>

     


</template>

<script>
export default {
name:'workPlaceMenu',
data() {
    return {
        tab1:null,
        tab2:null,
      personQuery: ["Հարցում անձի վերաբերյալ", "Հարցում վարորդի վերաբերյալ "],
items: [
        { title: "Ֆիզիկական անձ",  },
        { title: "Անհատ ձեռնարակատեր", },
        { title: "Կազմակերպություն",  }
      ],
       decisive: [
        "Բոլորը",
        "Հաճախորդ",
        "Աշխատակից",
        "Վերաապահովագրող",
        "Վերապ․ բրոքեր",
        "Ապահովագրական գործակալ",
        "Մեր ընկերություն",
        "Գումարն իր հաշվին",
        "Առանց Online",
        "Միջնորդավճարի հաշվանցում",
        "Վաճառող",
        "Ինքը որպես գործակալ",
        "Աշխատավայր",
        "Ապահովագրված անձ",
        "Առավելագույն ապգումարի սահմանում",
        "Բանկ",
        "Պատասխանատու անձ",
        "Միայն փոխանցումով"
      ],
      typeDocuments: [
        "Անձնագիր",
        "Նույնականացման քարտ",
        "Ծննդյան վկայական",
        "Կացության վկայական",
        "Օտարերկրյա անձնագիր(Ռդ քաղ․․․)",
        "Օտարերկրյա անձնագիր",
        "Հին նույնականացման քարտ",
        "Մահվան վկայական",
        "Ճամփորդական փաստաթուղթ"
      ],
    }
},

}
</script>

<style>

</style>