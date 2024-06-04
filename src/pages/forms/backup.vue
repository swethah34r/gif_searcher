<template>
    <div>
        <div>
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-img class="mx-auto h-screen"
                            src="https://amsp.ao/mp/images/products/46-pos-imin-d4-503-3.jpg"></v-img>
                    </v-col>
                    <v-col cols="12" md="6" class="mt-16">
                        <v-img class="mx-auto mt-16" max-width="460"
                            src="https://bucksbox-images.blr1.cdn.digitaloceanspaces.com/cms/Untitled%20design%20(10).png"></v-img>
                        <v-card class="mx-auto pa-12 mt-n8" flat max-width="448" rounded="lg">
                            <!-- <v-alert type="warning" v-if="msg" dense>
                                {{ msg }}
                            </v-alert> -->
                            <alert class="mt-2" v-if="msg != null" :type="type" :msg="msg" />
                            <div class="text-subtitle-1 text-medium-emphasis">User Name</div>
                            <v-text-field v-model="username" placeholder="Username"
                                prepend-inner-icon="mdi-email-outline" variant="outlined">
                                </v-text-field>

                            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                                Password
                                <a class="text-caption text-decoration-none text-blue" href="#"
                                    rel="noopener noreferrer" target="_blank">
                                    Forgot login password?</a>
                            </div>
                            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="visible ? 'text' : 'password'" v-model="password"
                                placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline"
                                variant="outlined" @click:append-inner="visible = !visible"></v-text-field>
                            <v-btn class="mb-8" color="blue" size="large" variant="tonal" @click="login()" block>
                                Log In
                            </v-btn>

                            <v-card-text class="text-center">
                                <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer"
                                    target="_blank">
                                    Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                                </a>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- <v-container  >
<v-row justify="center" style="height: 400px;">    
            <v-col md="6" align-self="center">
                <v-sheet class="pa-2 ma-2">
                    <v-text-field v-model="username" solo label="Enter mobile nuber"></v-text-field>
                    <v-text-field v-model="password" solo label="Enter password"></v-text-field>
                    <v-btn @click="login" block color="primary">Login</v-btn>
                    {{err}}
                </v-sheet>
            </v-col>
        </v-row> 
    </v-container> -->
    </div>
</template>
<script>
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useAppStore } from '@/stores/app'
import { reactive, computed } from 'vue'
export default {
    setup() {
        // const state = reactive({
        //     username: '',
        //     password: '',
        // })
        const rules = computed(() => {
            return {
                username: { required },
                password: { required },
            }
        })
        const app = useAppStore();
        const v$ = useValidate(rules)
        return {  v$ , app }
    },
    data() {
        return {
            v$: useValidate(),
            username: '',
            password: '',
            err: "",
            type: "warning",
            visible: false,
            msg: null,
        }
    },
    methods: {
        async login() {
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) {
                try {
                    let data = await this.app.login({
                        username: this.username,
                        password: this.password
                    })
                    console.log(data)
                    this.$router.push("/pos")

                    //console.log("User",data)
                    /*if(data.login){ 
                        this.$router.push("/home")
                       // this.$router.push("/dashboard")
                    }*/
                } catch (e) {
                    console.log(e)
                    this.err = e
                }
            } else {
                console.error("err");
                this.msg = "Enter valid Information"
               // alert('Form failed validation')
            }

        }
    },
    validations() {
        return {
            username: { required },
            password: { required },
        }
    },

}
</script>