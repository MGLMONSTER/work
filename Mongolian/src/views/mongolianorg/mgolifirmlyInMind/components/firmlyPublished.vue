  <template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="活动名称" v-model="listQuery.title"> </el-input>
      <el-button class="filter-item" type="primary" icon="search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" v-if="otlMeetingManager_btn_add" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="edit">添加活动</el-button>
    </div>
    <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">    
        <el-table-column  align="center" label="活动主题">
          <template slot-scope="scope">
            <span>{{scope.row.title}}</span>
          </template>
        </el-table-column>

        <!-- <el-table-column  align="center" label="活动类型">
          <template slot-scope="scope">
            <span>{{scope.row.meetingTitle}}</span>
          </template>
        </el-table-column> -->

        <el-table-column  align="center" label="活动时间">
          <template slot-scope="scope">
            <span>{{scope.row.beginTime}}</span>
          </template>
        </el-table-column>
       
        <el-table-column  align="center" label="支部">
            <template slot-scope="scope">
              <span>{{scope.row.organizationDesc}}</span>
            </template>
        </el-table-column>

        <el-table-column  align="center" label="活动跟踪">
          <template slot-scope="scope">
            <span>{{scope.row.meetingStatusMessage}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="阅读状态">
          <template slot-scope="scope">
            <span style="color:green">已读{{scope.row.sumIsRead}}人</span>,<span style="color:red">未读{{scope.row.sumNotRead}}人</span>
          </template>
        </el-table-column>

        <el-table-column fixed="right" align="center" label="操作" width="150"> 
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
    <!-- 添加会议 -->
    <el-dialog title="不忘初心，牢记使命" :visible.sync="dialogTemplate" width="45%" :close-on-click-modal="modalClose">
        <!-- <el-form label-width="80px" v-if="flag" :rules="templateRule"  :model="formTemplate" ref="formTemplate">
          <el-form-item label="选择模板" prop="mtid" >
              <el-select v-model="formTemplate.mtid" placeholder="请选择模板" style="width:60%;">
                <el-option v-for="item in templateOptions" :key="item.mtid" :label="item.title" :value="item.mtid"></el-option>
              </el-select>
          </el-form-item>
        </el-form> -->

        <el-form label-width="150px" ref="formMeet" :model="formMeet" :rules="meet">
              <!-- <el-form-item  label="活动主题" prop="title" >  会议名字
              <el-input v-model="formMeet.title"  style="width: 60%;" placeholder="请输入活动主题"></el-input>
            </el-form-item> -->
            <el-form-item label="发起类型" prop="needApply"><!-- 是否需要申请 -->
             <el-select v-model="formMeet.needApply" placeholder="请选择类型" style="width:60%;" @change="needType(formMeet.needApply)">
                <el-option v-for="item in meetTypes" :key="item.meetTypeId" :label="item.meetTypeName" :value="item.meetTypeId"></el-option>
             </el-select>
          </el-form-item>
            <el-form-item label="接收方"  > <!-- 接受方 -->
              <el-input v-model="formMeet.accepts" style="width: 60%;" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="参与人员">
              <el-tree 
              ref="tree"
              :data="data"  :props="defaultProps" show-checkbox
              node-key="id"
              @check-change = "checkChange"
              >
              </el-tree>

            </el-form-item>
            <el-form-item label="列席人员" prop="attendance">
              <el-input v-model="formMeet.attendance" style="width: 60%;" placeholder="请输入列席人员"></el-input>
            </el-form-item>

            <el-form-item label="拟定地点" prop="place">  <!-- 拟定地点 -->
              <el-select v-model="formMeet.place" style="width: 60%;" placeholder="请选择" @change="placeChange">
                <el-option v-for="item in places" :key="item.id" :label="item.place" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开始时间" prop="beginTime" >  <!-- 开始时间 -->
              <!-- <input v-model="formMeet.beginTime"  type="text" class="el-input__inner" style="width: 60%;"></input> -->
              <el-date-picker v-model="formMeet.beginTime" style="width: 60%;" type="datetime" placeholder="选择日期时间"  value-format="yyyy-MM-dd HH:mm">
                
              </el-date-picker>
            </el-form-item>
            <el-form-item label="主持人" prop="compere">
              <el-input v-model="formMeet.compere" style="width: 60%;" placeholder="请输入主持人"></el-input>
            </el-form-item>
            <el-form-item label="主持人联系方式" prop="comperePhone">
              <el-input v-model.number="formMeet.comperePhone" style="width: 60%;" auto-complete="off" placeholder="请输入支持人联系方式">
                
              </el-input>
            </el-form-item>

          <i v-html="formMeetType.content" ></i>  <!-- 动态字段开始 -->
          <el-form-item label="备注" prop="remarks">
              <el-input v-model="formMeet.remarks" type="textarea" :rows="5" placeholder="请输入备注信息">
                
              </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button  type="success" @click="cancel('formMeet')">取消</el-button>
          <el-button  type="primary" @click="Release('formMeet')">发布</el-button>
        </div>
    </el-dialog>

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

        <el-table :key='tableKey' :data="ompList" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%"> 
            <el-table-column  align="center" label="参与人员">
              <template slot-scope="scope">
                <span>{{scope.row.name}}</span>
              </template>
            </el-table-column>

             <el-table-column align="center" label="阅读状态">
              <template slot-scope="scope">
                <span v-if="scope.row.isRead === 0" style="color:red">未阅读</span>
                <span v-else style="color:green">已阅读</span>
              </template>
            </el-table-column>

             <el-table-column align="center" label="阅读时间">
              <template slot-scope="scope">
                <span>{{scope.row.readTime}}</span>
              </template>
            </el-table-column>

             <el-table-column align="center" label="签到状态">
              <template slot-scope="scope">
                <span v-if="scope.row.isSignin === 0" style="color:red">未签到</span>
                <span v-else style="color:green">已签到</span>
              </template>
            </el-table-column> 

            <el-table-column align="center" label="签到时间">
              <template slot-scope="scope">
                <span>{{scope.row.signTime}}</span> 
              </template>
            </el-table-column> 
          </el-table>
          <div v-show="!listLoading" class="pagination-container">
            <el-pagination @size-change="handleOmpSizeChange" @current-change="handleOmpCurrentChange" :current-page.sync="listQueryOmp.page" :page-sizes="[10,20,30,50]" :page-size="listQueryOmp.limit" layout="total, sizes, prev, pager, next, jumper" :total="ompTotal"> </el-pagination>
          </div>
            <p style="text-align:right">创建于：{{form[0].createdTime}}</p>
           
            
           <el-table :key='tableKey1' :data="resultList" v-loading.body="ResultListLoading" border fit highlight-current-row style="width: 100%"> 
              <el-table-column  align="center" label="参与人员">
                <template slot-scope="scope">
                  <span>{{scope.row.content}}</span>
                </template>
              </el-table-column>

               <el-table-column align="center" label="阅读状态">
                <template slot-scope="scope">
                  <span>{{scope.row.name}}</span>
                </template>
              </el-table-column>

               <el-table-column align="center" label="阅读时间">
                <template slot-scope="scope">
                  <span>{{scope.row.createdTime}}</span>
                </template>
              </el-table-column>

          </el-table>
          <!-- <div v-show="!listLoading" class="pagination-container">
            <el-pagination @size-change="handleResultSizeChange" @current-change="handleResultCurrentChange" :current-page.sync="listQueryResult.page" :page-sizes="[10,20,30,50]" :page-size="listQueryResult.limit" layout="total, sizes, prev, pager, next, jumper" :total="resultTotal"> </el-pagination>
          </div>


          <div class="components-container">
              <div class="info">UE编辑器示例<br>需要使用编辑器时，调用UE公共组件即可。可设置填充内容defaultMsg，配置信息config(宽度和高度等)，可调用组件中获取内容的方法。
             </div>
              <div class="editor-container">
                      <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE> 
              </div>

          </div> -->
      </template>

      <div slot="footer" class="dialog-footer">
        <el-button type="success" @click="addMeetResult()">评 论</el-button>
        <el-button type="success" @click="goBack()">返 回</el-button>
         <el-button type="success" @click="printContent()">打印</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {
      page,
      ompPage,
      addObj,
      getObj,
      delObj,
      putObj,
      pageMeetType,
      getMeetType,
      addMeetByKeyId,
      pageTemplate,
      addMeetField,
      pagePeoper,
      addResult,
      addMeetPeople,
      resultPage,
      pagePlace,
      putPlace,
      getPlace
  } from '@/api/organization/managemeet/published/index';
  import store from '@/store/index';
  import {getZhiBId} from '@/utils/auth'
  export default {
    name: 'otlMeeting',
    data() {
      return {
        // defaultMsg: '这里是UE测试',
        //   config: {
        //     initialFrameWidth: null,
        //     initialFrameHeight: 350,
        //     serverUrl:  "/static/ueditor/jsp/controller.jsp"
        //   },
        form: {
        meetingTitle : undefined,title : undefined, beginTime : undefined,place : undefined,needApply : undefined,applyStatus : undefined,applyUid : undefined, meetingStatus : undefined,createdUid : undefined,readTotal : undefined,createdTime : undefined,        updatedTime : undefined},
        formMeet: {mtid : "",title : "",beginTime : "",place : "",needApply : "", accepts:"",applyStatus : undefined,applyUid : undefined,meetingStatus : undefined,createdUid : undefined,readTotal : undefined,createdTime : undefined,updatedTime : undefined,meetingDeptid : undefined,compere:"",comperePhone:"",remarks:"",attendance:"",lifeType:undefined},
        formMeetType: {needApply:undefined, title : undefined,content : "",createdUid : undefined,status : undefined,createdTime : undefined  },
        place:null,
        meetPeople:[],
        userId:store.state.user.userId,//获取登陆人的id
        formMeetResult: { 
        mId :undefined,content : undefined,createdUid :state.user.userId
        },
        UEcontent: null,
        list: null,
        tlist: null,
        total: null,
        ompTotal: null,
        ompList: null,
        listLoading: true,
        OmplistLoading: true,
        ResultListLoading: true,
        listQueryt: {page: null,limit: null,mTId: undefined},
        listQuery: {
          page: 1,
          limit: 10,
          title: undefined,
          createdUid: state.user.userId,
          lifeType:0,
        },//创建人id需要改  动态获取用户id
        data: [],
        defaultProps: {
          children: 'childList',
          label: 'name'
        },
        tree:[],
        listQueryOmp: {
          page: 1,
          limit: 10,
          mId: undefined
        },
        listQueryResult: {
          page: 1,
          limit:10,
          mId: undefined
        },
        modalClose:false,//点击 遮罩层不关闭
        templateOptions:[],//接受表单模板变量select多选
        places:[],//接受地点变量
        
        MeetField: [],//表单动态模板的数组
        meetTypes:[
          { meetTypeName: '通知', meetTypeId: 0 }
          // {meetTypeName: '申请', meetTypeId: 1 }
        ],
        formTemplate:{meetName:undefined,mtid:undefined},
        templateRule:{//验证选择模板不能为空
          mtid:[{required:true,message:'请选择模板'}]
        },
        meet:{
          title:[{required:true,message:'请输入活动主题',trigger:'blur'}],needApply:[{required:true,message:'请选择类型'}],
          place:[{required:true,message:'请选择活动地点',trigger:'change'}],
          beginTime:[{required:true,message:'请选择开始时间',trigger: 'change'}],
          compere:[{required:true,message:'请输入主持人',trigger:'blur'}],
          comperePhone:[{required:true,message:'请输入主持人联系方式'},{ type: 'number', message: '联系方式必须为数字值'}],
          remarks:[{required:true,message:'请输入备注',trigger:'blur'}],
          attendance:[{required:true,message:'请输入列席人员',trigger:'blur'}]
        },
        omr:null,
        ommVo:null,
        omp:null,
        resultList:null,
        MeetResultEntity:null,
        dialogFormVisible: false,
        dialogTemplate:false,//模板模态框
        dialogStatus: '',
        otlMeetingManager_btn_edit: true,
        otlMeetingManager_btn_del: false,
        otlMeetingManager_btn_add: true,
        textMap: {
          update: '编辑',
          create: '创建'
        },
        tableKey: 0,
        tableKey1:1,
        deptId:'3'//党员所在部门的id(修改)
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
      checkChange(data ){
        this.tree = this.$refs.tree.getCheckedKeys(true);
      },
      getList() {
        this.listLoading = true;
        page(this.listQuery)
            .then(response => {
          this.list = response.data.rows;
        this.total = response.data.total;
        this.listLoading = false;
        })
        // pageMeetType().then(response=>{
        //     this.formMeetType = response.data.data.rows
        //     this.templateOptions = response.data.data.rows
        // })
        pagePlace().then(response =>{
          this.places = response
        })
        pagePeoper(this.deptId).then(response=>{//根据党员的所在部门id查询本部门以及部门以下的人员
          this.data = response;
        })
      },
      getOmpList(){
        this.OmplistLoading = true;
        ompPage(this.listQueryOmp).then(response => {
        this.ompList = response.data.rows;
        this.ompTotal = response.data.total;
        this.OmplistLoading = false;
        })  
      },
      getMeetResult(){
        this.ResultListLoading = true;
        resultPage(this.listQueryResult).then(response =>{
        this.resultList = response.data.rows ;
        this.resultTotal = response.data.total;
        this.ResultListLoading = false;
        })
      },
      needType(){
        if(this.formMeet.needApply === 0){
          this.formMeet.accepts = "下级党组织"
        }else if(this.formMeet.needApply === 1){
          this.formMeet.accepts = "上级党组织党务工作者"
        }
      },
      placeChange(placeId){
        getPlace(placeId).then(response=>{
          this.place = response.data
        })
      },
      Release(formName){
        this.formMeet.mtid = this.formMeetType.mtid
        this.formMeet.lifeType = 0;
        this.formMeet.title = "不忘初心，牢记使命"
        this.formMeet.createdUid = this.userId;//创建人id写死，以后要动态获取用户登陆id
        this.formMeet.meetingDeptid = getZhiBId();
        const set = this.$refs;
        set[formName].validate(valide=>{
          if(valide){
            addMeetByKeyId(this.formMeet).then(response => {//添加会议（把固定的字段值存入）
              // this.listQueryt.mTId = this.formMeetType.mtid
              //  pageTemplate(this.listQueryt).then(response => {//把动态添加的字段中的值添加进数据库 按着模板id查询有几个动态字段
                // this.tlist = response.data.data.rows;
                // for(var i =0;i<this.tlist.length;i++){
                //   var str = $("#" + this.tlist[i].fieldId).val()
                //   this.MeetField.push({
                //     field:this.tlist[i].field,
                //     fieldId:this.tlist[i].fieldId,
                //     fieldType:this.tlist[i].fieldType,
                //     fieldValue:$("#" + this.tlist[i].fieldId).val()
                //   })
                // }
                // this.MeetField.forEach((data,index)=>{//插入动态字段
                //   addMeetField(data).then(() =>{
                //   })
                // })
                
                this.tree.forEach((data,index)=>{//插入参会人员
                  this.meetPeople.push({
                      uid:data
                  })
                })
                addMeetPeople(this.meetPeople).then(response=>{
                })
                this.meetPeople = [];

                this.tlist = undefined
                this.MeetField = []
                this.dialogTemplate = false
                this.$notify({
                  title: '成功',
                  message: '发布成功',
                  type: 'success',
                  duration: 2000
                });
                set[formName].resetFields();//初始化表单
                this.flag = true;
                this.getList()
              //})
            })
            this.place.total = ++this.place.total
            putPlace(this.formMeet.place,this.place).then(()=>{//统计在地点中开了几次会议
              
            })
          }
        })
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
      handleResultSizeChange(val){
        this.listQueryResult.limit = val;
        this.getMeetResult();
      },
      handleResultCurrentChange(val){
        this.listQueryResult.page = val;
        this.getMeetResult();
      },
      handleCreate() {
        this.dialogStatus = 'create';
        this.dialogTemplate = true;
      }, 
      handleUpdate(row) {
        getObj(row.mid)
            .then(response => {
            
          this.form = response.data.rows;
          this.ommVo = this.form[0].ommVo;
          //this.omr = this.form[0].omr;
          //this.omp = this.form[0].omp;
        this.dialogFormVisible = true;
        this.dialogStatus = this.form[0].title;
      });
        this.listQueryOmp.mId = row.mid;
        this.getOmpList();
        this.listQueryResult.mId = row.mid;
        this.getMeetResult();
      },
      cancelTable(){
        this.dialogFormVisible = false;
      },
      handleOmpSizeChange(val) {
        this.listQueryOmp.limit = val;
        this.getOmpList();
      },
      handleOmpCurrentChange(val) {
        this.listQueryOmp.page = val;
        this.getOmpList();
      },
      goBack() {
        this.dialogFormVisible = false;
        this.flag = true;
      },
      getUEContent() {
        return this.$refs.ue.getUEContent();
      },
      cancel(formName) {
        this.dialogTemplate = false;
        this.flag = true;
        const set = this.$refs;
        set[formName].resetFields();
      },
      addMeetResult() {
        this.formMeetResult.mId = this.form[0].mid;
        this.formMeetResult.content = this.getUEContent();
        addResult(this.formMeetResult)
        .then(() => {
        this.dialogFormVisible = false;
        this.$notify({
        title: '成功',
        message: '创建成功',
        type: 'success',
        });
        duration: 2000
        })
      }, 
    }
  }
</script>
