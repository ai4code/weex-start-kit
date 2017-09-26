<template>
  <div>
    <div class="row-item" v-for="item in rowItem">
        <text>{{item.title}}</text>
        <div class="row-item-logo">
            <image :src="item.logo" class="row-logo"></image>
        </div>
        <div class="row-item-comment">
            <text class="row-icon">广告</text>
            <text class="row-comment">{{item.comment}}</text>
        </div>
    </div>
  </div>
</template>

<style scoped>
    .row-item{
        width: 750px;
        height: 500px;
        padding-top: 10px;
        margin-left: 20px;
        border-bottom: 1px solid;
        border-color: #ddd;
    }

    .row-item-logo{
        margin-top: 10px;
    }

    .row-logo{
        width: 710px;
        height: 354px;
    }

    .row-item-comment{
        flex-direction: row;
        margin-top: 10px;
        align-items: center;
        justify-content: center;
    }

    .row-icon{
        width: 90px;
        height: 50px;
        border: 1px solid;
        border-color: #888;
        text-align: center;
        line-height: 50px;
        color: #888;
        font-size: 24px;
    }

    .row-comment{
        flex: 1;
        text-align: right;
        color: #888;
        height: 50px;
        font-size: 24px;
        line-height: 50px;
        margin-right: 60px;
    }
</style>

<script>
  import   root from '../../../tools/index'
  export default {
    props: {
        rowItem: { default: [] }
    },
    data() {
      return {

      }
    },
    methods: {
      
    }
  }
</script>
