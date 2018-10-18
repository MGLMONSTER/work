<template>
  <div class="menu-wrapper">
    <template>
      <!-- <el-card class="box-card">
        <div slot="header" class="clearfix" >
          <span style="font-size:16px;">待办事项</span>
          <el-button style="float: right; padding: 3px 0;font-size:12px;" type="text">更多</el-button>
        </div>
        <div v-for="(backlog,index) in backlog" :key="index" class="text item">
          {{backlog.a }}
        </div>
      </el-card> -->
      <el-card class="box-card">
        <div slot="header" class="clearfix" >
          <span style="font-size:16px;">个人日程</span>
          <div class='month' style="float: right;font-size:12px;">
            <ul>
              <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
              <li class='arrow' @click='pickPre(currentYear, currentMonth)'>❮</li><!-- 前一个月 -->
              <li class='year-month' @click='pickYear(currentYear, currentMonth)'>
                <span class='choose-year'>{{ currentYear }}-</span>
                <span class='choose-month'>{{ currentMonth }}</span>
              </li>
              <li class='arrow' @click='pickNext(currentYear, currentMonth)'>❯</li><!-- 后一个月 -->
            </ul>
          </div>
        </div>
        <!-- 日历 -->
        <div id='calendar'>
          <!-- 年份 月份 -->

          <!-- 星期 -->
          <ul class='weekdays'>
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li style='color:red'>六</li>
            <li style='color:red'>日</li>
          </ul>
          <!-- 日期 -->
          <ul class='days'>
            <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
            <li  v-for='(dayobject,index) in days' :key='index'>
              <!--本月-->
              <!--如果不是本月  改变类名加灰色-->

              <span v-if='dayobject.day.getMonth()+1 != currentMonth' class='other-month day-number'>{{ dayobject.day.getDate() }}</span>

              <!--如果是本月  还需要判断是不是这一天-->
              <span v-else>
                <!--今天  同年同月同日-->
                    <span v-if='currentYMD==formatDate(currentYear,currentMonth,dayobject.day.getDate())' class='active day-number'>
                      {{ dayobject.day.getDate() }}
                      <span class="sign-btn" style="background:red; cursor:pointer;" title='签到' v-on:click='doSign(currentYMD)' ></span>
                    </span>
                    <span v-else class='day-number' >
                      {{ dayobject.day.getDate() }}
                      <span v-if="currentYMD>formatDate(currentYear,currentMonth,dayobject.day.getDate())">
                        <span class="sign-btn" style="background:#67c23a; cursor:pointer;" v-on:click='getDateNum(currentYMD)' title='补签' ></span>
                      </span>
                      <span v-else>
                        <span class="sign-btn" style="background:#c8c9cc; cursor:not-allowed;" title='待签' v-on:click='getDateNum(currentYMD)'></span>
                      </span>
                    </span>
                </span>
            </li>
          </ul>

        </div>
        <div style="width:90%;margin: 0 auto;height:32px;margin-top:20px;">
            <span class="sign-btn1" title='签到' v-on:click='doSign(currentYMD)' >
              签        到
            </span>
        </div>
        <el-card class="box-card1" style="box-shadow:0px 0px 0px;border:0px">
          <div v-for="(SignIn,index) in SignIn" :key="index" class="text item">
            <img :src="SignIn.img" alt="">
            {{SignIn.content}}
          </div>
          <el-button style="float: right; padding: 3px 0 ;color:#e03636;" type="text" >查看更多</el-button>
        </el-card>
      </el-card>
    </template>
  </div>
</template>

