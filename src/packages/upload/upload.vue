<template>
    <div class="vu-upload">
        <upload-dragger v-if="drag" :accept="accept" @file="uploadFiles"></upload-dragger>
        <template v-else>
            <div class="vu-upload-btn" @click="handleClick">
                <slot></slot>
            </div>
            <input 
                type="file" 
                :accept="accept" 
                :multiple="multiple"
                @change="handleChange"
                :name="name"
                ref="input"
                class="input"
            >
        </template>
        <div>
            <slot name="tip"></slot>
        </div>
        <ul>
            <li v-for="file in files" :key="file.uid">
                <div class="list-item">
                    <div>{{file.name}}</div>
                    <div>{{file.status}}</div>
                    <vu-progress v-if="file.status ==='uploading'" :percentage="file.percentage"></vu-progress>
                </div>
            </li>
        </ul>
        {{files}}
    </div>
</template>
<script>
import ajax from './ajax'
import uploadDragger from './upload-dragger'
export default {
    name:'vu-upload',
    components:{
        uploadDragger
    },
    props:{
        name:{
            type:String,
            default:'file'
        },
        limit:{
            type:Number
        },
        action:{
            type:String,
            required:true
        },
        fileList:{
            type:Array,
            default:()=>[]
        },
        accept:String,
        multiple:Boolean,
        onExceed:Function,
        onSuccess:Function,
        onError:Function,
        onProgress:Function,
        onChange:Function,
        beforeUpload:Function,
        httpRequest:{
            type:Function,
            default:ajax
        },
        drag:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            tempIndex:1,
            files:[], //存储要展示的列表
            reqs:[]
        }
    },
    //监控已上传文件，进行格式化处理
    watch:{
        fileList:{
            immediate:true,
            handler(fileList){
                this.files = fileList.map(item =>{
                    item.uid = Date.now() + this.tempIndex++
                    item.status = 'success'
                    return item
                })
            }
        }
    },
    methods:{
        //在点击按钮的时候让input框被点击
        handleClick(){
            this.$refs.input.value = '';
            this.$refs.input.click()
        },
        handleStart(rawFile){
            console.log(rawFile)
            //文件唯一id
            rawFile.uid = Math.random() + this.tempIndex++
            //构建一条文件信息
            let file  = {
                status:'ready', //准备上传
                name:this.name, //文件名称
                size:rawFile.size, //文件大小
                percentage:0, // 上传进度
                uid:rawFile.uid,
                raw:rawFile
            }
            this.files.push(file)
            this.onChange && this.onChange(file)
        },

        getFile (rawFile) {
            return this.files.find(file=>file.uid == rawFile.uid)
        },

        handleProgress (ev,rawFile) {
            //根据源文件获取到之前格式化后的结果
            let file = this.getFile(rawFile)
            file.percentage = ev.percent || 0
            file.status = 'uploading'
            this.onProgress(ev,rawFile)
        },
        handleSuccess (res,rawFile) {
            let file = this.getFile(rawFile)
            file.status = 'success'
            this.onSuccess(res,rawFile)
            this.onChange(file)
        },
        handleError (err,rawFile) {
            let file = this.getFile(rawFile)
            file.status = 'fail'
            this.onError(file)
            this.onChange(file)
            delete this.reqs[file.uid] //上传失败的ajax请求移除掉
        },

        //文件上传

        post(rawFile){
            //调用httpRequest方法
            const uid = rawFile.uid
            //参数
            const options = {
                file:rawFile,
                filename:rawFile.name,
                action:this.action,
                onProgress:ev =>{
                    //上传中的状态
                    console.log('上传中',ev)
                    this.handleProgress(ev,rawFile)
                },
                onSuccess:res =>{
                    //处理上传成功
                     console.log('上传成功',res)
                     this.handleSuccess(res,rawFile)
                },
                onError:err =>{
                    //处理上传失败
                     console.log('上传失败',err)
                     this.handleError(err,rawFile)
                }
            }
            //req就是当前请求
            let req = this.httpRequest(options)
            this.reqs[uid] = req //将每个ajax请求先存起来，稍后可以取消请求
            //允许用户传入promise请求
            if(req && req.then){
                req.then(options.onSuccess,options.onError)
            }

        },
        upload(rawFile){
            console.log(rawFile)
            //判断文件大小能否上传
            if(!this.beforeUpload){
                //直接上传
                console.log('上传')
            }
            let flag = this.beforeUpload(rawFile)
            if(flag){
                //用户返回true 可以上传
                console.log('上传')
                this.post(rawFile)  //发送ajax请求
            }
        },
        uploadFiles(files){
            // 上传之前要先判断是否达到最大limit
            if(this.limit && this.files.length + files.length > this.limit){
                //调用超过最大限制个数函数
                return this.onExceed && this.onExceed(files,this.fileList)
            }
            //满足条件拿到每一个文件
            [...files].forEach(rawFile => {
                //格式化文件
                this.handleStart(rawFile)
                //开始上传
                this.upload(rawFile)
            })
        },
        //文件上传的change事件
        handleChange( e){
            console.log(e.target.files)
            //获取选中的图片
            const files = e.target.files
            //开始上传
            //1. 多个文件如何上传 可以创建多个ajax，一起传
            this.uploadFiles(files)
        },
    }
}
</script>
<style lang="scss" scoped>
.vu-upload{
    input{
        display: none;
    }
}
</style>