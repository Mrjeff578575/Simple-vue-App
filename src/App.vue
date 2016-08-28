<template>
<div class="Header">
  <div class="header">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="fa fa-cloud fa">阿俊天气</i>
        </a>
        <ul class="nav navbar-nav" my-message = msg>
          <li><a v-link = "'/Home'">主页</a></li>
          <li><a v-link = "'/weather'">天气信息</a></li>
          <li><a v-link = "'/citylist'">添加你的常用城市</a></li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="background">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>
<style>
  .background{
    margin-top:-20px;
    width: 100%;
    height: 900px;
    background-image: url('assets/bg.jpg');
  }
</style>
<script>
  export default{
  data: function () {
    return { message: '' }
  },
  // 在创建实例时 `events` 选项简单地调用 `$on`
  events: {
    'child-msg': function (msg) {
      // 事件回调内的 `this` 自动绑定到注册它的实例上
      this.message = msg;
      /*this.$broadcast('response',msg)//向子组件派发事件*/
    }
  }
  }
</script>
