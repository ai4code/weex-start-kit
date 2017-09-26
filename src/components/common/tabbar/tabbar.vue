<template>
  <div class="wrapper">
    <div class="content">
      <component :is="currentView"
                 transition="fade"
                 transition-mode="out-in"></component>

    </div>
    <div class="tabbar" append="tree">
      <tabitem
              v-for="item in tabItems"
              :key="item.index"
              :index="item.index"
              :icon="item.icon"
              :title="item.title"
              :titleColor="item.titleColor"
              @tabItemOnClick="tabItemOnClick"
      ></tabItem>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    width: 750px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .content {
    position: absolute;
    top: 88px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .tabbar {
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 88px;
  }
</style>

<script>
    module.exports = {
        props: {
            tabItems: { default: [] },
            selectedColor: { default: '#ff0000' },
            unselectedColor: { default: '#444' }
        },
        data: function () {
            return {
                selectedIndex: 0,
                currentView: 'index'
            }
        },
        components: {
            tabitem:          require('./tabitem.vue'),
            index:            require('../../index/index.vue'),
            watermelon:       require('../../watermelon/index.vue'),
            headline:         require('../../headline/index.vue'),
            login:            require('../../login/index.vue')
        },
        created: function () {
            this.select(this.selectedIndex);
        },
        methods: {
            tabItemOnClick: function (e) {
                this.selectedIndex = e.index;
                this.select(e.index);
                this.$emit('tabBarOnClick', e);
            },
            select: function(index) {
                for(var i = 0; i < this.tabItems.length; i++) {
                    var tabItem = this.tabItems[i];
                    if(i == index){
                        tabItem.icon = tabItem.selectedImage;
                        tabItem.titleColor = this.selectedColor;
                        tabItem.visibility = 'visible';
                        this.currentView = tabItem.src;
                    }
                    else {
                        tabItem.icon = tabItem.image;
                        tabItem.titleColor = this.unselectedColor;
                        tabItem.visibility = 'hidden';
                    }
                }
            },
        }
    }
</script>
