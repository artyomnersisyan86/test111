<template>
  <nav>
      <v-system-bar app class="black white--text"  >
        <span >Nairi Insurance</span>
      </v-system-bar>

      <v-app-bar flat app class="deep-purple white--text " height="37">
        
 <v-menu offset-y z-index="1" open-on-hover  >
      <template v-slot:activator="{ on }">
        <v-btn text dark v-on="on" transition="scale-transition" class="text-capitalize" >
        Ապահովագրություն
        </v-btn>
      </template>
      <v-list text class=" deep-purple ">
        <v-list-item  v-for="(item, index) in items" :key="index" >
          <v-list-item-title class= "white--text">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>
       
 <v-menu offset-y z-index="1" open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn  text dark v-on="on" transition="scale-transition"  class="text-capitalize">
          Վերաապահովագրություն
        </v-btn>
      </template>
      <v-list text class=" deep-purple ">
        <v-list-item  v-for="(item, index) in items1" :key="index" >
          <v-list-item-title class= "white--text 	">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>

              
 <v-menu offset-y z-index="1" open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn text  dark v-on="on" transition="scale-transition" class="text-capitalize">
         Պատահարներ
        </v-btn>
      </template>
      <v-list text class=" deep-purple ">
        <v-list-item  v-for="(item, index) in items2" :key="index" >
          <v-list-item-title class= "white--text">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>

              
 <v-menu offset-y z-index="1" open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn text dark v-on="on" transition="scale-transition" class="text-capitalize">
          Ցանցային Կառավարում
        </v-btn>
      </template>
      <v-list text class=" deep-purple" >
        <v-list-item  v-for="(item, index) in items3" :key="index" router :to="item.route">
          <v-list-item-title class= "white--text" >{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>

              
 <v-menu offset-y z-index="1" open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn text dark v-on="on" transition="scale-transition" class="text-capitalize" >
         Հաշվապահություն
        </v-btn>
      </template>
      <v-list text class=" deep-purple ">
        <v-list-item  v-for="(item, index) in items4" :key="index" >
          <v-list-item-title class= "white--text">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>

              
 <v-menu offset-y z-index="1" open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn text dark v-on="on"   transition="scale-transition"  class="text-capitalize">
          կարգավորումներ
        </v-btn>
      </template>
      <v-list text class=" deep-purple ">
        <v-list-item  v-for="(item, index) in items5" :key="index" >
          <v-list-item-title class= "white--text">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>

              
 <v-menu offset-y z-index="1" open-on-hover >
      <template v-slot:activator="{ on }">
        <v-btn text dark v-on="on" transition="scale-transition" class="text-capitalize">
        Օգտվող
        </v-btn>
      </template>
      <v-list text   class="  deep-purple ">
        <v-list-item  v-for="item in items6" :key="item.title" router :to="item.route" >
          <v-list-item-title  class= "white--text  " > 
            
            {{ item.title }}</v-list-item-title>

        </v-list-item>
      </v-list>
      



    </v-menu>
     

     
      </v-app-bar>


  </nav>



</template>

<script>
export default {
name: 'Navbar',
data () {
  return {

    
     items: [
        { title: 'Նոր վկայագրերի ստեղծում' },
        { title: 'Վկայագրերի որոնում' },
        { title: 'Վաճառքների սահմանաչափեր' },
        { title: 'Ապահովագրական պրոդուկտներ' },
        { title: 'Ապահովագրական փաթեթներ' },
        { title: ' Տեղեկատվական համակարգեր' },
       
      ],
      items1: [
        { title: 'Վերաապահովագրված վկայագրեր' },
        { title: 'Վերաապահովագրության ենթակա վկայագրեր' },
        { title: 'Վերաապահովագրության պայմանագրեր' },
        
       
      ],
      items2: [
        { title: 'Զանգերի ցանկ' },
        { title: 'Նախնական զննումների ցանկ ' },
        { title: 'Սուբրոգացիա' },
        { title: 'Հաըցերի վճարումներ' },
        { title: 'Գործընկերներից ստացված հաշիվ ապրանքագրեր' },
        { title: 'Մատուցվող ծառայություններ և գնացուցակ' },
        
       
      ],
       items3: [
        { title: 'Անձանց տեղեկատու', route:'/'},
        { title: 'Գործակալներ', route:'/about' },
        { title: 'Հաշվառման ենթակա ձևաթղթերի վարում' },
        { title: 'Օգտվողների իրավասություններ' },
        { title: 'Մասնաճյուղեր' },
        
       
      ],
       items4: [
        { title: 'լրացնելու եմ' },
      ],
       items5: [
        { title: 'լրացնելու եմ' }
      ],
       items6: [
        { title: 'լրացնելու եմ',  },
        { title: 'լրացնելու եմ1' },
        { title: 'լրացնելու եմ2' },
      ],
  }
},
}
</script>

<style scoped>

/* hover efect navbar (Հովեր էֆեկտ նավբարի)  */

/* button.text-capitalize.theme--dark.v-btn.v-btn--flat.v-btn--text.v-size--default:hover{
  color: black;
  font-weight: bold;
    font-size: 258pxpx !important; 
} */
/* .v-btn__content:hover{
  color: black;
  font-weight: bold;
   font-size: 1rem !important;
  
} */


/*  (Լիստի մենյուի գրանիցների կարգավորում) */
/* .v-menu__content{
  border-radius: 3px 3px 15px  15px !important;
  

} */



 /* .v-list.deep-purple.v-sheet.v-sheet--tile.theme--light{
  padding: 0px;
  
}  */
/* font-size list item text (լիստի տառերի չափը) */
/* .v-list-item__title{
  font-size: 0.875rem !important;
} */
/*  hoverEfect of list item (լիստի տեքստի հօվերէֆեկտ) */
 /* .v-list-item__title.white--text{
  font-size: 13px !important;
   color: black ! important ;
  font-weight: bold;

}  */

/* .v-list.v-sheet.v-sheet--tile.theme--light{
  border-radius: 0px !important;
  border: none;
  padding: 0px
} */

/* .v-menu__content--fixed{
  background-color:#673ab7;
  border-radius: 0px;
  
 
}  */



</style>