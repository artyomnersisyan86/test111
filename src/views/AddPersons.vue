<template>
  <div>
    <v-row >
      <v-dialog v-model="dialog" fullscreen    transition="dialog-bottom-transition">
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


      <v-tab :key="tab1">
        <v-icon left>ballot</v-icon>Տվյալներ
      </v-tab>


      <v-tab :key="tab2">
                  <v-icon left>list_alt</v-icon>անձնական փաստաթղթեր
        
      </v-tab>


      <v-tab :key="tab3">
                  <v-icon left>phone</v-icon>Հեռախոսահամարներ
       
      </v-tab>



      <v-tab-item key="tab1">
        
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


  <!-- Exp Panel for English and Russia -->
<div>
 
<v-expansion-panels :popout="false" :focusable="true"  :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header class="deep-purple lighten-2 white--text" >Русский</v-expansion-panel-header>
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
  

 
<v-expansion-panels :popout="false" :focusable="true" :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header class="deep-purple lighten-2 white--text"> English</v-expansion-panel-header>
        <v-expansion-panel-content>
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
  
</div>
<!-- ------------------------------- -->
<!-- gender citizenship place of birth:etc.  սեռ քաղաքացիությունծննդավայր և այլն    -->


  <v-container fluid pa-0 >
    <v-row  class="mt-0">
      <v-col cols="3" pa-0>
        <v-subheader>Սեռ</v-subheader>
      </v-col>

      <v-col cols="9" pa-0>
        <v-select
 
 color="deep-purple lighten-2"

          :items="genders"
          label="Սեռ"
          dense
          outlined
           filled
         height="32"
            hint="Սեռ"
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="pa-0">
      <v-col cols="4" >
       <v-subheader>Քաղաքացիուտյուն</v-subheader>
      </v-col>

      <v-col cols="8" pa-0>
        <v-select
 
 color="deep-purple lighten-2"
 height="32"
          :items="sitizenship"
          label="Քաղաքացիուտյուն"
          dense
          outlined
           filled
           
            hint="Քաղաքացիուտյուն"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
  
<div>
      <v-form>
    <v-text-field
   color="deep-purple"
   label="Ծննդավայր"
            placeholder="Ծննդավայր"
            outlined
     ></v-text-field>
      </v-form>
    </div>
    <div>
  
          <v-col>
            <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        label="ԾՆՆԴՅԱՆ ԱՄՍԱԹԻՎ"
        prepend-icon="event"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      v-model="date"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="save"
    ></v-date-picker>
  </v-menu>
          </v-col>
<v-col>
        <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        label="Մահվան ամսաթիվ"
        prepend-icon="event"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      v-model="date"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="save"
    ></v-date-picker>
  </v-menu>
</v-col>
      
    </div>
   
<!-- ------------------------------- -->

        </v-col>
      </v-row>
    </v-container>
  </v-form>





        </v-card>
        
      </v-tab-item>
      <v-tab-item key="tab2">
        <v-card flat>
          <v-card-text>
            <h1>
              heloo heloohelooheloohelooheloohelooheloo2 heloo heloohelooheloohelooheloohelooheloo2
            </h1>
           
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item key="tab3">
        <v-card flat>
          <v-card-text>
            <p>
tab3
tab3
tab3
tab3
tab3
tab3
tab3
tab3
tab3
            </p>

            <p class="mb-0">
tab3
tab3
tab3
tab3
tab3
tab3
tab3
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
      tab3:null,
      items3: ["Ապահովադրի", "Վարորդի (BM01)"],
      genders: ['Իգական','Արական'],
  sitizenship:['Ռեզիդենտ','Ոչ ռեզիդենտ'],
   date: null,
      menu: false,
        
    };
  },
  watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
};
</script>

<style>
.v-tab--active {
  background-color: white !important;
  color: indigo !important;
  padding: 0px;
}

.v-input__control{
  height: 1px;
}

</style>