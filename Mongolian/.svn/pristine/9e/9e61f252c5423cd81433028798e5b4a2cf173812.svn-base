<template>
    <div id="id">
        <ul class="ul-li">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                    <div id="SuccessInfo"  style="width:100%">
                        <div class="ul-li-div">
                            <span style="margin-left:17px;">待参加会议</span>
                            <span style="margin-left:310px;" class="gengDuo" @click="toMeeting()">更多></span>
                        </div>
                      <ul class="ul-li-ul">
                            <li v-for="(val,index) in TestInfo" :key="index">
                                <el-tooltip class="item" :disabled="Meetlenght2(val.title)" effect="light" placement="right">
                                    <div slot="content">
                                       《{{val.title}}》 
                                    </div>
                                    <div>
                                        《{{val.title | TestIIII}}》
                                        <!-- 字符截取  TestInfo是数据   大于12位自动变为... -->
                                    </div>
                                </el-tooltip>
                                    <div style="color:red;" @click="toTiShi(val.lifeType)">
                                        查看
                                    </div>
                                    <div>
                                        {{val.beginTime | TestII}}
                                    </div>
                                    <div>
                                        <span v-if="val.meetingStatus===3" style="color:red;">已取消</span>
                                        <span v-if="val.meetingStatus===0" style="color:green;">未开始</span>
                                    </div>      


                                    <div style="clear:both"></div>
                                   
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div id="SuccessInfo2">
                        <div class="ul-li-div1">
                            考勤情况
                        </div>
                        <div style="magin:0 auto">
                            <circularOne></circularOne>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div id="SuccessInfo3">
                        <div class="ul-li-div2">
                            参会率对比
                        </div>
                        <div>
                            <circularTwo></circularTwo>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                    <div id="SuccessInfo4">
                        <div class="ul-li-div3">
                            <span style="margin-left:17px;">会议</span>
                            <span style="margin-left:120px;">完成统计</span>
                        </div>
                        <ul class="ul-li-z">
                            <li>
                                <p>党课</p>
                                <p>党小组会</p>
                                <p>两学一做</p>
                                <p>支部委员大会</p>
                            </li>
                            <li>
                                <p>共 {{getAllMeetingNumberV.lectureNumber}} 次</p>
                                <p>共 {{getAllMeetingNumberV.meetGroupNumber}} 次</p>
                                <p>共 {{getAllMeetingNumberV.twoLearnNumber}} 次</p>
                                <p>共 {{getAllMeetingNumberV.branchNumber}} 次</p>
                            </li>
                        </ul>
                         <div style="clear:both"></div>
                    </div>
                </el-col>
            </el-row>
        </ul>
        <div style="clear:both"></div>
        <ul class="ul-li-Bottom">
            <el-row :gutter="20">
                <el-col style="overflow:hidden;position:relative" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                    <div id="ClassInfo1">
                        <div class="ul-li-bottom-div">
                            <span>本年度参与的会议</span>
                            <span>开始时间</span>
                        </div>
                        <!-- 数据展示 -->
                        <ul class="content">
                            <li v-for="(val,index) in afterMeetTestInfo" :key="index">
                                <el-tooltip class="item" :disabled="Meetlenght(val.title)" effect="light" placement="right">
                                    <div slot="content">
                                       《{{val.title}}》 
                                    </div>
                                    <div>
                                        《{{val.title | TestI}}》
                                        <!-- 字符截取  TestInfo是数据   大于12位自动变为... -->
                                    </div>
                                </el-tooltip>      
                                    <div>
                                        {{val.beginTime | TestII}}
                                    </div>
                                    <div style="clear:both"></div>
                                   
                            </li>
                        </ul>
                        <div style="color:red;" class="MoreG" @click="toMeeting()">查看更多>>
                        </div>
                    </div>
                </el-col>
                <el-col style="overflow:hidden;position:relative" :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
                    <div id="ClassInfo1">
                        <div class="Review-List">
                            评论列表
                        </div>
                        <ul class="Review-bottom">
                            <li v-for="(val,index) in TestList" :key="index">
                                <!-- 数据是TestList -->
                                <div><span v-html="TestIIIII(val.content)"></span></div>
                                <div style="text-align:right">{{val.name}} 于 {{val.createdTime | TestIII}}</div>
                            </li>
                        </ul>
                        <div class="ModeList" @click="toExends()">查看更多>></div>
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
import { getZhiBId } from "@/utils/auth";
import store from "@/store/index";
import {
    getUserAllMeetingNumber,
    getUserResultInDashboard,
    getUserMessageVoInDashboard,
    getUserAfterMeetInDashboard

} from "@/api/organization/dashboard/index";
export default {
    data() {
        return {
            TestInfo: [
                { title: undefined, beginTime: undefined, mid: undefined }
            ],
            afterMeetTestInfo: [
                { title: undefined, beginTime: undefined, mid: undefined }
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
            getMemberAndLectureV: { memberQuarter: 0, lectureQuarter: 0 },
            //查询月度党支部委员会和党小组会
            getBranchAndMeetGroupV: { branchMouth: 0, meetGroupMouth: 0 },
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
            uId:store.state.user.userId,
            listQuery: {
                page: 1,
                limit: 4,
                //        title: undefined,
                //        beginTime: undefined,
                deptId: getZhiBId(),
                createdUid: store.state.user.userId
            },
            resultListQuery: {
                page: 1,
                limit: 4,
                //        title: undefined,
                //        beginTime: undefined,
                uId:store.state.user.userId,              
            },
            afterMeetQuery:{
                page: 1,
                limit: 6,
                //        title: undefined,
                //        beginTime: undefined,
                createdUid:store.state.user.userId,
                deptId: getZhiBId(),   
            },
        };
    },
    created() {
        getUserAllMeetingNumber(this.uId).then(response => {
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
        getUserMessageVoInDashboard(this.listQuery).then(response => {
            this.TestInfo = response.data.rows;
            getUserAfterMeetInDashboard(this.afterMeetQuery).then(response=>{
                this.afterMeetTestInfo = response.data.rows;     
            })
        });
        getUserResultInDashboard(this.resultListQuery).then(response => {
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
        },
        TestIIII(val){
            if (val != null && val != "") {
                if (val.length > 9) {
                    return val.substr(0, 9) + "...";
                }
            }
            return val;
        },
    },    
    components: {
        circularOne,
        circularTwo
    },
    methods: {
        toMeeting() {
            this.$router.push({ path: "/threeMeetReceived/memberReceived" });
        },
        toExends() {
            this.$router.push({ path: "/threeMeetReceived/memberReceived" });
        },
        toTiShi(lifeType){
//            1 民主生活会 ，2 两学一做，3，组织活动，4 其他组织活动,5 支部党员大会，6，党支部委员会，7 党小组会，8 党课',
            if(lifeType==1){
                this.$router.push({ path: "/otlLifeUser/democraticReceived" });
            }else if(lifeType==2){
                this.$router.push({ path: "/otlLifeUser/twoLearnReceived" });
            }else if(lifeType==3){
                this.$router.push({ path: "/otlLifeUser/organizationActivityReceived" });
            }else if(lifeType==4){
                this.$router.push({ path: "/otlLifeUser/twoLearnReceived" });
            }else if(lifeType==5){
                this.$router.push({ path: "/threeMeetReceived/memberReceived" });
            }else if(lifeType==6){
                this.$router.push({ path: "/threeMeetReceived/branchReceived" });
            }else if(lifeType==7){
                this.$router.push({ path: "/threeMeetReceived/groupReceived" });
            }else if(lifeType==8){
                this.$router.push({ path: "/threeMeetReceived/lectureReceived" });
            }
        },
        Meetlenght(val){
            if(val!=""&&val!=null){
                if(val.length <= 11){
                    return true;
                }
                return false;
            }    
        },
        Meetlenght2(val){
            if(val!=""&&val!=null){
                if(val.length <= 9){
                    return true;
                }
                return false;
            }
        },
        TestIIIII(val){
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
            height: 221px;
            float: left;
            > .ul-li-ul {
                margin: 0px;
                padding: 0px;
                > li {
                    // height: 48px;
                    // line-height: 48px;
                    color: #676767;
                    &:hover {
                        color: #232323;
                        cursor: pointer;
                    }
                    > div:nth-child(1) {
                        margin-left: 15px;
                        margin-top: 16px;
                        float: left;
                    }
                    > div:nth-child(2) {
                        float: right;
                        margin-right: 30px;
                        margin-top: 16px;
                    }
                    > div:nth-child(3) {
                        float: right;
                        margin-right: 30px;
                        margin-top: 16px;
                    }
                    > div:nth-child(4) {
                        float: right;
                        margin-right: 30px;
                        margin-top: 16px;
                    }
                }
            }
        }
        #SuccessInfo {
            // width: 374px;
            box-shadow: 1px 1px 15px #b8bff5;
            border-radius: 10px 10px 0px 0px;
        }
        #SuccessInfo2 {
            // width: 187px;
            box-shadow: 2px 2px 15px #d1b6ee;
            border-radius: 10px 10px 0px 0px;
        }
        #SuccessInfo3 {
            // width: 187px;
            box-shadow: 2px 2px 15px #fad3cb;
            border-radius: 10px 10px 0px 0px;
        }
        #SuccessInfo4 {
            // width: 246px;
            box-shadow: 2px 2px 15px #b9dbfc;
            border-radius: 10px 10px 0px 0px;
            height: 221px;
        }
        .ul-li-div {
            height: 48px;
            background: #8693f3;
            border-radius: 10px 10px 0px 0px;
            line-height: 48px;
            color: white;
        }
        .ul-li-div1 {
            height: 48px;
            background: #bc8dee;
            border-radius: 10px 10px 0px 0px;
            line-height: 48px;
            color: white;
            text-align: center;
        }
        .ul-li-div2 {
            height: 48px;
            background: #ffa897;
            border-radius: 10px 10px 0px 0px;
            line-height: 48px;
            color: white;
            text-align: center;
        }
        .ul-li-div3 {
            height: 48px;
            background: #89c3f8;
            border-radius: 10px 10px 0px 0px;
            line-height: 48px;
            color: white;
        }
    }
}
.ul-li-z {
    margin: 0px;
    padding: 0px;
//    overflow: hidden;
    > li {
        float: left;
        list-style: none;
    }
    > li:nth-child(1) {
        margin-left: 20px;
    }
    > li:nth-child(2) {
        margin-left: 60px;
    }
}
.ul-li-Bottom {
    > li {
        float: left;
        margin-top: 37px;
    }
    #ClassInfo1 {
        // width: 374px;
        height: 446px;
        border: 1px solid #f5f5f6;
    }
    #ClassInfo2 {
        // width: 654px;
        height: 446px;
        border: 1px solid #f5f5f6;
        margin-left: 25px;
    }
    .ul-li-bottom-div {
        height: 55px;
        background: #e03636;
        line-height: 55px;
        color: white;
        > span:nth-child(1) {
            margin-left: 20px;
        }
        > span:nth-child(2) {
            margin-right: 35px;
            float: right;
        }
    }
}
.content {
    margin: 0px;
    padding: 0px;
    > li {
        height: 55px;
        line-height: 55px;
        color: #676767;
        &:hover {
            color: #232323;
            cursor: pointer;
        }
        > div:nth-child(1) {
            margin-left: 15px;
            float: left;
        }
        > div:nth-child(2) {
            float: right;
            margin-right: 20px;
        }
    }
}
.MoreG {
    position: absolute;
    bottom: 20px;
    left: 40%;
}
.Review-List {
    height: 55px;
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
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: red;
    &:hover {
        cursor: pointer;
    }
}
.gengDuo{
    &:hover{
        cursor: pointer;
    }
}
</style>
