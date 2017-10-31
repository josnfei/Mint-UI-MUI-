<!--根组件,用来装所有的组件,比如登录或者admin后台-->


<template>
    <!-- 通常编写组件的html结构，注意vue2.0中一定要有一个根元素 -->
    
    <div class="tmpl">
        <mt-header fixed title="固定在顶部"></mt-header>
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item "  to="/home">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item"  to="/mite">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                    <span class="mui-tab-label">消息</span>
                </router-link>
                <router-link class="mui-tab-item"  to="/t">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">通讯录</span>
                </router-link>
                <router-link class="mui-tab-item "  to="/set">
                    <span class="mui-icon mui-icon-gear"></span>
                    <span class="mui-tab-label">设置</span>
                </router-link>  
        </nav>
    </div>
</template>

<script>
    // es6的export default{ 写法等同于 module.exports={
    export default {
        // es6的写法 data() 等同于es5的 data:function()
        data() {
            return {
                name: 'heima'
            }
        },
        methods: {

        }
    }
</script>

<style>
    @import url('../node_modules/mint-ui/lib/style.css');
    /*改过的*/
    
    @import url('../statics/mui/css/mui.css');
    .tmpl {
        margin-top: 40px;
        margin-bottom: 51px;
    }
    
    .router-link-active {
        color: #0094ff !important;
    }
</style>