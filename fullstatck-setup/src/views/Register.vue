<template>
  <main class="container mt-4" id="register">
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" class="col-md-6 col-sm-12">
        <vs-card>
          <div slot="header">
            <h3>Please register</h3>
          </div>
          <section class="register-main">
            <vs-input label-placeholder="Pleaser enter your Email" vs-w="3" v-model="email"/>
            <vs-input type="password" label-placeholder="Password" vs-w="3" v-model="password"/>
            <vs-button size="large" @click="register">Sign up</vs-button>
          </section>
        </vs-card>
      </vs-col>
    </vs-row>
  </main>
</template>

<script>
import AuthService from "../services/authService.js";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  watch: {},
  methods: {
    async register() {
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      });
      console.log("response is found", response.data)
    }
  },
  mounted() {}
};
</script>
