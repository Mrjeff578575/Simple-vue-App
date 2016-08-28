<template>
  <router-view></router-view>
  <div class="weather">
    <div class="container">
      <div class="col-sm-12">
        <ul class="list-group info"  v-for="Weather in Weather">
          <div class='mask' v-if="Weather.city.name == ''"> 请输入城市名称 </div>
          <li class="list-group-item list-group-item-success">城市名称: {{Weather.city.name}}</span></li>
          <li class="list-group-item list-group-item-info">经度: {{Weather.city.longitude}}<span class="longitude"></li>
          <li class="list-group-item list-group-item-warning">纬度: {{Weather.city.latitude}}<span class="Latitude"></li>
          <li class="list-group-item list-group-item-danger">海拔:{{Weather.city.altitude}} <span class="Altitude"></li>
          <li class="list-group-item list-group-item-info">天气情况：{{Weather.city.condition}}<span class="weather"></span></li>
          <li class="list-group-item list-group-item-warning">气温：{{Weather.city.temp}}<span class="temp"></span></li>
          <li class="list-group-item list-group-item-danger">最低温度：{{Weather.city.lowTemp}}<span class="lowTemp"></span></li>
          <li class="list-group-item list-group-item-success">最高温度：{{Weather.city.highTemp}}<span class="highTemp"></span></li>
          <li class="list-group-item list-group-item-info">风向：{{Weather.city.wd}}<span class="wd"></span></li>
          <li class="list-group-item list-group-item-warning">风力：{{Weather.city.ws}}<span class="ws"></span></li>
          <li class="list-group-item list-group-item-danger">日出时间：{{Weather.city.sunrise}}<span class="sunrise"></span></li>
          <li class="list-group-item list-group-item-success">日落时间：{{Weather.city.sunset}}<span class="sunset"></span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export  default {
/*    props['cityname'],*/
    data() {
      var  weather = {
        city:{
          name:'',
          longitude:'',
          latitude:'',
          altitude:'',
          condition:'',
          temp:'',
          lowTemp:'',
          highTemp:'',
          wd:'',
          ws:'',
          sunrise:'',
          sunset:''
        },
        cityname:''
      }
      return {
        Weather: [weather]
      }
    },
    ready:function () {
      var that = this;
      if(that.$parent.message !== ''){
      ajax({
        headers: {
          "apikey": "2ff8a937112606bdb6b2f56dcc509900"
        },
        data:{
          'cityname':that.$parent.message
        },
        url: "http://apis.baidu.com/apistore/weatherservice/cityname",
        success: function (data) {
          var errNum = JSON.parse(data).errNum;
          if(errNum !== 0){
            alert("城市名称错误,请重新输入");
          }
          var r = JSON.parse(data).retData;
          that.Weather[0].city.name = r.city;
          that.Weather[0].city.longitude = r.longitude;
          that.Weather[0].city.latitude = r.latitude;
          that.Weather[0].city.altitude = r.altitude;
          that.Weather[0].city.condition = r.weather;
          that.Weather[0].city.temp = r.temp;
          that.Weather[0].city.lowTemp = r.l_tmp;
          that.Weather[0].city.highTemp = r.h_tmp;
          that.Weather[0].city.wd = r.WD;
          that.Weather[0].city.ws = r.WS;
          that.Weather[0].city.sunrise = r.sunrise;
          that.Weather[0].city.sunset = r.sunset
          }
      })
    }
    }
  }
</script>
<style>
  .weather{
    margin-top: 50px;
  }
  .mask{
    width:1110px;
    height: 805px;
    position: absolute;
    background-color: #B4DAC4;
    top:0px;
    opacity: 0.8;
    z-index: 3;
    font-size: 30px;
    text-align: center;
    line-height: 400px;
  }
</style>
