<template>
  <div>
    <v-row class="home pt-2  ma-0 deep-purple lighten-1">
      <div class="divMyclass">
        <h4 class="h4MyClass caption mx-5">Անձանց տեղեկատու</h4>
      </div>

      <v-tabs background-color="deep-purple lighten-2 " dark hide-slider height="37px">
        <v-tabs-slider></v-tabs-slider>

        <v-tab :key="tab1" class="mx-4">Հիմնական</v-tab>
        <v-tab :key="tab2">Անձիք</v-tab>

        <v-tab-item key="tab1">Հիմնական ՀիմնականՀիմնականՀիմնականՀիմնական</v-tab-item>

        <!-- Persons  (Անձիք)-->
        <v-tab-item key="tab2">
          <v-container fluid>
            <v-row>
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
                    @click="getDataMethod"
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
                    <span>Փոփոխել ծածկագիր</span>
                  </v-btn>
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
                        <v-icon left color="dark">done_all</v-icon>

                        <span>Որոշիչ</span>
                      </v-btn>
                    </template>
                    <v-list style="max-height: 200px" class="overflow-y-auto">
                      <v-list-item class="deep-purple" v-for="(item, index) in items1" :key="index">
                        <v-list-item-title class="white--text caption p-0">{{item}}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
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
                        <v-icon left color="dark">subtitles</v-icon>

                        <span>Տեսակ</span>
                      </v-btn>
                    </template>
                    <v-list style="max-height: 200px" class="overflow-y-auto">
                      <v-list-item class="deep-purple" v-for="(item, index) in items2" :key="index">
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
                      v-model="CUSTOMER"
                      class="caption"
                      v-bind:value="CUSTOMER"
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
                      placeholder="Ներքին կոդ"
                      label="Ներքին կոդ"
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
                      placeholder="Հեռախոս"
                      label="Հեռախոս"
                      solo
                      class="caption"
                      prepend-inner-icon="phone"
                    ></v-text-field>
                  </v-form>
                </div>

                <div class="heightWidthClass caption">
                  <v-form>
                    <v-text-field
                      
                      class="caption black--text"
                      background-color
                      color="deep-purple"
                      outlined
                      
                      label="Դիտել հեռախոսահամարը"
                      placeholder="Դիտել հեռախոսահամարը"
                      solo
                      prepend-inner-icon="phone"
                    ></v-text-field>
                  </v-form>
                </div>
              </v-col>

              <v-col>
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

                        <span>ԲՄ հարցում</span>
                      </v-btn>
                    </template>
                    <v-list style="max-height: 200px" class="overflow-y-auto">
                      <v-list-item class="deep-purple" v-for="(item, index) in items3" :key="index">
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
                        width="200"
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
                    <v-list style="max-height: 200px" class="overflow-y-auto">
                      <v-list-item class="deep-purple" v-for="(item, index) in items3" :key="index">
                        <v-list-item-title class="white--text p-0">{{item}}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>

 <div>
           <DirectoryOfPersonsPopup/>
                  
                </div>

              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>

      
     
    </v-row>
     <TableDirectoryOfPersons  :getData="getData"></TableDirectoryOfPersons>
   
  </div>
</template>

<script>
// @ is an alias to /src
import DirectoryOfPersonsPopup from "../components/DirectoryOfPersons/DirectoryOfPersonsPopup";
import TableDirectoryOfPersons from '../components/DirectoryOfPersons/TableDirectoryOfPersons'
export default {
  components: {
    DirectoryOfPersonsPopup,
    TableDirectoryOfPersons
  },
  data() {
    return {
      CUSTOMER: "",
      getData: [],
      search: "",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PUT,GET,POST,DELETE,OPTIONS",
        Date: "Mon, 13 Jan 2020 09:19:35 GMT",
        Server: "WSGIServer/0.2 CPython/3.7.5",
        "Content-Type": "application/json",
        Vary: "Accept, Origin",
        Allow: "GET, HEAD, OPTIONS",
        "X-Frame-Options": "DENY",
        "Content-Length": 75153,
        "X-Content-Type-Options": "nosniff",
        "Access-Control-Allow-Headers":
          " accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with",

        "Access-Control-Max-Age": 86400,
        "Access-Control-Request-Headers":
          " access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,access-control-max-age,allow,content-type,server,vary,x-content-type-options,x-frame-options",
        "Access-Control-Request-Method": "POST",
        Origin: "http://localhost:8080",
        Referer: "http://localhost:8080/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
      },

      url: {
        getData: "http://192.168.100.153:8000/customer/customer-gettest"
        //  http://192.168.100.153:8000/customer/customer-cur/
      },

      // url: {
      //   getData: "http://titanyan.am/barev.php"
      // },

      tab1: null,
      tab2: null,
      items: [
        { title: "Ֆիզիկական անձ", route: "/AddPersons" },
        { title: "Անհատ ձեռնարակատեր", route: "/AddPersons" },
        { title: "Կազմակերպություն", route: "/AddPersons" }
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
      ],
      items3: ["Ապահովադրի", "Վարորդի (BM01)"]
    };
  },

  methods: {
    getDataMethod() {
      const config = {
        headers: this.headers
      };

      if (this.CUSTOMER == "") {
        this.axios
          .get(
            this.url.getData,
            {
              params: {
                ISALL: 0,
                CUSTOMER: this.CUSTOMER
              }
            },
            config
          )
          .then(responce => {
            console.log(responce.data);
            this.getData = responce.data;
          })
          .catch(function(error) {
            alert("կապի խափանում");
            console.log(error);
          });
      } else {
        this.axios
          .get(
            this.url.getData,
            {
              params: {
                ISALL: 1,
                CUSTOMER: this.CUSTOMER
              }
            },
            config
          )
          .then(responce => {
            console.log(responce.data);
            this.getData = responce.data;
          })
          .catch(function(error) {
            alert("կապի խափանում");
            console.log(error);
          });
      }

      //     this.axios.get(this.url.getData, {params: {ISALL:0 } })
      // .then(function (response) {
      //   console.log(response.data),
      //   this.getData = responce.data;
      // })
    }
  }
};
</script>
<style  >
/* .v-btn-toggle {
  flex-direction: column;
} */
.v-menu__content {
  border-radius: 3px 3px 15px 15px !important;
}
.v-list.v-sheet.v-sheet--tile.theme--light {
  border-radius: 0px !important;
  border: none;
  padding: 0px;
}
.v-tab--active {
  background-color: white !important;
  color: indigo !important;
  padding: 0px;
}
.h4MyClass {
  color: white;
  height: 32px;
}

.heightWidthClass {
  width: 200px;
}

.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
}
.v-form {
  height: 32px;
}
/* .change-font{
  font-size: 14px
} */

/* verevi menui dzax dasavurvacutyan hamar */

.col {
  flex-grow: initial !important;
}
table th + th {
  border-left: 1px solid #dddddd;
}
table td + td {
  border-left: 1px solid #dddddd;
}
</style>