  <template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="活动主题" v-model="listQuery.title"> </el-input>
        <el-date-picker v-model="listQuery.beginTime" type="month" placeholder="选择会议开始月" style="bottom: 4px">
        </el-date-picker>
  
      <el-button class="filter-item" type="primary" icon="search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" v-if="otlMeetingManager_btn_add" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="edit">添加活动</el-button>
    </div>
<!-- ***************************** 选择会议模板 ***************************** -->
    <el-dialog title="其他组织生活" :visible.sync="dialogTemplate" width="45%" :close-on-click-modal="modalClose">
        <el-form label-width="80px" v-if="flag" :rules="templateRule"  :model="formTemplate" ref="formTemplate">
          <el-form-item label="选择模板" prop="mtid" >
              <el-select v-model="formTemplate.mtid" placeholder="请选择模板" style="width:60%;">
                <el-option v-for="item in templateOptions" :key="item.mtid" :label="item.title" :value="item.mtid"></el-option>
              </el-select>
          </el-form-item>
        </el-form>
<!-- ***************************** 添加会议 ***************************** -->
        <el-form label-width="150px" v-else="flag" ref="formMeet" :model="formMeet" :rules="meet">
              <el-form-item  label="活动主题" prop="title" >  <!-- 会议名字 -->
              <el-input v-model="formMeet.title"  style="width: 60%;" placeholder="请输入活动主题"></el-input>
            </el-form-item>
            <!-- 是否需要申请 -->
<!--             <el-form-item label="发起类型" prop="needApply">
             <el-select v-model="formMeet.needApply" placeholder="请选择类型" style="width:60%;" @change="needType(formMeet.needApply)">
                <el-option v-for="item in meetTypes" :key="item.meetTypeId" :label="item.meetTypeName" :value="item.meetTypeId"></el-option>
             </el-select>
          </el-form-item> -->
<!--             <el-form-item label="接收方"  > 
              <el-input v-model="formMeet.accepts" style="width: 60%;" :disabled="true"></el-input>
            </el-form-item> -->

            <el-form-item label="开始时间" prop="beginTime" >  <!-- 开始时间 -->
              <!-- <input v-model="formMeet.beginTime"  type="text" class="el-input__inner" style="width: 60%;"></input> -->
              <el-date-picker v-model="formMeet.beginTime" style="width: 60%;" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm" format="yyyy-MM-dd HH:mm">
              <!--    @change="getMeetPlace"  -->
              </el-date-picker>
            </el-form-item>

            <el-form-item label="结束时间" prop="endTime" >  <!-- 结束时间 -->
              <!-- <input v-model="formMeet.beginTime"  type="text" class="el-input__inner" style="width: 60%;"></input> -->
              <el-date-picker v-model="formMeet.endTime" style="width: 60%;" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm" format="yyyy-MM-dd HH:mm">  
              </el-date-picker>
            </el-form-item>

                <el-form-item label="拟定地点" prop="place">  <!-- 拟定地点 -->
              <el-select v-model="formMeet.place" style="width: 60%;" :label="formMeet.endTime" placeholder="请选择" @change="placeChange(formMeet.place)">
                <el-option v-for="item in places" :key="item.id" :label="item.place" :value="item.id"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="参与人员">
              <el-tree 
              ref="tree"
              :data="data"  :props="defaultProps" show-checkbox
              node-key="id"
              :default-checked-keys = "[-1]"
              @check-change = "checkChange"
              >
              </el-tree>

            </el-form-item>
            <el-form-item label="列席人员" prop="attendance">
              <el-input v-model="formMeet.attendance" style="width: 60%;" placeholder="请输入列席人员"></el-input>
            </el-form-item>
            
            </el-form-item>
            <el-form-item label="主持人" prop="compere">
              <el-input v-model="formMeet.compere" style="width: 60%;" placeholder="请输入主持人"></el-input>
            </el-form-item>

           <!--  <el-form-item label="主持人联系方式" prop="comperePhone">
              <el-input v-model.number="formMeet.comperePhone" style="width: 60%;" auto-complete="off" placeholder="请输入支持人联系方式">
              </el-input>
            </el-form-item> -->

          <i v-html="formMeetType.content" ></i>  <!-- 动态字段开始 -->
<!-- *************************** 添加前上传 *************************** -->            
          <el-form-item label="会议资料" >  
          <el-upload
            class="upload-demo"
            action="/api/olt/file/upload"
            :on-change="handleChange"
            :data="upLoadData"
            :headers="Headers"
            :on-error="OnError"
            :on-success="OnSuccess"
            :show-file-list="false"
          >
        <el-button size="small" type="primary" style="margin-bottom:10px">点击上传资料</el-button>
       <!--      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
