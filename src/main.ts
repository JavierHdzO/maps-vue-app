import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

if( !navigator.geolocation ){
    throw new Error('Geolocation is not support for you browser');
}

createApp(App).use(store).use(router).mount("#app");
