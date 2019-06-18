import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import ElementUI from 'element-ui';
// ECharts 及扩展
import echarts from 'echarts';
import 'echarts-gl';
// 公共变量
import myStore from '@/components/common/Store';

import 'element-ui/lib/theme-chalk/index.css';
import './style/common.less';
require('echarts/extension/bmap/bmap');

Vue.use(ElementUI);

// 挂载到 Vue 实例上
Vue.prototype.$echarts = echarts;
Vue.prototype.$myStore = myStore;

Vue.config.productionTip = false;

const vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        next({path: '/error'});
    }
    // 做登录拦截，可以参考如下写法, 不做的话把下面代码去掉
    if (to.meta.hasOwnProperty('requiresLogin') && to.meta.requiresLogin && !vm.$store.state.isLogin) {
        /* MessageBox.confirm('请先登录').then(action => {
            next({path: '/login'});
        }, res => {
            next(false);
        }); */
        next();
    } else {
        next();
    }
});
