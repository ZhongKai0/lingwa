<template>
  <div class="tab-content">
    <!-- <y-header title="领哇" @titleMethod="test()" @barMethod="test()" titleRight="测试"></y-header> -->
        <y-header title="领哇" @titleMethod="test()" @barMethod="test()"></y-header>
    <div class="content">
      <div class="scroll-content" margin-tabbar margin-header>
         <div id="container" style="width:100%; height:100%"></div>
      </div>
    </div>
  </div>
</template>
<script>
import AMap from "AMap";
import AMapUI from "AMapUI";
import * as service from "../service/index.service";
export default {
  date() {
    return {
      thisMap: null,
      lngdata: 0,
      latdata: 0
    };
  },
  mounted: function() {
    this.init();
  },
  methods: {
    test() {
      console.info("ok");
    },
    init: function() {
      var that = this;
      let mapObj = new AMap.Map("container", {
        zoom: 10
      });
      this.thisMap = mapObj;
      let circle = new AMap.Circle({
        center: new AMap.LngLat(
          localStorage.getItem("lng"),
          localStorage.getItem("lat")
        ), // 圆心位置
        radius: 200, //半径
        strokeColor: "#ef3726", //线颜色
        strokeOpacity: 0.2, //线透明度
        strokeWeight: 3, //线宽
        fillColor: "blue", //填充色
        fillOpacity: 0.05 //填充透明度
      });

      circle.setMap(that.thisMap);

      mapObj.plugin(["AMap.ToolBar", "AMap.Scale"], function() {
        mapObj.addControl(new AMap.ToolBar());
        mapObj.addControl(new AMap.Scale());
      });
      mapObj.plugin(["AMap.Geolocation"], function() {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //  是否使用高精度定位，默认:true
          timeout: 100, //  超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: false, //  显示定位按钮，默认：true
          buttonPosition: "LB", // 定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //  定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        mapObj.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", result => {
          localStorage.setItem("lng", result.position.lng);
          localStorage.setItem("lat", result.position.lat);
          mapObj.setCenter(result.position);
          circle.setMap(mapObj);
          that.lngdata = result.position.lng;
          that.latdata = result.position.lat;
          
         service.red_packet({
              userId: 1,
              latitude: that.latdata,
              longitude: that.lngdata
            })
            .then(res => {
              let list = res.data.Data;

              list.forEach((e, i) => {
                var marker = new AMap.Marker({
                  map: that.thisMap,
                  aid: e.activityId,
                  position: [e.longitude, e.latitude],
                  icon: new AMap.Icon({
                    //复杂图标
                    size: new AMap.Size(27, 36), //图标大小
                    image:
                      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2141944720,1148864295&fm=27&gp=0.jpg", //大图地址
                    imageOffset: new AMap.Pixel(-28, 0) //相对于大图的取图位置
                  })
                });
                marker.on("click", function(e) {
                console.log(e)
                that.$router.push({name:"detail",query:{activityId:e.target.Qi.aid}})
                });
              });
            });
        }); //  返回定位信息
        AMap.event.addListener(geolocation, "error", result => {
          console.log(result);
        }); //  返回定位出错信息
      });
    }
  },
  created() {}
};
</script>
<style>
.amap-scale-text {
  display: none;
}

.amap-scale-line {
  display: none;
}

.amap-copyright {
  visibility: hidden;
}

/* .amap-zoomcontrol {
  display: none;
} */
</style>
