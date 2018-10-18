<template>
  <div id="id" class="app-table">
    <ul class="ul-li " style="padding: 0px;">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
          <div id="SuccessInfo" style="padding-right: 20px">
            <div class="ul-li-div" style="writing-mode:vertical-lr;">
              <!--会议-->
              <span style="padding-top: 15px;">ᠬᠤᠷᠠᠯ</span>
              <!--状态-->
              <span style="margin-top: 230px;">ᠪᠠᠶᠢᠳᠠᠯ </span>
              <!--完成统计-->
              <span style="padding-top: 50px;">ᠪᠡᠶᠡᠯᠡᠭᠦᠯᠦᠭᠰᠡᠨ ᠪᠦᠷᠢᠳᠬᠡᠯ</span>
            </div>
            <ul class="ul-li-ul">
              <li class="ul-li-D">
                <!--党课-->
                <p>ᠨᠠᠮ  ᠤᠨ ᠬᠢᠴᠢᠶᠡᠯ </p>
                <!--党小组会-->
                <p>ᠨᠠᠮ  ᠤᠨ ᠳᠤᠭᠤᠶᠢᠯᠠᠩ  ᠤᠨ ᠬᠤᠷᠠᠯ </p>
                <!--党支部委员会-->
                <p>ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ  ᠦᠨ ᠵᠥᠪᠯᠡᠯ </p>
                <!--支部党员大会-->
                <p>ᠨᠠᠮ  ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ  ᠦ ᠳᠠᠶᠢᠴᠢᠯᠠᠯᠲᠠ ᠶᠢᠨ ᠬᠤᠷᠠᠯ </p>
              </li>
              <li>
                <p>
                  <!--未完成-->
                  <span v-if="getMemberAndLectureV.lectureQuarter === 0" style="color:red">ᠪᠡᠶᠡᠯᠡᠭᠦᠯᠦᠭᠡ ᠦᠭᠡᠢ </span>
                  <!--已完成-->
                  <span v-else style="color:green">ᠪᠡᠶᠡᠯᠡᠭᠦᠯᠦᠭᠰᠡᠨ </span>
                </p>
                <p>
                  <!--未完成-->
                  <span v-if="getBranchAndMeetGroupV.meetGroupMouth === 0" style="color:red">ᠪᠡᠶᠡᠯᠡᠭᠦᠯᠦᠭᠰᠡᠨ </span>
                  <!--已完成-->
                  <span v-else style="color:green">ᠪᠡᠶᠡᠯᠡᠭᠦᠯᠦᠭᠰᠡᠨ </span>
                </p>
                <p>
                  <!--未完成-->
                  <span v-if="getBranchAndMeetGroupV.branchMouth === 0" style="color:red">ᠪᠡᠶᠡᠯᠡᠭᠦᠯᠦᠭᠰᠡᠨ </span>
                  <!--已完成-->
                  <span v-else style="color:green">ᠪᠡᠶᠡᠯᠡᠭᠦᠯᠦᠭᠰᠡᠨ </span>
                </p>
                <p>
                  <!--未完成-->
                  <span v-if="getMemberAndLectureV.memberQuarter === 0" style="color:red">ᠪᠡᠶᠡᠯᠡᠭᠦᠯᠦᠭᠰᠡᠨ </span>
                  <!--已完成-->
                  <span v-else style="color:green">ᠪᠡᠶᠡᠯᠡᠭᠦᠯᠦᠭᠰᠡᠨ </span>
                </p>
              </li>
              <li>
                <!--本季-->
                <p>ᠲᠣᠰ ᠤᠯᠠᠷᠢᠯ  : {{getMemberAndLectureV.lectureQuarter}} ᠤᠳᠠᠭ᠎ᠠ</p>
                <!--本月-->
                <p>ᠲᠣᠰ ᠰᠠᠷ᠎ᠠ  : {{getBranchAndMeetGroupV.meetGroupMouth}} ᠤᠳᠠᠭ᠎ᠠ</p>
                <!--本月-->
                <p>ᠲᠣᠰ ᠰᠠᠷ᠎ᠠ  : {{getBranchAndMeetGroupV.branchMouth}} ᠤᠳᠠᠭ᠎ᠠ</p>
                <!--本季-->
                <p>ᠲᠣᠰ ᠤᠯᠠᠷᠢᠯ  : {{getMemberAndLectureV.memberQuarter}} ᠤᠳᠠᠭ᠎ᠠ</p>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" style="margin-top: 10px;">
          <div id="SuccessInfo2">
            <div class="ul-li-div1">
              <!--考勤情况-->
              ᠠᠵᠢᠯ ᠳᠦ ᠭᠠᠷᠤᠭᠰᠠᠨ ᠪᠠᠶᠢᠳᠠᠯ
            </div>
            <div style="magin:0 auto">
              <circularOne></circularOne>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
          <div id="SuccessInfo4">
            <div class="ul-li-div3">
              <!--会议-->
              <span>ᠬᠤᠷᠠᠯ</span>
              <!--完成统计-->
              <span style="margin-top:180px;">ᠪᠡᠶᠡᠯᠡᠭᠦᠯᠦᠭᠰᠡᠨ ᠪᠦᠷᠢᠳᠬᠡᠯ</span>
            </div>
            <ul class="ul-li-z" style="margin-bottom: 10px;">
              <li>
                <!--党课-->
                <p>ᠨᠠᠮ  ᠤᠨ ᠬᠢᠴᠢᠶᠡᠯ </p>
                <!--党小组会-->
                <p>ᠨᠠᠮ  ᠤᠨ ᠳᠤᠭᠤᠶᠢᠯᠠᠩ  ᠤᠨ ᠬᠤᠷᠠᠯ </p>
                <!--党支部委员会-->
                <p>ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ  ᠦᠨ ᠵᠥᠪᠯᠡᠯ </p>
                <!--支部党员大会-->
                <p>ᠨᠠᠮ  ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠨ  ᠦ ᠳᠠᠶᠢᠴᠢᠯᠠᠯᠲᠠ ᠶᠢᠨ ᠬᠤᠷᠠᠯ </p>
              </li>
              <li>

                <!--共1 次-->
                <p>ᠨᠡᠶᠢᠲᠠ {{getAllMeetingNumberV.lectureNumber}} ᠤᠳᠠᠭ᠎ᠠ</p>
                <p>ᠨᠡᠶᠢᠲᠠ {{getAllMeetingNumberV.meetGroupNumber}} ᠤᠳᠠᠭ᠎ᠠ</p>
                <p>ᠨᠡᠶᠢᠲᠠ {{getAllMeetingNumberV.twoLearnNumber}} ᠤᠳᠠᠭ᠎ᠠ</p>
                <p>ᠨᠡᠶᠢᠲᠠ {{getAllMeetingNumberV.branchNumber}} ᠤᠳᠠᠭ᠎ᠠ</p>
              </li>
            </ul>
            <div style="clear:both"></div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" style="margin-top: 10px;">
          <div id="SuccessInfo3">
            <div class="ul-li-div2">
              <!--参会率对比-->
              ᠬᠤᠷᠠᠯ ᠳᠤ ᠣᠷᠣᠯᠴᠠᠭᠰᠠᠨ ᠨᠣᠷᠮ᠎ᠠ ᠶᠢᠨ ᠠᠳᠠᠯᠢᠳᠬᠠᠯ
            </div>
            <div>
              <circularTwo></circularTwo>
            </div>
          </div>
        </el-col>

      </el-row>
    </ul>
    <div style="clear:both"></div>
    <ul class="ul-li-Bottom" style="padding: 0px;">
      <el-row :gutter="20">
        <el-col style="overflow:hidden;position:relative;height: 100%;" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
          <div id="ClassInfo1">
            <div class="ul-li-bottom-div">
              <!--会议名称-->
              <span style="margin-top: 10px;">ᠬᠤᠷᠠᠯ ᠤᠨ ᠨᠡᠷᠡᠶᠢᠳᠦᠯ </span>
              <!--开始时间-->
              <span style="margin-top: 300px">ᠡᠬᠢᠯᠡᠬᠦ ᠴᠠᠭ</span>
            </div>
            <!-- 数据展示 -->
            <ul class="content">
              <li v-for="(val,index) in TestInfo" :key="index">
                <el-tooltip class="item" :disabled="Meetlenght(val.title)" effect="light" placement="right">
                  <div slot="content">
                    {{val.title}}
                  </div>
                  <div>
                    {{val.title | TestI}}
                    <!-- 字符截取  TestInfo是数据   大于12位自动变为... -->
                  </div>
                </el-tooltip>
                <div style="margin-bottom: 10px;">
                  {{val.beginTime | TestII}}
                </div>
                <div style="clear:both"></div>

              </li>
            </ul>
            <div style="color:red;" class="MoreG" @click="toMeeting()">
              <!--查看更多-->
              ᠨᠡᠩ ᠣᠯᠠᠨ ᠢ ᠦᠵᠡᠬᠦ >>
            </div>
          </div>
        </el-col>
        <el-col style="overflow:hidden;position:relative;height: 100%;" :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
          <div id="ClassInfo1">
            <div class="Review-List">
              <!--评论列表-->
              ᠰᠢᠭᠦᠮᠵᠢ ᠶᠢᠨ ᠵᠢᠭᠰᠠᠭᠠᠯ
            </div>
            <ul class="Review-bottom">
              <li v-for="(val,index) in TestList" :key="index">
                <!-- 数据是TestList -->
                <div><span v-html="TestIIIII(val.content)"></span></div>
                <div style="text-align:right">{{val.name}} 于 {{val.createdTime | TestIII}}</div>
              </li>
            </ul>
            <div class="ModeList" style=" margin-left: 20px;" @click="toExends()">
              <!--查看更多-->
              ᠨᠡᠩ ᠣᠯᠠᠨ ᠢ ᠦᠵᠡᠬᠦ >></div>
          </div>
        </el-col>
      </el-row>
    </ul>
    <div style="clear:both"></div>
  </div>
