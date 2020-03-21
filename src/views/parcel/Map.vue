<template>
  <fragment>
    <div class="search-box">
      <sui-button circular class="icon search-icon" icon="search" size="large" slot="trigger" />
      <div class="global-search">
        <sui-input placeholder="Введите название книги" v-model="globalSearch" />
        <div class="result-box" v-if="globalSearchByPlaces.find(place => place.books.length)">
          <div
            class="place"
            v-for="(place, index) in globalSearchByPlaces"
            :key="index"
            v-if="place.books.length"
          >
            <h3 is="sui-header" @click="mapCenter = place.coords">{{ place.title }}</h3>
            <div
              class="place-book"
              v-for="(book, index) in place.books"
              v-if="index < 2"
              :key="index"
            >
              <div class="title">
                <b>{{ book.title }}</b>
              </div>
              <sui-button
                attached="bottom"
                :color="book.numberAvailable === 0 ? 'blue' : 'green'"
                @click="() => reserveFromGlobalSearch(place.mId, book.sId, book.bId)"
                :disabled="book.wasReserved"
                :loading="book.reserving && !book.wasReserved"
                class="compact"
                basic
              >
                <sui-icon name="bell outline" v-if="book.numberAvailable === 0" />
                {{ book.numberAvailable === 0 ? "Уведомить" : book.wasReserved ? "Зарезервировано" : "Зарезервировать" }}
              </sui-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <parcel-books
      :opened="modals.parcelBooks.opened"
      :closeCallback="closeCallback"
      :title="modalTitle"
    >
      <template v-slot:content>
        <sui-input
          fluid
          class="icon"
          icon="search"
          placeholder="Введите название книги"
          v-model="search"
        />
        <sui-container v-if="search && foundedBooks.length" style="margin-top: 20px">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(book, index) in foundedBooks" :key="index" style="width: 250px">
              <book v-bind="book" :reserve="() => reserve(index)" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </sui-container>
        <div
          v-else-if="search && !foundedBooks.length"
          style="margin-top: 20px"
        >К сожалению, такой книги здесь нет.</div>
        <fragment v-else>
          <sui-menu secondary>
            <sui-menu-item
              link
              v-for="({ genre }, index) in sections"
              :key="index"
              :active="index === modals.parcelBooks.activeSectionIndex"
              @click="modals.parcelBooks.activeSectionIndex = index"
            >{{ genre }}</sui-menu-item>
          </sui-menu>
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide
              v-for="(book, index) in activeSection.books"
              :key="index"
              style="width: 250px"
            >
              <book v-bind="book" :reserve="() => reserve(index)" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </fragment>
      </template>
    </parcel-books>

    <yandex-map :coords="mapCenter" ymap-class="map" :zoom="15" :controls="controls">
      <ymap-marker
        v-for="({ coords, type }, index) in markers"
        :key="index"
        :markerId="index"
        :coords="coords"
        :icon="type === 'parcel' ? parcel : shop"
        @click="payload => markerClick(payload, index)"
        class="marker"
      />
    </yandex-map>
  </fragment>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import parcelIcon from "@/assets/parcel.svg";
import shoppingCart from "@/assets/shopping-cart.svg";
import ParcelBooks from "@/components/modals/ParcelBooks";
import Book from "@/components/parcel/Book";
import markers from "./markers";

