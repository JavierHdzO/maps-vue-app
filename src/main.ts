import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic21qYXZpZXJ0ZXN0IiwiYSI6ImNsZDFiczZ1NDAzMmgzdmxkbHc4MHlvaTgifQ.ywPpOAIxTBbbIbwR7AbooQ';

if( !navigator.geolocation ){
    throw new Error('Geolocation is not support for you browser');
}

createApp(App).use(store).use(router).mount("#app");
