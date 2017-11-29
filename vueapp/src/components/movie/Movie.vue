<template>
    <div>
        <common-header>
            <span slot="title">Movie</span>
        </common-header>
        <!--路由显示的视图-->
        <router-view></router-view>
        <common-footer></common-footer>
    </div>
</template>

<script>
  // 导入公共组件 头和 尾
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
export default {
  // 注意这里是components（+s），值是一个对象
  components: {
      CommonHeader,
      CommonFooter
  }
}
</script>

<style scoped>

</style>


