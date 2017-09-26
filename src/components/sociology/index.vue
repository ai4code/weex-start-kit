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
                    title: '细数与易建联有染的6位女人，刘亦菲也曾迷恋易帝！',
                    subTitle: '新浪体育',
                    comment: '1315'
                }]
            }
        },
        methods: {

        }
    }
</script>