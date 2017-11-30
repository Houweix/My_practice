<template>
  <!--使用动态属性，切换到哪个页面就传什么值-->
  <!--注意这里传的是属性（background），需要在下面export default中加入props: ['bg']配置-->
  <div class="header" :style="{background:bg}">
      <span class="home" @click="goHome">首页</span>
      <h2 class="title">
          <!--具名元素（name = title），如果有替换的就显示替换的，没有就显示默认的-->
          <slot name="title">默认值</slot>
      </h2>
  </div>
</template>

<script>
export default {
    methods: {
        goHome(){
            //定位当前页面到首页
            this.$router.push('/');
        }
    },
  // 传组件必须要配置的props
    props: ['bg']
}
</script>

<style scoped>
.header{
    height: 1rem;
    background-color: rgb(33, 150, 243);
    position: fixed;
    top: 0;
    width: 100%;
    line-height: 1rem;
}
.home{
    color: #fff;
    margin-left: 0.2rem;
}
.title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
}
</style>


