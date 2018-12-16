<template>
  <div id="app">
    <header-component></header-component>
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>
<script>
import HeaderComponent from "./components/headerComponent";
export default {
  name: "app",
  components: {
    HeaderComponent
  }
};
</script>
