<template lang="html">
    <client-only>
        <div class="ps-product__thumbnail" data-vertical="false">
            <figure>
                <div class="ps-wrapper">
                    <!-- Gallery-->
                    <div
                        class="ps-product__gallery ps-carousel inside swiper"
                        v-swiper:swiperGallery="swiperOptionTop"
                    >
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="image in product.images" :key="image.id"
                            >
                                <img v-if="offline === true" :src="image.url" />
                                <img v-else :src="`${baseURL}${image.url}`" />
                            </div>
                        </div>
                        <div class="swiper-nav">
                            <span class="swiper-arrow swiper-prev">
                                <i class="icon-chevron-left"></i>
                            </span>
                            <div class="swiper-arrow swiper-next">
                                <i class="icon-chevron-right"></i>
                            </div>
                        </div>
                        <div
                            class="swiper-pagination swiper-pagination-bullets"
                        ></div>
                    </div>
                </div>
            </figure>
            <!--Variants-->
            <!--<div
                class="ps-product__variants swiper"
                v-swiper:swiperVariants="swiperOptionThumbs"
            >
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="image in product.images">
                        <img v-if="offline === true" :src="image.url" />
                        <img v-else :src="`${baseURL}${image.url}`" />
                    </div>
                </div>
            </div>-->
        </div>
    </client-only>
</template>

<script>
import { mapState } from 'vuex';
import { baseUrl } from '@/repositories/Repository';
export default {
    name: 'ThumbnailSidebar',
    props: {
        product: {
            type: Object,
            default: {}
        },
        offline: {
            type: Boolean,
            default: () => true
        }
    },
    computed: {
        ...mapState({
            baseURL() {
                return baseUrl;
            }
        })
    },
    data() {
        return {
            swiperOptionTop: {
                loop: false,
                loopedSlides: 45,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                }
            },
            swiperOptionThumbs: {
                direction: 'vertical',
                loop: false,
                loopedSlides: 4,
                spaceBetween: 10,
                slidesPerView: 4,
                touchRatio: 0,
                slideToClickedSlide: true,
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        direction: 'horizontal'
                    }
                }
            }
        };
    },
    methods: {
        handleClickSlide(index) {
            this.activeSlide = index;
            this.swiperVariants.activeIndex = index;
            this.swiperGallery.slideTo(index, 500, false);
        }
    }
};
</script>

<style lang="scss" scoped></style>
