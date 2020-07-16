import Vue from "vue";
import ExampleComponent from "./components/ExampleComponent.vue";
import router from "./router";
import store from "./store";

Vue.component("example", ExampleComponent);

new Vue({
  router,
  store,

  el: "#app",
});
