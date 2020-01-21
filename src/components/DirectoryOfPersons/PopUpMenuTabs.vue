<template>
   <v-tabs  background-color="deep-purple lighten-2 " dark hide-slider height="32px">
          <v-tabs-slider></v-tabs-slider>

          <v-tab :key="tab1">Հիմնական</v-tab>
          <v-tab :key="tab2">Որոնում</v-tab>

          <v-tab-item key="tab1">Հիմնական ՀիմնականՀիմնականՀիմնականՀիմնական</v-tab-item>

          <v-tab-item key="tab2">
            <v-container fluid pa-0>
              <v-row>
                <v-col cols="">
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
                    <v-btn
                      color="deep-purple"
                      class="text-capitalize"
                      width="200"
                      height="32"
                      outlined
                      small
                      dark
                    >
                      <v-icon left color="dark">save</v-icon>
                      <span>Հիշել</span>
                    </v-btn>
                  </div>
                  <div>
                    <v-menu disabled offset-y>
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
                        <v-list-item class="deep-purple">
                          <!--route to nodal -->
                          <v-list-item-title class="white--text p-0"></v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                </v-col>
                <v-col cols="">
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
                    <v-btn
                      color="deep-purple"
                      class="text-capitalize"
                      width="200"
                      height="32"
                      outlined
                      small
                      dark
                    >
                      <v-icon left color="dark">remove_red_eye</v-icon>
                      <span>Կարդալ ID Card-ից</span>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="">
                  <div>
                    <v-btn
                      color="deep-purple"
                      class="text-capitalize"
                      width="310"
                      height="64"
                      outlined
                      small
                      dark
                    >
                      <v-icon left color="dark">people_alt</v-icon>
                      <span>Համեմատել ահաբեկիչների ցանկի հետ</span>
                    </v-btn>
                  </div>
                  <div>
                    <v-btn
                      color="deep-purple"
                      class="text-capitalize"
                      width="310"
                      height="32"
                      outlined
                      small
                      dark
                    >
                      <v-icon left color="dark">cancel</v-icon>
                      <span>Փակել առանց ստուգման</span>
                    </v-btn>
                  </div>
                </v-col>

                <v-col cols="">
                  <div>
                    <v-menu offset-y>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          color="deep-purple"
                          class="text-capitalize"
                          width="215"
                          height="32"
                          outlined
                          small
                          dark
                          v-on="on"
                        >
                          <v-icon left color="dark">help</v-icon>

                          <span>ԲՄ հարցում</span>
                        </v-btn>
                      </template>
                      <v-list class="overflow-y-auto">
                        <v-list-item
                          class="deep-purple"
                          v-for="(item, index) in items3"
                          :key="index"
                        >
                          <v-list-item-title class="white--text p-0">{{item}}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>

                  <div>
                    <v-menu offset-y>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          color="deep-purple"
                          width="215"
                          class="text-capitalize"
                          height="32"
                          outlined
                          small
                          dark
                          v-on="on"
                        >
                          <v-icon left color="dark">help</v-icon>

                          <span>ԲՄ կրկնակի հարցում</span>
                        </v-btn>
                      </template>
                      <v-list class="overflow-y-auto">
                        <v-list-item
                          class="deep-purple"
                          v-for="(item, index) in items3"
                          :key="index"
                        >
                          <v-list-item-title class="white--text p-0">{{item}}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                  <div>
                    <v-btn
                      color="deep-purple"
                      class="text-capitalize"
                      width="215"
                      height="32"
                      outlined
                      small
                      dark
                    >
                      <v-icon left color="dark">phone</v-icon>
                      <span>Դիտել հեռախոսահամարը</span>
                    </v-btn>
                  </div>
                </v-col>
                <v-col></v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>



</template>

<script>
export default {
name:'PopUpMenuTabs',
data() {
    return {
        tab1:null,
        tab2:null,
      items3: ["Ապահովադրի", "Վարորդի (BM01)"],

    }
},

}
</script>

<style>

</style>