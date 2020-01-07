<template>
  <v-row class="home pt-2 ma-0 deep-purple lighten-1">
    <div class="divMyclass">
      <h4 class="h4MyClass">Անձանց տեղեկատու</h4>
    </div>

    <v-tabs background-color="deep-purple lighten-2 " dark hide-slider height="37px">
      <v-tabs-slider></v-tabs-slider>

      <v-tab :key="tab1">Հիմնական</v-tab>
      <v-tab :key="tab2">Անձիք</v-tab>

      <v-tab-item key="tab1">Հիմնական ՀիմնականՀիմնականՀիմնականՀիմնական</v-tab-item>

      <!-- Persons  (Անձիք)-->
      <v-tab-item key="tab2">
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <!-- Update button (Նորացնել) -->

              <div>
                <v-btn
                  color="deep-purple"
                  width="130"
                  outlined
                  rounded
                  small
                  dark
                  @click="getDataMethod"
                >
                  <v-icon color="dark" left>mdi-autorenew</v-icon>

                  <span>Նորացնել</span>
                </v-btn>
              </div>
              <div>
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="deep-purple" width="130" outlined rounded small dark v-on="on">
                      <v-icon left color="dark">add</v-icon>

                      <span>Ավելացնել</span>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item class="deep-purple" v-for="(item, index) in items" :key="index">
                      <v-list-item-title class="white--text p-0">{{item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              <div>
                <v-btn color="deep-purple" width="130" outlined rounded small dark>
                  <v-icon left color="dark">edit</v-icon>
                  <span>Փոփոխել</span>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div>
                <v-btn color="deep-purple" width="190" outlined rounded small dark>
                  <v-icon left color="dark">delete_forever</v-icon>
                  <span>Հեռացնել</span>
                </v-btn>
              </div>
              <div>
                <v-btn color="deep-purple" width="190" outlined rounded small dark>
                  <v-icon left color="dark">emoji_people</v-icon>
                  <span>Կասեցնել</span>
                </v-btn>
              </div>
              <div>
                <v-btn color="deep-purple" width="190" outlined rounded small dark>
                  <v-icon left color="dark">edit</v-icon>
                  <span>Փոփոխել ծածկագիր</span>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div >
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="deep-purple" width="130" outlined rounded small dark v-on="on">
                      <v-icon left color="dark">done_all</v-icon>

                      <span>Որոշիչ</span>
                    </v-btn>
                  </template>
                  <v-list style="max-height: 200px" class="overflow-y-auto">
                    <v-list-item class="deep-purple" v-for="(item, index) in items1" :key="index">
                      <v-list-item-title class="white--text p-0">{{item}}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              <div>
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="deep-purple" width="130" outlined rounded small dark v-on="on">
                      <v-icon left color="dark">subtitles</v-icon>

                      <span>Տեսակ</span>
                    </v-btn>
                  </template>
                  <v-list style="max-height: 200px" class="overflow-y-auto">
                    <v-list-item class="deep-purple" v-for="(item, index) in items2" :key="index">
                      <v-list-item-title class="white--text p-0">{{item}}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              <div class="heightWidthClass">
                <v-form height="">
                  
          <v-text-field
          
          background-color="deep-purple lighten-5"
          color="deep-purple"
          rounded
          label="Փաստաթուղթ"
           
            dense
            
            prepend-inner-icon="place"
          ></v-text-field>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>

    <!-- <v-col>
      <v-btn class="deep-purple white--text"   @click="getDataMethod">
       <v-icon left>mdi-update</v-icon>
      <span>Նորացնել</span>
      </v-btn>
    </v-col>-->
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: "DirectoryOfPersons",
  data() {
    return {
      getData: [],
      url: {
        getData: "http://192.168.100.153:8000/customer/customer-cur"
      },
      tab1: null,
      tab2: null,
      items: [
        { title: "Ֆիզիկական անձ" },
        { title: "Անհատ ձեռնարակատեր" },
        { title: "Կազմակերպություն" }
      ],
      items1: [
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
      items2: [
        "Անձնագիր",
        "Նույնականացման քարտ",
        "Ծննդյան վկայական",
        "Կացության վկայական",
        "Օտարերկրյա անձնագիր(Ռդ քաղ․․․)",
        "Օտարերկրյա անձնագիր",
        "Հին նույնականացման քարտ",
        "Մահվան վկայական",
        "Ճամփորդական փաստաթուղթ"
      ]
    };
  },
  components: {},
  methods: {
    getDataMethod() {
      this.$http.get(this.url.getData).then(responce => {
        // console.log(responce.data);
        this.getData = responce.data;
      });

      // axios.get(this.url.getData).then((responce) => {
      //     console.log(responce.data);
      //     this.getData = responce.data;
      // });
    }
  }
};
</script>
<style >
.v-btn-toggle {
  flex-direction: column;
}

.v-tab--active {
  background-color: white !important;
  color: indigo !important;
}
.h4MyClass {
  color: white;
}
.h4MyClass {
  height: 32px;
}
.heightWidthClass{
  height: 28px;
  width: 190px;
}
</style>