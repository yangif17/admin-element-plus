import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 1.Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 2.public.css
import "./style/public.css"
// 3.
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");