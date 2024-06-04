<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
    <v-container>
        <v-img
  :width="md-70"
  aspect-ratio="16/9"
  cover
  src="https://marketplace.canva.com/EAFoustdoMc/1/0/1600w/canva-beige-aesthetic-fashion-style-banner-landscape-k4EiS0uPqD0.jpg"
></v-img>
<br>

      <!--  -->
    <v-row justify="start">
    <v-col cols="5" xs="3" md="3" v-for="n in 12" :key="n">
    <v-card >
    <v-img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" />
    <v-card-text>
    product 1
    </v-card-text>
    </v-card>
    </v-col>
    </v-row>
    <!-- -------- -->
    <br>
    <v-img
  :width="md-70"
  aspect-ratio="16/9"
  cover
  src="https://www.drsheths.com/cdn/shop/files/Sale_Ends_Tonight-1_85b87a0f-ad02-444b-b72f-08b1d2439878.jpg?v=1717358859"
></v-img>
    </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>