import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

const install = (Vue) => {
    Vue.component(Button.name,Button)
    Vue.component(Icon.name,Icon)
    Vue.component(ButtonGroup.name,ButtonGroup)
}

//如果用户以script的形式引入组件，就手动调用install方法
if(typeof window.vue !== 'undefined') {
    install(Vue)
}

export default {
    install
}