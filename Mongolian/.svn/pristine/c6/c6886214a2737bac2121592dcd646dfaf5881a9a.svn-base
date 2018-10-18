<template>
  <div  id="XXX">
    <div>
      <!--class="app-container calendar-list-container"-->
      <div class="app-table"
           style="margin-left:5px;margin-top:5px;width:auto; padding:20px;border:1px solid #f5f7fa; height:100%;">
      <div class="filter-input">
         <ul class="UlInfo">
         <li>
        <!--<el-tree-->
          <!--ref="treeX"-->
          <!--:data="data111"-->
          <!--:props="defaultProps"-->
          <!--accordion-->
          <!--style="position:absolute;top:5px;z-index:5;"-->
          <!--@click="ChangeInfo"-->
          <!--@node-click="handleNodeClick"-->
          <!--@node-expand="NodeExoand"-->
          <!--@node-collapse="NodeCollapse"-->
          <!--:highlight-current = "true"-->
        <!--&gt;-->
          <!-- @node-click="handleNodeClick" -->
           <!-- @node-contextmenu="ChangeContext" -->
        </el-tree>
            </li>
        <li>
            <el-input v-model="input123" placeholder="请输入内容"></el-input>
        </li>
        <li>
<!--             <el-select @change="Value2223" v-model="value222" style="width:100px;margin-left:5px" placeholder="请选择">
            <el-option
            v-for="item in options11"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            </el-select> -->
          <el-date-picker
            class="settimess"
            v-model="listQuery.year"
            type="year"
            placeholder="选择年"
            format='yyyy年度'
            value-format='yyyy/MM/dd'
          >
          </el-date-picker>

            <el-button class="filter-item" @click="ChangeButton" type="primary" size="small" icon="search" >搜索</el-button>
        </li>
        </ul>
      </div>
        <div style="clear:both"></div>
    </div>
<!--————————————————————————————————————————————————————————查询统列表——————————————————————————————————————————————————————————————————-->

    <el-table :key='tableKey' :data="list" v-loading.body="listLoading"  fit highlight-current-row style="width: 100%;margin-top:20px">
        <el-table-column  align="center" label="支部名称" width="10">
      <template slot-scope="scope">
        <span>{{scope.row.pname}}</span>
      </template>
    </el-table-column>
        <el-table-column  align="center" label="会议次数" width="10">
      <template slot-scope="scope">
        <span>{{scope.row.sumMeet}}</span>
      </template>
    </el-table-column>
        <el-table-column align="center" label="应考勤" width="10">
      <template slot-scope="scope">
       <span>{{scope.row.checkTheAttendance}}</span>
      </template>
    </el-table-column>
    <el-table-column  align="center" label="已考勤" width="10">
      <template slot-scope="scope">
        <span>{{scope.row.joinMeetPeople}}</span>
      </template>
    </el-table-column>
    <el-table-column  align="center" label="出勤率" width="10">
      <template slot-scope="scope">
        <span>{{scope.row.attendance}}%</span>
      </template>
    </el-table-column>
    <el-table-column  align="center" label="缺勤率" width="10">
      <template slot-scope="scope">
        <span>{{scope.row.absenteeism}}%</span>
      </template>
    </el-table-column>
    <el-table-column  align="center" label="请假率" width="10">
      <template slot-scope="scope">
        <span>{{scope.row.leaveRate}}%</span>
      </template>
    </el-table-column>
        <el-table-column align="center" label="操作" width="10"> <template slot-scope="scope">
        <el-button v-if="otlMeetPlaceManager_btn_edit" size="small" type="success" @click="handleUpdate(scope.row)">查看
        </el-button>
        <!-- <el-button v-if="otlMeetPlaceManager_btn_del" size="small" type="danger" @click="handleDelete(scope.row)">删除
        </el-button> -->
      </template> </el-table-column>
    </el-table>
    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
    </div>
    </div>
    <!--————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————-->
    <!-- ————————————————————————————————————————————————————————查看统列信息—————————————————————————————————————————————————————————————————— -->
    <!-- 点击弹出的内容 -->
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    style="z-index:11"
    >
    <template slot-scope="scope">
    <!-- :before-close="handleClose" -->
      <p>三会一课：{{allMeetNum.sumThreeMeet}}</p>
      <p>两学一做{{allMeetNum.sumTwoLearn}}</p>
      <p>民主生活会：{{allMeetNum.sumdemocratic}}</p>
      <p>组织生活：{{allMeetNum.sumOrganizationActivity}}</p>

      <span slot="footer" class="dialog-footer">
      <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </template>
    </el-dialog>
    <!-- <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
    </div> -->
  </div>
</template>

<script>
  import {
      selectByPlaceQuery,
      addObj,
      getObj,
      delObj,
      putObj
  } from '@/api/organization/otlMeetPlace/index';
  import {
    Info1,
    InfoList,
    getAllMeetNum
    } from "@/api/TjInfo/Info.js"
    import moment from "moment"
