<template>
    <div class="vu-col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'vu-col',
    data() {
        return{
            gutter:0 //gutter是通过父组件传过来的
        }
    },
    props:{
        //栅格
        span:{
            type:Number,
            default:24
        },
        //偏移量 margin-left
        offset:{
            type:Number,
            default:null 
        },
        xs:[Number,Object],
        sm:[Number,Object],
        md:[Number,Object],
        lg:[Number,Object],
        xl:[Number,Object]
    },
    computed:{
        //根绝传入的span值动态添加样式
        colClass(){
            let classes = []
            classes.push(`vu-col-${this.span}`)
            //用户传入的偏移量
            if(this.offset){
                classes.push(`vu-col-offset-${this.offset}`)
            }
            ['xs','sm','md','lg','xl'].forEach(type=>{
                if(typeof this[type] === 'object') { //如果传的是对象
                    let {span,offset} = this[type]
                    span && classes.push(`vu-col-${type}-${span}`) // vu-col-xs-1
                    offset && classes.push(`vu-col-${type}-offset-${offset}`) // vu-col-xs-offset-1
                }else { //如果传的是number
                    this[type] && classes.push(`vu-col-${type}-${this[type]}`) // vu-col-xs-1
                }
            })
            return classes
        },
        colStyle(){
            let style = {}
            if(this.gutter){
                style = { //这种写法是在原有的属性基础上增加新的属性
                    ...style,
                    marginLeft:this.gutter/2 + 'px',
                    marginRight :this.gutter/2 + 'px',
                }
            }
            return style
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/_var.scss';
@for $i from 1 through 24{
    .vu-col-#{$i} {
        width: $i / 24 * 100%;
    }
    .vu-col-offset-#{$i} {
        margin-left: $i/24 * 100%;
    }
}
@include res (xs) {
    @for $i from 1 through 24{
        .vu-col-xs-#{$i}{
            width: $i/24 * 100%
        }
        .vu-col-xs-offset-#{$i} {
            width: $i/24 * 100%
        }
    }
}
@include res (sm) {
    @for $i from 1 through 24{
        .vu-col-sm-#{$i}{
            width: $i/24 * 100%
        }
        .vu-col-sm-offset-#{$i} {
            width: $i/24 * 100%
        }
    }
}
@include res (md) {
    @for $i from 1 through 24{
        .vu-col-md-#{$i}{
            width: $i/24 * 100%
        }
        .vu-col-md-offset-#{$i} {
            width: $i/24 * 100%
        }
    }
}
@include res (lg) {
    @for $i from 1 through 24{
        .vu-col-lg-#{$i}{
            width: $i/24 * 100%
        }
        .vu-col-lg-offset-#{$i} {
            width: $i/24 * 100%
        }
    }
}
@include res (xl) {
    @for $i from 1 through 24{
        .vu-col-xl-#{$i}{
            width: $i/24 * 100%
        }
        .vu-col-xl-offset-#{$i} {
            width: $i/24 * 100%
        }
    }
}
</style>