<!--修改-->
            <el-table :data="fileList3" style="width: 100%" :show-header="false" >
              <el-table-column label="文件名" prop="fileName">
              </el-table-column>

               <!-- <el-table-column label="上传时间" prop="createTime">
              </el-table-column> -->

              <el-table-column label="操作" width="110">
                <template slot-scope="scope">
                  <a @click="handleRemove(scope.row)" style="color:white" >
                    <el-button type="danger" size="small">
                      <span>删除</span>
                      <i class="el-icon-delete el-icon--right"></i>
                    </el-button>
                  </a>
                </template>
              </el-table-column>

            </el-table>
          <!--  <a @click="download(scope.row)" style="color:blue" >下载文件</a> -->
          <!-- :beforeUpload="beforeAvatarUpload" -->
          <!-- </el-collapse-item>
        </el-collapse> -->
        </el-form-item> 
              <div style="clear:both"></div>
<!--*******************************************************************-->  
          <el-form-item label="会议说明" prop="remarks">
              <el-input v-model="formMeet.remarks" type="textarea" :rows="5" placeholder="请输入会议说明">
                
              </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button v-if="flag" type="success" @click="cancel('formTemplate')">取消</el-button>
          <el-button v-else type="success" :disabled="addMeetVLoading" @click="cancel('formMeet')">取消</el-button>
          <el-button v-if="flag" type="primary" @click="createTemplate('formTemplate')">确 定</el-button>
          <el-button v-else type="primary" :loading="addMeetVLoading" @click="Release('formMeet')">发布</el-button>
        </div>
    </el-dialog>

    <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">    
        <el-table-column  align="center" label="活动主题">
          <template slot-scope="scope">
            <span>{{scope.row.title}}</span>
          </template>
        </el-table-column>
<!-- 
        <el-table-column  align="center" label="活动类型">
          <template slot-scope="scope">
            <span>{{scope.row.meetingTitle}}</span>
          </template>
        </el-table-column>
 -->
        <el-table-column  align="center" label="活动时间">
          <template slot-scope="scope">
            <p style="margin: 0px;">{{scope.row.beginTime}}<span style="color:green"> 开始</span></p><hr color="#909399" style="margin: 0px;solid #ff0033"></hr><p style="margin: 0px">{{scope.row.endTime}}<span style="color:red"> 结束</span></p>
          </template>
        </el-table-column>
       
        <el-table-column  align="center" label="支部">
            <template slot-scope="scope">
              <span>{{scope.row.organizationDesc}}</span>
            </template>
        </el-table-column>

        <el-table-column  align="center" label="活动跟踪" width="150">
          <template slot-scope="scope">
            <span>{{scope.row.meetingStatusMessage}}</span>
          </template>
        </el-table-column>

  <!--       <el-table-column align="center" label="阅读状态">
          <template slot-scope="scope">
            <span style="color:green">已读{{scope.row.sumIsRead}}人</span>,<span style="color:red">未读{{scope.row.sumNotRead}}人</span>
          </template>
        </el-table-column> -->

        <el-table-column fixed="right" align="center" label="操作" width="150"> 
          <template slot-scope="scope">
            <el-button v-if="scope.row.meetingStatusMessage!='已取消'" size="small" type="success" @click="handleUpdate(scope.row.mid)">
              查看
            </el-button>
            <el-button v-if="scope.row.meetingStatusMessage!='已取消'&&scope.row.meetingStatusMessage!='已结束'" size="small" type="danger" @click="updateMeetStateMethod(scope.row)">
              取消
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
    <div id="subOutputRank-print">       
        <div style="text-align:center">
          <h1>{{form[0].title}}</h1>
<!--修改-->  
        <el-button v-if="showVideoButton" type="primary" size="small" style="margin-top:-47px;float:right;" @click="videoconferencing(form[0].videoconferencingUrl)">视频会议入口</el-button>
<!--修改-->        
<!-- ***************************** 活动进度条 ***************************** -->         
      <el-steps :active="stepsActive" status="wait" align-center>
        <el-step title="启动" description="活动发布成功"></el-step>
        <el-step :title="stepsActiveTitle.title1" :description="stepsActiveTitle.description1"></el-step>
        <el-step :title="stepsActiveTitle.title2" :description="stepsActiveTitle.description2"></el-step>
        <el-step :title="stepsActiveTitle.title3" :description="stepsActiveTitle.description3"></el-step>
        <el-step :title="stepsActiveTitle.title4" :description="stepsActiveTitle.description4"></el-step>
        <el-step title="结束" :description="stepsActiveTitle.description5"></el-step>
      </el-steps>
