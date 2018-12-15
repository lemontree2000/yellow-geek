import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import { createProvider } from "./vue-apollo";
import "./vue-class-config";
import "./router/progressEx";
import "swiper/dist/css/swiper.css";
import "./styles/index.less";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
