<template>
    <div class="container">
        <scroller append="tree" class="scroller">
            <listItem :listItem="listItem"></listItem>
            <rowItem :rowItem="rowItem"></rowItem>
            <listItem :listItem="listItem2"></listItem>
            <rowItem :rowItem="rowItem2"></rowItem>
            <div class="clear"></div>
        </scroller>
    </div>

</template>

<style scoped>
    .container{
        overflow: hidden;
    }
    .scroller{
        flex: 1;
        height:1200px;
    }
    .clear{
        height: 120px;
    }
</style>

<script>
    import   root from '../../tools/index'
    export default {
        components: {
            listItem: require('../common/listitem/listitem.vue'),
            rowItem: require('../common/rowitem/rowitem.vue')
        },
        data() {
            return{
                listItem:  [{
                    logo: root.concat('resize.jpg'),
                    title: '曝卡瓦尼更衣室当面问内马尔:你以为你是梅西？',
                    subTitle: '新浪体育',
                    comment: '15398'
                },
                {
                    logo: root.concat('resize1.jpg'),
                    title: '英超-拉卡泽特梅开二度 阿森纳2-0夺主场10连胜',
                    subTitle: '新浪体育',
                    comment: '1460'
                },
                {
                    logo: root.concat('resize1.jpg'),
                    title: '英超-拉卡泽特梅开二度 阿森纳2-0夺主场10连胜',
                    subTitle: '新浪体育',
                    comment: '1460'
                },
                {
                    logo: root.concat('resize1.jpg'),
                    title: '英超-拉卡泽特梅开二度 阿森纳2-0夺主场10连胜',
                    subTitle: '新浪体育',
                    comment: '1460'
                }],
                rowItem: [{
                    title: '法国航空伴您左右',
                    logo: root.concat('1471013.JPG'),
                    comment: '660'
                }],
                listItem2: [{
                    logo: root.concat('resize.jpg'),
                    title: '曝卡瓦尼更衣室当面问内马尔:你以为你是梅西？',
                    subTitle: '新浪体育',
                    comment: '15398'
                },
                {
                    logo: root.concat('resize1.jpg'),
                    title: '英超-拉卡泽特梅开二度 阿森纳2-0夺主场10连胜',
                    subTitle: '新浪体育',
                    comment: '1460'
                }],
                rowItem2: [{
                    title: '法国航空伴您左右',
                    logo: root.concat('1471013.JPG'),
                    comment: '660'
                }],
            }
        },
        methods: {

        }
    }
</script>