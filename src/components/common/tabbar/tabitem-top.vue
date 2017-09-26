<template>
  <div
    :style="{ backgroundColor: backgroundColor }"
    class="container"
    @click="onclickitem">
    <text
      :style="{ color: titleColor }"
      class="tab-text">{{title}}</text>
  </div>
</template>

<style scoped>
  .container {
    flex-direction: column;
    align-items:center;
    justify-content:center;
    height: 88px;
    margin-left: 50px;
  }
  .top-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
  }
  .tab-icon {
    margin-top: 5px;
    width: 40px;
    height: 40px;
  }
  .tab-icon-scan {
    margin-top: 5px;
    width: 70px;
    height: 70px;
  }
  .tab-text {
    margin-top: 5px;
    text-align: center;
    font-size: 34px;
    height: 88px;
    line-height: 88px;
    background-color: #F0F0F0;
  }
</style>

<script>
  module.exports = {
    props: {
      index: { default: 0 },
      title: { default: '' },
      titleColor: { default: '#000000' },
      icon: { default: '' },
      backgroundColor: { default: '#ffffff' }
    },
    methods: {
      onclickitem: function (e) {
        var params = {
          index: this.index
        };
        this.$emit('tabItemOnClick', params);
      }
    }
  }
</script>