</template>
<script>
  import circularOne from "./Statistics/circularOne.vue";
  import circularTwo from "./Statistics/circularTwo.vue";
  import {getZhiBId} from "@/utils/auth";
  import store from "@/store/index";
  import {
    getMemberAndLecture,
    getBranchAndMeetGroup,
    getAllMeetingNumber,
    getJoinOrNotPeople,
    getResultInDashboard
  } from "@/api/organization/dashboard/index";
  import {getMessageVoInDashboard} from "@/api/organization/dashboard/index";

  export default {
    data() {
      return {
        TestInfo: [
          {title: "", beginTime: "", mid: undefined},
        ],
        TestList: [
          {
            content: undefined,
            createdTime: undefined,
            mId: undefined,
            name: undefined
          }
        ],
        // 查询季度支部党员大会和党课
        getMemberAndLectureV: {memberQuarter: 0, lectureQuarter: 0},
        //查询月度党支部委员会和党小组会
        getBranchAndMeetGroupV: {branchMouth: 0, meetGroupMouth: 0},
        //查询所有会议类型次数
        getAllMeetingNumberV: {
          branchNumber: 0,
          demoocraticNumber: 0,
          lectureNumber: 0,
          managementNumber: 0,
          meetGroupNumber: 0,
          memberNumber: 0,
          organizationActivityNumber: 0,
          twoLearnNumber: 0
        },
        //部门id
        deptId: getZhiBId(),
        listQuery: {
          page: 1,
          limit: 6,
          //        title: undefined,
          //        beginTime: undefined,
          createdUid: store.state.user.userId
        },
        resultListQuery: {
          page: 1,
          limit: 4,
          //        title: undefined,
          //        beginTime: undefined,
          deptid: getZhiBId()
        }
      };
    },
    created() {
      getMemberAndLecture(this.deptId).then(response => {
        if (response[0] != null) {
          this.getMemberAndLectureV = response[0];
        }
      });
      getBranchAndMeetGroup(this.deptId).then(response => {
        if (response[0] != null) {
          this.getBranchAndMeetGroupV = response[0];
        }
      });
      getAllMeetingNumber(this.deptId).then(response => {
        if (response[0] != null) {
          this.getAllMeetingNumberV = response[0];
          this.sumAllMeetNumber =
            this.getAllMeetingNumberV.branchNumber +
            this.getAllMeetingNumberV.demoocraticNumber +
            this.getAllMeetingNumberV.lectureNumber +
            this.getAllMeetingNumberV.managementNumber +
            this.getAllMeetingNumberV.meetGroupNumber +
            this.getAllMeetingNumberV.memberNumber +
            this.getAllMeetingNumberV.organizationActivityNumber +
            this.getAllMeetingNumberV.twoLearnNumber;
        }
      });
      getMessageVoInDashboard(this.listQuery).then(response => {
        this.TestInfo = response.data.rows;
      });
      getResultInDashboard(this.resultListQuery).then(response => {
        this.TestList = response.data.rows;
      });
    },
    filters: {
      TestI(val) {
        if (val != null && val != "") {
          if (val.length > 11) {
            return val.substr(0, 11) + "...";
          }
        }
        return val;
      },
      TestII(val) {
        if (val != null && val != "") {
          return val
            .substr(0, 11)
            .replace("年", "/")
            .replace("月", "/")
            .replace("日", "");
        }
        return val;
      },
      TestIII(val) {
        if (val != null && val != "") {
          return val.substr(0, 10).replace(/-/g, "/");
        }
        return val;
      }
    },
    components: {
      circularOne,
      circularTwo
    },
    methods: {
      toMeeting() {
        this.$router.push({path: "/threeMeet/member"});
      },
      toExends() {
        this.$router.push({path: "/threeMeet/member"});
      },
      Meetlenght(val) {
        if (val != "" && val != null) {
          if (val.length <= 11) {
            return true;
          }
          return false;
        }
      },
      TestIIIII(val) {
        if (val != null && val != "") {
          if (val.length > 97) {
            return val.substr(0, 97) + "...";
          }
        }
        return val;
      },
    }
  };
