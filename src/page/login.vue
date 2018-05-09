<template>
  <div class="content-modal">
  111
  </div>
</template>
<script>
import * as service from "../service/index.service";
  export default {
    mounted(){
    
    },
    methods:{  
    },
    created(){
   window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx83809ec366834379&redirect_uri=https%3A%2F%2Fgwh.quanwangfa.com%2FuserInfo.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
    }
  }
</script>
<style>

</style>
