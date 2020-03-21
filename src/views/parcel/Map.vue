<template>
    <fragment>
        <parcel-books :opened="modals.parcelBooks.opened" :closeCallback="closeCallback" :title="modalTitle">
            <template v-slot:content>
                <sui-input fluid class="icon" icon="search" placeholder="Введите название книги" v-model="bookSearch" />
                <sui-menu secondary>
                    <sui-menu-item
                        link
                        v-for="({ genre }, index) in sections"
                        :key="index"
                        :active="index === modals.parcelBooks.activeSectionIndex"
                        @click="modals.parcelBooks.activeSectionIndex = index"
                    >
                        {{ genre }}
                    </sui-menu-item>
                </sui-menu>
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide v-for="(book, index) in activeSection.books" :key="index" style="width: 270px">
                        <book v-bind="book" />
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </template>
        </parcel-books>

        <yandex-map :coords="mapCenter" ymap-class="map" :zoom="14" :controls="controls">
            <ymap-marker
                v-for="({ coords, type }, index) in markers"
                :key="index"
                :markerId="index"
                :coords="coords"
                :icon="type === 'parcel' ? parcel : shop"
                @click="payload => markerClick(payload, index)"
            />
        </yandex-map>
    </fragment>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import parcelIcon from '@/assets/parcel.svg';
import shoppingCart from '@/assets/shopping-cart.svg';
import ParcelBooks from '@/components/modals/ParcelBooks';
import Book from '@/components/parcel/Book';

import hp6 from '@/assets/hp6.jpg';

export default {
    components: {
        ParcelBooks,
        Book,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 'auto',
                spaceBetween: 10,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
            bookSearch: null,
            mapCenter: ['61.664821', '50.818624'],
            markers: [
                {
                    coords: ['61.664821', '50.818624'],
                    address: 'Сыктывкар, ул. Коммунистическая, д. 72',
                    type: 'parcel',
                    sections: [
                        {
                            genre: 'Фантастика',
                            books: [
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 0,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                            ],
                        },
                        {
                            genre: 'Романы',
                            books: [
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                            ],
                        },
                        {
                            genre: 'Детективы',
                            books: [
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 2,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 3,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                            ],
                        },
                    ],
                },
                {
                    coords: ['61.674821', '50.817624'],
                    address: 'Сыктывкар, ул. Коммунистическая, д. 42',
                    type: 'shop',
                    sections: [
                        {
                            genre: 'Фантастика',
                            books: [
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 1,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                            ],
                        },
                        {
                            genre: 'Романы',
                            books: [
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                            ],
                        },
                        {
                            genre: 'Детективы',
                            books: [
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 2,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 3,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                                {
                                    title: 'Гарри Поттер и Принц-полукровка',
                                    numberAvailable: 3,
                                    cover: hp6,
                                    rating: 4.7,
                                },
                            ],
                        },
                    ],
                },
            ],
            controls: ['searchControl', 'zoomControl', 'geolocationControl'],
            parcel: {
                layout: 'default#imageWithContent',
                imageHref: parcelIcon,
                imageSize: [35, 35],
                imageOffset: [0, 0],
                content: 'Постамат',
                contentOffset: [-12, 35],
                contentLayout: '<div style="color: #000000; font-weight: bold;">$[properties.iconContent]</div>',
            },
            shop: {
                layout: 'default#imageWithContent',
                imageHref: shoppingCart,
                imageSize: [35, 35],
                imageOffset: [0, 0],
                content: 'Лабиринт.ру',
                contentOffset: [-18, 35],
                contentLayout: '<div style="color: #000000; font-weight: bold;">$[properties.iconContent]</div>',
            },
            modals: {
                parcelBooks: {
                    opened: false,
                    id: null,
                    activeSectionIndex: null,
                },
            },
        };
    },
    methods: {
        markerClick(payload, id) {
            this.modals.parcelBooks.opened = true;
            this.modals.parcelBooks.id = id;
            this.modals.parcelBooks.activeSectionIndex = 0;
        },
        closeCallback(payload) {
            console.log(payload);

            if (payload === 'closed') {
                this.modals.parcelBooks.id = null;
                this.modals.parcelBooks.activeSectionIndex = null;
            } else if (payload === undefined) {
                this.modals.parcelBooks.opened = false;
            }
        },
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
    },
    // watch: {
    //     bookSearch() {
    //         this.
    //     }
    // }
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
    bottom: -6px;
}

.swiper-container {
    padding-bottom: 15px;
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
</style>
