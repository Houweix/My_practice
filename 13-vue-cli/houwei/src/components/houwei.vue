<template>
  <!--template里面只能有一个元素-->
  <div>
    <h1>hello houwei!</h1>
    <router-link to="/h/child1">子路由1</router-link>
    <router-link to="/h/child2">子路由2</router-link>
    <router-view/>
  </div>


</template>


<style scoped>

  h1{

    background: #3831ff;

  }


</style>
