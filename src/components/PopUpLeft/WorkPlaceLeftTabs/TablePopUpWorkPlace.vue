<template>
  <v-container fluid pa-0>
    <v-row no-gutters>
      <v-col>
        <v-simple-table fixed-header dense height="380px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>
                  Կոդ
                  <input type="text" />
                </th>
                <th>Ներքին համար</th>
                <th>Տիպ</th>
                <th>Անուն/Անվանում</th>
                <th>Անուն/Անվանում</th>
                <th>Սեռ</th>
                <th>Ռեզիդենտ է</th>
                <th>Քաղաքացիություն</th>
                <th>Երկքաղաքացիություն</th>
                <th>Հասցե</th>
                <th>Գրանցման հասցե</th>
                <th>ՀԾՀՀ</th>
                <th>Նույնականացման համար</th>
                <th>Տնտեսության հատված</th>
                <th>Հարկատու</th>
                <th>Կազմակերպաիրավական տեսակ</th>
                <th>Փաստաթղթի տեսակ</th>
                <th>Ում կողմից է տրված</th>
                <th>Տրման ամսաթիվ</th>
                <th>Փաստաթղթի համար</th>
                <th>Ոիժի մեջ է մինչև</th>
                <th>Վարորդական վկայական</th>
                <th>Վարորդական վկայականի ժամկետ</th>
                <th>Հեռախոս</th>
                <th>Աշխատավայր</th>
                <th>Ղեկավար</th>
                <th>Ներքին համար</th>
                <th>Email</th>
                <th>Բացում</th>
                <th>Փակման ամսաթիվ</th>
                <th>Մասնաճյուղ</th>
                <th>Լրացման ճշտություն</th>
                <th>Մուտքագրող</th>
                <th>Գործակալ</th>
                <th>Փոփոխող</th>
                <th>Փոփոխում</th>
              </tr>
            </thead>
            <!-- <tbody>
                <tr v-for="myGetData in getData.result_list" v-bind:key="myGetData.id">
                  <td> <DirectoryOfPersonsPopup/> {{myGetData.CUSTOMER}}</td>
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
            </tbody>-->
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TablePopUpWorkPlace"
};
</script>

<style>
</style>