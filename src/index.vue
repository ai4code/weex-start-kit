<template>
  <div @androidback="back" class="body">
    <router-view style="flex:1"></router-view>
  </div>
</template>

<style>
	body,
  .body,
  ul,
  li{
  	margin: 0;
		padding: 0;
  }
  body,
  .body{
    
  }
  ul,
  li{
  	list-style: none;
  }
</style>

<script>

  export default {
    
  }
</script>