export default {
  components: {
    ParcelBooks,
    Book,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      search: null,
      globalSearch: null,
      mapCenter: ["61.668165", "50.829472"],
      markers,
      controls: ["zoomControl", "geolocationControl"],
      parcel: {
        layout: "default#imageWithContent",
        imageHref: parcelIcon,
        imageSize: [35, 35],
        imageOffset: [0, 0],
        content: "Постамат",
        contentOffset: [-12, 35],
        contentLayout:
          '<div style="color: #000000; font-weight: bold;">$[properties.iconContent]</div>'
      },
      shop: {
        layout: "default#imageWithContent",
        imageHref: shoppingCart,
        imageSize: [35, 35],
        imageOffset: [0, 0],
        content: "Лабиринт.ру",
        contentOffset: [-18, 35],
        contentLayout:
          '<div style="color: #000000; font-weight: bold;">$[properties.iconContent]</div>'
      },
      modals: {
        parcelBooks: {
          opened: false,
          id: null,
          activeSectionIndex: null
        }
      }
      //   globalSearchByPlaces: []
      //   globalSearchByPlaces: [
      //     {
      //       title: "Сыктывкар, Первомайская ул., 62",
      //       books: []
      //     },
      //     {
      //       title: "Сыктывкар, Коммунистическая ул., 47",
      //       books: []
      //     }
      //   ]
    };
  },
  methods: {
    markerClick(payload, id) {
      this.modals.parcelBooks.opened = true;
      this.modals.parcelBooks.id = id;
      this.modals.parcelBooks.activeSectionIndex = 0;
    },
    closeCallback(payload) {
      if (payload === "closed") {
        this.modals.parcelBooks.id = null;
        this.modals.parcelBooks.activeSectionIndex = null;
      } else if (payload === undefined) {
        this.modals.parcelBooks.opened = false;
      }
    },
    reserveFromGlobalSearch(marker, section, bookId) {
      console.log(marker);

      const book = this.markers[marker].sections[section].books[bookId];

      if (book.numberAvailable > 0) {
        book.reserving = true;

        setTimeout(() => {
          book.wasReserved = true;
          book.reserving = false;
        }, 400);
      }
    },
    reserve(index) {
      const markerId = this.modals.parcelBooks.id;
      const activeSection = this.modals.parcelBooks.activeSectionIndex;

      const book = this.markers[markerId].sections[activeSection].books[index];

      if (book.numberAvailable > 0) {
        book.reserving = true;
        console.log(book.reserving);

        setTimeout(() => {
          book.wasReserved = true;
          book.reserving = false;
        }, 400);
      }
    }
  },
  computed: {
    activeGenres() {
      return this.sections.map(({ genre }) => genre);
    },
    activeSection() {
      const activeSection = this.modals.parcelBooks.activeSectionIndex;
      return activeSection !== null ? this.sections[activeSection] : [];
    },
    sections() {
      const parcelId = this.modals.parcelBooks.id;
      return parcelId !== null ? this.markers[parcelId].sections : [];
    },
    modalTitle() {
      const markerId = this.modals.parcelBooks.id;
      const address = markerId !== null && this.markers[markerId].address;

      return `Книги по адресу ${address}`;
    },
    placeBooks() {
      const markerId = this.modals.parcelBooks.id;
      return (
        (markerId !== null &&
          this.markers[markerId].sections
            .map(section => section.books)
            .reduce((acc, books) => (acc.push(...books), acc), [])) ||
        []
      );
    },
    foundedBooks() {
      return this.placeBooks.filter(book =>
        new RegExp(this.search, "iu").test(book.title)
      );
    },
    aggregateBooksByPlace() {
      const places = {};

      this.markers.forEach((marker, mId) => {
        marker.sections.forEach((section, sId) => {
          section.books.forEach((book, bId) => {
            if (places[marker.address]) {
              places[marker.address].books.push({ ...book, bId, sId });
            } else {
              places[marker.address] = {
                mId,
                coords: marker.coords,
                books: [{ ...book, bId, sId }]
              };
            }
          });
        });
      });

      return places;
    },
    globalSearchByPlaces() {
      return Object.entries(this.aggregateBooksByPlace).map(
        ([title, place]) => ({
          title,
          mId: place.mId,
          coords: place.coords,
          books: place.books.filter(
            book =>
              this.globalSearch &&
              new RegExp(this.globalSearch, "iu").test(book.title)
          )
        })
      );
    }
  }
};
</script>

<style lang="scss">
.map {
  width: 100%;
  height: calc(100vh - 70px);
}

.book-section {
  margin-bottom: 30px;
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -2px;
}

.swiper-container {
  padding-bottom: 20px;
}

.ui.input {
  margin-top: 3px;
  border-radius: 10px;

  input {
    border-radius: 10px;

    &:focus {
      box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
    }
  }
}

.ui.secondary.menu {
  .item {
    border-bottom: 3px solid transparent;

    &:hover {
      background: transparent !important;
    }

    &.active {
      background: transparent !important;
      border-radius: 0px !important ;
      border-bottom: 3px solid #333;
    }
  }
}

.search-box {
  position: absolute;
  z-index: 2;
  right: 10px;
  top: 10px;
  &:hover {
    .global-search {
      transform: scaleY(1);
      pointer-events: unset;
      height: auto;
      opacity: 1;
    }
  }
}

.global-search {
  opacity: 0;
  min-height: 41px;
  width: 600px;
  transform: scaleY(0.7);
  position: absolute !important;
  top: 0px;
  right: 0px;
  background: #fff !important;
  z-index: 2;
  border-radius: 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1) !important;
  transition: all 0.2s ease-in-out;
  transform-origin: right top;
  pointer-events: none;
  overflow: hidden;

  .ui.input {
    width: 100%;
    height: 41.3px;
    margin-right: -41.3px;
    opacity: 0;
    box-shadow: unset !important;
    position: relative;
    z-index: 1;
    margin-top: 0;

    input {
      border-radius: 20px;
      background: #fff !important;
      box-shadow: unset !important;

      border: none;
      color: black;
    }
  }

  &:hover {
    .ui.input {
      opacity: 1;
      pointer-events: unset;
      position: relative;
      z-index: 2;
    }
  }

  .result-box {
    padding: 20px;
    padding-bottom: 10px;
    width: 600px;
    background: white;
    box-sizing: border-box;
    max-height: 600px;
    overflow: auto;

    h3 {
      margin-bottom: 0 !important;
      cursor: pointer;
    }

    .ui.button {
      box-sizing: border-box;
      width: 200px;
      border-radius: 10px !important;
    }

    .place:not(:last-child) {
      margin-bottom: 20px;
    }

    .place-book {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
    }
  }
}
</style>
