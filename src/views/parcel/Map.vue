<template>
    <fragment>
        <parcel-books :opened="modals.parcelBooks.opened" :closeCallback="closeCallback" :title="`asd`">
            <template v-slot:content>
                <sui-menu secondary>
                    <sui-menu-item
                        link
                        v-for="({ genre }, index) in sections"
                        :key="index"
                        :active="index === activeSection"
                        @click="activeSection = index"
                    >
                        {{ genre }}
                    </sui-menu-item>
                </sui-menu>
                <!-- <sui-container> -->
                <!-- <swiper class="swiper" :options="swiperOption">
                    <book v-bind="book" v-for="(book, index) in sections[activeSection].books" :key="index" />
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper> -->
                <VueSlickCarousel v-bind="carouselSettings">
                    <book
                        v-bind="book"
                        v-for="(book, index) in sections[activeSection].books"
                        :key="index"
                        style="width: 250px"
                    />
                </VueSlickCarousel>
                <!-- </sui-container> -->
            </template>
        </parcel-books>

        <yandex-map :coords="mapCenter" ymap-class="map" :zoom="14" :controls="controls">
            <ymap-marker
                v-for="({ coords }, index) in markers"
                :key="index"
                :markerId="index"
                :coords="coords"
                :icon="icon"
                @click="payload => markerClick(payload, index)"
            />
        </yandex-map>
    </fragment>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import parcelIcon from '@/assets/parcel.svg';
import ParcelBooks from '@/components/modals/ParcelBooks';
import Book from '@/components/parcel/Book';

import hp6 from '@/assets/hp6.jpg';

export default {
    components: {
        ParcelBooks,
        Book,
        VueSlickCarousel,
    },
    data() {
        return {
            // swiperOption: {
            //     slidesPerView: 'auto',
            //     spaceBetween: 30,
            //     pagination: {
            //         el: '.swiper-pagination',
            //         clickable: true,
            //     },
            // },
            carouselSettings: {
                dots: false,
                // infinite: true,
                // centerMode: true,
                centerPadding: '20px',
                // slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            },
            mapCenter: ['61.664821', '50.818624'],
            activeSection: 0,
            markers: [
                {
                    coords: ['61.664821', '50.818624'],
                    address: 'Сыктывкар, ул. Коммунистическая, д. 72',
                    sections: [
                        {
                            genre: 'Фантастика',
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
                    ],
                },
                // {
                //     coords: ['61.674821', '50.817624'],
                // },
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
            modals: {
                parcelBooks: {
                    opened: true,
                    id: 0,
                },
            },
        };
    },
    methods: {
        markerClick(payload, id) {
            this.modals.parcelBooks.opened = true;
            this.modals.parcelBooks.id = id;
        },
        closeCallback() {
            this.modals.parcelBooks.opened = false;
            this.modals.parcelBooks.id = null;
        },
    },
    computed: {
        sections() {
            const parcelId = this.modals.parcelBooks.id;
            return parcelId !== null ? this.markers[parcelId].sections : [];
        },
    },
};
</script>

<style lang="scss">
.map {
    width: 100%;
    height: calc(100vh - 70px);
}

.VueCarousel-inner {
    padding: 2px;
}

.book-section {
    margin-bottom: 30px;
}

.slick-prev {
    left: 10px;
}

.slick-next {
    right: 10px;
}

.slick-prev,
.slick-next {
    // background: transparent;
    // color: black;
    &:before {
        color: #333;
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
