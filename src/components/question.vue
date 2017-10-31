<template>
  <div class="temp">
      <ul v-for="(item,index) in questlist" :key="index" class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell mui-media" v-for='subitem in item.datas'>
            <a class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left" :src="subitem.img_url">
              <div class="mui-media-body">
                {{subitem.artTitle}}
                <p class="mui-ellipsis">{{subitem.zhaiyao}}</p>
              </div>
            </a>
          </li>
        </ul>
        
  </div>
</template>
<script>
    export default {
        data() {
            return {
                questlist: [],
            }
        },
        created() {
            this.getlist();
        },
        methods: {
            getlist() {
                var url = '/site/article/getarticles/question'
                this.$http.get(url).then(res => {
                    if (res.data.status == 1) {
                        return alert(res.data.message);
                    }
                    // 成功
                    this.questlist = res.data.message;
                })
            }
        }

    }
</script>
<style></style>