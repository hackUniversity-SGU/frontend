import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/parcels',
        name: 'parcel',
        component: () => import('@/views/parcel/Map'),
    },
    {
        path: '/profile/tariff',
        name: 'parcel',
        component: () => import('@/views/profile/tariff/Index'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
