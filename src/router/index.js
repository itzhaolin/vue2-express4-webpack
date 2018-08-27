import VueRouter from "vue-router";
import index from "../view/index/index";
import user from "../view/user/index";
const routes = [
    {
        path: '/', component: index
    },
    {
        path: '/user', component: user
    }];
const router = new VueRouter({ mode: 'history', routes });

export default router