import Vue from "vue"
import App from "./app"
import router from "./router"
import VueRouter from 'vue-router'

Vue.config.debug = true // 开启错误提示

Vue.use(VueRouter)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})