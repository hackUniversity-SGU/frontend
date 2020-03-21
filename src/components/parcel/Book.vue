<template>
    <sui-card :class="{ disabled: numberAvailable === 0 }">
        <div class="image-rating">
            <sui-rating :rating="rating" :max-rating="5" />
            <a href="https://www.labirint.ru/"><sui-image :src="cover" class="book-cover"/></a>
        </div>
        <sui-card-content>
            <sui-card-header>{{ title }}</sui-card-header>
            <sui-card-description
                >{{
                    numberAvailable === 0 ? 'На данный момент все книги взяты' : 'Количество книг: ' + numberAvailable
                }}
            </sui-card-description>
        </sui-card-content>
        <sui-button attached="bottom" color="green" :disabled="numberAvailable === 0">
            <sui-icon name="add" />{{ numberAvailable === 0 ? 'Зарезервировано' : 'Зарезервировать' }}</sui-button
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
    box-shadow: unset;
    width: $card-width;
    padding: 10px;

    &.disabled {
        opacity: 0.6;
    }

    .image-rating {
        position: relative;

        .ui.rating {
            position: absolute;
            z-index: 10;
            padding: 5px;
            margin: 5px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 10px;
        }
    }

    img {
        border: none !important;
        border-radius: 10px !important;
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15) !important;
    }

    .content {
        border: none;
        padding: 15px 0;
    }

    .header {
        margin-bottom: 5px;
        font-size: 1.2rem !important;
    }
}

.ui.card > .button,
.ui.card > .buttons,
.ui.cards > .card > .button,
.ui.cards > .card > .buttons {
    width: auto;
    border-radius: 10px !important;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2) !important;
}

.book-cover {
    height: $card-width;
    width: $card-width;
    object-fit: cover;
}
</style>
