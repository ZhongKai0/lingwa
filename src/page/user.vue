<template>
  <div class="push">
    <div class="tab-content">
      <y-header title="领哇"></y-header>
      <div class="content">
        <div class="scroll-content" margin-tabbar margin-header>
               <div class="lw_header">
                     <img src="../assets/img/1.jpg" alt="">
                       <div>
                         <p class="kaige">凯哥</p>
                       </div>
                       <span class="wangge">曾经沧海难为水</span>
                       <div class='lw_right'>></div>
               </div>
        </div>
      </div>
    </div>
    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    mounted(){
     
    },
    methods:{
      
    }
  }
</script>
<style>
    .lw_header{
      width:100%;
      height:60px;
      background:white;
      padding:10px 0  0 10px; 
      position: relative;
      border-bottom: 1px solid #ccc;
    }
    .lw_header img{
      width: 50px;
      height: 50px;
      float: left;
     
    }
     .lw_header .kaige{
       float: left;
       margin-left: 5px;
        font-size: 16px;
      font-weight: 700
     }
     .lw_header .wangge{
        
       position: absolute;
       top:40px;
       left: 65px;
       font-size: 14px
     }
     .lw_header .lw_right{
       float: right;
       font-size: 16px;
       margin-right: 10px;
       height: 50px;
       line-height: 50px;
       color: #ccc;
     }
</style>
