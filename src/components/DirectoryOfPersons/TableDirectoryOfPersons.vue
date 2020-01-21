<template>
    
    <v-container fluid>
      <v-row>
        <v-col>
          <v-simple-table fixed-header dense height="600px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>
                    Կոդ
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
                
                <tr  v-for="myGetData in getData.result_list" v-bind:key="myGetData.id">
                  <td>  {{myGetData.CUSTOMER}} </td>
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

</template>



<script>

export default {
    name:'TableDirectoryOfPersosn',
    props:["getData",],
       
     data() {
         return {
             
         }
     },
}
</script>
