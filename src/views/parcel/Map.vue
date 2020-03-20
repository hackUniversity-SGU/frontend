<template>
    <fragment>
        <sui-modal v-model="opened">
            <sui-modal-header>asdasd</sui-modal-header>
            <sui-modal-content>
                asdsadsadasd
            </sui-modal-content>
        </sui-modal>
        <yandex-map :coords="mapCenter" ymap-class="map" :zoom="14" :controls="controls">
            <ymap-marker
                v-for="(coords, index) in markerCoords"
                :key="index"
                :markerId="index"
                :coords="coords"
                :icon="icon"
                @click="markerClick"
            />
        </yandex-map>
    </fragment>
</template>

<script>
import parcelIcon from '@/assets/parcel.svg';

export default {
    data() {
        return {
            opened: true,
            mapCenter: ['61.664821', '50.818624'],
            markerCoords: [
                ['61.664821', '50.818624'],
                ['61.674821', '50.817624'],
            ],
            controls: ['searchControl', 'zoomControl', 'geolocationControl'],
            icon: {
                layout: 'default#imageWithContent',
                imageHref: parcelIcon,
                imageSize: [35, 35],
                imageOffset: [0, 0],
                content: 'Постамат',
                contentOffset: [-11, 35],
                contentLayout: '<div style="color: #000000; font-weight: bold;">$[properties.iconContent]</div>',
            },
        };
    },
    methods: {
        markerClick(payload) {
            console.log({ ...payload._cache });

            console.log(payload._cache.pagePixels);
        },
    },
};
</script>

<style lang="scss">
.map {
    width: 100%;
    height: 100vh;
}
</style>
