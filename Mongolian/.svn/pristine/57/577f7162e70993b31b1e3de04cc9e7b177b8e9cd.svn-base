<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="活动主题" v-model="listQuery.title"> </el-input>
      <el-date-picker v-model="listQuery.beginTime" type="month" placeholder="选择会议开始月" style="bottom: 4px">
      </el-date-picker>
  
      <el-button class="filter-item" type="primary" icon="search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" v-if="otlMeetingManager_btn_add" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="edit">添加</el-button>
    </div>
    <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">    
        <el-table-column align="center" label="活动主题">
      <template slot-scope="scope">
        <span>{{scope.row.title}}</span>
      </template>
    </el-table-column>

       <el-table-column align="center" label="活动类型">
      <template slot-scope="scope">
        <span>{{scope.row.meetingTitle}}</span>
      </template>
    </el-table-column>

        <el-table-column align="center" label="活动时间">
      <template slot-scope="scope">
        <p style="margin: 0px;">{{scope.row.beginTime}}<span style="color:green"> 开始</span></p><hr color="#909399" style="margin: 0px;solid #ff0033"></hr><p style="margin: 0px">{{scope.row.endTime}}<span style="color:red"> 结束</span></p>
      </template>
    </el-table-column>
       
          <el-table-column align="center" label="支部">
        <template slot-scope="scope">
          <span>{{scope.row.deptId}}</span>
        </template>
    </el-table-column>
 
        <el-table-column align="center" label="活动跟踪" width="150">
          <template slot-scope="scope">
            <span>{{scope.row.meetingStatusMessage}}</span>
          </template>
        </el-table-column>

        <el-table-column fixed="right" align="center" label="操作" width="150"> 
          <template slot-scope="scope">
            
  
              <el-button v-if="scope.row.meetingStatusMessage!='已取消'" size="small" type="success" @click="handleUpdate(scope.row.mid)"> 
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
<!--         <p>主持人联系方式：{{form[0].comperePhone}}</p>
 -->        <p>列席人员：{{form[0].attendance}}</p>
        <p v-for="item in ommVo">{{item.field}} : {{item.fieldValue}}</p>
        <el-button type="primary" size="small" style="margin-bottom:20px" @click="videoconferencing(form[0].videoconferencingUrl)">视频会议入口</el-button>
        <p>会议说明：{{form[0].remarks}}</p>
<!-- ***************************** 下载 ***************************** -->
    <el-collapse @change="dialogHandleChange"  v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
         <i class="header-icon el-icon-upload" ></i> 会议资料 
        </template>

        <el-table :data="fileList3" style="width: 100%" >
          <el-table-column label="文件名" align="center" prop="fileName">
          </el-table-column>

           <el-table-column label="上传时间" align="center" width="150" prop="createTime">
          </el-table-column>

          <el-table-column label="操作" align="center" width="150">
            <template slot-scope="scope">
              <el-button type="primary" size="small">
                <span><a @click="download(scope.row)" style="color:white" >下载文件</a></span>
                <i class="el-icon-upload el-icon--right"></i>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <!--  <a @click="download(scope.row)" style="color:blue" >下载文件</a> -->
        <!-- :beforeUpload="beforeAvatarUpload" -->
      </el-collapse-item>
    </el-collapse>