</script>
<style scoped lang="scss">

  @import "src/styles/mongolians.scss";
  .app-table div .app-table span .app-table span{
    font-size:1em;
    font-family: "微软雅黑","OrhonChaganTig", Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    writing-mode: vertical-lr!important;
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    -o-writing-mode: vertical-lr;
    -moz-writing-mode: vertical-lr;
    //text-orientation: sideways;
    unicode-bidi: embed;
    word-spacing: normal;
    word-wrap: normal;
    word-break: keep-all;
  }

  ul li {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  #id {
    max-width: 1200px;
    > .ul-li {
      #SuccessInfo {
        list-style: none;
        // margin-right: 20px;
        // border:1px solid red;
        /*height: 221px;*/
        float: left;
        > .ul-li-ul {
          margin: 0px;
          padding: 0px;
          > li {
            list-style: none;
            float: left;
          }
          > li:nth-child(2) {
            margin-top: 20px;
            /*margin-left: 45px;*/
            margin-bottom: 10px;
          }
          > li:nth-child(3) {
            margin-top: 10px;
            margin-bottom: 10px;
            /*margin-left: 70px;*/
          }
        }
      }
      #SuccessInfo {
        // width: 374px;
        box-shadow: 1px 1px 15px #b8bff5;
        border-radius: 10px 0px 0px 10px;
      }
      #SuccessInfo2 {
        // width: 187px;
        box-shadow: 2px 2px 15px #d1b6ee;
        border-radius: 10px 0px 0px 10px;
      }
      #SuccessInfo3 {
        // width: 187px;
        box-shadow: 2px 2px 15px #fad3cb;
        border-radius: 10px 0px 0px 10px;
        height: 200px;
      }
      #SuccessInfo4 {
        // width: 246px;
        box-shadow: 2px 2px 15px #b9dbfc;
        border-radius: 10px 0px 0px 10px;
        height: 355px;
      }
      .ul-li-div {
        /*height: 48px;*/
        background: #8693f3;
        border-radius: 10px 0px 0px 10px;
        line-height: 48px;
        /*padding-right: 10px;*/
        /*padding-left: 10px;*/
        color: white;
      }
      .ul-li-div span,.ul-li-div1 span,.ul-li-div3 span, .ul-li-D span{
        font-family: 'OrhonChaganTig';
      }
      .ul-li-div1 {
        /*height: 48px;*/
        background: #bc8dee;
        border-radius: 10px 0px 0px 10px;
        line-height: 48px;
        color: white;
        text-align: center;
      }
      .ul-li-div2 {
        /*height: 48px;*/
        background: #ffa897;
        border-radius: 10px 0px 0px 10px;
        line-height: 48px;
        color: white;
        text-align: center;
      }
      .ul-li-div3 {
        /*height: 48px;*/
        background: #89c3f8;
        border-radius: 10px 0px 0px 10px;
        line-height: 48px;
        color: white;
        text-align: center;
      }
    }
  }

  .ul-li-D {
    > p {
      margin-top: 10px;
      /*margin-left: 20px;*/
    }
  }

  .ul-li-z {
    margin: 0px;
    padding: 0px;
    > li {
      float: left;
      list-style: none;
    }
    > li:nth-child(1) {
      margin-top: 10px;
      /*margin-left: 20px;*/
    }
    > li:nth-child(2) {
      /*margin-left: 60px;*/
      margin-top: 20px;
    }
  }

  .ul-li-Bottom {
    > li {
      float: left;
      margin-top: 37px;
    }
    #ClassInfo1 {
      // width: 374px;
      height: 444px;
      border: 1px solid #f5f5f6;
    }
    #ClassInfo2 {
      // width: 654px;
      height: 446px;
      border: 1px solid #f5f5f6;
      margin-left: 25px;
    }
    .ul-li-bottom-div {
      /*height: 55px;*/
      background: #e03636;
      line-height: 55px;
      color: white;
      > span:nth-child(1) {
        margin-left: 20px;
      }
      > span:nth-child(2) {
        margin-left: 280px;
      }
    }
  }

  .content {
    margin: 0px;
    padding: 0px;
    > li {
      /*height: 55px;*/
      line-height: 55px;
      color: #676767;
      box-sizing: border-box;
      padding-top: 10px;
      &:hover {
        color: #232323;
        cursor: pointer;
      }
      > div:nth-child(1) {
        /*margin-left: 20px;*/
        float: left;
      }
      > div:nth-child(2) {
        float: right;
        margin-right: 20px;
      }
    }
  }

  .MoreG {
    box-sizing: border-box;
    padding-top: 10px;
    &:hover{
      cursor: pointer;
    }
  }

  .Review-List {
    /*height: 55px;*/
    background: #e03636;
    line-height: 55px;
    text-indent: 20px;
    color: white;
  }

  .Review-bottom {
    margin: 0px;
    padding: 0px;
    > li {
      // height:112px;
      color: #5d5d5d;
      padding: 20px;
      border-bottom: 1px solid #f1f1f1;
      > div:nth-child(2) {
        color: #d2d4d5;
      }
      &:hover {
        color: black;
      }
    }
  }

  .ModeList {
    box-sizing: border-box;
    padding-top: 10px;
    color: red;
    &:hover {
      cursor: pointer;
    }
  }

</style>