<!-- ********************************************************************* -->
<!-- ***************************** 活动信息 ***************************** -->           
        </div>
        <p>开始时间：{{form[0].beginTime}}</p>
        <p>活动地点：{{form[0].place}}</p>
<!--         <p>接收方：{{form[0].accepts}}</p>
        <p>发起类型：{{form[0].enumDesc}}</p> -->
        <p>主持人：{{form[0].compere}}</p>
  <!--       <p>主持人联系方式：{{form[0].comperePhone}}</p> -->
        <p>列席人员：{{form[0].attendance}}</p>
        <p v-for="item in ommVo">{{item.field}} : {{item.fieldValue}}</p>

        <p>会议说明：{{form[0].remarks}}</p>
<!-- ***************************** 查询参会人员 ***************************** -->
      <el-collapse @change="dialogHandleChange"  v-model="activeNames2">
            <el-collapse-item name="2">
              <template slot="title">
                <svg-icon icon-class="peoples"/> 参会人员 
                    <span style="color:green">已读{{sumReadAndSisgnin.sumIsRead}}人</span>,<span style="color:red">未读{{sumReadAndSisgnin.sumNotRead}}人</span>  |  <span style="color:green">已签到{{sumReadAndSisgnin.sumIsSisgnin}}人</span>,<span style="color:red">未签到{{sumReadAndSisgnin.sumNotSisgnin}}人</span> 
              </template>

              <el-table :key='tableKey' :data="ompList" v-loading.body="OmplistLoading" border fit highlight-current-row style="width: 100%">  
              <el-table-column  align="center" label="参与人员">
                <template slot-scope="scope">
                  <span>{{scope.row.name}}</span> 
                </template>
              </el-table-column>

               <el-table-column align="center" label="阅读状态">
                <template slot-scope="scope">
                  <span v-if="scope.row.isRead === 0" style="color:red">未阅读</span>
                  <span v-if="scope.row.isRead === 1" style="color:green">已阅读</span>
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
                  <span v-if="scope.row.isSignin === 1" style="color:green">已签到</span>
                </template>
              </el-table-column>
          
              <el-table-column align="center" label="签到时间">
                <template slot-scope="scope">
                  <span>{{scope.row.signTime}}</span> 
                </template>
              </el-table-column> 
            </el-table>
            <div v-show="!OmplistLoading" class="pagination-container">
              <el-pagination @size-change="handleOmpSizeChange" @current-change="handleOmpCurrentChange" :current-page.sync="listQueryOmp.page" :page-sizes="[10,20,30,50]" :page-size="listQueryOmp.limit" layout="total, sizes, prev, pager, next, jumper" :total="ompTotal"> </el-pagination>
            </div>
          </el-collapse-item>
        </el-collapse>
<!-- ***************************** 上传下载 ***************************** -->
      <el-collapse @change="dialogHandleChange"  v-model="activeNames">
        <el-collapse-item name="1" >
          <template slot="title">
            <i class="header-icon el-icon-upload" ></i> 会议资料 
          </template>

          <el-upload
            class="upload-demo"
            action="/api/olt/file/upload"
            :on-change="handleChange"
            :data="upLoadData"
            :headers="Headers"
            :on-error="OnError"
            :on-success="OnSuccess"
            :show-file-list="false"
            >
           <el-button size="small" type="primary" style="margin-bottom:10px">点击上传附件</el-button>
       <!--      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>

            <el-table :data="fileList3" style="width: 100%" >
              <el-table-column label="文件名" prop="fileName">
              </el-table-column>

               <el-table-column label="上传时间" align="center" width="150" prop="createTime">
              </el-table-column>

              <el-table-column label="操作" fixed="right" align="center"  width="150">
                <template slot-scope="scope">
 
                    <el-button size="small" @click="download(scope.row)">
                      <span>下载</span>
                    </el-button>
     
                    <el-button type="danger" size="small"  @click="handleRemove(scope.row)">
                      <span>删除</span>
                    </el-button>

                </template>
              </el-table-column>

            </el-table>
          <!--  <a @click="download(scope.row)" style="color:blue" >下载文件</a> -->
          <!-- :beforeUpload="beforeAvatarUpload" -->
        </el-collapse-item>
      </el-collapse>

        <p v-if="ifshow">活动总结:</p>
        <p v-if="ifshow">{{extendValueMapper}}</p>
