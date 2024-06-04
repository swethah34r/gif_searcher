<template>
  <div>
  <br>
    <v-sheet class="mx-auto" width="300">
      <v-form>
        <v-text-field
          label="Type here"
          v-model="search"
        ></v-text-field>
        <v-btn class="mt-2" v-on:click="butFunction" block>Search</v-btn>
      </v-form>
      <br>
      <img height="300" width="300" v-if="result.data" :src="result.data[0].images.original.url" alt="GIF">
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      result: {},
      search: null,
    };
  },
  methods: {
    async butFunction() {
      const apiKey = 'Eouw9W7hio6YcLb1V27QcC0FDAm56R27';
      const { data } = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${this.search}&limit=1`
      );
      this.result = data;
    },
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
