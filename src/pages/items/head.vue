<template>
  <v-card class="mx-auto" color="grey-lighten-3" max-width="448">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>
        <v-text-field label="search" filled dense> </v-text-field>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="n in 4" :key="n" cols="12">
              <v-card>
                <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                           <v-cart-title>
                <div>
                    <h4>camera</h4>
                </div>
                <div class="text-right" >
                    <v-btn>
                        Add to Cart
                    </v-btn>
                </div>
              </v-cart-title>
              </v-card>
   
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>



  
</template>