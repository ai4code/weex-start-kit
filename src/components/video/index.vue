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
                    logo: root.concat('resize1.jpg'),
                    title: '鲁媒：暴力事件+默契球重现赛场 中国足球！呵呵',
                    subTitle: '新浪体育',
                    comment: '3103'
                }]
            }
        },
        methods: {

        }
    }
</script>