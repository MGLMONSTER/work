<template>
  <div>
    <!-- <div class="personalDetails">
       <header>
           个人信息
       </header>
       <div class="details" v-for="(details,index) in details" :key="index">
           <img :src="details.imgUrl" alt="" width="130px" height="140px">
           <span>姓名：<i>{{details.name}}</i></span>
           <span>学历：<i>{{details.education}}</i></span>
           <span>籍贯：<i>{{details.native}}</i></span>
           <span>民族：<i>{{details.nation}}</i></span>
           <span>积分：<i>{{details.integral}}积分</i></span>
           <span>身份证号码：<i>{{details.idcard}}</i></span>
           <span>电话：<i>{{details.ihpone}}</i></span>
           <span>邮箱：<i>{{details.email}}</i></span>
           <span>家庭住址：<i>{{details.address}}</i></span>
       </div>
   </div> -->
    <div v-for="(item,index) in temps" :key="index" class="div1">
      <div style="float:left;height:100%;width:auto;margin-left:5px;">
        <router-link :to="'mongolianorg/'+item.rourtlink"><span style="color:#000;">{{item.span}}</span></router-link>
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
        details: [
          {
            imgUrl: '',
            name: '管理员',
            education: '博士',
            native: '内蒙古',
            nation: '蒙古族',
            integral: '168',
            idcard: '172836177272839488',
            ihpone: '17283617727',
            email: '17283617727@163.com',
            address: '鄂尔多斯党建网是由中共鄂尔多斯市委组织部主办'
          }
        ],
        temps: [
          {
            imgUrl: './static/image/portal/图书馆系统.png',
            span: 'ᠭᠤᠷᠪᠠᠨ ᠬᠤᠷᠠᠯ ᠨᠢᠭᠡ ᠬᠢᠴᠢᠶᠡᠯ',
            rourtlink: 'threeMeet'
          },
          {
            imgUrl: './static/image/portal/党员学习平台.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠬᠡᠰᠢᠭᠦᠨ ᠤ ᠰᠤᠷᠤᠯᠴᠠᠬᠤ ᠳᠠᠪᠴᠠᠩ'
          },
          {
            imgUrl: './static/image/portal/换届选举.png',
            span: 'ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ ᠰᠣᠯᠢᠬᠤ ᠰᠤᠩᠭᠤᠭᠤᠯᠢ'
          },
          {
            imgUrl: './static/image/portal/组织生活.png',
            span: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ'
          },
          {
            imgUrl: './static/image/portal/党费管理.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠰᠦᠢᠳᠬᠡᠯ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
          },
          {
            imgUrl: './static/image/portal/老党员管理.png',
            span: 'ᠠᠬᠠᠮᠠᠳ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠤ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
          },
          {
            imgUrl: './static/image/portal/发展党员.png',
            span: 'ᠬᠦᠮᠦᠵᠢᠭᠦᠯᠬᠦ ᠱᠠᠲᠤᠨ ᠤ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ'
          },
          {
            imgUrl: './static/image/portal/流动党员管理.png',
            span: 'ᠨᠡᠭᠦᠳᠡᠯ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠦ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
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
            imgUrl: './static/image/portal/便民服务（一卡通）.png',
            span: 'ᠪᠦᠷᠢᠨ ᠴᠢᠳᠠᠮᠵᠢᠲᠤ ᠺᠠᠷᠲ'
          },
          {
            imgUrl: './static/image/portal/任务管理.png',
            span: 'ᠡᠭᠦᠷᠭᠡ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'
          },
          {
            imgUrl: './static/image/portal/用户中心.png',
            span: 'ᠬᠡᠷᠡᠭᠯᠡᠭᠴᠢᠳ ᠦᠨ ᠳᠠᠭᠤᠤ ᠬᠣᠭᠣᠯᠠᠢ'
          },
          {
            imgUrl: './static/image/portal/党员档案.png',
            span: 'ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ ᠤ ᠳᠠᠩᠰᠠ ᠡᠪᠬᠡᠮᠡᠯ'
          },
          {
            imgUrl: './static/image/portal/党组织档案.png',
            span: 'ᠨᠠᠮ ᠦᠨ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠳᠠᠩᠰᠠ ᠡᠪᠬᠡᠮᠡᠯ'
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
            imgUrl: './static/image/portal/组织关系转接.png',
            span: 'ᠬᠠᠷᠢᠴᠠᠭ᠎ᠠ ᠪᠠᠨ ᠰᠢᠯᠵᠢᠭᠦᠯᠬᠦ'//需要写简称
          },
          {
            imgUrl: './static/image/portal/街道社区党建任务管理.png',
            span: ' ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠡᠭᠦᠷᠭᠡ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ'//需要写简称
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

  .details {
    padding: 10px;
  }

  .details img {
    float: left;
  }

  .details span {
    float: left;
    font-size: 14px;
    color: darkgray;
    margin: 5px;
  }

  .details span i {
    color: black;
    font-style: normal
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

