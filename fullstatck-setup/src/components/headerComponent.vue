<template>
  <div>
    <vs-navbar v-model="activeItem" class="navbar navbar-expand-sm bg-light">
      <div class="container">
        <vs-button @click="active=!active" type="flat" radius="50%" icon="menu" v-if="show"></vs-button>
        <vs-navbar-title class="navbar-brand float-left">Nischaya.com</vs-navbar-title>
        <vs-navbar-item index="1" class="nav-link">
          <a href="#">Browse</a>
        </vs-navbar-item>
        <ul class="navbar-nav">
          <vs-navbar-item index="2" class="nav-link">
            <router-link to="login">Login</router-link>
          </vs-navbar-item>
          <vs-navbar-item index="3" class="nav-link">
            <router-link to="register">Register</router-link>
          </vs-navbar-item>
        </ul>
      </div>
    </vs-navbar>
    <div id="parentx" v-if="show">
      <vs-sidebar
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
      >
        <div class="header-sidebar" slot="header">
          <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
          <h4>My Name
            <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
          </h4>
        </div>
        <vs-sidebar-item index="1" icon="question_answer">Dashboard</vs-sidebar-item>
        <vs-sidebar-item index="2" icon="gavel">History</vs-sidebar-item>
        <vs-divider icon="person" position="left">User</vs-divider>
        <vs-sidebar-item index="3" icon="verified_user">Configurations</vs-sidebar-item>
        <vs-sidebar-item index="4" icon="account_box">Perfile</vs-sidebar-item>
        <vs-sidebar-item index="5">Card</vs-sidebar-item>
        <div class="footer-sidebar" slot="footer">
          <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
          <vs-button icon="settings" color="primary" type="border"></vs-button>
        </div>
      </vs-sidebar>
    </div>
  </div>
</template>

<style>
.navbar-nav {
  display: flex !important;
  flex-direction: row !important;
  margin-left: auto;
}
</style>

<script>
export default {
  data: () => ({
    active: false,
    show:true
  })
};
</script>

