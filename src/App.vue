<template>
  <div id="app">
    <vu-button >默认按钮</vu-button>
    <vu-button type="primary">主要按钮</vu-button>
    <vu-button type="warning">警告按钮</vu-button>
    <vu-button type="success">成功按钮</vu-button>
    <vu-button type="danger">危险按钮</vu-button>
    <vu-button type="info">信息按钮</vu-button>
    <!-- icon按钮 -->
    <vu-button type="primary" icon="iconsousuo">带icon的按钮</vu-button>
    <vu-button type="primary" icon="iconsousuo" iconposition="right">icon的位置</vu-button>
    <!-- loading按钮 -->
    <vu-button type="success" loading>loading按钮</vu-button>
    <!-- 触发事件 -->
    <vu-button type="success" @click="fn" >触发事件</vu-button>
    <vu-button-group>
      <vu-button type="primary" icon="iconicon-arrow-left">上一页</vu-button>
      <vu-button type="primary" icon="iconicon-arrow-right" iconposition="right">下一页</vu-button>
    </vu-button-group>
    <!-- icon图标 -->
    <vu-icon icon="iconedit"></vu-icon>
    <vu-icon icon="iconsousuo"></vu-icon>

  </div>
</template>

<script>


export default {
  name: 'App',
  methods:{
    fn(e){ //这个事件需要组件内部传过来
      // alert(1)
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
div{
  display: inline-block;
  margin: 10px 10px;
}
</style>
