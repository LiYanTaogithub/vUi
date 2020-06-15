<template>
    <main class="vu-main">
        <slot></slot>
    </main>
</template>
<script>
export default {
    name:'vu-main'
}
</script>
<style lang="scss">
.vu-main{
    flex:1;
    padding: 20px;
}
</style>