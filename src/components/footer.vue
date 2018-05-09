<template>
  <div class="tabbar">
    <router-link to="/index" class="tab-button" :class="{active:getPath == '/index' || getPath == '/'}" replace>
        <img src="../assets/img/wxb明星店铺.png" alt="" style="width:20px">
        <span class="tab-button-text">首页</span>
    </router-link>
    <router-link to="/info" class="tab-button" :class="{active:getPath == '/info'}" replace>
         <img src="../assets/img/compass.png" alt="" style="width:20px">
        <span class="tab-button-text">发现</span>
    </router-link>
      <router-link to="/history" class="tab-button" :class="{active:getPath == '/history'}" replace>
        <img src="../assets/img/history.png" alt="" style="width:20px">
        <span class="tab-button-text">历史</span>
    </router-link>
    <router-link to="/user" class="tab-button" :class="{active:getPath == '/user'}" replace>
        <img src="../assets/img/account.png" alt="" style="width:20px">
        <span class="tab-button-text">个人中心</span>
    </router-link>
  </div>
</template>


<script>
  export default {
    name: 'y-footer',
    data() {
      return {
        path: '/'
      }
    },
    computed: {
      getPath() {
        return this.$route.path;
      }
    }
  }

</script>
<style>

  .tabbar {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    opacity: 1;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-top: 0.55px solid rgba(0, 0, 0, 0.3);
    height: 0.5rem;
    background: #fff;
  }

  .tab-button {
    position: relative;
    z-index: 0;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0;
    border: 0;
    border-radius: 0;
    text-align: center;
    text-decoration: none;
    background: none;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: normal;
  }

  .tab-button-icon {
    height: .18rem;
    margin-top: .02rem;
    margin-bottom: .04rem;
    min-width: 0.35rem;
    font-size: 30px;
    color: #8c8c8c;
    overflow: hidden;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    line-height: 1;
    text-rendering: auto;
    text-transform: none;
  }

  .tab-button-text {
    margin-top: 0;
    margin-bottom: 1px;
    font-size: 0.12rem;
    text-transform: none;
    display: block;
    overflow: hidden;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    min-width: 0.26rem;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

</style>
