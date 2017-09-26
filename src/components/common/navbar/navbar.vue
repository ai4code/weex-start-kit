<template>
  <div class="navbar">
    <image :src="msg"  class="navbar-msg"></image>
    <image :src="logo" class="navbar-logo"></image>
    <image :src="search" class="navbar-search"></image>
  </div>
</template>

<style scoped>
  .navbar{
    height: 88px;
    width: 750px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #d43d3d;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .navbar-msg{
    width: 48px;
    height: 48px;
  }

  .navbar-logo{
    width: 166px;
    height: 40px;
    margin: 0 auto;
  }

  .navbar-search{
    width: 48px;
    height: 48px;
  }
</style>

<script>
  import   root from '../../../tools/index'
  export default {
    data() {
      return {
          logo:   root.concat('wap_logo@3x_581de69e.png'),
          msg:    root.concat('feed_ic_message_normal@3x_f2ea949f.png'),
          search: root.concat('feed_ic_search_normal@3x_0f198e56.png')
      }
    },
    methods: {
      
    }
  }
</script>
