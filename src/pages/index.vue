<template>
  <div>
    <v-container fluid>
      <v-app-bar color="#E1BEE7" prominent>
        <!-- <v-toolbar-side-icon> -->
        <v-toolbar-title>My Shop</v-toolbar-title>
        <!-- </v-toolbar-side-icon> -->
        <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

        <!-- <v-img
        class="mx-4"
        src="https://cdn.dribbble.com/users/4591324/screenshots/9528532/media/8bed6de6c139261a4ea740f64ccbb2ed.jpg?resize=400x300&vertical=center"
        max-height="60"
        max-width="60"
        contain
      ></v-img> -->
        <!-- <v-toolbar-title>My files</v-toolbar-title> -->

        <!-- <v-col class="d-flex justify-space-around">
      <v-toolbar-title class="white--text">Home</v-toolbar-title>
    </v-col> -->

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>
        </template>
        <v-btn icon="mdi-pencil" to="form" />

        <v-icon icon="mdi-cart" />

        <v-btn to="info" variant="text">Home</v-btn>
      </v-app-bar>

      <!-- ---------banner------------>

      <v-carousel>
        <v-carousel-item
          src="https://static.vecteezy.com/system/resources/thumbnails/004/299/813/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
      <br>
      <!-- ------------products------------- -->

<div>
  <div class="d-flex align-center flex-column">
  <v-row >
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-72 my-12 mb-6"
    max-width="374"
 v-for="item in items" :key="item" >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0 d-flex"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <div class="px-4 mb-2">
      <v-chip-group v-model="selection" selected-class="bg-deep-purple-lighten-2">
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Reserve"
        block
        border
        @click="reserve"
      ></v-btn>
    </v-card-actions>
  </v-card>
  </v-row>
  </div>
</div>

      <!-- -------------------------- -->

      <h1>List 1</h1>
      <v-row justify="start">
        <v-col cols="12" md="3" v-for="item in items" :key="item">
          <v-card class="mx-auto" hover>
            <img :src="item.img" height="270" />

            <v-card-title>{{ item.title }}</v-card-title>

            <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Island</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange"> Share </v-btn>
              <v-btn color="orange"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <!-- ---- -->
      <h1>List 2</h1>
      <v-row justify="start">
        <v-col cols="2" md="3" v-for="item in itemstwo" :key="item">
          <v-card class="mx-auto" hover>
            <img :src="item.img" height="270" />
            <v-card-title>{{ item.title }}</v-card-title>

            <v-card-subtitle class="pt-4"> {{ item.value }} </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange"> Share </v-btn>

              <v-btn color="orange"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
<br>
      <!-- ---------footer-------- -->

      <v-footer class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            class="mx-2"
            color="white"
            rounded="xl"
            variant="text"
          >
            {{ link }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Bucksbox</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-container>
  </div>
</template>
<script>
export default {
  methods: {
     reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
  },
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "img 1",
        value: "foo",
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },
      {
        title: "img 2",
        value: "bar",
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },

      {
        title: "Fizz",
        value: "fizz",
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },
      {
        title: "Buzz",
        value: "buzz",
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },
    ],
    itemstwo: [
      {
        title: "img 1.1",
        value: "foo",
        img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      },
      {
        title: "img 2.1",
        value: "bar",
      },

      {
        title: "Fizz",
        value: "fizz",
      },
      {
        title: "title 4",
        value: "value 4",
      },
    ],
     loading: false,
      selection: 1,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};

data: () => ({
  links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
});



</script>
