import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//WOW.js
import "animate.css";
import WOW from "wow.js";
new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 0,
    mobile: true,
    live: true,
  }).init();

//vue-loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("loading", Loading);

app.mount('#app')
