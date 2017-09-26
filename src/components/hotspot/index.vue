<template>
    <div class="container">
        <listItem :listItem="listItem"></listItem>
        <div class="clear"></div>
    </div>
</template>

<style scoped>
    .container{
        overflow: hidden;
    }
    .clear{
        height: 200px;
    }
</style>

<script>
    import   root from '../../tools/index'
    export default {
        components: {
            listItem: require('../common/listitem/listitem.vue')
        },
        data() {
            return{
                listItem:  [{
                    logo: root.concat('resize2.jpg'),
                    title: '最年轻MVP一句话让人泪奔 他还能重回巅峰吗?',
                    subTitle: '新浪体育',
                    comment: '333'
                }]
            }
        },
        methods: {

        }
    }
</script>