<template>
     <!-- prevent阻止浏览器默认行为，松手会打开文件 -->
    <div class="vu-upload-dragger" 
        @drop.prevent="onDrap"
        @dragover.prevent
        @dragleave.prevent
    >
        <vu-icon icon=""></vu-icon>
        <span>将文件拖拽到此区域即可</span>
    </div>
</template>
<script>
export default {
    name:'uploadDragger',
    methods:{
        onDrap(e){
            if(this.accept){
                this.$emit('file',e.dataTransfer.files)
            }else {
                //过滤文件类型 移除不需要的文件
                this.$emit('file',e.dataTransfer.files)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.vu-upload-dragger{
    background: #eee;
    border: 1px solid #aaa;
    border-radius: 10px;
    height: 180px;
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>