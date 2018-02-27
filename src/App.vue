<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <br><br>
    
    <First></First>
    <Second v-bind:subjects="subjects"></Second>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import First from "./components/First";
import Second from "./components/Second";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    HelloWorld,
    First,
    Second,
    Footer
  },
  data() {
    return {
      subjects: ["HTML", "CSS", "Nodejs", "Laravel"]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
