<template>
    <div class="vu-progress">
        <div class="bar">
            <div class="bar-outer"  :style="{height:strokeWidth+'px'}">
                <div class="bar-inner" :style="barStyle"></div>
            </div>
              
        </div>
    </div>
</template>
<script>
export default {
    name:'vu-progress',
    props:{
        strokeWidth:{
            type:Number,
            default:6
        },
        percentage:{
            type:Number,
            default:0,
            required:true
        },
        color:{
            type:String,
            default:'sky-blue'
        }
    },
    computed:{
        barStyle(){
            const style = {}
            style.width = this.percentage+ '%'
            style.background = this.color
            return style
        }
    }
}
</script>
<style lang="scss" scoped>
.bar-outer{
    border-radius: 100px;
    background: #eee;
    position: relative;
    vertical-align: middle;
}
.bar-inner{
    transition: width .6s ease;
    left: 0;
    top: 0;
    height: 100%;
}
</style>