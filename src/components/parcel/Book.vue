<template>
  <sui-card :class="{ disabled: numberAvailable === 0 }">
    <div class="image-rating">
      <sui-rating :rating="rating" :max-rating="5" />
      <a :href="source || 'https://www.labirint.ru/'">
        <sui-image :src="cover" class="book-cover" />
      </a>
    </div>
    <sui-card-content>
      <sui-card-header>{{ title }}</sui-card-header>
      <sui-card-description>
        {{
        numberAvailable === 0 ? 'На данный момент все книги взяты' : 'Количество книг: ' + numberAvailable
        }}
      </sui-card-description>
    </sui-card-content>
    <sui-button
      attached="bottom"
      :color="numberAvailable === 0 ? 'blue' : 'green'"
      @click="reserve"
      :disabled="wasReserved"
      :loading="reserving && !wasReserved"
    >
      <sui-icon name="bell outline" v-if="numberAvailable === 0" />
      {{ reservseButtonText }}
    </sui-button>
  </sui-card>
</template>

<script>
export default {
  props: {
    cover: String,
    source: String,
    title: String,
    wasReserved: Boolean,
    rating: Number,
    numberAvailable: Number,
    reserve: Function,
    reserving: Boolean
  },
  updated() {
    console.log(this.reserving, this.wasReserved);
  },
  computed: {
    reservseButtonText() {
      return this.numberAvailable === 0
        ? "Уведомить"
        : this.wasReserved
        ? "Зарезервировано"
        : "Зарезервировать";
    }
  }
};
</script>

<style lang="scss" scoped>
:root {
  --card-width: 240px;
}

.ui.card {
  box-shadow: unset;
  width: var(--card-width);
  padding: 10px;

  .image-rating {
    position: relative;
    width: var(--card-width);

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
    width: var(--card-width);
  }

  .header {
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 5px;
    font-size: 1.2rem !important;
    height: 42px;
    width: var(--card-width);
  }
}

.ui.card > .button,
.ui.card > .buttons,
.ui.cards > .card > .button,
.ui.cards > .card > .buttons {
  box-sizing: border-box;
  width: var(--card-width);
  border-radius: 10px !important;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2) !important;
}

.book-cover {
  max-height: var(--card-width);
  max-width: var(--card-width);
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
