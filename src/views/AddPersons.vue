<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="deep-purple" dark v-on="on">Open Dialog</v-btn>
        </template>

        <v-toolbar dark color="deep-purple">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Անձի խմբագրում</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-tabs background-color="deep-purple lighten-2 " dark hide-slider height="37px">
          <v-tabs-slider></v-tabs-slider>

          <v-tab :key="tab1">Հիմնական</v-tab>
          <v-tab :key="tab2">Որոնում</v-tab>

          <v-tab-item key="tab1">Հիմնական ՀիմնականՀիմնականՀիմնականՀիմնական</v-tab-item>

          <v-tab-item key="tab2">
            <v-container fluid>
              <v-row>
                <v-col cols="3">
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
                <v-col cols="3">
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
                <v-col cols="3">
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

                <v-col cols="3">
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
        <hr class="deep-purple" />


<template>
  <v-card>
    
    <v-tabs vertical>


      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Option 1
      </v-tab>


      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        Option 2
      </v-tab>


      <v-tab>
        <v-icon left>mdi-access-point</v-icon>
        Option 3
      </v-tab>



      <v-tab-item>
        
        <v-card flat>

          <!-- <v-card-text>
            <v-text-field :rules="rules"></v-text-field> 
            <v-text-field :rules="rules"></v-text-field>
          </v-card-text>
          
          <v-card-text>
            <v-text-field :rules="rules"></v-text-field> 
            <v-text-field :rules="rules"></v-text-field>
          </v-card-text> -->


  <v-form>
    <v-container fluid>
      <v-row>

       
        <v-col cols="6" sm="6" md="3" >
          <div>
    <v-system-bar  color="deep-purple" dark >
      
      <span >Ֆիզիկական Անձ</span>
      
      
    </v-system-bar>
  </div>
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


        </v-col>
      </v-row>
    </v-container>
  </v-form>





        </v-card>
        
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>









      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      tab1: null,
      tab2: null,
      items3: ["Ապահովադրի", "Վարորդի (BM01)"]
    };
  }
};
</script>

<style>
.v-tab--active {
  background-color: white !important;
  color: indigo !important;
  padding: 0px;
}


</style>