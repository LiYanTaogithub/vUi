<template>
    <div class="vu-input" :class="inputClass">
        <input 
            :type="inputType" 
            :value="value" 
            :placeholder="placeholder" 
            :name="name" 
            @input="$emit('input',$event.target.value)"
            :style="{width,height}"
            :disabled="disabled"
            @focus="$emit('focus',$event.target.value)"
            @blur="$emit('blur',$event.target.value)"
            @change="$emit('change',$event.target.value)"
            ref="input"
        >
        <!-- @mousedown.native.prevent 阻止按钮点击之后input框失去焦点 -->
        <vu-icon 
           icon="iconqingchu"
            v-if="clearable && value"
            @click.native="$emit('input', '')"
            @mousedown.native.prevent
        ></vu-icon>

         <!-- @mousedown.native.prevent  这里不能阻止失去焦点 因为下面要让它重新获取焦点-->
        <vu-icon 
           icon="iconyanjing-"
            v-if="showPassword && value"
            @click.native="passwordVisiablestatus"
        ></vu-icon>
        <!-- 前icon -->
        <vu-icon 
           :icon="preIcon"
            v-if="preIcon"
        ></vu-icon>
        <!-- 后icon -->
        <vu-icon 
           :icon="suffixIcon"
            v-if="suffixIcon"
        ></vu-icon>
    </div>
</template>
<script>
export default {
    name:'vu-input',
    props:{
        name:{
            type:String,
            default:'text'
        },
        type:{
            type:String,
            default:'text'
        },
        placeholder:{
            type:String,
            default:'请输入内容'
        },
        value:{
            type:String,
            default:''
        },
        width:{
            type:String,
            default:'300px'
        },
        height:{
            type:String,
            default:'50x'
        },
        disabled:{
            type:Boolean,
            default:false
        },
        clearable:{
            type:Boolean,
            default:false
        },
        //密码可见 要改type 借助第三方变量
        showPassword:{
            type:Boolean,
            default:false
        },
        preIcon:String,
        suffixIcon:String,
    },
    data(){
        return {passwordVisiable:false}
    },
    computed:{
        inputClass(){
            let classes = []
            if(this.clearable || this.showPassword || this.suffixIcon){
                classes.push(`vu-input-suffix-icon`)
            }
            if(this.preIcon){
                classes.push(`vu-input-pre-icon`)
            }
            return classes
        },
        inputType(){
            return this.showPassword ? (this.passwordVisiable?'text':'password') : this.type
        },
    },
    methods:{
        //点击 查看密码icon true是text false是password
        passwordVisiablestatus(){
            return this.passwordVisiable = !this.passwordVisiable
            this.$nextTick(() =>{
                this.$refs.input.focus()
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/_var.scss';
.vu-input{
    display: inline-flex;
    position: relative;
    align-items: center;
    input{
        
        padding: 8px;
        border-radius: $border-radius;
        border: 1px solid #dcdfe6;
        &:focus{ 
            border: 1px solid $primary;
            outline: none;
            box-shadow: inset -1px 0px 2px $primary, inset 1px 1px 1px $primary;
        }
        &[disabled]{
            cursor: not-allowed;
            background: #eee;
        }
    }
}
.vu-input-suffix-icon {
    input{ 
        padding-right: 25px;
    }
    .vu-icon{ 
         position: absolute;
        right: 8px; 
        width: 20px;
        height: 20px;
        // top: calc(height-);
    }
   
}
.vu-input-pre-icon{
    input{
        padding-right: 30px;
        padding-left: 30px;
    }
    .vu-icon{ 
         position: absolute;
        left: 8px; 
        width: 20px;
        height: 20px;
        // top: calc(height-);
    }
   
}
</style>