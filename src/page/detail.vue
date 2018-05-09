
<template>
     <div class="tab-content">
      <y-header title="领哇" @titleMethod="test()" @barMethod="test()"></y-header>
      <div class="content">
        <div class="scroll-content" margin-tabbar margin-header>
          <div id="container" style="width:100%; height:100%">
            <div class="lw_header">
              <img :src='datalist[0].avatarUrl' alt="">
              <div class="test">{{datalist[0].nickName}}的红包</div>
              <div class="test">{{datalist[0].totalMoney}}元</div>
              <div class="test">
                <a href="#" style="color:skyblue">已存入零钱</a>
              </div>
            </div>
    
            <div class="lw_content">
              <div class="lw_content1">
                <div class="lingqu">已领取</div>
                <div class="list">
                  <ul>
                    <li v-for="(item,index) in historyData" :key="index">
                      <img :src="item.avatarUrl" alt="">
                    </li>
                  </ul>
                  <span>></span>
                </div>
              </div>
              <div class="self">{{datalist[0].content}}</div>

              <div class="list2">
                  <ul>
                      <li v-for="(item,index) in datalist[0].imgsList" :key="index">
                          <img :src="item.imageUrl" alt="">
                      </li>
                  </ul>
                  <div class="text">
                      <span>{{datalist[0].createTime}} &nbsp;&nbsp;| &nbsp;&nbsp;{{datalist[0].curState}}阅读</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import * as service from "../service/index.service";
export default {
  data() {
    return {
      datalist: [],
      historyData: []
    };
  },
  created() {
        service.red_packet_detail({
        userId: 1,
        activityId: this.$route.query.activityId
      })
      .then(res => {
        this.datalist = res.data.Data;
        this.historyData = res.data.historyData;
      });
  },
  methods: {}
};
</script>

<style scoped>
.lw_header {
  width: 100%;
  height: 2rem;
  border-bottom: 0.55px solid #ccc;
  padding-top: 0.3rem;
}
.lw_header img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  margin-bottom: 0.1rem;
}
.lw_header .test {
  margin-bottom: 0.1rem;
}

.lw_content1 {
  width: 100%;
  height: 0.8rem;
  border-bottom: 0.55px solid #ccc;
  margin-bottom: 0.08rem
}
.lw_content .lingqu {
  text-align: left;
  padding: 0.05rem 0 0 0.05rem;
  margin-bottom: 0.08rem;
}
.lw_content .list {
  position: relative;
}
.lw_content .list li {
  float: left;
}
.lw_content .list li img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  padding-left: 0.05rem;
}
.lw_content .list span {
  position: absolute;
  top: 0.1rem;
  left: 3.5rem;
  font-size: 16px;
  font-weight: 700;
  color: #ccc;
}

.lw_content .self{
      text-align: left;
       padding: 0.05rem 0 0 0.05rem;
       color: black;
       font-size: 0.16rem
}
.lw_content .list2 li {
  float: left;
}
.lw_content .list2{
    width: 100%;
    height: 2rem;
    border-top:0.55px solid #ccc;
    border-bottom:0.55px solid #ccc;
     padding: 0.05rem 0 0 0.05rem;
}

.lw_content .list2 ul{
    width: 100%;
    height: 1.2rem;
}
.lw_content .list2 img{
    width: 1rem;
    height: 1rem; 
}

.lw_content .list2 .text{
    text-align: left
}
</style>
