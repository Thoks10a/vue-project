import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueSVGIcon from "vue-svgicon";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import { mdiInstagram } from "vue-material-design-icons/Menu.vue";
import mdiVue from "mdi-vue/v2";
import * as mdijs from "@mdi/js";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueSVGIcon);
Vue.component("menu-icon", MenuIcon);
Vue.component("instagram-icon", mdiInstagram);
Vue.use(mdiVue, {
  icons: mdijs,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
