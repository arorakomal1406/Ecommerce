<template lang="html">
    <div class="ps-product-list ps-product-list--2">
        <div class="ps-section__header">
            <h3>Recommended Items</h3>
        </div>
        <div class="ps-section__content">
            <div class="ps-carousel" v-swiper:mySwiper="carouselSetting">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="product in products">
                        <product-default :product="product" />
                    </div>
                </div>
                <!--Carousel controls-->
                <div class="swiper-nav">
                    <span class="swiper-arrow swiper-prev"
                        ><i class="icon-chevron-left"></i
                    ></span>
                    <div class="swiper-arrow swiper-next">
                        <i class="icon-chevron-right"></i>
                    </div>
                </div>
                <div class="swiper-pagination swiper-pagination-bullets"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { getColletionBySlug } from '@/utilities/product-helper';
import { carouselFullwidth } from '@/utilities/carousel-helpers';
import ProductDefault from '@/components/elements/product/ProductDefault';

export default {
    name: 'CategoriesRecommendItems',
    components: { ProductDefault },
    props: {
        collectionSlug: {
            type: String,
            default: ''
        }
    },
    computed: {
        ...mapState({
            collections: state => state.collection.collections
        }),
        carouselSetting() {
            return carouselFullwidth;
        },

        products() {
            return getColletionBySlug(this.collections, this.collectionSlug);
        }
    }
};
</script>

<style lang="scss" scoped></style>
