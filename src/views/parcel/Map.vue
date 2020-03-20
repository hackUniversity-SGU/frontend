<template>
    <yandex-map :coords="coords" ymap-class="map" :zoom="14">
        <yandex-marker />
    </yandex-map>
</template>

<script>
export default {
    data() {
        return {
            coords: ['61.663811', '50.818624'],
        };
    },
};
</script>

<style lang="scss">
.map {
    width: 100%;
    height: 100vh;
}
</style>
