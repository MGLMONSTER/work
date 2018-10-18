<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="活动名称" v-model="listQuery.mId"> </el-input>
      <el-button class="filter-item" type="primary" icon="search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" v-if="otlMeetingManager_btn_add" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="edit">添加</el-button>
    </div>
    <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">    
        <el-table-column align="center" label="活动主题">
      <template slot-scope="scope">
        <span>{{scope.row.title}}</span>
      </template>
    </el-table-column>

      <!--  <el-table-column align="center" label="活动类型">
      <template slot-scope="scope">
        <span>{{scope.row.meetingTitle}}</span>
      </template>
    </el-table-column> -->

        <el-table-column align="center" label="活动时间">
      <template slot-scope="scope">
        <span>{{scope.row.beginTime}}</span>
      </template>
    </el-table-column>
       
          <el-table-column align="center" label="支部">
        <template slot-scope="scope">
          <span>{{scope.row.deptId}}</span>
        </template>
    </el-table-column>

        <el-table-column align="center" label="活动跟踪">
          <template slot-scope="scope">
            <span>{{scope.row.meetingStatusMessage}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="申请状态">
          <template slot-scope="scope">
            <span>{{scope.row.applyStatus}}</span>
          </template>
        </el-table-column>


        <el-table-column fixed="right" align="center" label="操作" width="200"> 
          <template slot-scope="scope">
            
            
            <el-button v-if="otlMeetingManager_btn_edit" size="small" type="success" @click="handleUpdate(scope.row)">
              查看
            </el-button>
          </template> 
        </el-table-column>

    </el-table>

    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
    </div>


    <el-dialog :title="dialogStatus" width="80%" :visible.sync="dialogFormVisible" id="subOutputRank-print">
      <template slot-scope="scope">

        <div style="text-align:center">
          <h1>{{form[0].title}}</h1>
        </div>
        <p>开始时间：{{form[0].beginTime}}</p>
        <p>活动地点：{{form[0].place}}</p>
        <p>接收方：{{form[0].accepts}}</p>
        <p>发起类型：{{form[0].enumDesc}}</p>
        <p>主持人：{{form[0].compere}}</p>
        <p>主持人联系方式：{{form[0].comperePhone}}</p>
        <p>列席人员：{{form[0].attendance}}</p>
        <p v-for="item in ommVo">{{item.field}} : {{item.fieldValue}}</p>
        <div>备注：{{form[0].remarks}}</div>

        <el-table :key='tableKey' :data="form" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%"> 
            <el-table-column align="center" label="备注">
              <template slot-scope="scope">
                <span>{{scope.row.remarks}}</span>
              </template>
            </el-table-column>
        </el-table>

      </template>

      <div slot="footer" class="dialog-footer">
      <!--   <el-button v-if="isSignin === 0" type="success" @click="state()">
          签到
        </el-button>
        <el-button v-if="isSignin === 1" disabled type="success">
          已签
        </el-button> -->
        <el-button type="success" @click="cancel()">返 回</el-button>
         <el-button type="success" @click="printContent()">打印</el-button>
      </div>

    </el-dialog>
  </div>
</template>

<script>
  import {
      page,
      addObj,
      getObj,
      delObj,
      putObj,
      putState,
      getState
  } from '@/api/organization/managemeet/received/index';
  import { mapGetters } from 'vuex';
  import store from '@/store/index';
  import {getToken} from '@/utils/auth';
  export default {
    name: 'otlMeeting',
    data() {
      return {
        form: {
          title : undefined,        beginTime : undefined,        place : undefined,        needApply : undefined,        applyStatus : undefined,        applyUid : undefined,        meetingStatus : undefined,        createdUid : undefined,        readTotal : undefined,        createdTime : undefined,        updatedTime : undefined          },
        peopleForm:{mid:undefined,uid:undefined,isRead:undefined,isSignin:undefined,readTime:undefined,signTime:undefined},
        list: null,
        total: null,
        listLoading: true,
        userId:store.state.user.userId,//获取登陆人的id
        listQuery: {
          page: 1,
          limit: 10,
          mId: undefined,
          createdUid: store.state.user.userId,
          lifeType:0
        },
        dialogFormVisible: false,
        dialogStatus: '',
        otlMeetingManager_btn_edit: true,
        otlMeetingManager_btn_del: false,
        otlMeetingManager_btn_add: false,
        textMap: {
          update: '编辑',
          create: '创建'
        },
        tableKey: 0,
        isRead:undefined,
        signMid:undefined,
        isSignin:undefined,
        stateFlag:undefined
      }
    },
    created() {
      this.getList();
    },
    methods: {

       printContent(){
               let subOutputRankPrint = document.getElementById('subOutputRank-print');  
               let newContent =subOutputRankPrint.innerHTML;  
               let oldContent = document.body.innerHTML;  
               document.body.innerHTML = newContent;  
               window.print();  
               window.location.reload();  
               document.body.innerHTML = oldContent;  
               return false;  
      },
      getList() {
        page(this.listQuery)
            .then(response => {
          this.list = response.data.rows;
        this.total = response.data.total;
        this.listLoading = false;
      })
      },
      state(){
        this.peopleForm.isSignin = 1;
        this.dialogFormVisible = false
        putState(this.signMid,this.userId,this.peopleForm).then(response=>{//用户登陆id写死，以后要动态根据用户id修改状态
          this.stateFlag = response
          this.peopleForm.isSignin = undefined;
          if(this.stateFlag){
          this.$notify({
            title: '成功',
            message: '签到成功',
            type: 'success',
            duration: 2000
            });
          }else{
            this.$notify.error({
              title: '错误',
              message: '签到失败'
            });
          }
        })
        this.getList();
      },
      handleFilter() {
        this.getList();
      },
      handleSizeChange(val) {
        this.listQuery.limit = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.getList();
      },
      handleCreate() {
        //this.resetTemp();
        this.dialogFormVisible = true;
      },
      handleUpdate(row) {
        this.signMid = row.mid
        getState(row.mid,this.userId).then(response=>{//用户id默认写死
          this.isSignin = response[0].isSignin
          this.isRead = response[0].isRead
          if(this.isRead === 0){
          this.peopleForm.isRead = 1;
          putState(row.mid,this.userId,this.peopleForm).then(()=>{//用户登陆id写死，以后要动态根据用户id修改状态阅读状态修改
            this.peopleForm.isRead = undefined;
          })
          }
        })
        getObj(row.mid)
            .then(response => {
          this.form = response.data.rows;
          this.ommVo = this.form[0].ommVo;
          this.omp = this.form[0].omp;
        this.dialogFormVisible = true;
        this.dialogStatus = this.form[0].title;
        });
      },
      cancel() {
        this.dialogFormVisible = false;
      },
     
    }
  }
</script>
