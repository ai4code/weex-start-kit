<template>
  <div>
    <div class="list-item" v-for="item in listItem">
       <div class="list-left"><image :src="item.logo" class="list-item-logo"></image></div>
       <div class="list-rigth">
         <text>{{item.title}}</text>
         <div class="list-desc">
           <text class="list-subtitle">{{item.subTitle}}</text>
           <text class="list-comment">{{item.comment}}</text>
         </div>
       </div>
    </div>
  </div>
</template>

<style scoped>
    .list-item{
        height: 217px;
        width: 750px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 20px;
        border-bottom: 1px solid;
        border-color: #ddd;
    }
    .list-left{
        width: 183px;
    }

    .list-rigth{
        flex: 1;
        margin-left: 20px;
        margin-right: 60px;
    }

    .list-item-logo{
        width: 183px;
        height: 134px;
    }

    .list-desc{
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }

    .list-comment{
        flex: 1;
        height: 50px;
        font-size: 24px;
        color: #888;
        margin-top: 10px;
        text-align: right;
    }

    .list-subtitle{
        height: 50px;
        font-size: 24px;
        color: #888;
        width: 200px;
    }
</style>

<script>
  import   root from '../../../tools/index'
  export default {
    props: {
        listItem: { default: [] }
    },
    data() {
      return {

      }
    },
    methods: {
      
    }
  }
</script>
