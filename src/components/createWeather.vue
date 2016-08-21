<template>
	<form class="form-horizontal form">
		<div class="form-group">
			<div class="col-sm-4" v-for='Weather in Weather'>
				<label>城市名称</label>
				<input type="text" class="form-control" v-model = 'Weather.city.name' placeholder="请输入城市拼音">
			</div>
<!-- 			<div class="col-sm-4">
	<label>日期</label>
	<input type="date" class="form-control">
</div> -->
		</div>
		<button class="btn btn-primary" @click = 'createWeather()'>添加</button>
		<button class="btn btn-primary" v-link = "'/citylist'">取消</button>
	</form> 
</template>
<script>
	export default{
		data() {
			let weather = {
				city: {
					name:'',
					condition:'',
					temp:''
				}
			}
			return {Weather:[weather]}
		},
		methods:{		
			createWeather(){
			console.log(this.Weather[0].city.name)
			var that = this;
        	ajax({
        		headers: {
        			"apikey": "2ff8a937112606bdb6b2f56dcc509900"
       			 },
        	data:{
          		'citypinyin':this.Weather[0].city.name
        	},
        	url: "http://apis.baidu.com/apistore/weatherservice/weather",
        	success: function (data) {
          	var errNum = JSON.parse(data).errNum;
          	if(errNum !== 0){
            	alert("城市名称错误,请重新输入");
          	}
          	var r = JSON.parse(data).retData;
            that.Weather[0].city.name = r.city;
          	that.Weather[0].city.condition = r.weather;
          	that.Weather[0].city.temp = r.temp;
          	let weather = that.Weather[0]
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
	}
</style>