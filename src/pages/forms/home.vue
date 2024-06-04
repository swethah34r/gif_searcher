<template>
  <div class="pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-toolbar-title class="font-weight-light">
          User Profile
        </v-toolbar-title>
        <v-text-field
          v-model="email"
          :readonly="loading"
          class="mb-2"
          label="Email"
          clearable
          
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>

        <v-radio-group v-model="radios">
          <v-radio label="Option One" value="one"></v-radio>
          <v-radio label="Option 2 (string)" value="2"></v-radio>
          <v-radio :value="3" label="Option 3 (integer)"></v-radio>
        </v-radio-group>
        <v-container fluid>
          <v-textarea
            label="Label"
            model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            name="input-7-1"
            variant="filled"
            auto-grow
          ></v-textarea>
        </v-container>

        <v-combobox
          label="Country"
          :items="['India', 'UK', 'USA', 'Chaina', 'Singapore']"
        ></v-combobox>
        <br />

        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox>

        <v-btn
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
    terms: false,
    radios: "one",
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>