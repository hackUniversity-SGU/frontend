import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import YmapPlugin from 'vue-yandex-maps';
import { Plugin } from 'vue-fragment';

import 'semantic-ui-css/semantic.min.css';

// Vue.component(EmptyView);

const settings = {
    apiKey: '',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1',
};

Vue.use(YmapPlugin, settings);
Vue.use(Plugin);
Vue.use(SuiVue);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
