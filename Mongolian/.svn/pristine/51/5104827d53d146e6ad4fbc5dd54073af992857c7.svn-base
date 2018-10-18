<template>
 <div class="app-container calendar-list-container">
  
  <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">    
      <el-table-column  align="center" label="活动主题">
        <template slot-scope="scope">
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>

<!--         <el-table-column  align="center" label="活动类型">
        <template slot-scope="scope">
          <span>{{scope.row.meetType}}</span>
        </template>
      </el-table-column> -->

      <el-table-column  align="center" label="活动时间">
        <template slot-scope="scope">
          <p style="margin: 0px;">{{scope.row.beginTime}}<span style="color:green"> 开始</span></p><hr color="#909399" style="margin: 0px;solid #ff0033"><p style="margin: 0px">{{scope.row.endTime}}<span style="color:red"> 结束</span></p>
        </template>
      </el-table-column>
     
      <el-table-column  align="center" label="支部">
          <template slot-scope="scope">
            <span>{{scope.row.deptId}}</span>
          </template>
      </el-table-column>

      <el-table-column  align="center" label="活动跟踪">
        <template slot-scope="scope">

          <span v-if="scope.row.meetingStatus==0">未开始</span>
          <span v-if="scope.row.meetingStatus==3">已取消</span>

        </template>
      </el-table-column>

<!--         <el-table-column align="center" label="阅读状态">
        <template slot-scope="scope">
          <span style="color:green">已读{{scope.row.sumIsRead}}人</span>,<span style="color:red">未读{{scope.row.sumNotRead}}人</span>
        </template>
      </el-table-column> -->

      <el-table-column fixed="right" align="center" label="操作" width="150"> 
        <template slot-scope="scope">
          <el-button v-if="scope.row.meetingStatusMessage!='已取消'" size="small" type="success" @click="handleUpdate(scope.row.mid,scope.row.isRead)">
            查看
          </el-button>
           <el-button v-if="scope.row.meetingStatusMessage=='已取消'" :disabled="true" size="small" type="danger">
            已取消
          </el-button>
        </template> 
      </el-table-column>  
  </el-table>

  <div v-show="!listLoading" class="pagination-container">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
  </div>

    <el-dialog :title="dialogStatus" width="80%" :visible.sync="dialogFormVisible">
      <template slot-scope="scope">

        <div style="text-align:center">
          <h1>{{form[0].title}}</h1>
        </div>
        <p>开始时间：{{form[0].beginTime}}</p>
        <p>活动地点：{{form[0].place}}</p>
<!--         <p>接收方：{{form[0].accepts}}</p>
        <p>发起类型：{{form[0].enumDesc}}</p> -->
        <p>主持人：{{form[0].compere}}</p>
<!--         <p>主持人联系方式：{{form[0].comperePhone}}</p> -->
        <p>列席人员：{{form[0].attendance}}</p>
        <p>会议说明：{{form[0].remarks}}</p>
        <p style="text-align:right">活动创建于：{{form[0].createdTime}}</p>
      </template>

      <div slot="footer" class="dialog-footer">
        <el-button type="success" @click="cancel()">返 回</el-button>
      </div>

    </el-dialog>

</div>
</template>

<script>
 import {
    getUserMessageVoInDashboard
  } from '@/api/organization/dashboard/index';
   import {
      getObj,
      putState
  } from '@/api/organization/managemeet/received/index';

  import {getToken,getZhiBId} from '@/utils/auth'
  import store from '@/store/index'
 export default {
    name: 'otlMeeting',
    data() {
      return {
        list:[],
        total:null,
        listQuery: {
          page: 1,
          limit: 10,
//        title: undefined,
//        beginTime: undefined,
          createdUid: store.state.user.userId,
        },
        userId: store.state.user.userId,   
        form: {
          title : undefined, 
          beginTime : undefined,
          place : undefined,
          needApply : undefined,
          applyStatus : undefined,
          applyUid : undefined,
          meetingStatus : undefined,
          createdUid : undefined,
          readTotal : undefined,
          createdTime : undefined,
          updatedTime : undefined,
          mid:undefined
        },
          dialogFormVisible:false,
          dialogStatus:null,
        peopleForm:{
          isRead:undefined
        },
        ommVo:null 
      }
    },
    created() {
      this.getList();  
    },
    methods: {
      getList() {  
        this.listLoading = true;
        getUserMessageVoInDashboard(this.listQuery)
            .then(response => {
        this.list = response.data.rows;
        this.total = response.data.total;
        this.listLoading = false;
        })
      },
      handleSizeChange(val) {
        this.listQuery.limit = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.getList();
      },
      handleUpdate(mid,isRead) {
        if(isRead === 0){
          this.peopleForm.isRead = 1;
          putState(mid,this.userId,this.peopleForm).then(()=>{//用户登陆id写死，以后要动态根据用户id修改状态阅读状态修改
            this.peopleForm.isRead = undefined;
          });
        }  
        getObj(mid)
            .then(response => { 
          this.form = response.data.rows;
          //this.omr = this.form[0].omr;
          //this.omp = this.form[0].omp;
          this.dialogFormVisible = true;
          this.dialogStatus = this.form[0].title;
          this.ommVo = this.form[0].ommVo;
        });
      },
      //关闭查看框
      cancel() {
        this.dialogFormVisible = false;
      },
    }    
  }      
</script>
