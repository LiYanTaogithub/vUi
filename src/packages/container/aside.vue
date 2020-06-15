<template>
    <aside class="vu-aside" :style="{width}">
        <slot></slot>
    </aside>
</template>
<script>
export default {
    name:'vu-aside',
    props:{
        //侧边栏宽度
        width:{
            type:String,
            default:'300px'
        }
    }
}
</script> 