<template>
    <div class="vu-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'vu-button-group',
    mounted(){
        //获取到原生的孩子 div button span ...
        let children = this.$el.children
        console.log(children)  //this.$children 获取到的是子组件
        for(let i = 0; i < children.length; i++ ){
            console.assert(children[i].tagName === 'BUTTON', 'vu-button-group的子元素必须是button' )
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_var.scss';
.vu-button-group{
  display: inline-flex;
  vertical-align: middle;
  button {
    border-radius: 0;
    position: relative;
    //中间的border合并为一个
    &:not(first-child) {
      margin-left: -1px;
    }
    //第一个元素和最后一个元素圆角
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  //鼠标移到哪个，哪个的层级就在上面
  button:hover {
    z-index: 1;
  }
  button:focus {
    z-index: 2;
  }
}
</style>