<template>
  <br /><br /><br />
  <v-card class="mx-auto" max-width="344" title="User Registration">
    <v-alert type="warning" v-if="msg" dense>
      {{ msg }}
    </v-alert>
    <v-container>
      <v-text-field
        v-model="first"
        color="primary"
        label="First name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="primary"
        label="Last name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success" @click="formsubmit()">
        Complete Registration

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
      <v-overlay :model-value="overlay" class="align-center justify-center">
        <v-progress-circular
          color="primary"
          size="64"
          indeterminate
        ></v-progress-circular>
      </v-overlay>
    </v-card-actions>
  </v-card>
</template>


<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { computed } from "vue";   
export default {

  setup() {
    const rules = computed(() => {
      return {
        first: { required },
        last: { required },
        email: { required },
      };
    });
    const v$ = useValidate(rules);
    return { v$ };
  },
  data() {
    return {
      //v$: useValidate(),
      first: "",
      last: null,
      email: null,
      password: null,
      terms: false,
      overlay: false,
      msg: null,
    };
  },

  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 3000);
    },
  },

  methods: {
    async formsubmit() {
      try {
        this.v$.$validate(); // checks all inputs
        if (!this.v$.$error) {
          console.log("sucess");
        } else {
          console.error("wrong");
          this.msg = "Enter valid Information";
          // alert("Form failed validation");
        }
      } catch (e) {
        console.log("error", e);
      }
    },
  },
  validations() {
    return {
      first: { required },
      last: { required },
      email: { required },
    };
  },
};
</script>

