<template>
  <div class="tab-content">
    <y-header title="首页" @titleMethod="test()" @barMethod="test()" titleRight="测试"></y-header>
    <div class="content">
      <div class="scroll-content" margin-tabbar margin-header>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      test(){
        console.info('ok')
      }
    }
  }
</script>
<style>

</style>
