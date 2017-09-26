<template>
    <div class="body">
        <wx-navbar></wx-navbar>
        <wx-tabbar
                :tabItems="tabItems"
                @tabBarOnClick="tabBarOnClick"></wx-tabbar>
    </div>
</template>

<style scoped>
    .body {
        flex-direction: column;
    }
</style>

<script>
  import root   from   '../tools/index'
  export default {
    components: {
        wxNavbar:   require('./common/navbar/navbar.vue'),
        wxTabbar:   require('./common/tabbar/tabbar.vue')
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
              title: '首页',
              titleColor: '#444',
              icon: '',
              image: root.concat('home.png'),
              selectedImage: root.concat('homed.png'),
              src: 'index',
              visibility: 'visible',
          },
          {
              index: 1,
              title: '西瓜视频',
              titleColor: '#444',
              icon: '',
              image: root.concat('term.png'),
              selectedImage: root.concat('termed.png'),
              src: 'watermelon',
              visibility: 'hidden',
          },
          {
              index: 2,
              title: '微头条',
              titleColor: '#444',
              icon: '',
              image: root.concat('term.png'),
              selectedImage: root.concat('termed.png'),
              src: 'headline',
              visibility: 'hidden',
          },
          {
              index: 3,
              title: '未登录',
              titleColor: '#444',
              icon: '',
              image: root.concat('super.png'),
              selectedImage: root.concat('supered.png'),
              src: 'login',
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