<template>
  <div id="app">
    <!-- <vu-button>默认按钮</vu-button>
    <vu-button type="primary">主要按钮</vu-button>
    <vu-button type="warning">警告按钮</vu-button>
    <vu-button type="success">成功按钮</vu-button>
    <vu-button type="danger">危险按钮</vu-button>
    <vu-button type="info">信息按钮</vu-button> -->
    <!-- icon按钮 -->
    <!-- <vu-button type="primary" icon="iconsousuo">带icon的按钮</vu-button>
    <vu-button type="primary" icon="iconsousuo" iconposition="right"
      >icon的位置</vu-button
    > -->
    <!-- loading按钮 -->
    <!-- <vu-button type="success" loading>loading按钮</vu-button> -->
    <!-- 触发事件 -->
    <!-- <vu-button type="success" @click="fn">触发事件</vu-button>
    <vu-button-group>
      <vu-button type="primary" icon="iconicon-arrow-left">上一页</vu-button>
      <vu-button type="primary" icon="iconicon-arrow-right" iconposition="right"
        >下一页</vu-button
      >
    </vu-button-group> -->
    <!-- icon图标 -->
    <!-- <vu-icon icon="iconedit"></vu-icon>
    <vu-icon icon="iconsousuo"></vu-icon>
    <br /> -->
    <!-- 栅格布局 -->
    <!-- <vu-row>
      <vu-col :span="8" class="red">
        <div>aaa</div>
      </vu-col>
      <vu-col :span="8" class="green">
        <div>bbb</div>
      </vu-col>
      <vu-col :span="8" class="red">
        <div>ccc</div>
      </vu-col>
    </vu-row>
    <vu-row>
      <vu-col :span="24" class="orange">
        <div>ddd</div>
      </vu-col>
    </vu-row> -->

    <!-- 偏移量 -->
    <!-- <vu-row>
      <vu-col :span="8" :offset="12" class="green">
        <div>ddd</div>
      </vu-col>
      <vu-col :span="8" :offset="12" class="red">
        <div>ddd</div>
      </vu-col>
    </vu-row> -->

    <!-- gutter 间距 -->
    <!-- <vu-row :gutter="20">
      <vu-col :span="6" class="green">
        <div>ddd</div>
      </vu-col>
      <vu-col :span="6" class="red">
        <div>ddd</div>
      </vu-col>
      <vu-col :span="6" class="green">
        <div>ddd</div>
      </vu-col>
      <vu-col :span="6" class="red">
        <div>ddd</div>
      </vu-col>
    </vu-row> -->
    <!-- 对齐方式 -->
    <!-- <vu-row justify="space-around">
      <vu-col :span="6" class="blue">
        <div>ddd</div>
      </vu-col>
      <vu-col :span="6" class="orange">
        <div>ddd</div>
      </vu-col>
      <vu-col :span="6" class="blue">
        <div>ddd</div>
      </vu-col>
    </vu-row> -->
    <!-- 响应式布局 -->
    <!-- <vu-row>
      <vu-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content bg-purple"></div
      ></vu-col>
      <vu-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content bg-purple-light"></div
      ></vu-col>
      <vu-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content bg-purple"></div
      ></vu-col>
      <vu-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content bg-purple-light"></div
      ></vu-col>
    </vu-row> -->

    <!-- 容器组件 -->
    <!-- <vu-container>
      <vu-header>Header</vu-header>
      <vu-main>Main</vu-main>
    </vu-container>

    <vu-container>
      <vu-header>Header</vu-header>
      <vu-main>Main</vu-main>
      <vu-footer>Footer</vu-footer>
    </vu-container>

    <vu-container>
      <vu-aside width="200px">Aside</vu-aside>
      <vu-main>Main</vu-main>
    </vu-container>

    <vu-container>
      <vu-header>Header</vu-header>
      <vu-container>
        <vu-aside width="200px">Aside</vu-aside>
        <vu-main>Main</vu-main>
      </vu-container>
    </vu-container> -->

    <!-- <vu-container>
      <vu-header>Header</vu-header>
      <vu-container>
        <vu-aside width="200px">Aside</vu-aside>
        <vu-container>
          <vu-main>Main</vu-main>
          <vu-footer>Footer</vu-footer>
        </vu-container>
      </vu-container>
    </vu-container>

    <vu-container>
      <vu-aside width="200px">Aside</vu-aside>
      <vu-container>
        <vu-header>Header</vu-header>
        <vu-main>Main</vu-main>
      </vu-container>
    </vu-container>

    <vu-container>
      <vu-aside width="200px">Aside</vu-aside>
      <vu-container>
        <vu-header>Header</vu-header>
        <vu-main>Main</vu-main>
        <vu-footer>Footer</vu-footer>
      </vu-container>
    </vu-container> -->

    <!-- input组件 -->
    <!-- {{value}}
    <vu-input 
      v-model="value" 
      type="text" 
      placeholder="请输入内容" 
      name='username' 
      width="200px" 
      height="25px"
    ></vu-input> -->
    <!-- 禁用状态 -->
    <!-- <vu-input 
      v-model="value" 
      type="text" 
      placeholder="请输入内容" 
      name='username' 
      width="200px" 
      height="25px"
      :disabled="true"
    ></vu-input> -->
    
    <!-- 清空文本 -->
    <!-- <vu-input 
      v-model="value" 
      type="text" 
      placeholder="请输入内容" 
      name='username' 
      width="200px" 
      height="40px"
      clearable
    ></vu-input> -->

    <!-- 是否显示密码可见按钮 -->
    <!-- <vu-input 
      v-model="value" 
      type="password" 
      placeholder="请输入内容" 
      name='username' 
      width="200px" 
      height="40px"
      showPassword
    ></vu-input> -->

    <!-- 前后icon -->
    <!-- <vu-input 
      v-model="value" 
      type="password" 
      placeholder="请输入内容" 
      name='username' 
      width="200px" 
      height="40px"
      pre-icon="iconedit"
    ></vu-input>
    <vu-input 
      v-model="value" 
      type="password" 
      placeholder="请输入内容" 
      name='username' 
      width="200px" 
      height="40px"
      suffix-icon="iconedit"
    ></vu-input> -->

    <!-- 
    name上传文件名称 
    action上传地址
    limit 限制上传文件个数
    multiple 允许一次选择多个文件上传
    on-exceed 如果超出限制会执行此方法
    on-change 上传文件状态发生变化会执行，上传中、上传成功、上传失败 
    handleSuccess:处理上传成功
    handleError处理上传出错情况
    handleProgress 上传进度条 会触发多次
    file-list 已经上传好了的
    accept 上传文件类型
    -->

    <!-- <vu-upload 
      name="avatar" 
      action="http:localhost:3000/upload"
      :limit="5"
      :accept='accept'
      :multiple="true"
      :file-list="fileList"
      :on-exceed="handleExeed"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :beforeUpload="beforeUpload"
      :drag="true"
    >
    <vu-button type="primary"> 
      点击上传
    </vu-button>
    <div slot="tip"></div>
    </vu-upload> -->

    <!-- 无限滚动 -->
    <ul 
      style="overflow-y:scroll" 
      v-infinite-scroll="load" 
      class="box"
      infinite-scroll-disabled="disabled"
      infinite-scroll-delay='delay'
      infinite-scroll-distance="distance"
      infinite-scroll-immediate="immediate"
    >
      <li v-for=" c in count" :key="c">
        {{c}}
      </li>
      <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      value:'',
      fileList:[
        // {url:'xxx',name:'珠峰架构'},
        // {url:'xxx',name:'珠峰架构'}
      ],
      accept:'image/jpeg',
      count:0,
      // disabled:'false',
      delay:200,
      distance:100,
      immediate:true,
      loading:false,
      // noMore:false
    }
  },
  methods: {
    fn(e) {
      //这个事件需要组件内部传过来
      // alert(1)
      console.log(e);
    },

    //上传之前的处理函数
    handleExeed(files,fileList){
      //超过limit限制个数给提示
      alert('文件上传超过最大限制个数')
    },
    handleChange(file){
      console.log('文件变化了')
    },
    beforeUpload(rawFile){
      console.log('上传校验')
      if(rawFile.size / 1024 > 500){
        alert('文件太大')
        return false
      }else if(this.accept){
        if(!rawFile.name.endsWith('.jpg')){
          alert(`图片只能是 ${this.accept}格式`)
          return false
        }
      }
      return true
      
    }, 

    //上传中的处理函数
    handleSuccess(){

    },
    handleError(){

    },
    handleProgress(){
      console.log('ffff')
    },
    
    // 无限滚动
    // load(){
    //   // this.loading = true
    //   if(this.count < 100){
    //     this.count +=2
    //   }
    // },
    load () {
        this.loading = true
        if(this.count < 50){
          setTimeout(() => {
            this.count += 2
            this.loading = false
          }, 2000)
        }
      }
  },
  computed: {
      noMore () {
        return this.count >= 50
      },
      disabled () {
        return this.loading || this.noMore
      }
    },

};
</script>

<style lang="scss">
#app {
  width: 100%;
}
div {
  display: inline-block;
  // margin: 10px 10px;
}
.red {
  background: red;
}
.green {
  background: green;
}
.orange {
  background: orange;
}
.blue {
  background: skyblue;
}
.vu-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: red;
}
.bg-purple {
  background: pink;
}
.bg-purple-light {
  background: purple;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  width: 100%;
}

.vu-header,
.vu-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.vu-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.vu-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .vu-container {
  margin-bottom: 40px;
}

.vu-container:nth-child(5) .vu-aside,
.vu-container:nth-child(6) .vu-aside {
  line-height: 260px;
}

.vu-container:nth-child(7) .vu-aside {
  line-height: 320px;
}

.box{
  width: 700px;
  height: 400px;
  // border: 1px solid red;
}
ul {
  margin: 0;
  padding: 0;
  text-align: center;
  li {
    list-style: none;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #b3c0d1;
    border: #e9eef3;
    margin: 10px ;
  }
}


</style>
