var path = require('path'); //引入nodejs里面的path核心模块
// 这个包的作用就是在内存中自动生成一个index.html页面
var htmlwp = require("html-webpack-plugin");
//导入局部webpack
var webpack = require('webpack');

// 导入打包分离CSS包
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// 此配置文件在控制台上使用 webpack 的时候后面如果不加任何参数，则默认会查找 webpack.config.js的配置文件去执行
module.exports = {
    // 1.0 配置打包时的入口文件
    entry: {
        // build 这个名字可以随便起，最后生成的.js是按照这个名字来命名的
        build: './src/main.js', //表示打包的时候自动查找当前目录下面的src下面的main.js作为入口文件
        // 分离公共组件配置步骤1：配置当前项目中的各个公共组件为单独的供应商(vendor)
        vendor1: ['vue', 'axios', 'vue-router'],
        vendor2: ['element-ui'],
        vendor3: ['iview', ]
    },
    // 2.0 配置打包时的生成文件
    output: {
        // path.join() 将多个路径拼接成一个路径，不管/分隔符有几个均可以
        path: path.join(__dirname, '/dist'),
        // filename: 'build.js'
        //分离公共组件配置步骤3：将输出文件命名为和entry:中配置的属性名称同名
        filename: '[name].js'
    },
    // 全局使用JQ
    // resolve: {
    //     alias: {
    //         // webpack 使用 jQuery，如果是自行下载的
    //         // 'jquery': path.join(__dirname, 'jquery所在的目录/jquery.min'),
    //         // 如果使用NPM安装的jQuery
    //         'jquery': 'jquery'
    //     }
    // },
    // 3.0 配置相关的loader
    module: {
        //webpack本身不支持css,less,sass,js,image等相关资源的打包工作的，它仅仅提供了一个基础的框架，在这个框架上借助于相关的loader才可以实现css,less,sass,js,image等相关资源的打包工作
        loaders: [{ //webpack2及其以上也可以使用 rules:[]
                // 打包的时候碰到.css文件则被这个正则匹配
                test: /\.css$/,
                // 交给'style-loader','css-loader' 去进行打包
                // 编写的顺序一定是：先'style-loader' 然后再是'css-loader'
                // webpack的顺序，先使用css-loader再使用style-loader
                // loader: ['style-loader', 'css-loader']
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.less$/,
                // loader: ['style-loader', 'css-loader', 'less-loader']
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
            },
            {
                // 在使用npm安装的 node-sass的时候会自动跑到github上去下载，会很慢，这时请使用 cnpm i node-sass sass-loader --save-dev
                test: /\.scss$/,
                // loader: ['style-loader', 'css-loader', 'sass-loader']
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            },
            // 配置图片的正则表达式和loader
            {
                // 表示匹配.png,.jpg,.gif的任一一个
                test: /\.(png|jpg|gif|woff|ttf|eot|svg)$/,
                // url-loader这种写法不管图片大小均以base64的形式打包到build.js中,那么如果图片很大的话，会导致
                //build.js文件也很大，性能低下
                // loader:['url-loader']  
                // 上述问题可以使用 limit=10240(Byte) （10K） 来限定如果超过这个值，则拷贝原图片，否则则打包到build.js中
                loader: ['url-loader?limit=10240']
            },
            //使用iview组件按需引用是直接引用的组件库源代码，需要借助 babel 进行编译，以 webpack 为例：
            { test: /iview.src.*?js$/, loader: 'babel-loader' },
            // 如果使用的webpack1.0的话这个配置就会起作用
            {

                // es6语法通常是写在 .js文件中
                test: /\.js$/,
                loader: ['babel-loader'], //负责将es6转换成es5
                // 排除node_modules下面的所有js文件
                exclude: /node_modules/
            },
            // 配置 .vue文件的打包正则
            {
                // 匹配一个vue的组件页面
                test: /\.vue$/,
                loader: ['vue-loader']
            }
        ]
    },
    //// 上面导入html-webpack-plugin 包,获取到插件对象
    plugins: [
        new htmlwp({
            title: '首页', //生成的页面标题，需要在模板index1.html中的title中使用：<%= htmlWebpackPlugin.options.title %>
            filename: 'index.html', ////webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
            template: 'index1.html' ////根据index1.html这个模板来生成(这个文件请程序员自己生成)
        }),
        //分离公共组件配置步骤2
        new webpack.optimize.LimitChunkCountPlugin({
            // 这里和上面第一步的配置相反即可
            names: ['vendor3', 'vendor2', 'vendor1']
        }),
        // 分离CSS
        new ExtractTextPlugin('[name].css')
    ],
}