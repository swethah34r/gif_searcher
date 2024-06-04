<template>
  <v-app>
    <v-container>
      <v-card>
        <v-row class="ma-0 pa-0">
          <v-col cols="6" class="bg-blue">
            <v-img
              src="data:image/jpeg;base64,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"
            >
            </v-img>
            <h1 class="text-center">Bucksbox</h1>
          </v-col>
          <v-col
            cols="6"
            class="d-flex flex-column justify-center align-center"
          >
            <div>
              <h2>Bucksbox Software Pvt Ltd</h2>
              <p>
                Bucksbox is FINTECH startup operating from Kottiyur Village,
                near to karaikudi, Sivagangai District . Bucksbox is simplifying
                payments and banking via our omni channel platform. Using
                Bucksbox, business's ability to use multiple payment options
                into a single node, consistent and seamless experience connect
                to their customers. Our main impact of our solutions is
                Financial inclusion will encourage , Improving financial
                stability for business - Daily Saving and investments ,
                Encouraging rural impact solution initiative by Tamil Nadu
                Government , Easy to adopt cashless solution initiatives by
                Government of India & Cost effective to adopt high scale
                technology via Bucksbox.
              </p>
              <br>
              <div class="d-flex">
                <v-icon>mdi-phone</v-icon>
                <p>+91 1234567890</p>
              </div>
              <div class="d-flex">
                <v-icon>mdi-map-marker</v-icon>
                <p>Karaikudi</p>
              </div>
              <div class="d-flex">
                <v-icon>mdi-email</v-icon>
                <p>support@buckbox.in</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>