<!-- ***************************** 会议结果 ***************************** -->
        <el-form v-if="ifshow&&extendInfoFalg === 1" :model="extendInfoForm" :rules="extendRules" ref="extendInfoForm" style="width:100%">
            <el-form-item prop="extendValue">
              <el-input type="textarea" :autosize="{minRows: 8}" placeholder="填写会议结果" v-model="extendInfoForm.extendValue" >
              </el-input>
            </el-form-item>
          </el-form>
        <!-- <el-button @click="cancelExtendInfo('extendInfoForm')">取 消</el-button> -->
        <div style="text-align:right">
          <el-button type="primary" v-if="ifshow&&extendInfoFalg === 1" :loading="extendDisabled" @click="createExtendInfo('extendInfoForm')">确 定</el-button>
          <el-button type="primary" v-if="extendInfoFalg === 2" :disabled="extendDisabled" @click="extendDialogForm = true">修改结论</el-button>
        </div>
      <!-- <el-button v-else type="primary" @click="update('form')">确 定</el-button> -->
<!-- ***************************** 会议结果修改 ***************************** -->     
      <el-dialog width="30%" title="新的会议结果" :visible.sync="extendDialogForm" append-to-body>
          <el-form :model="extendInfoForm" :rules="extendRules" ref="extendUpadateForm" style="width:100%">
            <el-form-item prop="extendValue">
              <el-input type="textarea" :autosize="{minRows: 8}" placeholder="填写会议结果" v-model="extendInfoForm.extendValue" >
              </el-input>
            </el-form-item>
          </el-form>

          <div slot="footer" class="dialog-footer">
              <el-button type="success" :loading="extendDisabled" @click="updateExtendInfo('extendUpadateForm')">确 认</el-button>
              <el-button type="success" @click="extendDialogForm = false">返 回</el-button>
          </div>       
      </el-dialog>
    </div>        
