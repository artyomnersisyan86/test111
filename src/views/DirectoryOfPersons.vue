<template>
  <div>
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
                        <v-list-item-title class="white--text p-0">{{item.title }}</v-list-item-title>
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
                <div class="heightWidthClass caption">
                  <v-form>
                    <v-text-field
                      background-color
                      color="deep-purple"
                      outlined
                      label="Փաստաթուղթ"
                      solo
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
                      label="Անուն"
                      solo
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
                      solo
                      prepend-inner-icon="people"
                    ></v-text-field>
                  </v-form>
                </div>
                <div class="heightWidthClass caption">
                  <v-form>
                    <v-text-field
                      background-color
                      color="deep-purple"
                      outlined
                      label="Անձի կոդ"
                      v-model="CUSTOMER"
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
                      label="Ներքին կոդ"
                      solo
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
                      label="Հեռախոս"
                      solo
                      prepend-inner-icon="phone"
                    ></v-text-field>
                  </v-form>
                </div>

                <div class="heightWidthClass caption">
                  <v-form>
                    <v-text-field
                      type="button"
                      class="change-font"
                      background-color
                      color="deep-purple"
                      outlined
                      label="Դիտել հեռախոսահամարը"
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
    <v-container fluid>
      <v-row>
        <v-col>
          <v-simple-table fixed-header dense height="600px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>
                    Կոդ
                    <input type="text" v-model="search" placeholder="Search" />
                  </th>

                  <th>Ներքին համար</th>
                  <th>Տիպ</th>
                  <th>Ռեզիդենտ է</th>
                  <th>Անուն/Անվանում</th>
                  <th>Ազգանուն</th>
                  <th>Հայրանուն</th>
                  <th>Կազմակերպաիրավական տեսակ</th>
                  <th>Պետության մասնաբաժինը</th>
                  <th>Կազմակերպության անվանումը</th>
                  <th>Սեռ</th>
                  <th>Ծննդյան տարեթիվ</th>
                  <th>Մահվան ամսաթիվ</th>
                  <th>Երկքաղաքացիություն</th>
                  <th>Հաշվառման երկիր</th>
                  <th>ՀԾՀՀ</th>
                  <th>Փաստաթղթի տեսակ</th>
                  <th>Փաստաթղթի համար</th>
                  <th>Ում կողմից է տրված</th>
                  <th>Տրման ամսաթիվ</th>
                  <th>Վավեր է մինչև</th>
                  <th>Նույնականացման համար</th>
                  <th>Ում կողմից է տրվել</th>
                  <th>Տրման ամսաթիվ</th>
                  <th>Վավեր է մինչև</th>
                  <th>Վարորդական վկայական</th>
                  <th>Վարորդական վկայականի ժամկետ</th>
                  <th>ՀՎՀՀ</th>
                  <th>Պետական ռեգիստրի գրանցման համար</th>
                  <th>Տնտեսության հատված</th>
                  <th>Հուսալի է</th>
                  <th>Հասցե</th>
                  <th>Էլեկտրոնային հասցե</th>
                  <th>Անուն/Անվանում(անգլերեն)</th>
                  <th>Անուն/Անվանում(ռուսերեն)</th>
                  <th>Ծննդավայր</th>
                  <th>Աշխատավայր</th>
                  <th>Տնօրենի ԱԱՀ</th>
                  <th>Մասնաճյուղ</th>
                  <th>Լրացման ճշտություն</th>
                  <th>մուտքագրող</th>
                  <th>Մուտքագրման ամսաթիվ</th>
                  <th>Փակման ամսաթիվ</th>
                  <th>Փոփոխող</th>
                  <th>Փոփոխում</th>
                  <th>Գործակալ</th>
                  <th>Գործակալի հաշվառման ամսաթիվ</th>
                  <th>Գործակալի հաշվառման համար</th>
                  <th>Աշխատանքային պայմանագրի համար</th>
                  <th>Աշխատանքային պայմանագրի սկիզբ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="myGetData in getData.result_list" v-bind:key="myGetData.id">
                  <td>{{myGetData.CUSTOMER}}</td>
                  <td>{{myGetData.EXTNUM}}</td>
                  <td>{{myGetData.PERSON}}</td>
                  <td>{{myGetData.RESIDENCE}}</td>

                  <td>{{myGetData.NAME_A}}</td>
                  <td>{{myGetData.SNAME_A}}</td>
                  <td>{{myGetData.FNAME_A}}</td>
                  <td>{{myGetData.ORGTYPE}}</td>

                  <td>{{myGetData.PRATE}}</td>
                  <td>{{myGetData.ORGNAME}}</td>
                  <td>{{myGetData.SEX}}</td>

                  <td>{{myGetData.BIRTHDAY}}</td>
                  <td>{{myGetData.DEDTIME}}</td>
                  <td>{{myGetData.ISTWOCTRY}}</td>
                  <td>{{myGetData.COUNTRY}}</td>
                  <td>{{myGetData.SOCCART}}</td>
                  <td>{{myGetData.DOCKIND}}</td>
                  <td>{{myGetData.DOCUMENT}}</td>
                  <td>{{myGetData.DOCSRC}}</td>
                  <td>{{myGetData.DOCDATE}}</td>
                  <td>{{myGetData.DOCISSUDT}}</td>
                  <td>{{myGetData.IDCARD}}</td>
                  <td>{{myGetData.IDSRC}}</td>
                  <td>{{myGetData.IDISSUDT}}</td>
                  <td>{{myGetData.IDEXPIRDT}}</td>
                  <td>{{myGetData.TAXPAYER}}</td>
                  <td>{{myGetData.REGNUM}}</td>
                  <td>{{myGetData.SECTOR}}</td>
                  <td>{{myGetData.TRUSTED}}</td>
                  <td>{{myGetData.ADDRESS_A}}</td>
                  <td>{{myGetData.EMAIL}}</td>
                  <td>{{myGetData.FULLNAME_E}}</td>
                  <td>{{myGetData.FULLNAME_R}}</td>
                  <td>{{myGetData.BIRTHPLACE}}</td>
                  <td>{{myGetData.WORKPLACE}}</td>
                  <td>{{myGetData.WORKER}}</td>
                  <td>{{myGetData.BRANCH}}</td>
                  <td>{{myGetData.FULLKIND}}</td>
                  <td>{{myGetData.TSOWNER}}</td>
                  <td>{{myGetData.OPENDATE}}</td>
                  <td>{{myGetData.CLOSEDATE}}</td>
                  <td>{{myGetData.TSUSER}}</td>
                  <td>{{myGetData.TSTIME}}</td>
                  <td>{{myGetData.BROKER}}</td>
                  <td>{{myGetData.LICENCEDATE}}</td>
                  <td>{{myGetData.LICENCENUM}}</td>
                  <td>{{myGetData.CONTNUM}}</td>
                  <td>{{myGetData.CONTDATE}}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "DirectoryOfPersons",
  data() {
    return {
      CUSTOMER: "",
      getData: [],
      search: "",
      headers: {
        //     'Access-Control-Allow-Origin': '*',
        // 'Content-Length': 15664,
        // 'Content-Type': 'text/plain',
        //  charset:'utf-8',
        //  Date: 'Mon, 13 Jan 2020 09:49:30 GMT',
        // Server: 'WSGIServer/0.2 CPython/3.7.5',
        // Vary: 'Origin',
        // 'X-Content-Type-Options': 'nosniff',
        // 'X-Frame-Options':' DENY'
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
        //'Access-Control-Allow-Methods': 'DELETE, GET, OPTIONS, PATCH, POST, PUT',
        //'Access-Control-Allow-Origin': '*',
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