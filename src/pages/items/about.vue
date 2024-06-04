<template>
  <div>
    <v-app-bar color="primary" >
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>

        <v-btn icon="mdi-filter" variant="text"></v-btn>
      </template>

      <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list density="compact">
      <v-list-subheader>REPORTS</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title ></v-list-item-title>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>

    <v-carousel height="250" cycle>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
    <v-container fluid>
      <v-row justify="start">
        <v-col
          cols="6"
          xs="3"
          md="3"
          v-for="product in products"
          :key="product"
        >
          <v-card class="mx-auto pa-2">
            <v-img
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              :src="product.src"
            />
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-text>
              <div>{{ product.text }}</div>
            </v-card-text>
            <v-card-action>
              <v-btn size="x-small" color="red">Click here to smile</v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      drawer: null,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ], 
      products: [
        {
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          flex: 12,
          productId: 1,
        },
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          flex: 6,
          productId: 2,
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          flex: 6,
          productId: 3,
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          flex: 6,
          productId: 3,
        },
      ],
    };
  },
  methods: {
    addToCart(productId) {
      console.log(productId);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
