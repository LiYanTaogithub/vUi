import Button from './button/button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button/button-group.vue'
import Col from './layout/col.vue'
import Row from './layout/row.vue'
import Aside from './container/aside.vue'
import Main from './container/main.vue'
import Footer from './container/footer.vue'
import Header from './container/header.vue'
import Container from './container/container.vue'
import Input from './input/input.vue'

import Upload from './upload/upload.vue'
import Progress from './upload/progress.vue'

import infiniteScroll from './infiniteScroll/infiniteScroll'

const install = (Vue) => {
    Vue.component(Button.name,Button)
    Vue.component(Icon.name,Icon)
    Vue.component(ButtonGroup.name,ButtonGroup)
    Vue.component(Row.name,Row)
    Vue.component(Col.name,Col)
    Vue.component(Aside.name,Aside)
    Vue.component(Main.name,Main)
    Vue.component(Footer.name,Footer)
    Vue.component(Header.name,Header)
    Vue.component(Container.name,Container)
    Vue.component(Input.name,Input)
    Vue.component(Upload.name,Upload)
    Vue.component(Progress.name,Progress)

    Vue.directive(infiniteScroll.name,infiniteScroll)
}

//如果用户以script的形式引入组件，就手动调用install方法
if(typeof window.vue !== 'undefined') {
    install(Vue)
}

export default {
    install
}