import { getZhiBId, getInfoSuccess } from "@/utils/auth";
  // import { organization } from "@/api/Statistical/StatisticalInfo"
  export default {
    name: 'otlMeetPlace',
    data() {
      return {
        form: {
        place : undefined,        total : undefined,        status : undefined          },
        statusOptions:[{value:0,status:'启用'},{value:1,status:'停用'}],
        rules: {
    place: [
  {
    required: true,
    message: '请输入会议地点',
    trigger: 'blur'
  },
  {
    min: 1,
    message: '会议地点不能为空',
    trigger: 'blur'
  }
],   total: [
  {
    required: true,
    message: '请输入统计',
    trigger: 'blur'
  },
  {
    min: 1,
    message: '统计不能为空',
    trigger: 'blur'
  }
],   status: [
  {
    required: true,
    message: '请选择状态',
    trigger: 'change'
  }
]        },
      list: [
      // {name:'中共中国中煤能源股份有限公司鄂尔多斯分公司机关第二支部委员会',total:15,attendance:54,tooAttendance:54,dance:"100%",lack:"0%",leave:"0%"},
      // {name:'中共鄂尔多斯市广播电视台机关委员会',total:23,attendance:74,tooAttendance:70,dance:"94%",lack:"6%",leave:"0%"},
      // {name:'中共鄂尔多斯市广播电视台汉语全媒体新闻中心支部委员会',total:9,attendance:46,tooAttendance:45,dance:"97%",lack:"0%",leave:"3%"},
      // {name:'中共鄂尔多斯市气象局第一支部委员会',total:18,attendance:74,tooAttendance:73,dance:"95%",lack:"2%",leave:"0%"},
      // {name:'中共鄂尔多斯市地方税务局恩格贝生态示范区分局支部委员会',total:32,attendance:53,tooAttendance:51,dance:"96%",lack:"4%",leave:"0%"},
      // {name:'中共鄂尔多斯市伊化矿业资源有限责任公司掘锚一队支部委员会',total:14,attendance:33,tooAttendance:28,dance:"84%",lack:"10%",leave:"6%"},
      // {name:'中共中国移动通信集团内蒙古有限公司鄂尔多斯分公司离退休支部委员会',total:18,attendance:52,tooAttendance:49,dance:"94%",lack:"4%",leave:"2%"},
      // {name:'中共中国电信股份有限公司鄂尔多斯分公司核心商圈营销中心支部委员会',total:21,attendance:87,tooAttendance:85,dance:"97%",lack:"3%",leave:"0%"},
      ],
        total: null,
        listLoading: false,
        listQuery: {
          page: 1,
          limit: 10,
          year: new Date().toLocaleDateString(),
          deptId:getZhiBId(),
        },
        dialogFormVisible: false,
        dialogStatus: '',
        otlMeetPlaceManager_btn_edit: true,
        otlMeetPlaceManager_btn_del: true,
        otlMeetPlaceManager_btn_add: true,
        textMap: {
          update: '编辑',
          create: '创建'
        },
        tableKey: 0,
       data111: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'childList',
          label: 'name'
        },
        value1:"",
        value123:"",
        input123:"",  //组织树显示的名称
        dialogVisible:false,  //弹出显示的状态
        inputId:"",  //组织树的id
        listLoading:true,  //显示的分页
        //点击查看返回该部门选定年份部门开会信息
        allMeetNum:[],
        dialogTitle:undefined,
        YearInfo:"",
      }
    },
    // created() {
    //   organization({deptId,year}).then(response=>{

    //   })
    // },
    methods: {
      handleUpdate(row){
        this.dialogVisible = true;
        this.dialogTitle = row.pname;
        getAllMeetNum(this.listQuery.year,row.pid).then(response=>{
          this.allMeetNum = response[0];
        })
      },
      NodeExoand(){  //树形点击展开
         this.$store.commit("ChangeInfoTree","4000px")
      },
      NodeCollapse(){ //树形点击关闭
         this.$store.commit("ChangeInfoTree","700px")
      },
         handleNodeClick(val) {
       this.input123 = val.name;
      //  console.log(val.id);
       this.handleNodeClickId12 = val.id;
      //  this.$store.commit("handleNodeClickId",val.id)
        },
      //点击分页的时候显示的数据
      handleSizeChange(val) {
        this.listQuery.limit = val;
        this.ChangeButton();
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.ChangeButton();
      },
      //点击搜索的信息
      ChangeButton(){
        if(this.inputId!=''){
          this.listQuery.deptId = this.inputId;
        }
        InfoList(this.listQuery).then(response=>{
        this.list = response.data.rows;
        console.log(response.data.rows);
        this.message({
          type:"success",
          message:"搜索成功",
        })
        })
      },
      Value2223(val){
        this.listQuery.year = val;
      },
      handleNodeClick(val){
        this.input123 = val.name;
        this.inputId = val.id;
      },
      ChangeInfo(){
       let xx = document.getElementById("XXX");
       xx.style.height="3000px;"
      },
    },
    mounted(){
      Info1(this.ZhiBIdInfoZz).then(response=>{
      this.data111 = response;
      });
      // let arr = getInfoSuccess();
      // let year = this.value222;
      this.listQuery.deptId = getZhiBId();
      InfoList(this.listQuery).then(response=>{
        this.list = response.data.rows;
        console.log(response.data.rows);
        this.listLoading = false;
        this.total = response.data.total;
      })
    },
    computed:{
        ZhiBIdInfoZz(){
            return this.$store.state.ZhiBIdInfoZz
        }
    },
    // created(){
    //   this.listQuery.deptId = getInfoSuccess()
    // }
  }
</script>
<style scoped lang="scss">
  @import "src/styles/mongolians.scss";
   .UlInfo{
     position:relative;
     >li {
         list-style: none;
         float:left;
     }
 }
</style>

