<template>
  <div>
    <!-- <div class="personalDetails">
       <header>
           组织信息
       </header>
       <div class="branch" v-for="(branch,index) in branch" :key="index">
           <span>支部名称：<i>{{branch.name}}</i></span>
           <span>党员数量：<i>{{branch.number}}</i></span>
           <span>支部积分：<i>{{branch.integral}}积分</i></span>
           <span>支部积分排名：<i>第{{branch.ranking}}名</i></span>
       </div>
   </div> -->
    <div v-for="(item,index) in temps" :key="index" class="div1">
      <div style="float:left;height:100%;width:auto;margin-left:5px;">
        <span style="color:#000;">{{item.span}}</span>
      </div>
      <div style="float:right;width:40%;margin:2%;">
        <img :src="item.imgUrl" alt="" style=" width:90%; height:90%;">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        branch: [
          {
            name: '鄂尔多斯党支部',
            integral: '5888',
            number: '45006',
            ranking: '8'
          }
        ],
        temps: [
          {
            imgUrl: './static/image/portal/党员学习平台.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠤ ᠰᠤᠷᠤᠯᠴᠠᠬᠤ ᠳᠠᠪᠴᠠᠩ'
          },
          {
            imgUrl: './static/image/portal/换届选举.png',
            span: 'ᠰᠤᠩᠭᠤᠭᠤᠯᠢ ᠰᠣᠯᠢᠬᠤ'
          },
          {
            imgUrl: './static/image/portal/组织生活.png',
            span: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ'
          },
          {
            imgUrl: './static/image/portal/组织关系转接.png',
            span: 'ᠬᠠᠷᠢᠴᠠᠭ᠎ᠠ ᠪᠡᠨ ᠰᠢᠯᠵᠢᠭᠦᠯᠬᠦ'//需要写简称
          },
          {
            imgUrl: './static/image/portal/街道社区党建任务管理.png',
            span: 'ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠡᠭᠦᠷᠭᠡ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'//需要写简称
          },
          {
            imgUrl: './static/image/portal/非公经济和社会组织信息采集.png',
            span: 'ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠰᠤᠷᠠᠭ ᠵᠠᠩᠭᠢ ᠴᠤᠭᠯᠠᠭᠤᠯᠬᠤ'//需要写简称
          },
          {
            imgUrl: './static/image/portal/老党员管理.png',
            span: 'ᠠᠬᠠᠮᠠᠳ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠦ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
          },
          {
            imgUrl: './static/image/portal/流动党员管理.png',
            span: 'ᠨᠡᠭᠦᠳᠡᠯ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠦ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
          },
          {
            imgUrl: './static/image/portal/发展党员.png',
            span: 'ᠬᠦᠮᠦᠵᠢᠭᠦᠯᠬᠦ ᠱᠠᠲᠤᠨ ᠤ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ'
          },
          {
            imgUrl: './static/image/portal/红色电商.png',
            span: 'ᠤᠯᠠᠭᠠᠨ ᠡᠯᠸᠺᠲ᠋ᠷᠤᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ'
          },
          {
            imgUrl: './static/image/portal/创业就业服务.png',
            span: 'ᠦᠢᠯᠡᠰ ᠪᠣᠰᠬᠠᠬᠤ ᠦᠢᠯᠡᠴᠢᠯᠡᠭᠡ'
          },
          {
            imgUrl: './static/image/portal/智能提醒.png',
            span: 'ᠣᠶᠤᠨᠴᠢ ᠰᠠᠨᠠᠭᠤᠯᠭ᠎ᠠ'
          },
          {
            imgUrl: './static/image/portal/党支部管理.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
          },
          {
            imgUrl: './static/image/portal/党建指导员管理.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠵᠢᠭᠠᠨ ᠵᠢᠯᠤᠭᠤᠳᠤᠭᠴᠢ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
          },
          {
            imgUrl: './static/image/portal/第一书记.png',
            span: 'ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠱᠦᠵᠢ'
          },
          {
            imgUrl: './static/image/portal/党员档案.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠤ ᠳᠠᠩᠰᠠ ᠡᠪᠬᠡᠮᠡᠯ'
          },
          {
            imgUrl: './static/image/portal/党组织档案.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠳᠠᠩᠰᠠ ᠡᠪᠬᠡᠮᠡᠯ'
          },
          {
            imgUrl: './static/image/portal/党员心声.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠤ ᠳᠠᠭᠤᠤ ᠬᠣᠭᠤᠯᠠᠢ'
          },
          {
            imgUrl: './static/image/portal/贫困党员管理.png',
            span: 'ᠶᠠᠳᠠᠭᠤ ᠬᠦᠴᠢᠷ ᠲᠡᠢ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠤ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
          }]
      }
    }

  }
</script>
<style>
  header {
    padding: 12px 10px;
    font-size: 15px;
    background: #e03636;
    color: white;
  }

  .branch {
    padding: 10px;
  }

  .branch img {
    float: left;
  }

  .div1 {
    width: 22%;
    height: 17%;
    text-align: center;
    float: left;
    box-shadow: #f5f5f6 0px 0px 5px;
    border: 1px solid #eee;
    margin: 9px;
  }

  .div1 span {
    font-size: 13pt;
    display: inline-block;
    height: 95%;
    font-weight: bold;
    margin-top: 5px;
    font-family: OrhonChaganTig, Helvetica, Arial, Verdana, Microsoft YaHei;
    writing-mode: vertical-lr;
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    -o-writing-mode: vertical-lr;
    -moz-writing-mode: vertical-lr;
    text-orientation: sideways-right;
    -webkit-text-orientation: sideways-right;
    -ms-text-orientation: sideways-right;
    -o-text-orientation: sideways-right;
    -moz-text-orientation: sideways-right;
    unicode-bidi: embed;
    word-spacing: normal;
    word-wrap: normal;
    word-break: keep-all;
  }

  .branch span {
    float: left;
    font-size: 14px;
    color: darkgray;
    margin: 5px;
  }

  .branch span i {
    color: black;
    font-style: normal
  }

  .personalDetails {
    margin-top: 9px;
    width: 277px;
    height: 347px;
    float: right;
    box-shadow: #f5f5f6 0px 0px 5px;
    clear: both;
    border: 1px solid #eee;
    margin-right: 23px;
  }
</style>

