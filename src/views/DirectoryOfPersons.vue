<template>
  <v-row class="home pt-2  ma-0  deep-purple lighten-1 "  >
    <div class="divMyclass">
      <h4 class="h4MyClass">Անձանց տեղեկատու</h4>
    </div>

    <v-tabs background-color="deep-purple lighten-2 " dark  hide-slider height="37px">


      
      <v-tabs-slider   ></v-tabs-slider>



      <v-tab :key="tab1">Հիմնական</v-tab>
      <v-tab :key="tab2">Անձիք</v-tab>

      <v-tab-item key="tab1">Հիմնական ՀիմնականՀիմնականՀիմնականՀիմնական</v-tab-item>

      <!-- Persons  (Անձիք)-->
      <v-tab-item key="tab2">
        <v-row>
          <v-col cols="12" sm="4">
            <!-- Update button (Նորացնել) -->
            <v-btn-toggle>
              <v-btn color="deep-purple white--text" small @click="getDataMethod">
                <v-icon color="white" left>mdi-autorenew</v-icon>

                <span>Նորացնել</span>
              </v-btn>

              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="deep-purple white--text"  small v-on="on">
                    <v-icon left color="white">add</v-icon>

                    <span>Ավելացնել</span>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item class="deep-purple " v-for="(item, index) in items" :key="index">
                    <v-list-item-title class="white--text p-0">{{item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-btn color="deep-purple" small dark>
                <v-icon left color="white">create</v-icon>
                <span>Փոփոխել</span>
              </v-btn>
            </v-btn-toggle>
          </v-col>

        </v-row>
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

 .v-tab--active{
  background-color: white !important;
   color:indigo !important 
 } 
.h4MyClass{
  color: white ;
  
}
.h4MyClass{
  height: 32px;
}
</style>