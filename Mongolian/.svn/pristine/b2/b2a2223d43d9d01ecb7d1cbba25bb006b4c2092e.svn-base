<template>
  <div>
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
        temps: [
          {
            imgUrl: './static/image/portal/党员学习平台.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠦ ᠰᠤᠷᠤᠯᠴᠠᠬᠤ ᠳᠠᠪᠴᠠᠩ'
          },
          {
            imgUrl: './static/image/portal/换届选举.png',
            span: 'ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ ᠰᠣᠯᠢᠬᠤ ᠰᠤᠩᠭᠤᠭᠤᠯᠢ'
          },
          {
            imgUrl: './static/image/portal/组织生活.png',
            span: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ'
          },
          {
            imgUrl: './static/image/portal/组织关系转接.png',
            span: 'ᠬᠠᠷᠢᠴᠠᠭ᠎ᠠ ᠪᠡᠨ ᠰᠢᠯᠵᠢᠭᠦᠯᠬᠦ'//需要写简称
          },
          {
            imgUrl: './static/image/portal/街道社区党建任务管理.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷᠭᠡ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'//需要写简称
          },
          {
            imgUrl: './static/image/portal/党员档案.png',
            span: ' ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠦ ᠵᠢᠯᠣᠭᠤᠳᠬᠤ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
          },
          {
            imgUrl: './static/image/portal/第一书记.png',
            span: 'ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠱᠦᠵᠢ'
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
            imgUrl: './static/image/portal/党员心声.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠤ ᠳᠠᠭᠤᠤ ᠬᠣᠭᠤᠯᠠᠢ'
          },
          {
            imgUrl: './static/image/portal/贫困党员管理.png',
            span: 'ᠶᠠᠳᠠᠭᠤ ᠬᠦᠴᠢᠷ ᠲᠡᠢ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠤ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
          },
          {
            imgUrl: './static/image/portal/创业就业服务.png',
            span: 'ᠦᠢᠯᠡᠰ ᠪᠣᠰᠬᠠᠬᠤ ᠦᠢᠯᠡᠴᠢᠯᠡᠭᠡ'
          },
          {
            imgUrl: './static/image/portal/任务管理.png',
            span: 'ᠡᠭᠦᠷᠭᠡ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
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
            imgUrl: './static/image/portal/党员档案.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠤ ᠳᠠᠩᠰᠠ ᠡᠪᠬᠡᠮᠡᠯ'
          },
          {
            imgUrl: './static/image/portal/党员档案.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠳᠠᠩᠰᠠ ᠡᠪᠬᠡᠮᠡᠯ'
          }]
      }
    }

  }
</script>
<style>
  .div1 {
    width: 22%;
    height: 17%;
    text-align: center;
    float: left;
    box-shadow: #f5f5f6 0px 0px 5px;
    border: 1px solid #eee;
    margin: 9px;
  }

</style>

