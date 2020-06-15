<template>
    <div class="vu-row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'vu-row',
    props:{
        //要传给子组件的列间距
        gutter:{
            type: Number,
            default:0
        },
        justify:{
            type:String,
            validator(type){
                if(type && !['start','end','center','space-around','space-between'].includes(type)){
                    console.error('justify类型必须为：' + ['start','end','center','space-around','space-between'].join('、'))
                }
                return true
            }
        }
    },
    computed:{
        rowStyle(){
            let style = {}
            if(this.gutter){
                style = {
                    ...style,
                    marginLeft:-this.gutter/2 + 'px',
                    marginRight:-this.gutter/2 + 'px'
                }
            }
            if(this.justify){
                let key = ['start','end'].includes(this.justify) ? 'flex-'+this.justify : this.justify
                style = {
                    ...style,
                    justifyContent:key
                }
            }
            return style
        }
    },
    mounted(){
        //slot 不能传参 可以通过获取组件实例的方法 然后修改组件实例的data属性和方法,不能是props属性，子组件不能修改父组件传过来的属性
        this.$children.forEach(child => {
             child.gutter = this.gutter
        });
    }
}
</script>
<style lang="scss" scoped>
.vu-row {
    display: flex;
    // width: 100%;
}
</style>