<template>
  <main class="container mt-4" id="login">
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" class="col-md-6 col-sm-12">
        <vs-alert :active.sync="active" closable close-icon="cancel">
          {{message}}
        </vs-alert>
        <vs-card>
          <div slot="header">
            <h3>Welcome back!!</h3>
          </div>
          <section class="login-main">
            <vs-input label-placeholder="Pleaser enter your Email" vs-w="3" v-model="email"/>
            <vs-input type="password" label-placeholder="Password" vs-w="3" v-model="password"/>
            <vs-button size="large" @click="login" class="btn-block">Sign up</vs-button>
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
      password: "",
      active:false,
      message:''
    };
  },
  watch: {},
  methods: {
    async login() {
      try {
        await AuthService.login({
          email: this.email,
          password: this.password
        });
      } catch (err) {
        this.active="true",
        this.message = err.response.data.message
      }
    }
  },
  mounted() {}
};
</script>
