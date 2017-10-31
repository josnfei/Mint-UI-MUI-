// 步骤1：导入 vue这个包
// var Vue = require('vue');
import Vue from 'vue';

// 步骤2：想要解析和呈现App.vue组件的内容，则导入 App.vue组件
// var App = require('./App.vue');
import App from './App.vue'; //主组件

// 引入移动全部组件
import Mint from 'mint-ui';
Vue.use(Mint);


// 1.0 路由的写法
// 1.0.0 导包
import vueRouter from 'vue-router';

// 1.0.2 将vueRouter和vue绑定起来
Vue.use(vueRouter); //全局使用路由// 将路由vueRouter对象绑定到vue对象上

// 1.0.3 定义路由规则
import home from './components/home.vue'; //主页
import mite from './components/mite.vue'; //消息
import question from './components/question.vue'; //问题

// 定义路由规则
var router = new vueRouter({
    routes: [
        { name: 'default', path: '/', redirect: '/home' }, //默认的根路径的时候
        { name: 'home', path: '/home', component: home },
        { name: 'mite', path: '/mite', component: mite },
        { name: 'question', path: '/question', component: question },
    ]
})



// 2.0 axios的使用
// 2.0.1 导入axios包
import axios from 'axios';
// 2.0.2 设定axios的基本的url请求前缀
axios.defaults.baseURL = 'http://157.122.54.189:9095';

// 设定axios的参数使得axios发出的ajax请求能够自动带上cookie
axios.defaults.withCredentials = true;

// 2.0.3 想要在将来的每个子组件中的方法中均可以使用 this.$http去调用其方法执行ajax请求
//就要将axios对象挂载到vue的原型属性$http上
Vue.prototype.$http = axios;

// 2.0.4 绑定到vue上
Vue.use(axios);




// 公有过滤器(全局过滤器)
Vue.filter('timefil', (input, str) => {
    // return '2017-10-10'
    var timeDate = new Date(input);
    var y = timeDate.getFullYear();
    y = y < 10 ? '0' + y : y;
    var m = timeDate.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = timeDate.getDate();
    d = d < 10 ? '0' + d : d;
    var h = timeDate.getHours();
    h = h < 10 ? '0' + h : h;
    var mm = timeDate.getMinutes();
    mm = mm < 10 ? '0' + mm : mm;
    var s = timeDate.getSeconds();
    s = s < 10 ? '0' + s : s;
    if (str == 'YY-MM-DD HH:mm:ss') {
        return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
    }
    if (str == 'YY-MM-DD') {
        return y + '-' + m + '-' + d;
    }
})


new Vue({
    el: '#app',
    router, //使用路由对象实例
    // render: function(create) {
    //     create(App)
    // },
    // es6的写法:将app当做根组件替换index1.html这个模板中的<div id="app">
    render: create => create(App)
});