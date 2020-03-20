import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import EmptyView from '@/components/EmptyView';
import YmapPlugin from 'vue-yandex-maps';

Vue.component(EmptyView);

const settings = {
    apiKey: '',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1',
};

Vue.use(YmapPlugin, settings);

Vue.config.productionTip = false;

Vue.use(SuiVue);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
