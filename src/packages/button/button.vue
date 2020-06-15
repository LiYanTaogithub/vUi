<template>
    <button class="vu-button" :class="btnClass" :disabled="loading" @click="$emit('click',$event)"> 
        <!-- 在没有loading的情况下显示这个 -->
        <vu-icon :icon="icon" v-if="icon && !loading" class="icon"></vu-icon>
        <!-- 如果有loading就显示这个 -->
        <vu-icon icon="iconloading" v-if="loading" class="icon"></vu-icon>
        <span v-if="this.$slots.default">
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    name:'vu-button',
    props:{
        type:{
            type:String,
            default:'',
            validator(type){
                if(type && !['warning','success','danger','info','primary'].includes(type)){
                    console.error('type类型必须为:'+['warning','success','danger','info','primary'].join('、'))
                }
                return true
            }
        },
        icon:{
            type:String,
        },
        iconposition:{
            type:String,
            default:'left',
            validator(type){
                if(!['left','right'].includes(type)){
                    console.error('iconposition属性必须为：'['left','right'].join('、'))
                }
                return true
            }
        },
        loading:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        btnClass(){
            let classes = []
            if(this.type){
                // alert(1)
                classes.push(`vu-button-${this.type}`)
            }
            //根据传入的iconposition来控制icon和span的位置
            if(this.iconposition){
                classes.push(`vu-button-${this.iconposition}`)
            }
            return classes
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.vu-button{
    border-radius: $border-radius;
    border: 1px solid $border-color;
    height: $height;
    line-height: 1;
    font-size: $font-size;
    cursor: pointer;
    padding: 12px 20px;
    display: inline-flex;
    justify-content: center;
    vertical-align: middle;
    user-select: none;
    &:hover{
        border-color: $border-color;
        background-color: $background;
    }
    &:focus,&:active{
        color: $active-color;
        border-color: 1px solid $active-color;
        background-color: $background;
        outline: none;
    }
    @each $type,$color in (primary:$primary,success:$success,info:$info,danger:$danger,warning:$warning){
        &-#{$type}{
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
            fill: #fff;
        }
    }
    @each $type,$color in (primary:$primary-hover,success:$success-hover,info:$info-hover,danger:$danger-hover,warning:$warning-hover){
        &-#{$type}:hover{
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
        }
    } 
    @each $type,$color in (primary:$primary-active,success:$success-active,info:$info-active,danger:$danger-active,warning:$warning-active){
        &-#{$type}:active,&-#{$type}:focus{
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
        }
    }
    .icon{
        width: 16px;
        height: 16px;
    }
    //有span的时候 
    .icon + span { 
        margin-left: 4px;
    }
    // span + .icon {
    //     margin-right: 4px;
    // }
    //决定button中span和icon图标的位置
    &-left{
        svg{order: 1;}
        span{order: 2;}
    }
    &-right{
        svg{order: 2;}
        span{order: 1;}
        .icon + span{margin-left: 0px; margin-right: 4px;}
    }
    &[disabled]{
        cursor:not-allowed
    }
}
</style>