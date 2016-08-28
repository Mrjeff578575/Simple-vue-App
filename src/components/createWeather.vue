<template>
	<form class="form-horizontal form">
		<div class="form-group">
			<div class="col-sm-3"></div>
			<div class="col-sm-6 input">
				<label>城市名称</label>
				<input type="text" class="form-control" v-model = 'Weather.name' placeholder="请输入城市名称">
			</div>
<!-- 			<div class="col-sm-4">
	<label>日期</label>
	<input type="date" class="form-control">
</div> -->
		</div>
		<div class="col-sm-3"></div><button class="btn btn-primary" @click = 'createWeather()'>添加</button>
		<button class="btn btn-primary" v-link = "'/citylist'">取消</button>
	</form> 
</template>
<script>
	export default{
		data () {
			return {
				Weather :{
					city: {
						name:'',
						condition:'',
						temp:''
					}
				}
			}
		},
		methods:{		
			createWeather(){
			var that = this;
        	ajax({
        		headers: {
        			"apikey": "2ff8a937112606bdb6b2f56dcc509900"
       			 },
        	data:{
          		'cityname':this.Weather.name
        	},
        	url: "http://apis.baidu.com/apistore/weatherservice/cityname",
        	success: function (data) {
        	console.log(JSON.parse(data));
          	var errNum = JSON.parse(data).errNum;
          	if(errNum !== 0){
            	alert("城市名称错误,请重新输入");
            	return 0;
          	}
          	var r = JSON.parse(data).retData;
/*          	that.Weather.name = r.city;
          	that.Weather.condition = r.weather;
          	that.Weather.temp = r.temp;*/
          	let Weather = {
				city: {
					name:'',
					condition:'',
					temp:''
				}
			}
            Weather.city.name = r.city;
          	Weather.city.condition = r.weather;
          	Weather.city.temp = r.temp;
          	let weather = Weather
			that.$dispatch('WeatherUpdate',weather)
			that.Weather = {}
				}	
			})
        }
    }
	}
</script>
<style>
	.form{
		margin-bottom: 50px;
		padding-left: 30px;
		font-size: 20px;
	}
	.input{
		padding: 8px;
	}
</style>