<template>
  <form>
    <v-text-field
      v-model="state.name"
      :counter="10"
      :error-messages="v$.name.$errors.map((e) => e.$message)"
      label="Name"
      required
      @blur="v$.name.$touch"
      @input="v$.name.$touch"
    ></v-text-field>

    <v-text-field
      v-model="state.email"
      :error-messages="v$.email.$errors.map((e) => e.$message)"
      label="E-mail"
      required
      @blur="v$.email.$touch"
      @input="v$.email.$touch"
    ></v-text-field>

    <v-select
      v-model="state.select"
      :error-messages="v$.select.$errors.map((e) => e.$message)"
      :items="items"
      label="Item"
      required
      @blur="v$.select.$touch"
      @change="v$.select.$touch"
    ></v-select>

    <v-btn class="me-4" @click="formsubmit()"> submit </v-btn>
    <v-btn @click="clear"> clear </v-btn>
  </form>
</template>


<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

const initialState = {
  name: "",
  email: "",
  select: null,
  //  checkbox: null,
};

const state = reactive({
  ...initialState,
});

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const rules = {
  name: { required },
  email: { required, email },
  select: { required },
  items: { required },
  //   checkbox: { required },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
function formsubmit() {
  this.v$.$validate(); // checks all inputs
  if (!this.v$.$error) {
    console.log("success");
  } else {
    console.error("error");
    // this.msg = "Enter valid Information";
    // alert("Form failed validation");
  }
}
</script>