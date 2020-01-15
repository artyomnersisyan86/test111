<template>


        <v-container fluid class="pa-0">
          <v-row>
            
            <v-col class="pt-0">
              <v-tabs background-color="deep-purple" dark vertical>
                <v-tab :key="tab1">
                  <v-icon left>ballot</v-icon>Տվյալներ
                </v-tab>
                
               
                <v-tab>
                  <v-icon left>list_alt</v-icon>անձնական փաստաթղթեր
                </v-tab>
                <v-tab>
                  <v-icon left>phone</v-icon>Հեռախոսահամարներ
                </v-tab>
                <v-tab>
                  <v-icon left>monetization_on</v-icon>Բանկային հաշիվներ
                </v-tab>
                <v-tab>
                  <v-icon left>mdi-account</v-icon>կապակցված անձիք
                </v-tab>
                <v-tab>
                  <v-icon left>format_list_bulleted</v-icon>Դասակարգումներ
                </v-tab>
                <v-tab>
                  <v-icon left>done_all</v-icon>Այլ որոշիչներ
                </v-tab>
                <v-tab>
                  <v-icon left>playlist_add_check</v-icon>Կցվող փաստաթղթեր
                </v-tab>
                <v-tab>
                  <v-icon left>mdi-account</v-icon>Նույնանուն անձ
                </v-tab>
                <v-tab>
                  <v-icon left>reorder</v-icon>ԲՄ դասեր
                </v-tab>
                <v-tab>
                  <v-icon left>menu_book</v-icon>Հարցաշար
                </v-tab>


 <v-tab-item key="tab1">
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <div >
                    <v-form>
                      <v-text-field
                        background-color
                        color="deep-purple"
                        outlined
                        label="ֆիզիկական"
                        solo
                        prepend-inner-icon="mdi-account"
                      ></v-text-field>
                    </v-form>
                  </div>
                      </v-col>

                      <v-col cols="12">
                        <div >
                    <v-form>
                      <v-text-field
                        background-color
                        color="deep-purple"
                        outlined
                        label="ֆիզիկական"
                        solo
                        prepend-inner-icon="mdi-account"
                      ></v-text-field>
                    </v-form>
                  </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>


                <v-tab-item key="tab2">
                  <v-card f>
                    <v-card-text>
                      <pre>tab2tab2tab2tab2tab2
               tab2tab2tab2tab2tab2tab2tab2tab2tab2tab2tab2tab2tab2tab2tab2
               tab2tab2tab2tab2tab2tab2tab2tab2tab2tab2
               tab2tab2tab2tab2tab2tab2tab2tab2tab2tab2
               </pre>
                    </v-card-text>
                  </v-card>
                </v-tab-item>

                <v-tab-item>
                  <v-card-text>
                    <h1>Tab3</h1>
                  </v-card-text>
                </v-tab-item>
              </v-tabs>
            </v-col>
          </v-row>
        </v-container>
</template>

<script>
export default {
    name:'Mycomp',

}
</script>

<style>

</style>