<template>
	<div class="container">
		<div class="col-sm-2"><button 
			class="btn btn-primary btn-lg create" 
			v-link="'citylist/createWeather'"
			v-if = "$route.path !==  '/citylist/createWeather'"
		>添加城市</button></div>
		<div class="col-sm-8">
			<ul class="list-group">
				<li class="list-group-item" v-for='Weather in Weathers'>
					<span class="info">{{Weather.city.name}}&nbsp;&nbsp;{{Weather.city.condition}}&nbsp;&nbsp;&nbsp;{{Weather.city.temp}}&#8451</span>
					<button class="btn btn-danger btn-lg delete" @click='deleteWeather(Weather)'>X</button>
				</li>
			</ul>
		</div>
	</div>
	<router-view></router-view>
</template>
<style>
	.create{
		height: 68px;
	}
	.info{
		font-size: 24px;
		line-height: 46px;
		vertical-align: middle;
	}
	.delete{
		float: right;
	}
	.delete:after{
		display: block;
		clear: both;
		content: '';
		height: 0;
		visibility: hidden;	
	}
</style>
<script>
	export default{
		data(){
			let weather = {
				city:{
					name:'',
					condition:'',
					temp:''
				}
			}
			return {Weathers:[weather]}
		},
		methods:{
			deleteWeather(Weather){
				let index = this.Weathers.indexOf(Weather)
				if(window.confirm('确定要删除吗？')){
					this.Weathers.splice(index,1);
				}
			}
		},
		ready:function () {
			var that = this;
        	ajax({
        		headers: {
        			"apikey": "2ff8a937112606bdb6b2f56dcc509900"
       			 },
        	data:{
          		'cityname':'成都'
        	},
        	url: "http://apis.baidu.com/apistore/weatherservice/cityname",
        	success: function (data) {
          	var errNum = JSON.parse(data).errNum;
          	if(errNum !== 0){
            	alert("城市名称错误,请重新输入");

          	}
          	var r = JSON.parse(data).retData;
          	that.Weathers[0].city.name = r.city;
          	that.Weathers[0].city.condition = r.weather;
          	that.Weathers[0].city.temp = r.temp;
        	}
     	})
		},
		events:{
			'WeatherUpdate': function(weather){
				this.Weathers.push(weather);
			}
		}
	}
</script>