<!-- ***************************** 活动评论 ***************************** --> 
          <el-collapse v-if="ifshow" @change="dialogHandleChange"  v-model="activeNames3">
            <el-collapse-item name="3">
              <template slot="title">
                <i class="header-icon el-icon-info" ></i> 活动评论 
              </template>

              <el-table :key='tableKey1' :data="resultList" v-loading.body="ResultListLoading" border fit highlight-current-row style="width: 100%"> 
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
<!-- ***************************** 富文本编辑器 ***************************** --> 
          <el-form ref="formResult" :model="formMeetResult" :rules="meetResult">
            <el-form-item prop="content" >  <!-- 会议名字 -->
              <el-input v-if="ifshow" type="textarea" :autosize="{minRows: 8}" placeholder="在这里对本次活动进行评论吧~" v-model="formMeetResult.content" >
              </el-input>
            </el-form-item>
          </el-form>  
          <p style="text-align:right">活动创建于：{{form[0].createdTime}}</p>           
         <!--  <div class="components-container">
              <div class="info">UE编辑器示例<br>需要使用编辑器时，调用UE公共组件即可。可设置填充内容defaultMsg，配置信息config(宽度和高度等)，可调用组件中获取内容的方法。
             </div>
              <div class="editor-container">
                      <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE> 
              </div>

          </div>  -->

      </template>
      <div slot="footer" class="dialog-footer">
        <el-button v-if="ifshow" type="success" @click="addMeetResult('formResult')">评 论</el-button>
         <el-button type="success" @click="printContent()">打印</el-button>
        <el-button type="success" @click="goBack()">返 回</el-button>
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
      getPlace,
      getBeforMeetValue,
      getExtendInfoObj,
      addExtendInfoObj,
      updateExtendInfoObj,
      downloadFile,
      downLoadList,
      listPlace,
      getSumReadAndSisgnin,
      updateMeetState,
      DeleteInfo,
      getFileTypeNum
  } from '@/api/organization/managemeet/published/index';
  import {getZhiBId,getToken} from '@/utils/auth'
  import UE from './ue.vue';
  import Vue from 'vue';
  import store from '@/store/index'
  // import Lodop from './LodopFuncs.js';//LodopFuncs打印
  Vue.component('UE',UE);//局部注册组件
  export default {
    name: 'otlMeeting',
    data() {
      return {
        defaultMsg: '这里是测试数据',
          config: {
            initialFrameWidth: null,
            initialFrameHeight: 350,
            serverUrl:  "/static/ueditor/jsp/controller.jsp"
          },
        form: {
            meetingTitle : undefined,title : undefined, beginTime : undefined,place : undefined,needApply : undefined,applyStatus : undefined,applyUid : undefined, meetingStatus : undefined,createdUid : undefined,readTotal : undefined,createdTime : undefined,updatedTime : undefined,mid:undefined,comperePhone:""},
        formMeet: {mtid : "",title : "",beginTime : "", endTime:undefined,place : "",needApply : "", accepts:"",applyStatus : undefined,applyUid : undefined,meetingStatus : undefined,createdUid : undefined,readTotal : undefined,createdTime : undefined,updatedTime : undefined,meetingDeptid : undefined,compere:"",comperePhone:"",remarks:"",attendance:"",lifeType:undefined},
        formMeetType: {needApply:undefined, title : undefined,content : "",createdUid : undefined,status : undefined,createdTime : undefined  },
        place:null,
        //meetPeople:[],
        UEcontent: null,
        list: null,
        tlist: null,
        total: null,
        ompTotal: null,
        ompList: null,
        listLoading: true,
        OmplistLoading: true,       
        LODOP:null,
        placeBeginTime: null,
        listQueryt: {page: null,limit: null,mTId: undefined},
        userId:store.state.user.userId,//获取登陆人的id
        listQuery: {
          page: 1,
          limit: 10,
          title: undefined,
          beginTime: undefined,
          createdUid: store.state.user.userId,
          lifeType:4,
        },
        //文本域
        textarea:'',
        //创建人id需要改  动态获取用户id
        data: [],
        defaultProps: {
          children: 'childList',
          label: 'name'
        },
        tree:[],
        //会议消息
        meetingMessage:null,
        listQueryOmp: {
          page: 1,
          limit: 10,
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
          title:[
            {required:true,message:'请输入活动主题',trigger:'blur'},
            {max:30,message:'活动主题长度在30个字符之内'}
          ],
          needApply:[
            {required:true,message:'请选择类型'}
          ],
          place:[{required:true,message:'请选择活动地点',trigger:'change'}],
          beginTime:[{required:true,message:'请选择开始时间',trigger: 'change'}],
          endTime:[{required:true,message:'请选择结束时间',trigger: 'change'}],
//修改
          compere:[
            //{required:true,message:'请输入主持人',trigger:'blur'},
            {max:20,message:'主持人姓名长度在20个字符之内'}
          ],
          comperePhone:[  
              //{required:true,message:'请输入主持人联系方式'},
              { type: 'number', message: '联系方式必须为数字值'},
              {max:10,message:'主持人联系方式长度在11个字符之内'}
            ],
          remarks:[
            //{required:true,message:'请输入备注',trigger:'blur'},
            {max:120,message:'会议说明长度在120个字符之内'}
            ],
          attendance:[
            //{required:true,message:'请输入列席人员',trigger:'blur'},
            {max:120,message:'列席人员姓名总长度在120个字符之内'}
          ]
        },
        meetResult:{
          content:[
            {max:120,message:'评论长度在120个字符之内'}
          ]
        }, 
        extendRules:{
          extendValue:[
            {max:10000,message:'活动及如果长度在1万个字符之内'}
          ]
        },                
        flag:true,//判断哪个弹出
        omr:null,
        ommVo:null,
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
        MeetResultEntity:null,
        dialogFormVisible: false,
        dialogTemplate:false,//模板模态框
        dialogStatus: '',
        otlMeetingManager_btn_edit: true,
        otlMeetingManager_btn_del: false,
        otlMeetingManager_btn_add: true,
        extendInfoFalg: 1,
        extendDialogForm:false,
        extendValueMapper: undefined,
        textMap: {
          update: '编辑',
          create: '创建'
        },
        sumReadAndSisgnin:[],
        uuidInfo:"",  
        addMeetVLoading:false,
        ifshow:false,
        tableKey: 0,
        tableKey1:1,
        id:getZhiBId(),//党员所在部门的id
        //会议结果
        extendDisabled:false,
        extendInfoForm:{
          mId:undefined,
          extendValue:undefined,
          createdTime:undefined,
          createdUid:store.state.user.userId
        },
        //上传下载        
        fileList3: [],
        upLoadData:{
          mId:undefined,
          createdUid:store.state.user.userId
        },
        Headers:{'Authorization': getToken()},
        //折叠面板
        activeNames:[],
        activeNames2:[],
        activeNames3:[],
        //步骤条
        stepsActive:0,
        //视频会议入口控制器
        showVideoButton:false,
        stepsActiveTitle:{
          title1:'准备',
          title2:'签到',
          title3:'进行',
          title4:'总结',
          description1:'',
          description2:'',
          description3:'',
          description4:'',
          description5:''
        },        
      };   
    },
    created() {
      this.getList();
    },
    methods: {
      OnError(response,file){
        this.$message({
          type:"error",
          message:file.name+"上传失败",
        })
      },
      handleRemove(row){
        DeleteInfo(row.id).then(response=>{
          this.getDownLoadList(this.upLoadData.mId);
        getFileTypeNum(this.upLoadData.mId)
        .then(response =>{
          this.fileTypeNum = response;
        });      
          this.$message({
            type:"success",
            message:"删除成功",
          })
        })
      },      
      OnSuccess(response,file){
        this.$message({
          type:"success",
          message:file.name+"上传成功",
        })
      },
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
        pageMeetType().then(response=>{
            this.formMeetType = response.data.rows
            this.templateOptions = response.data.rows
        })
        listPlace(this.id).then(response =>{
          this.places = response;
        }),
        pagePeoper(this.id).then(response=>{//根据党员的所在id查询本部门以及部门以下的人员
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
      needType(){
        if(this.formMeet.needApply === 0){
          this.formMeet.accepts = "下级党组织"
        }else if(this.formMeet.needApply === 1){
          this.formMeet.accepts = "上级党组织党务工作者"
        }
      },
      createTemplate(formName){//根据mtid查询动态模板
        const set = this.$refs;
        set[formName].validate(validate =>{
            if(validate){
              this.flag = false;
              getMeetType(this.formTemplate.mtid).then(response => {
                this.formMeetType = response.data;
              });
            }
            
        })
        set[formName].resetFields();
      },
      placeChange(placeId){
        getPlace(placeId).then(response=>{
          this.place = response.data
        })
      },
      Release(formName){       
        this.tree = this.$refs.tree.getCheckedNodes(true);
          if(this.formMeet.compere!=null && this.formMeet.compere!=""){
              this.meetingMessage = "《" + this.formMeet.title + "》" + "将于 " + this.formMeet.beginTime + " 至 " + this.formMeet.endTime + " 在 " + this.place.place + " 召开,请按时到达。" + "请主持人 " + this.formMeet.compere + " 准备好活动材料并提前到场。"
            }else{
              this.meetingMessage = "《" + this.formMeet.title + "》" + "将于 " + this.formMeet.beginTime + " 至 " + this.formMeet.endTime + " 在 " + this.place.place + " 召开,请按时到达。"
            }
        this.formMeet.mtid = this.formMeetType.mtid;
        this.formMeet.id = this.uuidInfo;
        this.formMeet.lifeType = 4;
        this.formMeet.createdUid = this.userId;//创建人id写死，以后要动态获取用户登陆id
        this.formMeet.meetingDeptid = getZhiBId();
        const set = this.$refs;
        set[formName].validate(valide=>{
          if(valide){
            this.$confirm('确认开展其他组织生活活动么?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(()=>{
              this.addMeetVLoading = true; 
              addMeetByKeyId(this.formMeet).then(response => {//添加会议（把固定的字段值存入）
               this.listQueryt.mTId = this.formMeetType.mtid
               pageTemplate(this.listQueryt).then(response => {//把动态添加的字段中的值添加进数据库 按着模板id查询有几个动态字段
                this.tlist = response.data.rows;
                for(var i =0;i<this.tlist.length;i++){
                  var str = $("#" + this.tlist[i].fieldId).val()
                  this.MeetField.push({
                    field:this.tlist[i].field,
                    fieldId:this.tlist[i].fieldId,
                    fieldType:this.tlist[i].fieldType,
                    fieldValue:$("#" + this.tlist[i].fieldId).val()
                  })
                }
                this.MeetField.forEach((data,index)=>{//插入动态字段
                  addMeetField(data).then(() =>{
                  })
                })
                if(this.tree.length != 0){
                  // this.tree.forEach((data,index)=>{//插入参会人员
                  // this.meetPeople.push({
                  //     uid:data
                  // })
                  // })
                  addMeetPeople(this.tree,this.meetingMessage).then(response=>{
                    //this.meetPeople = [];
                    this.tlist = undefined;
                    this.MeetField = [];
                    this.dialogTemplate = false;
                    this.$store.commit("ZuzInfo",new Date().getTime());
                    this.addMeetVLoading = false;
                    this.$notify({
                      title: '成功',
                      message: '发布成功',
                      type: 'success',
                      duration: 2000
                    });
                    set[formName].resetFields();//初始化表单
                    this.flag = true;
                    this.getList();
                  })
                 
                }
                
              })            
            })
              if(this.place != null){
                this.place.total = ++this.place.total
                putPlace(this.formMeet.place,this.place).then(()=>{//统计在地点中开了几次会议
                })
              }

              }).catch(() => {
                this.$message({
                 type: 'info',
                  message: '该次发布被取消了~'
                });          
              });              
          } 
        })
      },
      handleFilter() {
        console.log(this.listQuery.beginTime);
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
      addMeetResult(formName) {
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
      handleCreate() {
        this.dialogTemplate = true;
        getBeforMeetValue("4",this.id).then(response =>{
          if(response.length != 0){
            this.formMeet = response[0];
          this.formMeet.comperePhone =  parseInt(this.formMeet.comperePhone);
          this.placeChange(this.formMeet.place);
          }
        });
        this.uuidInfo = this.uuid();
        this.upLoadData.mId = this.uuidInfo;
        this.fileList3 = null;
      },
      uuid() {
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";

      var uuid = s.join("");
      return uuid;
      }, 
      // 时间转换为时间戳
      timeFormat(time){
          let Time = time.replace("年",'/');
          let Time1 = Time.replace("月","/");
          let Time2 = Time1.replace("日","");
          let Time3 = Time2.replace("时",":");
          let Time4 = Time3.replace("分","");
          let arrayTime = (new Date(Time4)).getTime();
          return arrayTime;
      },       
      handleUpdate(mid) {
        getObj(mid)
            .then(response => {
          this.form = response.data.rows;
          this.ommVo = this.form[0].ommVo;
          //this.omr = this.form[0].omr;
          //this.omp = this.form[0].omp;     
        getSumReadAndSisgnin(mid)
          .then(response => {
          this.sumReadAndSisgnin = response.data;

            let formatBeginTime = this.timeFormat(this.form[0].beginTime);
            let formatEndTime = this.timeFormat(this.form[0].endTime);
            console.log(formatBeginTime);
            console.log(new Date().getTime());
            console.log(formatBeginTime-new Date().getTime());
          //会议开始前一小时出现会议视频入口          
          if(this.form[0].meetingStatus!=2 && formatBeginTime-new Date().getTime()<=3600000){
            this.showVideoButton = true;
          }else{
            this.showVideoButton = false;
          }
          //判断步骤条
          if(this.form[0].meetingStatus==2 && new Date().getTime()-formatEndTime>=259200000){
            this.stepsActive = 5;

            this.stepsActiveTitle.title1 = "准备完成"
            this.stepsActiveTitle.title2 = "签到结束"
            this.stepsActiveTitle.title3 = "活动完成"
            this.stepsActiveTitle.title4 = "总结结束"

            this.stepsActiveTitle.description1 = "开始于" + this.form[0].beginTime;
            this.stepsActiveTitle.description2 =  "已签到" + this.sumReadAndSisgnin.sumIsSisgnin + "人|"+ "未签到" + this.sumReadAndSisgnin.sumNotSisgnin + "人";
            this.stepsActiveTitle.description3 = "完成于" + this.form[0].endTime;
            this.stepsActiveTitle.description4 = "评论与总结关闭"
            this.stepsActiveTitle.description5 = "活动圆满结束"
          }else if(this.form[0].meetingStatus==2 && new Date().getTime()-formatEndTime<259200000){
            this.stepsActive = 4;

            this.stepsActiveTitle.title1 = "准备完成"
            this.stepsActiveTitle.title2 = "签到结束"
            this.stepsActiveTitle.title3 = "活动完成"
            this.stepsActiveTitle.title4 = "活动总结中..."

            this.stepsActiveTitle.description1 = "开始于" + this.form[0].beginTime;
            this.stepsActiveTitle.description2 = "已签到" + this.sumReadAndSisgnin.sumIsSisgnin + "人|"+ "未签到" + this.sumReadAndSisgnin.sumNotSisgnin + "人";
            this.stepsActiveTitle.description3 = "完成于" + this.form[0].endTime;
            this.stepsActiveTitle.description4 = "评论与总结限时开放，大家快来发表感受吧~";
            this.stepsActiveTitle.description5 = ""
          }else if(this.form[0].meetingStatus==1){
            this.stepsActive = 3;

            this.stepsActiveTitle.title1 = "准备完成"
            this.stepsActiveTitle.title2 = "签到结束"
            this.stepsActiveTitle.title3 = "进行中..."
            this.stepsActiveTitle.title4 = "总结"

            this.stepsActiveTitle.description1 = "开始于" + this.form[0].beginTime;
            this.stepsActiveTitle.description2 = "已签到" + this.sumReadAndSisgnin.sumIsSisgnin + "人|" + "未签到" + this.sumReadAndSisgnin.sumNotSisgnin + "人";
            this.stepsActiveTitle.description3 = "活动开始了，可以点击标题旁的视频会议入口进行视频会议";
            this.stepsActiveTitle.description4 = "";
            this.stepsActiveTitle.description5 = ""  
          }else if(this.form[0].meetingStatus==0 && formatBeginTime-new Date().getTime()<=3600000){
            this.stepsActive = 2;

            this.stepsActiveTitle.title1 = "准备完成" 
            this.stepsActiveTitle.title2 = "签到中..."
            this.stepsActiveTitle.title3 = "进行"
            this.stepsActiveTitle.title4 = "总结"

            this.stepsActiveTitle.description1 = "将于" + this.form[0].beginTime + "正式开始"
            this.stepsActiveTitle.description2 = "已签到" + this.sumReadAndSisgnin.sumIsSisgnin + "人|" + "未签到" + this.sumReadAndSisgnin.sumNotSisgnin + "人";
            this.stepsActiveTitle.description3 = ""
            this.stepsActiveTitle.description4 = ""
            this.stepsActiveTitle.description5 = ""
          }else if(this.form[0].meetingStatus==0){
            this.stepsActive = 1;

            this.stepsActiveTitle.title1 = "准备中..."
            this.stepsActiveTitle.title2 = "签到"
            this.stepsActiveTitle.title3 = "进行"
            this.stepsActiveTitle.title4 = "总结"

            this.stepsActiveTitle.description1 = "参与人员准备活动材料中..."
            this.stepsActiveTitle.description2 = ""
            this.stepsActiveTitle.description3 = ""
            this.stepsActiveTitle.description4 = ""
            this.stepsActiveTitle.description5 = ""

          }

          if(this.form[0].meetingStatus==2){
            this.ifshow = true;
          }else{
            this.ifshow = false;
          }
          this.dialogFormVisible = true;
          this.dialogStatus = this.form[0].title;

        });     
      });
 
        getFileTypeNum(mid)
        .then(response =>{
          this.fileTypeNum = response;
          console.log(response);
        });           
        this.activeNames = [];
        this.activeNames2 = [];
        this.activeNames3 = [];
        this.upLoadData.mId = mid;
        this.listQueryOmp.mId = mid;
        this.listQueryResult.mId = mid;
        //this.extendInfoForm.mId = mid;
        this.getExtendInfo(mid);
      },
      updateMeetStateMethod(row){
        this.$confirm('此操作将取消该次活动, 确认么?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          updateMeetState(row).then(response =>{
            console.log(response);
            this.$message({
              type: 'success',
              message: '该次活动已取消!'
            });
          this.getList();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '该次活动被保留了~'
          });          
        });
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
      cancel(formName) {
        this.dialogTemplate = false;
        this.flag = true;
        const set = this.$refs;
        set[formName].resetFields();
      },
      // getMeetPlace(){
      //   pagePlace(this.formMeet.beginTime,this.id).then(response =>{
      //     this.places = response;
      //   })
      // },
      getExtendInfo(mid){
        getExtendInfoObj(mid)
            .then(response => {
          if(response.data != null){
            this.extendInfoForm = response.data;
            this.extendValueMapper = this.extendInfoForm.extendValue;
            this.extendInfoFalg = 2;
          }else{
            this.extendInfoForm.extendValue = undefined;
            this.extendValueMapper = undefined;
            this.extendInfoFalg = 1;
          }
          this.extendDisabled = false;
      });
      },
      //会议结果添加
      createExtendInfo(formName) {
        const set = this.$refs;
        set[formName].validate(valid => {
        if (valid) {
        this.extendDisabled = true;
        this.extendInfoForm.mId = this.form[0].mid;
        this.extendInfoForm.createdUid = store.state.user.userId;
        addExtendInfoObj(this.extendInfoForm)
        .then(() => {
        this.getExtendInfo(this.form[0].mid);
        this.$notify({
        title: '成功',
        message: '创建成功',
        type: 'success',
        duration: 2000
        });
        })
        } else {
        return false;
        }
        });
      },
      cancelExtendInfo(formName) {
        this.dialogFormVisible = false;
        const set = this.$refs;
        set[formName].resetFields();
      },
      //上传后获新的文件列表
      handleChange(file, fileList) {
        this.getDownLoadList(this.upLoadData.mId);
        getFileTypeNum(this.upLoadData.mId)
        .then(response =>{
          this.fileTypeNum = response;
        }); 
      },      
      updateExtendInfo(formName) {
      const set = this.$refs;
        set[formName].validate(valid => {
          if (valid) {
            this.extendDisabled = true;
            updateExtendInfoObj(this.extendInfoForm).then(() => {
            this.extendDialogForm = false;
            this.getExtendInfo(this.extendInfoForm.mId);
            this.$notify({
            title: '成功',
            message: '修改成功',
            type: 'success',
            duration: 2000
            });
            });
          }
        })    
      },
      //下载
      download(row){
        //var str = row.filePath+'\\'+row.fileNewname+'.'+row.fileType;
        // var download = document.createElement('a');
        // download.href='olt/otlMeeting/enclosureDownLoad?id='+row.id; 
        // download.click();
        //this.dialogFiled = true
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
      } ,
      dialogHandleChange(val){
        if(val[0]==1){
          this.getDownLoadList(this.upLoadData.mId);
        }else if(val[0]==2){
          this.getOmpList();
        }else if(val[0]==3){
          this.getMeetResult();
        }
      },
      videoconferencing(url){
        window.open(url);
      }
    }
  }
</script>
