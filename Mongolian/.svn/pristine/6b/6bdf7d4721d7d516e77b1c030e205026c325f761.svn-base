<template>
  <div class="appmain-righ">
    <div class='tab-div'>
      <div class='app-table'>
        <div class="filter-container">
          <div class="filter-input">
            <el-date-picker class="settimess" v-model="listQuery.beginTime" type="month" :placeholder="$t('table.selectms')" style="bottom: 4px"><!--选择会议开始月 -->
          </el-date-picker>
            <el-input  class="filter-item" :placeholder="$t('table.hdzt')" v-model="listQuery.title"></el-input><!--活动主题 -->
            <el-button class="filter-item" size="small" type="primary" icon="search" ><span>{{$t('table.sousu')}}</span></el-button><!--搜索-->
            <el-button size="small" class="filter-item" v-if="otlMeetingManager_btn_add" style="margin-left: 10px;" @click="handleCreate"
                       type="primary" icon="edit"><span>{{$t('table.add')}}</span></el-button><!--添加-->
          </div>
        </div><!-- v-loading.body="listLoading" -->
        <el-table :key='tableKey' :data="list"  border fit highlight-current-row
                  style="width: 100%">
          <el-table-column align="center" :label="$t('table.hdzt')" width="100"> <!--活动主题-->
            <template slot-scope="scope">
              <span>{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <!--
                 <el-table-column align="center" label="活动类型">
                <template slot-scope="scope">
                  <span>{{scope.row.meetingTitle}}</span>
                </template>
              </el-table-column>
           -->
          <el-table-column align="center" :label="$t('table.activitytime')" width="100"> <!-- 活动时间 -->
            <template slot-scope="scope">
              <p style="margin: 0px;">{{scope.row.beginTime}}<span style="color:green"> {{$t('table.mnbegin')}}</span></p><!-- 开始 -->
              <hr color="#909399" style="margin: 0px;height:100%;writing-mode:vertical-lr; width: 100%;"></hr>
              <p style="margin: 0px">{{scope.row.endTime}}<span style="color:red"> {{$t('table.mnend')}}</span></p>
            </template>
          </el-table-column>

          <el-table-column align="center" :label="$t('table.zb')" width="100"> <!-- 支部-->
            <template slot-scope="scope">
              <span>{{scope.row.deptId}}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" :label="$t('table.hdgz')" width="100"><!-- 活动跟踪 -->
            <template slot-scope="scope">
              <span>{{scope.row.meetingStatusMessage}}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" :label="$t('table.ccaoz')" width="100"> <!-- 操作 -->
            <template slot-scope="scope">


              <el-button v-if="scope.row.meetingStatusMessage!='已取消'" size="small" type="success"
                         @click="handleUpdate(scope.row.mid)">
                {{$t('table.seeing')}}
              </el-button><!--查看 -->

              <el-button v-if="scope.row.meetingStatusMessage=='已取消'" :disabled="true" size="small" type="danger">
                已取消
              </el-button><!-- -->


            </template>
          </el-table-column>

        </el-table>
        <div v-show="!listLoading" class="pagination-container">
          <el-pagination
            :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit"
            layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
        </div>
      </div>

      <el-dialog :title="dialogStatus" width="auto" :visible.sync="dialogFormVisible">
        <template slot-scope="scope">

          <div style="text-align:center">
            <h1>ᠭᠠᠷᠴᠠᠭ</h1><!--{{form[0].title}} -->
            <!--修改-->
            <el-button v-if="showVideoButton" type="primary" size="small" style="margin-top:-47px;float:right;"
                       @click="videoconferencing(form[0].videoconferencingUrl)">视频会议入口
            </el-button><!--视频会议入口 -->

            <!-- ***************************** 活动进度条 ***************************** -->
            <span class="jdtitle">{{$t('table.jindu')}}</span> <!--活动进度-->
            <div style="writing-mode:horizontal-tb;height:100%; margin-left:10px;" class="progress">
              <el-steps direction="vertical" :active="stepsActive" status="wait" align-center>
                <el-step :title="$t('table.qidong')" :description="$t('table.hdfbcg')"></el-step><!--启动m 活动发布成功-->
                <el-step :title="stepsActiveTitle.title1" :description="stepsActiveTitle.description1"></el-step>
                <el-step :title="stepsActiveTitle.title2" :description="stepsActiveTitle.description2"></el-step>
                <el-step :title="stepsActiveTitle.title3" :description="stepsActiveTitle.description3"></el-step>
                <el-step :title="stepsActiveTitle.title4" :description="stepsActiveTitle.description4"></el-step>
                <el-step :title="$t('table.jieshu')" :description="stepsActiveTitle.description5"></el-step><!--结束-->
              </el-steps>
            </div>
            <!-- ********************************************************************* -->
            <!-- ***************************** 活动信息 ***************************** -->
          </div>
          <span class="jdtitle">{{$t('table.hdxxmeg')}}</span><!--活动详细信息-->
          <p>{{$t('table.starttime')}}ᠡᠬᠢᠯᠡᠬᠦ ᠴᠠᠭ</p><!--{{form[0].beginTime}} 开始时间-->
          <p>{{$t('table.hddd')}}ᠬᠦᠳᠡᠯᠭᠡᠭᠡᠨ  ᠦ ᠭᠠᠵᠠᠷ</p><!-- {{form[0].place}} 活动地点-->
          <!--         <p>接收方：{{form[0].accepts}}</p>
                  <p>发起类型：{{form[0].enumDesc}}</p> -->
          <p>{{$t('table.zcr')}}ᠬᠦᠲᠦᠯᠦᠭᠴᠢ</p><!--{{form[0].compere}} 主持人-->
          <!--         <p>主持人联系方式：{{form[0].comperePhone}}</p> -->
          <p>{{$t('table.lxry')}}：ᠰᠤᠯᠠ ᠤᠷᠤᠯᠴᠠᠭᠰᠠᠳ</p><!--{{form[0].attendance}} 列席人员-->
          <!--<p v-for="item in ommVo">{{item.field}} : {{item.fieldValue}}</p>-->
          <p>{{$t('table.hysm')}}： ᠬᠤᠷᠠᠯ  ᠦᠨ ᠲᠤᠳᠤᠷᠬᠠᠢᠯᠠᠯ</p><!--{{form[0].remarks}} 会议说明-->
          <!-- 修改 -->

          <!-- ***************************** 下载 ***************************** -->
          <el-collapse @change="dialogHandleChange" v-model="activeNames">
            <el-collapse-item name="1" class="collapse-button">
              <template slot="title">
                <i class="header-icon el-icon-upload"></i> {{$t('table.hyzl')}}<!--会议资料 -->
                <!--修改-->
                <span v-for="fileType in fileTypeNum"><!-- -->
              <span v-if="fileType.fileType=='docx'||fileType.fileType=='doc'||fileType.fileType=='wps'"
                    style="color:green;margin-left:5px">
                {{fileType.fileType}}{{$t('table.wenjian')}}{{fileType.fileTypeNum}}{{$t('table.ges')}}
              </span><!--文件  个-->
              <span v-else-if="fileType.fileType=='xlsx'||fileType.fileType=='xls'"
                    style="color:#409EFF;margin-left:5px">
                {{fileType.fileType}}{{$t('table.wenjian')}}{{fileType.fileTypeNum}}{{$t('table.ges')}}
              </span><!-- -->
              <span
                v-else-if="fileType.fileType=='jpeg'||fileType.fileType=='jpg'||fileType.fileType=='png'||fileType.fileType=='gif'"
                style="color:#E6A23C;margin-left:5px">
                {{fileType.fileType}}{{$t('table.wenjian')}}{{fileType.fileTypeNum}}{{$t('table.ges')}}
              </span><!-- -->
              <span v-else style="margin-left:5px">
                {{fileType.fileType}}{{$t('table.wenjian')}}{{fileType.fileTypeNum}}{{$t('table.ges')}}
              </span><!-- -->
            </span>

              </template>

              <el-table :data="fileList3" style="width: 100%">
                <el-table-column :label="$t('table.wenjm')" align="center" width="150" prop="fileName"><!--文件名 -->
                </el-table-column><!--文件名 -->

                <el-table-column :label="$t('table.scshij')" align="center" width="150" prop="createTime"><!--上传时间 -->
                </el-table-column><!--上传时间 -->

                <el-table-column :label="$t('table.ccaoz')" align="center" width="150"><!-- 操作-->
                  <template slot-scope="scope">
                    <a @click="download(scope.row)" style="color:white">
                      <el-button type="primary" size="small">
                        <span>{{$t('table.xiazai')}}</span><!--下载文件 -->
                        <i class="el-icon-upload el-icon--right"></i>
                      </el-button>
                    </a>
                  </template>
                </el-table-column>
              </el-table>
              <!--  <a @click="download(scope.row)" style="color:blue" >下载文件</a> -->
              <!-- :beforeUpload="beforeAvatarUpload" -->
            </el-collapse-item>
          </el-collapse>
          <p>{{$t('table.hdzj')}}:</p><!-- v-if="ifshow" 活动总结-->
          <!-- ***************************** 活动评论 ***************************** -->
          <el-collapse  @change="dialogHandleChange" v-model="activeNames3">
            <el-collapse-item name="3" class="collapse-button">
              <template slot="title">
                <i class="header-icon el-icon-info"></i>{{$t('table.hdpilu')}}
              </template><!-- 活动评论-->
              <el-table :data="resultList" v-loading.body="ResultListLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column align="center" :label="$t('table.contexts')" width="150"><!--内容 -->
                  <template slot-scope="scope">
                    <span>{{scope.row.content}}</span>
                  </template>
                </el-table-column>

                <el-table-column align="center" :label="$t('table.pinglunr')" width="150"><!--评论人 -->
                  <template slot-scope="scope">
                    <span>{{scope.row.name}}<br/>{{scope.row.createdTime}}</span>
                  </template>
                </el-table-column>
              </el-table>
              <div v-show="!listLoading" class="pagination-container">
                <el-pagination
                  :current-page.sync="listQueryResult.page" :page-sizes="[10,20,30,50]"
                  :page-size="listQueryResult.limit" layout="total, sizes, prev, pager, next, jumper"
                  :total="resultTotal">
                </el-pagination>
              </div>
            </el-collapse-item>
          </el-collapse>

          <el-form ref="formResult" :model="formMeetResult" :rules="meetResult">
            <el-form-item prop="content">  <!-- 会议名字 -->
              <el-input type="textarea" :autosize="{ minRows: 23, maxRows: 25}" :rows="8" :placeholder="$t('table.tishy')"
                        v-model="formMeetResult.content"><!-- 在这里对本次活动进行评论吧-->
              </el-input>
            </el-form-item>
          </el-form>

          <p style="text-align:right">{{$t('table.creattime')}}：</p><!--{{form[0].createdTime}} 活动创建于-->
        </template>
        <div slot="footer" class="dialog-footer">
          <!--  <el-button v-if="isSignin === 0" type="success" @click="state()">
             签到
           </el-button>
           <el-button v-if="isSignin === 1" disabled type="success">
             已签
           </el-button>  -->
          <!-- 修改 -->
          <el-button size="small" v-if="ifshow" type="success" @click="addMeetResult('formResult')">{{$t('tablr.pingl')}}</el-button><!-- 评 论-->
          <el-button size="small" type="success" @click="cancel()">{{$t('table.fanhui')}}</el-button><!-- 返 回-->
        </div>

      </el-dialog>
    </div>
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
    downLoadList,
    getFileTypeNum,
    getSumReadAndSisgnin
  } from '@/api/organization/managemeet/received/index';
  import {mapGetters} from 'vuex';
  import store from '@/store/index';
  import {getToken} from '@/utils/auth';

  export default {
    name: 'otlMeeting',
    data() {
      return {
        form: {
          title: undefined,
          beginTime: undefined,
          place: undefined,
          needApply: undefined,
          applyStatus: undefined,
          applyUid: undefined,
          meetingStatus: undefined,
          createdUid: undefined,
          readTotal: undefined,
          createdTime: undefined,
          updatedTime: undefined,
          mid: undefined
        },
        peopleForm: {
          mid: undefined,
          uid: undefined,
          isRead: undefined,
          isSignin: undefined,
          readTime: undefined,
          signTime: undefined
        },
        // list: null,
        list: [{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },{
          title: 'ᠰᠤᠷᠢᠯᠲᠠ ᠭᠠᠷ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc:'第一支部吧',
          meetingStatusMessage: 'ᠦᠭᠡᠢᠰᠭᠡᠬᠦ'
        },],
        total: null,
        listLoading: true,
        userId: store.state.user.userId, // 获取登陆人的id
        listQuery: {
          page: 1,
          limit: 10,
          mId: undefined,
          createdUid: store.state.user.userId,
          lifeType: 5,
          beginTime: undefined
        },
        dialogFormVisible: false,
        dialogStatus: '',
        otlMeetingManager_btn_edit: true,
        otlMeetingManager_btn_del: false,
        otlMeetingManager_btn_add: false,
        textMap: {
          update: 'ᠨᠠᠶᠢᠷᠠᠭᠤᠯᠬᠤ', // 编辑
          create: 'ᠡᠭᠦᠰᠭᠡᠨ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ' // 创建
        },
        meetResult: {
          content: [
            {max: 120, message: '评论长度在120个字符之内'}
          ]
        },
        tableKey: 0,
        signMid: undefined,
        isRead: undefined,
        isSignin: undefined,
        stateFlag: undefined,
        omp: null,
        // 活动评论
        resultList: null,
        ResultListLoading: true,
        resultTotal: null,
        listQueryResult: {
          page: 1,
          limit: 10,
          mId: undefined
        },
        formMeetResult: {
          mId: undefined, content: undefined, createdUid: store.state.user.userId
        },
        ifshow: false,
        //会议结果
        extendInfoForm: {
          id: undefined,
          mId: undefined,
          extendValue: undefined,
          createdTime: undefined,
          createdUid: store.state.user.userId
        },
        // 下载
        fileList3: [],
        upLoadData: {
          mId: undefined,
          createdUid: store.state.user.userId
        },
//修改
        // 步骤条
        stepsActive: 0,
        // 视频会议入口控制器
        showVideoButton: false,
        stepsActiveTitle: {
          title1: 'ᠪᠡᠯᠡᠳᠬᠡᠬᠦ',
          title2: 'ᠨᠡᠷ᠎ᠡ ᠪᠦᠷᠢᠳᠬᠡᠬᠦ', // 签到
          title3: 'ᠶᠠᠪᠤᠭᠳᠠᠬᠤ', // 进行
          title4: 'ᠳ᠋ᠦᠩᠨᠡᠬᠦ', // 总结
          description1: '',
          description2: '',
          description3: '',
          description4: '',
          description5: ''
        },
        sumReadAndSisgnin: [],
        fileTypeNum: []
      }
    },
    created() {
    },
    methods: {
      handleCreate() {
        this.dialogFormVisible = true;
      },
//修改
      // 时间转换为时间戳
      timeFormat(time) {
        let Time = time.replace("年", '/');
        let Time1 = Time.replace("月", "/");
        let Time2 = Time1.replace("日", "");
        let Time3 = Time2.replace("时", ":");
        let Time4 = Time3.replace("分", "");
        let arrayTime = (new Date(Time4)).getTime();
        return arrayTime;
      },
      handleUpdate(mid) {

        this.dialogFormVisible = true;
      },
      cancel() {
        this.dialogFormVisible = false;
      },
    },
    computed: {
      ZuzInfo() {
      }
    },
    watch: {
      ZuzInfo(val) {
      }
    }
  }
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mongolians.scss";
</style>