<p v-if="ifshow">活动总结: {{extendInfoForm.extendValue}}</p>    
<!-- ***************************** 活动评论 ***************************** --> 
    <el-collapse v-if="ifshow" @change="dialogHandleChange"  v-model="activeNames3">
      <el-collapse-item name="3">
        <template slot="title">
         <i class="header-icon el-icon-info" ></i> 活动评论 
        </template>
        <el-table :data="resultList" v-loading.body="ResultListLoading" border fit highlight-current-row style="width: 100%"> 
          <el-table-column  align="center" label="内容">
            <template slot-scope="scope">
              <span>{{scope.row.content}}</span>
            </template>
          </el-table-column>

          <el-table-column  align="center" label="评论人" width="150">
            <template slot-scope="scope">
              <span>{{scope.row.name}}<br/>{{scope.row.createdTime}}</span>          
            </template>
          </el-table-column>
        </el-table>
        <div v-show="!listLoading" class="pagination-container">
          <el-pagination @size-change="handleResultSizeChange" @current-change="handleResultCurrentChange" :current-page.sync="listQueryResult.page" :page-sizes="[10,20,30,50]" :page-size="listQueryResult.limit" layout="total, sizes, prev, pager, next, jumper" :total="resultTotal">                
          </el-pagination>
        </div>
      </el-collapse-item>
    </el-collapse>

      <el-form ref="formResult" :model="formMeetResult" :rules="meetResult">
        <el-form-item prop="content" >  <!-- 会议名字 -->
          <el-input v-if="ifshow" type="textarea" :autosize="{minRows: 8}" placeholder="在这里对本次活动进行评论吧~" v-model="formMeetResult.content" >
          </el-input>
        </el-form-item>
      </el-form> 

    <p style="text-align:right">活动创建于：{{form[0].createdTime}}</p>
      </template>             
      <div slot="footer" class="dialog-footer">
        <!-- <el-button v-if="isSignin === 0" type="success" @click="state()">
          签到
        </el-button>
        <el-button v-if="isSignin === 1" disabled type="success">
          已签
        </el-button>    --> 
        <el-button v-if="ifshow" type="success" @click="addMeetResult('formResult')">评 论</el-button>
        <el-button type="success" @click="cancel()">返 回</el-button>
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
      getState,
      //会议评论
      addResult,
      resultPage,
      //会议结果
      getExtendInfoObj,
      //下载
      downLoadList

  } from '@/api/organization/managemeet/received/index';
  import { mapGetters } from 'vuex';
  import store from '@/store/index';
  import {getToken} from '@/utils/auth';
  export default {
    name: 'otlMeeting',
    data() {
      return {
       form: {
        title : undefined, beginTime : undefined,place : undefined,needApply : undefined,applyStatus : undefined,applyUid : undefined, meetingStatus : undefined,createdUid : undefined,readTotal : undefined,createdTime : undefined,updatedTime : undefined,mid:undefined},
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
          lifeType:4,
          beginTime: undefined
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
        meetResult:{
          content:[
            {max:120,message:'评论长度在120个字符之内'}
          ]
        },        
        ifshow:false,
        tableKey: 0,
        signMid:undefined,
        isRead:undefined,
        isSignin:undefined,
        stateFlag:undefined,
        omp:null,
        //活动评论
        resultList:null,
        ResultListLoading: true,
        resultTotal:null,
        listQueryResult: {
          page: 1,
          limit:10,
          mId: undefined
        },
        formMeetResult: { 
        mId :undefined,content : undefined,createdUid :store.state.user.userId
        },
        //会议结果
        extendInfoForm:{
          id:undefined,
          mId:undefined,
          extendValue:undefined,
          createdTime:undefined,
          createdUid:store.state.user.userId
        },
        //下载
        fileList3: [],
        upLoadData:{
          mId:undefined,
          createdUid:store.state.user.userId
        },
      }
    },
    created() {
      this.getList();
    },
    methods: {
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
      handleUpdate(mid) {
        this.signMid = mid
        getState(mid,this.userId).then(response=>{//用户id默认写死
          this.isSignin = response[0].isSignin
          this.isRead = response[0].isRead
          if(this.isRead === 0){
          this.peopleForm.isRead = 1;
          putState(mid,this.userId,this.peopleForm).then(()=>{//用户登陆id写死，以后要动态根据用户id修改状态阅读状态修改
          this.peopleForm.isRead = undefined;
          })
          }
        });
       getObj(mid)
            .then(response => {
            
          this.form = response.data.rows;
          this.ommVo = this.form[0].ommVo;
          //this.omr = this.form[0].omr;
          this.omp = this.form[0].omp;
        if(this.form[0].meetingStatus==2){
          this.ifshow = true;
        }else{
          this.ifshow = false;
        }
        this.dialogFormVisible = true;
        this.dialogStatus = this.form[0].title;
      });
        this.activeNames = [];
        this.activeNames3 = [];
        this.upLoadData.mId = mid;
        this.listQueryResult.mId = mid;
        //this.extendInfoForm.mId = mid;
        this.getExtendInfo(mid);
      },
      cancel() {
        this.dialogFormVisible = false;
      },
       //会议评论
      handleResultSizeChange(val){
        this.listQueryResult.limit = val;
        this.getMeetResult();
      },
      handleResultCurrentChange(val){
        this.listQueryResult.page = val;
        this.getMeetResult();
      },
      getMeetResult(){
        this.ResultListLoading = true;
        resultPage(this.listQueryResult).then(response =>{
        this.resultList = response.data.rows ;
        this.resultTotal = response.data.total;
        this.ResultListLoading = false;
        })
      },
      addMeetResult(formName){
        const set = this.$refs;
        set[formName].validate(validate =>{
          console.log(validate);
          if(validate){
            this.formMeetResult.mId = this.form[0].mid;
            //this.formMeetResult.content = this.getUEContent();
            addResult(this.formMeetResult)
            .then(() => {
              this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
              });
              this.formMeetResult.content = undefined;
              this.getMeetResult();
            })            
          }
        })
      },
      //会议结果
      getExtendInfo(mid){
        getExtendInfoObj(mid)
            .then(response => {
              if(response.data != null){
              this.extendInfoForm = response.data;
              }else{
              this.extendInfoForm.extendValue = '暂无会议结果';  
              }
      });
      },
      //分段加载控制器
      dialogHandleChange(val){
        if(val[0]==1){
          this.getDownLoadList(this.upLoadData.mId);
        }else if(val[0]==3){
          this.getMeetResult();
        }
      },
      //下载
      download(row){
        // //var str = row.filePath+'\\'+row.fileNewname+'.'+row.fileType;
        // var download = document.createElement('a');
        // download.href='olt/otlMeeting/enclosureDownLoad?id='+row.id;
        // download.click();
        // //this.dialogFiled = true
        this.$axios({
          url:'/api/olt/otlMeeting/enclosureDownLoad?id='+row.id,
          method:"get",
          headers:{'Authorization': getToken()},
          responseType: 'blob',
        }).then((response)=>{
            // let dowen=  document.createntElement("a");
            //  dowen.href=""
            console.log(response);
            let url = window.URL.createObjectURL(new Blob([response.data]));
            let link = document.createElement('a');
            link.style.display = 'none';
            link.href = url;
            link.setAttribute('download',row.fileName+"."+row.fileType);
            document.body.appendChild(link)
            link.click()
        }).catch((error)=>{
          console.log(error)
        })
      }, 
      getDownLoadList(mId){
        downLoadList(mId)
        .then(response =>{
          this.fileList3 = response;
        })
      },
      videoconferencing(url){
        window.open(url);
      }
    },
    computed:{
      ZuzInfo(){
        return this.$store.state.ZuzInfo;
      }
    },
    watch:{
      ZuzInfo(val){
       this.getList();
      }
    }
  }
</script>
