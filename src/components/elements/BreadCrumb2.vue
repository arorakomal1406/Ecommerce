<template lang="html">
    <div class="ps-breadcrumb--2">
        <ul class="breadcrumb">
            <template v-for="item in breadcrumb"  :key="item.id">
                <li v-if="item.url" :key="item.text">
                    <nuxt-link :to="item.url">
                        <a>{{ item.text }}</a>
                    </nuxt-link>
                </li>
                <li v-else>{{ item.text }}</li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'BreadCrumb2',
    props: {
        breadcrumb: {
            type: Array,
            default: []
        },
        layout: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss" scoped></style>
