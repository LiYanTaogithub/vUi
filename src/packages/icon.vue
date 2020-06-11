<template>
    <svg class="vu-icon" aria-hidden="true">
        <use :xlink:href="`#${icon}`"></use>
    </svg>
</template>
<script>
import '../styles/icon'
export default {
    name:'vu-icon',
    props:{
        icon:{
            type:String,
            required:true
        }
    }
}
</script>
<style lang="scss" scoped>
.vu-icon {
       width: 25px; 
       height: 25px;
       vertical-align: middle;
    //    fill: #fff;
    }
</style>