import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import YmapPlugin from 'vue-yandex-maps';
import { Plugin } from 'vue-fragment';
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)

// import VueCarousel from 'vue-carousel';
// import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'semantic-ui-css/semantic.min.css';
import 'slick-carousel/slick/slick.css';

// Vue.component(EmptyView);

const settings = {
    apiKey: '',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1',
};

// Vue.use(VueCarousel);
Vue.use(YmapPlugin, settings);
Vue.use(Plugin);
Vue.use(SuiVue);
// Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
