<template>
    <div><wxTabbarTop
            :tabItems="tabItems"
            @tabBarOnClick="tabBarOnClick"></wxTabbarTop>
    </div>
</template>

<style scoped>

</style>

<script>

    export default {
        components: {
            wxTabbarTop:   require('../common/tabbar/tabbar-top.vue')
        },
        data() {
            return{
                selectedIndex: 0,
                options: {
                    "unselectedColor": "#cbd1e4",
                    "pattern": "special",
                    "selectedColor": "#03753a",
                    "selectedIndex": 0
                },
                tabItems: [{
                    index: 0,
                    title: '推荐',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: 'recommend',
                    visibility: 'visible',
                },
                {
                    index: 1,
                    title: '热点',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: 'hotspot',
                    visibility: 'hidden',
                },
                {
                    index: 2,
                    title: '本地',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: 'entertainment',
                    visibility: 'hidden',
                },
                {
                    index: 3,
                    title: '视频',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: '_video',
                    visibility: 'hidden',
                },
                {
                    index: 4,
                    title: '订阅',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: 'sociology',
                    visibility: 'hidden',
                },
                {
                    index: 5,
                    title: '社会',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: 'sociology',
                    visibility: 'hidden',
                },
                {
                    index: 6,
                    title: '娱乐',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: 'sociology',
                    visibility: 'hidden',
                },
                {
                    index: 7,
                    title: '问答',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: 'sociology',
                    visibility: 'hidden',
                },
                {
                    index: 8,
                    title: '科技',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: 'sociology',
                    visibility: 'hidden',
                },
                {
                    index: 9,
                    title: '汽车',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: 'sociology',
                    visibility: 'hidden',
                },
                {
                    index: 10,
                    title: '体育',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: 'sociology',
                    visibility: 'hidden',
                },
                {
                    index: 11,
                    title: '财经',
                    titleColor: '#444',
                    icon: '',
                    image: '',
                    selectedImage: '',
                    src: 'sociology',
                    visibility: 'hidden',
                }]
            }
        },
        methods: {
            tabBarOnClick: function(e) {
                console.log('tabBarOnClick', e.index)
            }
        }
    }
</script>