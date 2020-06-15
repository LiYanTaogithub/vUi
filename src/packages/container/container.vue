<template>
    <section class="vu-container" :class="{isVertical}">
        <slot></slot>
    </section>
</template>
<script>
export default {
    name:'vu-container',
    data(){
        return {isVertical:true}
    },
    mounted(){
        //some 方法有就返回true，没有就返回false
        this.isVertical = this.$children.some(child=>['vu-footer','vu-header'].includes(child.$options.name))
    }
}
</script>
<style lang="scss" scoped>
.vu-container{
    display: flex;
    flex-direction: row; //默认横向布局
    flex: 1;
}
//有header footer就是垂直布局
.vu-container.isVertical{
    flex-direction: column;
}
</style>