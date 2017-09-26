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
                    logo: root.concat('resize.jpg'),
                    title: '华人彩票店爆巨奖！女牙医中1.43亿称早有预料',
                    subTitle: '新浪体育',
                    comment: '310'
                }]
            }
        },
        methods: {

        }
    }
</script>