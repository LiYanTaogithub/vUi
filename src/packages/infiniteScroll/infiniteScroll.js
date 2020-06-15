//自定义用户参数 会和用户传入的值进行合并
import throttle from 'lodash/throttle'
const attributes = {
    delay:{
        default:200
    },
    immediate:{
        default:true
    },
    disabled:{
        default:false
    },
    distance:{
        default:300
    }
}

//合并参数
const getScrollOptions = (el,vm) => {
    return Object.entries(attributes).reduce((map,[key,option])=>{
        // console.log(map)
        //获取自定义参数
        let defaultValue = option.default
        //获取用户传入的属性
        let userOptions = el.getAttribute(`infinite-scroll-${key}`)
        //在 vm 上获取对应属性的参数
        let newValue = vm[userOptions] ? vm[userOptions] : defaultValue
        map[key] = newValue
        return map      //{delay: 200, immediate: true, disabled: "false", distance: 100}
    },{})  
}
//Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。{ foo: 'bar', baz: 42 }; => [ ['foo', 'bar'], ['baz', 42] ]

const getScrollContainer = (el) =>{
    //递归向上找有overflow样式的元素
    let parent  = el
    while(parent){
        if(document.documentElement == parent) {
            return window //表示没有找到
        }
        //获取overflow
        const overflow = getComputedStyle(parent)['overflow']

        if(overflow.match(/scroll|auto/)) {
            return parent
        }
        parent = parent.parantNode
    }
}

const handleScroll = function (cb) {
    // console.log(this)
    // console.log(cb)
    
    let {container,el, vm,observer} = this[scope]

    //看下数据是否已经加载完
    let {disabled,distance} = getScrollOptions(el,vm)
    console.log(disabled)
    // if(disabled) return //没有更多数据了
    // console.log('******************')

    //滚去的高度+可视窗口高度
    let scrollBottom = container.scrollTop + container.clientHeight //已经加载完了的高度

    if(container.scrollHeight - scrollBottom <= distance) {  //container.scrollHeight 是滚动页面的高度
        // console.log('-----------------')
        cb() //加载
    }else { //解除监控
        // console.log('&&&&&&&&&&&&&&')
        if(observer){
            observer.disconnect()
            this[scope].observer = null
        }
    }
}

const scope = 'infinite-scroll'

export default {
    name:'infinite-scroll',
    inserted(el,bindings,vnode){

        // console.log(el,bindings,vnode) //el => ul 绑定v-infinite-scroll这个的目标元素 vnode => 虚拟节点
        const cb = bindings.value
        
        const vm = vnode.context // 上下文
        // console.log(cb,vm)
        //获取滚动元素 从绑定v-infinite-scroll的目标元素开始向上找
        const container = getScrollContainer(el)
        // console.log(container)
        if(container !== window){
            console.log('绑定滚动事件')
 
            //合并参数
            let {delay,immediate} =  getScrollOptions(el,vm) //从el上获取绑定的属性 到vm上去取
            // console.log(options)
            //绑定滚动事件
            let onScroll = throttle(handleScroll.bind(el,cb),delay)
            
            //把所有需要别的地方用到的属性都绑定到el这个变量中
            el[scope] = {
                onScroll,
                container,
                el,
                vm,
            }

            //立即加载数据填充页面
            if(immediate) {
                const observer = el[scope].observer = new MutationObserver(onScroll)
                observer.observe(container,{
                    childList:true, //监控孩子列表的变化
                    subtree:true   // 当子dom发生变化触发
                })
                //默认先加载一次
                onScroll()
            }
            // onScroll()
            
            container.addEventListener('scroll',onScroll)
        }

    },
    //解绑
    unbind(el){
        const {onScroll,container} = el[scope]
        if(container) {
            container.removeEventListener('scroll',onScroll)
            el[scope] = null
        } 
    }
}