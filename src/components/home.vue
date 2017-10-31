<template>
  <div class="temp">
    <!-- 轮播图 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item>
        <img src="http://157.122.54.189:9095/imgs/OK7hP0Lfo4EZLAX9c1sJsSLU.JPG" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://157.122.54.189:9095/imgs/OK7hP0Lfo4EZLAX9c1sJsSLU.JPG" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://157.122.54.189:9095/imgs/OK7hP0Lfo4EZLAX9c1sJsSLU.JPG" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/question">
          <span class="mui-icon mui-icon-home">
            <img src="../../statics/imgs/1.png" alt="">
          </span>
          <div class="mui-media-body">问题汇总</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home">
            <img src="../../statics/imgs/2.png" alt="">
          </span>
          <div class="mui-media-body">重难点</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home">
            <img src="../../statics/imgs/3.png" alt="">
          </span>
          <div class="mui-media-body">常用功能</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home">
            <img src="../../statics/imgs/4.png" alt="">
          </span>
          <div class="mui-media-body">资源下载</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home">
            <img src="../../statics/imgs/5.png" alt="">
          </span>
          <div class="mui-media-body">问题提交</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-home">
              <img src="../../statics/imgs/6.png" alt="">
            </span>
            <div class="mui-media-body">购物商城</div>
          </a>
        </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home"><img src="../../statics/imgs/6.png" alt=""></span>
          <div class="mui-media-body">more</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    .mint-swipe {
        height: 300px;
    }
    
    .mui-icon-home:before {
        content: '';
    }
    
    .mui-icon-home img {
        width: 40px;
        height: 40px;
    }
    
    .mui-table-view {
        background: #fff;
    }
</style>