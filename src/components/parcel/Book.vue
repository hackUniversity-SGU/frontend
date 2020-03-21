<template>
    <sui-card>
        <a is="sui-image" :src="cover" href="https://www.labirint.ru/" class="book-cover" />
        <sui-card-content>
            <sui-card-header>{{ title }}</sui-card-header>
            <sui-card-meta>{{ rating }}/5</sui-card-meta>
            <sui-card-description>Количество книг: {{ numberAvailable }}</sui-card-description>
        </sui-card-content>
        <sui-button attached="bottom" color="green">
            <sui-icon name="add" :disabled="numberAvailable === 0" />Зарезервировать</sui-button
        >
    </sui-card>
</template>

<script>
export default {
    props: {
        cover: String,
        title: String,
        rating: Number,
        numberAvailable: Number,
    },
};
</script>

<style lang="scss" scoped>
$card-width: 250px;

.ui.card {
    /* box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1); */
    /* width: 300px; */
    /* height: 300px; */
}

.book-cover {
    height: $card-width;
    width: $card-width;
    object-fit: cover;
}
</style>
