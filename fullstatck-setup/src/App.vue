<template>
  <div id="app">
    <div>
      <vs-navbar  class="nabarx">
        <vs-navbar-title>Demo app </vs-navbar-title>
        <vs-spacer></vs-spacer>
        <vs-navbar-item index="0">
          <router-link to="/">Home</router-link>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <router-link to="/register">Register</router-link>
        </vs-navbar-item>
      </vs-navbar>
    </div>
    <router-view/>
  </div>
</template>
