<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/h">测试</router-link>
    </div>
    <!--这里相当于一个占位符，替代各个路由的视图，而其他的标签元素等不会跟着改变。-->
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