<script>

  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      },
      isNest: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        SignIn:[
          {
            imgUrl:'',
            content:'今日已签到，共签到16次'
          },
          {
            imgUrl:'',
            content:'22号待办事项请查看'
          },
          {
            imgUrl:'',
            content:'31号待办事项请查看'
          }
        ],
        backlog:[
          {
            a:'这些年，总书记手把手教少数民族'
          },
          {
            a:'习近平：做好应对任何形式矛盾风'
          },
          {
            a:'【时政微视频】有一种精神'
          },
          {
            a:'深刻认识新思想中党建理论八大创新'
          },
          {
            a:'这些年，总书记手把手教少数民族'
          },
        ],
        days: [],
        currentYMD: undefined,
        currentDay: 1,
        currentMonth: 1,
        currentYear: 2018,
        currentWeek: 1,
      }
    },
    created: function() {  // 在vue初始化时调用
      this.initData(null)
    },
    methods:{
      initData: function(cur) {
        var leftcount = 0 // 存放剩余数量
        var date
        if (cur) {
          //  console.log(cur)
          date = new Date(cur)
        } else {
          var now = new Date()
          var d = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1))
          //每个月的一号   因为外国与中国的月份差一个月  now.getMonth()输出的是当前月的上个月（例如当前月是5月，输出4月）
          this.currentYMD = this.formatDate(now.getFullYear(), now.getMonth()+1, now.getDate())//当前年月日
          // console.log(this.currentYMD)
          d.setDate(42)
          date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
        }
        this.currentDay = date.getDate()
        this.currentYear = date.getFullYear()
        this.currentMonth = date.getMonth() + 1

        this.currentWeek = date.getDay() // 1...6, 0
        // console.log(this.currentWeek)
        if (this.currentWeek == 0) {
          this.currentWeek = 7
        }
        var str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay)
        this.days.length = 0
        // 今天是周日，放在第一行第7个位置，前面6个
        // 初始化本周
        for (var i = this.currentWeek - 1; i >= 0; i--) {
          var d = new Date(str)
          d.setDate(d.getDate() - i)
          var dayobject = {} // 用一个对象包装Date对象  以便为以后预定功能添加属性
          dayobject.day = d
          this.days.push(dayobject) // 将日期放入data 中的days数组 供页面渲染使用
        }
        // 其他周
        for (var i = 1; i <= 42 - this.currentWeek; i++) {
          var d = new Date(str)
          d.setDate(d.getDate() + i)
          var dayobject = {}
          // dayobject.day=d;
          dayobject = { day: d }
          this.days.push(dayobject)
        }
      },
      doSign (time) {
        console.log("我的信息")
        this.$message({
          message: '签到成功！--' + time,
          type: 'success'
        });
      },
      pickPre: function(year, month) {
        // setDate(0); 上月最后一天
        // setDate(-1); 上月倒数第二天
        // setDate(dx) 参数dx为 上月最后一天的前后dx天
        var d = new Date(this.formatDate(year, month, 1))
        d.setDate(0)
        this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      },
      pickNext: function(year, month) {
        var d = new Date(this.formatDate(year, month ,  1));
        d.setDate(42)
        this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      },
      pickYear: function(year, month) {
        alert(year + ', ' + month)
      },

      // 返回 类似 2016-01-02 格式的字符串
      formatDate: function(year, month, day) {
        var y = year
        var m = month
        if (m < 10) m = '0' + m
        var d = day
        if (d < 10) d = '0' + d
        return y + '-' + m + '-' + d
      }
    },
    mounted(){
      // window.onscroll=function(){
      //   if(document.documentElement.scrollTop>52){
      //     document.getElementById("dangwugongkai11").style.cssText="font-size:30px;height:52px;color:white;padding:20px;line-height:52px;background:#E33434;";
      //     document.getElementById("dangwugongkai12").style.cssText="font-size:15px;background:#E33434;position:fixed;width:130px;";
      //   }else{
      //     document.getElementById("dangwugongkai11").style.cssText="font-size:30px;height:52px;color:white;padding:20px;line-height:52px;background:#E33434;";
      //     document.getElementById("dangwugongkai12").style.cssText="font-size:15px;background:#E33434;position:fixed;width:145px;";
      //   }
      // }
    }
  }
</script>
<style>
  .text {
    font-size: 14px;
  }
  .item1{
    margin-bottom: 10px;
    font-size:12px;
  }
  .item {
    margin-bottom: 18px;
    font-size:12px;
  }
  .el-card__header{
    margin: 20px 10px 0px 10px;
    padding:0px;
    padding-bottom:10px;
    border-bottom: 1px solid #e03636;
  }
  .el-card__body{
    padding: 20px 10px;
    overflow: hidden;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card1 {
    width: 100%;
  }
  .box-card {
    width:100%;
    /* margin-top: 10px;
    width:96%;
    /* margin-left:2%; */
  }
  .con-table{
    width: 95%;
    text-align: center;
    margin: 15px auto;

  }
  .sign-btn{

    width:10px;
    height:10px;
    border-radius:50%;
    line-height: 10px;
    text-align: center;
    display: block;
    position: absolute;
    left:31%;
    bottom:4px;
  }
  .sign-btn1{
    background:#e03636;
    cursor:pointer;
    float: right;
    padding: 10px 30px;
    border-radius:10px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.897);
  }
  .op-btn{
    cursor:pointer;
    background: #67c23a;
    color: #fff;
    font-size: 10px;
    width: 27%;
    height: 25px;
    line-height: 25px;
    display: block;
    float: left;
    margin-left:5px;
    border-radius:5px;
  }
  .day-number{
    font-size:15px;
    color: #9E9E9E;
  }
  /*日历样式*/
  * {
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }
  .top-sign{
    cursor:pointer;
    width: 90%;
    margin:10px auto;
    background: #e0e0e0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius:5px;

  }
  .syslocation{
    width: 90%;
    font-size: 14px;
    text-align: center;
    display: block;
    margin-bottom: 15px;
  }
  .month {
    width: 50%;
  }

  .month ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    color: #d5d5d5;
  }
  .year-month:hover {
    background: rgba(150,  2,  12,  0.1);
  }
  .arrow {
    padding: 0px;
  }

  .arrow:hover {
    background: rgba(100,  2,  12,  0.1);
  }
  .weekdays {
    margin: 0;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .weekdays li {
    display: inline-block;
    width: 6.6%;
    text-align: center;
  }

  .days {
    padding: 0;
    background: #FFFFFF;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .days li {
    list-style-type: none;
    display: inline-block;
    width: 14%;
    height: 40px;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 0;
    font-size: 1rem;
    color: #000;
    position: relative;
    top: 0;
    left: 0;
    margin-top: 5px;
  }

  .days li .active {
    padding: 5px 5px;
    border-radius: 50%;
    background: #e03636;
    color: #fff;
  }

  .days li .other-month {
    padding: 5px;
    color: gainsboro;
  }

  .days li:hover {
    background: #e9e9ea;
  }

  .prn-link1 a{
    background: #fff;
  }
</style>
