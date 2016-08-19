<template>
  <div class="home">
    <div class="col-sm-12 input-group input-group-lg">
      <input type="text" class="form-control" placeholder="Plase input CityName" aria-describedby="sizing-addon1" v-model = 'message'>
      <span class="input-group-addon" id="sizing-addon1">
        <a v-link= "'/weather'" v-on:click="search"><i class="fa fa-search fa-1x"></i></a>
      </span>
    </div>
  </div>
    <div class="jumbotron col-sm-12">
      <h1>Welcome Weather Search</h1>
      <p>this is a simple website product by vue.js</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
    </div>
  </div>
</template>
<style>
  .bg{
    background-color: #42b983;
    height: 512px;
  }
  .home{
    margin-top: 280px;
  }
/*  .jumbotron{
    margin-top: 300px;
  }*/
</style>
<script>
export default{
  data: function () {
    return { message: '' }
  },
  methods:{
    search:function(){
      if (this.message.trim()) {
        this.$dispatch('child-msg', this.message)
        this.message = ''
      }
    }
  }
}
</script>