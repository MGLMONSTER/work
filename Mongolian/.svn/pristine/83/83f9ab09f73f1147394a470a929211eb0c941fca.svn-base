<template>

  <div class="appmain-righ">
    <div class='tab-div'>

      <div class="app-table">
        <div class="filter-container">
          <div class="filter-input">
            <el-date-picker class="settimess" v-model="listQuery.beginTime" type="month" :placeholder="$t('table.selectms')"><!--选择会议开始月 -->
          </el-date-picker>
            <el-input @keyup.enter.native="" class="filter-item" :placeholder="$t('table.hdzt')" v-model="listQuery.title"></el-input><!-- 活动主题 -->
            <el-button class="filter-item" size="small" type="primary" icon="search" @click=""><span>{{$t('table.sousu')}}</span>
            </el-button><!--搜索 -->
            <el-button class="filter-item" size="small" v-if="otlMeetingManager_btn_add" style="margin-left: 10px;"
                       @click="handleCreate"
                       type="primary" icon="edit"><span>{{$t('table.addhd')}}</span><!--添加活动 -->
            </el-button>
          </div>
        </div>
        <!-- ***************************** 选择会议模板 ***************************** -->
        <el-dialog title="ᠬᠣᠶᠠᠷ  ᠢ ᠰᠤᠷᠤᠯᠴᠠᠵᠤ ᠨᠢᠭᠡ  ᠶᠢ ᠪᠠᠷᠢᠮᠲᠠᠯᠠᠬᠤ " :visible.sync="dialogTemplate" width="auto" :close-on-click-modal="modalClose">
          <!--        <el-form label-width="80px" v-if="flag" :rules="templateRule"  :model="formTemplate" ref="formTemplate">
                   <el-form-item label="选择模板" prop="mtid" >
                       <el-select v-model="formTemplate.mtid" placeholder="请选择模板" style="width:60%;">
                         <el-option v-for="item in templateOptions" :key="item.mtid" :label="item.title" :value="item.mtid"></el-option>
                       </el-select>
                   </el-form-item>
                 </el-form> -->
          <!-- ***************************** 添加会议 ***************************** -->
          <div class="filter-input">
            <el-form label-width="40px" ref="formMeet" :model="formMeet" :rules="meet">
              <el-form-item :label="$t('table.hdzt')" prop="title">  <!-- 活动主题会议名字 -->
                <el-input v-model="formMeet.title" style="width: 60%;" :placeholder="$t('table.pinputzt')"></el-input>
                <!-- 请输入活动主题-->
              </el-form-item>
              <!-- 是否需要申请 -->
              <!--         <el-form-item label="发起类型" prop="needApply">
                           <el-select v-model="formMeet.needApply" placeholder="请选择类型" style="width:60%;" @change="needType(formMeet.needApply)">
                              <el-option v-for="item in meetTypes" :key="item.meetTypeId" :label="item.meetTypeName" :value="item.meetTypeId"></el-option>
                           </el-select>
                        </el-form-item> -->
              <!--             <el-form-item label="接收方"  >
                            <el-input v-model="formMeet.accepts" style="width: 60%;" :disabled="true"></el-input>
                          </el-form-item> -->

              <el-form-item :label="$t('table.starttime')" prop="beginTime">  <!-- 开始时间 -->
                <!-- <input v-model="formMeet.beginTime"  type="text" class="el-input__inner" style="width: 60%;"></input> -->
                <el-date-picker class="settime" v-model="formMeet.beginTime" style="width: 60%;" type="datetime"
                                :placeholder="$t('table.slecttime')"
                                value-format="yyyy-MM-dd HH:mm" format="yyyy-MM-dd HH:mm"><!--选择日期时间 -->
                  <!--    @change="getMeetPlace"  -->
                </el-date-picker>
              </el-form-item>

              <el-form-item :label="$t('table.endtime')" prop="endTime">  <!-- 结束时间 -->
                <!-- <input v-model="formMeet.beginTime"  type="text" class="el-input__inner" style="width: 60%;"></input> -->
                <el-date-picker class="settime" v-model="formMeet.endTime" style="width: 60%;" type="datetime"
                                :placeholder="$t('table.slecttime')"
                                value-format="yyyy-MM-dd HH:mm" format="yyyy-MM-dd HH:mm"><!-- 选择日期时间-->
                </el-date-picker>
              </el-form-item>

              <el-form-item :label="$t('table.nddd')" prop="place">  <!-- 拟定地点 -->
                <el-select class="setselectss" v-model="formMeet.place" style="width: 60%;" :label="formMeet.endTime"
                           :placeholder="$t('table.plssele')"
                           @change="">
                  <el-option v-for="item in places" :key="item.id" :label="item.place" :value="item.id"></el-option>
                </el-select><!--请选择 -->
              </el-form-item>

              <el-form-item :label="$t('table.cyry')"><!-- 参与人员-->
                <el-tree
                  ref="tree"
                  :data="data" :props="defaultProps" show-checkbox
                  node-key="id"
                  :default-checked-keys="[-1]"
                  @check-change=""
                >
                </el-tree>

              </el-form-item>
              <el-form-item :label="$t('table.lxry')" prop="attendance"><!-- 列席人员-->
                <el-input v-model="formMeet.attendance" style="width: 60%;"
                          :placeholder="$t('table.inputlxry')"></el-input><!--请输入列席人员 -->
              </el-form-item>
              <el-form-item :label="$t('table.zcr')" prop="compere"><!--主持人 -->
                <el-input v-model="formMeet.compere" style="width: 60%;" :placeholder="$t('table.inputzcr')"></el-input>
                <!--请输入主持人 -->
              </el-form-item>

              <!--             <el-form-item label="主持人联系方式" prop="comperePhone">
                            <el-input v-model.number="formMeet.comperePhone" style="width: 60%;" auto-complete="off" placeholder="请输入支持人联系方式">
                            </el-input>
                          </el-form-item> -->
              <i v-html="formMeetType.content"></i>  <!-- 动态字段开始 -->
              <!--修改-->
              <!-- *************************** 添加前上传 *************************** -->
              <!-- <el-collapse @change="dialogHandleChange" style="margin-bottom:20px"  v-model="activeNames">
                  <el-collapse-item name="1" >
                    <template slot="title">
                      <i class="header-icon el-icon-upload" ></i> 会议附件
                    </template> -->
              <el-form-item :label="$t('table.hyzl')"><!--会议资料 -->
                <el-upload
                  class="upload-demo"
                  action="/api/olt/file/upload"
                  :data="upLoadData"
                  :headers="Headers"
                  :on-error="OnError"
                  :on-success="OnSuccess"
                  :show-file-list="false"
                >
                  <el-button size="small" type="primary" style="margin-bottom:10px">{{$t('table.djsc')}}</el-button>
                  <!--点击上传资料 -->
                  <!--      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
                <!--修改-->
                <el-table :data="fileList3" style="width: 100%" :show-header="false">
                  <el-table-column :label="$t('table.wenjm')" prop="fileName"><!-- 文件名 -->
                  </el-table-column>

                  <!-- <el-table-column label="上传时间" prop="createTime">
                 </el-table-column> -->

                  <el-table-column :label="$t('table.ccaoz')" width="110"><!--操作 -->
                    <template slot-scope="scope">
                      <a @click="" style="color:white">
                        <el-button type="danger" size="small">
                          <span>{{$t('table.delectd')}}</span>
                          <i class="el-icon-delete el-icon--right"></i>
                        </el-button>
                      </a>
                    </template>
                  </el-table-column><!-- 删除-->

                </el-table>
                <!--  <a @click="download(scope.row)" style="color:blue" >下载文件</a> -->
                <!-- :beforeUpload="beforeAvatarUpload" -->
                <!-- </el-collapse-item>
              </el-collapse> -->
              </el-form-item>
              <div style="clear:both"></div>
              <!--*******************************************************************-->
              <el-form-item :label="$t('table.hysm')" prop="remarks"><!--会议说明 -->
                <el-input v-model="formMeet.remarks" type="textarea" :autosize="{ minRows: 23, maxRows: 25}" :rows="8"
                          :placeholder="$t('table.inputhysm')">

                </el-input>
              </el-form-item> <!--请输入会议说明 -->
            </el-form>
          </div>
          <div slot="footer" class="dialog-footer">
            <!--          <el-button v-if="flag" type="success" @click="cancel('formTemplate')">取消</el-button> -->
            <el-button type="success" size="small" :disabled="addMeetVLoading" @click="cancel('formMeet')">
              {{$t('table.quxiao')}}
            </el-button><!-- 取消-->
            <!--      <el-button v-if="flag" type="primary" @click="createTemplate('formTemplate')">确 定</el-button> -->
            <el-button type="primary" size="small" :loading="addMeetVLoading" @click="">
              {{$t('table.fabu')}}
            </el-button><!--发布 -->
          </div>
        </el-dialog><!--v-loading.body="listLoading" -->
        <el-table :key='tableKey' :data="list" border fit highlight-current-row
                  style="width: 100%">
          <el-table-column align="center" :label="$t('table.hdzt')" width="100"> <!--活动主题-->
            <template slot-scope="scope">
              <span>{{scope.row.title}}</span>
            </template>
          </el-table-column>

          <!--         <el-table-column  align="center" label="活动类型">
                    <template slot-scope="scope">
                      <span>{{scope.row.meetType}}</span>
                    </template>
                  </el-table-column> -->

          <el-table-column align="center" :label="$t('table.activitytime')" width="100"> <!-- 活动时间 -->
            <template slot-scope="scope">
              <p style="margin: 0px;">{{scope.row.beginTime}}<span style="color:green"> {{$t('table.mnbegin')}}</span></p><!-- 开始 -->
              <hr color="#909399" style="margin: 0px;height:100%;writing-mode:vertical-lr; width: 100%;"></hr>
              <p style="margin: 0px">{{scope.row.endTime}}<span style="color:red"> {{$t('table.mnend')}}</span></p>
              <!-- 结束 -->
            </template>
          </el-table-column>

          <el-table-column align="center" :label="$t('table.zb')" width="100"> <!-- 支部-->
            <template slot-scope="scope">
              <span>{{scope.row.organizationDesc}}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" :label="$t('table.hdgz')" width="100"><!-- 活动跟踪 -->
            <template slot-scope="scope">
              <span>{{scope.row.meetingStatusMessage}}</span>
            </template>
          </el-table-column>

          <!--         <el-table-column align="center" label="阅读状态">
                    <template slot-scope="scope">
                      <span style="color:green">已读{{scope.row.sumIsRead}}人</span>,<span style="color:red">未读{{scope.row.sumNotRead}}人</span>
                    </template>
                  </el-table-column> -->

          <el-table-column align="center" :label="$t('table.ccaoz')" width="100"> <!-- 操作 -->
            <template slot-scope="scope">
              <el-button v-if="scope.row.meetingStatusMessage!='已取消'" size="small" type="success"
                         @click="handleUpdate(scope.row.mid)">
                {{$t('table.seeing')}}
              </el-button><!--查看 -->
              <el-button v-if="scope.row.meetingStatusMessage!='已取消'&&scope.row.meetingStatusMessage!='已结束'"
                         size="small"
                         type="danger" @click="updateMeetStateMethod(scope.row)">
                {{$t('table.quxiao')}}
              </el-button><!-- 取消-->

              <el-button v-if="scope.row.meetingStatusMessage=='已取消'" :disabled="true" size="small" type="danger">
                已取消
              </el-button><!--已取消 -->
            </template>
          </el-table-column>
        </el-table>

        <div v-show="!listLoading" class="pagination-container">
          <el-pagination @size-change="" @current-change=""
                         :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit"
                         layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
        </div>
      </div>

      <el-dialog :title="dialogStatus" width="auto" :visible.sync="dialogFormVisible">
        <template slot-scope="scope">
          <div id="subOutputRank-print">
            <div style="text-align:center">
              <h1></h1><!--{{form[0].title}}  -->

              <el-button v-if="showVideoButton" type="primary" size="small" style="margin-top:-47px;float:right;"
                         @click="">{{$t('table.sorkwj')}}
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
            <!--<div class="filter-input">-->
            <p>{{$t('table.starttime')}}</p><!--{{form[0].beginTime}} 开始时间-->
            <p>{{$t('table.hddd')}}</p><!-- {{form[0].place}} 活动地点-->
            <!--         <p>接收方：{{form[0].accepts}}</p>
                    <p>发起类型：{{form[0].enumDesc}}</p> -->
            <p>{{$t('table.zcr')}}：</p><!--{{form[0].compere}} 主持人-->
            <!--         <p>主持人联系方式：{{form[0].comperePhone}}</p> -->
            <p>{{$t('table.lxry')}}：</p><!--{{form[0].attendance}} 列席人员-->
            <!--<p v-for="item in ommVo">{{item.field}} : {{item.fieldValue}}</p>-->
            <p>{{$t('table.hysm')}}：</p><!--{{form[0].remarks}} 会议说明-->
            <!-- ***************************** 查询参会人员 ***************************** -->
            <el-collapse @change="" v-model="activeNames2">
              <el-collapse-item name="2" class="collapse-button">
                <template slot="title">
                  <svg-icon icon-class="peoples"/>
                  <!-- 参会人员--> {{$t('table.canhren')}}
                  <span
                    style="color:green">{{$t('table.yyued')}}{{sumReadAndSisgnin.sumIsRead}}{{$t('table.ren')}}</span>,<span
                  style="color:red">{{$t('table.weiyud')}}{{sumReadAndSisgnin.sumNotRead}}{{$t('table.ren')}}</span>
                  <!--已读 人 未读-->
                  | <span style="color:green">{{$t('table.yiqiand')}}{{sumReadAndSisgnin.sumIsSisgnin}}{{$t('table.ren')}}</span>,<span
                  style="color:red">{{$t('table.weiqiand')}}{{sumReadAndSisgnin.sumNotSisgnin}}{{$t('table.ren')}}</span>
                  <!--已签到 未签到-->
                </template>

                <el-table :key='tableKey' :data="ompList" v-loading.body="OmplistLoading" border fit
                          highlight-current-row
                          style="width: 100%">
                  <el-table-column align="center" :label="$t('table.cyry')" width="150"><!--参与人员 -->
                    <template slot-scope="scope">
                      <span>{{scope.row.name}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column align="center" :label="$t('table.rede')" width="150"><!-- 阅读状态-->
                    <template slot-scope="scope">
                      <span v-if="scope.row.isRead === 0" style="color:red">{{$t('table.weiyud')}}</span><!--未阅读 -->
                      <span v-if="scope.row.isRead === 1" style="color:green">{{$t('table.yyued')}}</span><!-- 已阅读-->
                    </template>
                  </el-table-column>

                  <el-table-column align="center" :label="$t('table.readtime')" width="150"><!--阅读时间 -->
                    <template slot-scope="scope">
                      <span>{{scope.row.readTime}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column align="center" :label="$t('table.qiandaozt')" width="150"><!--签到状态 -->
                    <template slot-scope="scope">
                      <span v-if="scope.row.isSignin === 0" style="color:red">{{$t('table.weiqiand')}}</span><!-- 未签到-->
                      <span v-if="scope.row.isSignin === 1" style="color:green">{{$t('table.yiqiand')}}</span>
                      <!--已签到 -->
                    </template>
                  </el-table-column>

                  <el-table-column align="center" :label="$t('table.qiandtime')" width="150"><!--签到时间 -->
                    <template slot-scope="scope">
                      <span>{{scope.row.signTime}}</span>
                    </template>
                  </el-table-column>
                </el-table>
                <div v-show="!OmplistLoading" class="pagination-container">
                  <el-pagination @size-change="" @current-change=""
                                 :current-page.sync="listQueryOmp.page" :page-sizes="[10,20,30,50]"
                                 :page-size="listQueryOmp.limit" layout="total, sizes, prev, pager, next, jumper"
                                 :total="ompTotal"></el-pagination>
                </div>
              </el-collapse-item>
            </el-collapse>
            <br/>
            <!-- ***************************** 上传下载 ***************************** -->
            <el-collapse @change="" v-model="activeNames" style="height: 100%;">
              <el-collapse-item name="1" class="collapse-button">
                <template slot="title">
                  <i class="header-icon el-icon-upload"></i> {{$t('table.hyzl')}}<!--会议资料 -->

                  <span v-for="fileType in fileTypeNum">
              <span v-if="fileType.fileType=='docx'||fileType.fileType=='doc'||fileType.fileType=='wps'"
                    style="color:green;margin-left:5px">
                {{fileType.fileType}}{{$t('table.wenjian')}}{{fileType.fileTypeNum}}{{$t('table.ges')}}
              </span><!-- -->
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
                <el-upload
                  class="upload-demo"
                  action="/api/olt/file/upload"
                  :data="upLoadData"
                  :headers="Headers"
                  :on-error="OnError"
                  :on-success="OnSuccess"
                  :show-file-list="false"
                >
                  <el-button size="small" type="primary" style="margin-bottom:10px">{{$t('table.djsc')}}</el-button>
                  <!--点击上传附件 -->
                  <!--      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>

                <el-table :data="fileList3" style="width: 100%">
                  <el-table-column :label="$t('table.wenjm')" align="center" width="150" prop="fileName"><!--文件名 -->
                  </el-table-column>
                  <!--修改-->
                  <el-table-column :label="$t('table.scshij')" align="center" width="150" prop="createTime"><!--上传时间 -->
                  </el-table-column>

                  <el-table-column :label="$t('table.ccaoz')" align="center" width="150"><!-- 操作-->
                    <template slot-scope="scope">

                      <el-button size="small" @click="">
                        <span>{{$t('table.downloade')}}</span>
                      </el-button><!--下载 -->

                      <el-button type="danger" size="small" @click="">
                        <span>{{$t('table.delectd')}}</span>
                      </el-button><!--删除 -->

                    </template>
                  </el-table-column>

                </el-table>
                <!--  <a @click="download(scope.row)" style="color:blue" >下载文件</a> -->
                <!-- :beforeUpload="beforeAvatarUpload" -->
              </el-collapse-item>
            </el-collapse>
            <p>{{$t('table.hdzj')}}:</p><!-- v-if="ifshow" 活动总结-->
            <!--<p>总结内容：……</p>&lt;!&ndash;v-if="ifshow" {{extendValueMapper}}&ndash;&gt;-->
            <!-- ***************************** 会议结果 ***************************** -->
            <!--修改-->
            <el-form :model="extendInfoForm" :rules="extendRules" ref="extendInfoForm"
                     style="width:100%">
              <el-form-item prop="extendValue"><!--填写会议结果 -->
                <el-input type="textarea" :placeholder="$t('table.inputhuiy')" v-if="extendInfoFalg === 1"
                          v-model="extendInfoForm.extendValue" :autosize="{ minRows: 23, maxRows: 25}" :rows="8">
                </el-input>
              </el-form-item>
            </el-form>
            <!-- <el-button @click="cancelExtendInfo('extendInfoForm')">取 消</el-button> -->
            <div style="text-align:right">
              <el-button size="small" type="primary" :loading="extendDisabled" v-if="extendInfoFalg === 1"
                         @click="createExtendInfo('extendInfoForm')"> {{$t('table.rell')}}
              </el-button><!--确 定 -->
              <el-button size="small" type="primary" v-if="extendInfoFalg === 2" :disabled="extendDisabled"
                         @click="extendDialogForm = true">{{$t('table.editjl')}}
              </el-button><!--修改结论 -->
            </div>
            <!-- <el-button v-else type="primary" @click="update('form')">确 定</el-button> -->
            <!-- ***************************** 会议结果修改 ***************************** -->
            <!--修改-->
            <el-dialog width="auto" :title="$t('table.newhyj')" :visible.sync="extendDialogForm" append-to-body>
              <!-- 新的会议结果-->
              <el-form :model="extendInfoForm" :rules="extendRules" ref="extendUpadateForm" style="width:100%">
                <el-form-item prop="extendValue">
                  <el-input type="textarea" :placeholder="$t('table.hyzongji')"
                            v-model="extendInfoForm.extendValue" :autosize="{ minRows: 23, maxRows: 25}" :rows="20">
                  </el-input>
                </el-form-item><!-- 填写会议结果-->
              </el-form>

              <div slot="footer" class="dialog-footer">
                <el-button type="success" size="small" :loading="extendDisabled"
                           @click="">{{$t('table.rell')}}
                </el-button><!-- 确 认-->
                <el-button type="success" size="small" @click="extendDialogForm = false">{{$t('table.fanhui')}}
                </el-button><!--返 回 -->
              </div>
            </el-dialog>
          </div>
          <!-- ***************************** 活动评论 ***************************** --><!--v-if="ifshow"-->
          <el-collapse @change="" v-model="activeNames3">
            <el-collapse-item name="3" class="collapse-button">
              <template slot="title">
                <i class="header-icon el-icon-info"></i>{{$t('table.hdpilu')}}
              </template><!-- 活动评论-->

              <el-table :key='tableKey1' :data="resultList" v-loading.body="ResultListLoading" border fit
                        highlight-current-row style="width: 100%">
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
                <el-pagination @size-change="" @current-change=""
                               :current-page.sync="listQueryResult.page" :page-sizes="[10,20,30,50]"
                               :page-size="listQueryResult.limit" layout="total, sizes, prev, pager, next, jumper"
                               :total="resultTotal">
                </el-pagination>
              </div>
            </el-collapse-item>
          </el-collapse>
          <!-- ***************************** 富文本编辑器 ***************************** -->
          <el-form ref="formResult" :model="formMeetResult" :rules="meetResult">
            <el-form-item prop="content">  <!-- 会议名字 -->
              <el-input type="textarea" :autosize="{ minRows: 23, maxRows: 25}" :rows="8"
                        :placeholder="$t('table.tishy')"
                        v-model="formMeetResult.content">
              </el-input><!--在这里对本次活动进行评论吧~-->
            </el-form-item>
          </el-form>
          <p style="text-align:right">{{$t('table.creattime')}}：</p><!--{{form[0].createdTime}} 活动创建于-->
          <!--  <div class="components-container">
               <div class="info">UE编辑器示例<br>需要使用编辑器时，调用UE公共组件即可。可设置填充内容defaultMsg，配置信息config(宽度和高度等)，可调用组件中获取内容的方法。
              </div>
               <div class="editor-container">
                       <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
               </div>

           </div>  -->
        </template>
        <div slot="footer" class="dialog-footer">
          <el-button v-if="ifshow" size="small" type="success" @click="">
            {{$t('tablr.pingl')}}
          </el-button><!-- 评 论-->
          <el-button type="success" size="small" @click="">{{$t('table.printty')}}</el-button><!--打印 -->
          <el-button type="success" size="small" @click="">{{$t('table.fanhui')}}</el-button><!-- 返 回-->
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'
  import {getZhiBId, getToken} from '@/utils/auth'
  // import Lodop from './LodopFuncs.js';//LodopFuncs打印
  export default {
    name: 'otlMeeting',
    data() {
      return {
        defaultMsg: '这里是测试数据',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350,
          serverUrl: "/static/ueditor/jsp/controller.jsp"
        },
        form: {
          meetingTitle: undefined,
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
        formMeet: {
          mtid: '',
          title: '两学一做',
          meetType: undefined,
          beginTime: '',
          endTime: undefined,
          place: '',
          needApply: '',
          accepts: '',
          applyStatus: undefined,
          applyUid: undefined,
          meetingStatus: undefined,
          createdUid: undefined,
          readTotal: undefined,
          createdTime: undefined,
          updatedTime: undefined,
          meetingDeptid: undefined,
          compere: "",
          comperePhone: undefined,
          remarks: "",
          attendance: "",
          lifeType: undefined
        },
        formMeetType: {
          needApply: undefined,
          title: undefined,
          content: "",
          createdUid: undefined,
          status: undefined,
          createdTime: undefined
        },
        place: null,
        //meetPeople:[],
        UEcontent: null,
        // list: null,
        list: [{
          title: 'ᠮᠤᠩᠭᠤᠯ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ',
          meetingStatusMessage: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ'
        }, {
          title: 'ᠮᠤᠩᠭᠤᠯ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ',
          meetingStatusMessage: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ'
        }, {
          title: 'ᠮᠤᠩᠭᠤᠯ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ',
          meetingStatusMessage: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ'
        }, {
          title: 'ᠮᠤᠩᠭᠤᠯ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ',
          meetingStatusMessage: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ'
        },{
          title: 'ᠮᠤᠩᠭᠤᠯ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ',
          meetingStatusMessage: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ'
        }, {
          title: 'ᠮᠤᠩᠭᠤᠯ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ',
          meetingStatusMessage: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ'
        }, {
          title: 'ᠮᠤᠩᠭᠤᠯ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ',
          meetingStatusMessage: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ'
        }, {
          title: 'ᠮᠤᠩᠭᠤᠯ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ',
          beginTime: '2018-2-23',
          endTime: '2018-2-25',
          deptId: '1',
          organizationDesc: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ',
          meetingStatusMessage: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ'
        }],
        tlist: null,
        total: null,
        ompTotal: null,
        ompList: null,
        listLoading: true,
        OmplistLoading: true,
        LODOP: null,
        placeBeginTime: null,
        listQueryt: {page: null, limit: null, mTId: undefined},
        userId: store.state.user.userId, // 获取登陆人的id
        listQuery: {
          page: 1,
          limit: 10,
          title: undefined,
          beginTime: undefined,
          createdUid: store.state.user.userId,
          lifeType: 8,
        },
        // 文本域
        textarea: '',
        // 创建人id需要改  动态获取用户id
        data: [],
        defaultProps: {
          children: 'childList',
          label: 'name'
        },
        tree: [],
        listQueryOmp: {
          page: 1,
          limit: 10,
          mId: undefined
        },
        modalClose: false, // 点击 遮罩层不关闭
        templateOptions: [], // 接受表单模板变量select多选
        places: [], // 接受地点变量

        MeetField: [], // 表单动态模板的数组
        meetTypes: [
          {meetTypeName: '通知', meetTypeId: 0}
          // {meetTypeName: '申请', meetTypeId: 1 }
        ],
        formTemplate: { meetName: undefined, mtid: undefined },
        templateRule: { // 验证选择模板不能为空
          mtid: [{ required: true, message: 'ᠬᠡᠪ ᠢᠶᠡᠨ ᠰᠤᠩᠭᠤᠭᠠᠷᠠᠢ' }] // 请选择模板
        },
        meet: {
          title: [
            { required: true, message: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠭᠤᠤᠯ ᠠᠭᠤᠯᠭ᠎ᠠ ᠪᠠᠨ ᠪᠢᠴᠢᠵᠦ ᠣᠷᠣᠭᠤᠯᠤᠭᠠᠴᠢ', trigger: 'blur' }, // 请输入活动主题
            { max: 30, message: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠭᠣᠣᠯ ᠰᠡᠳᠦᠪ ᠨᠢ 30ᠦᠰᠦᠭ ᠦᠨ ᠬᠣᠭᠣᠷᠣᠨᠳᠣ ᠪᠠᠶᠢᠬᠤ ᠬᠡᠷᠡᠭᠲᠡᠢ' }, // 活动主题长度在30个字符之内
          ],
          needApply: [
            { required: true, message: 'ᠲᠥᠷᠥᠯ ᠵᠦᠢᠯ ᠢᠶᠡᠨ ᠰᠤᠩᠭᠤᠭᠠᠷᠠᠢ' }
          ],// 请选择类型
          place: [{ required: true, message: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠭᠠᠵᠠᠷ ᠢᠶᠠᠨ ᠰᠤᠩᠭᠤᠭᠠᠷᠠᠢ', trigger: 'change' }],
          beginTime: [{ required: true, message: 'ᠡᠬᠢᠯᠡᠬᠦ ᠴᠠᠭ ᠢ ᠰᠣᠩᠭᠤᠭᠠᠷᠠᠢ', trigger: 'change' }], // 请选择开始时间
          endTime: [{ required: true, message: 'ᠳᠠᠭᠤᠰᠬᠤ ᠴᠠᠭ ᠢ ᠰᠣᠩᠭᠤᠭᠠᠷᠠᠢ', trigger: 'change' }], // 请选择结束时间
//修改
          compere: [
            //{required:true,message:'请输入主持人',trigger:'blur'},
            {max: 20, message: '主持人姓名长度在20个字符之内'}
          ],
          comperePhone: [
            //{required:true,message:'请输入主持人联系方式'},
            {type: 'number', message: '联系方式必须为数字值'},
            {max: 10, message: '主持人联系方式长度在11个字符之内'}
          ],
          remarks: [
            //{required:true,message:'请输入备注',trigger:'blur'},
            {max: 120, message: '会议说明长度在120个字符之内'}
          ],
          attendance: [
            //{required:true,message:'请输入列席人员',trigger:'blur'},
            {max: 120, message: '列席人员姓名总长度在120个字符之内'}
          ]
        },
        meetResult: {
          content: [
            {max: 120, message: '评论长度在120个字符之内'}
          ]
        },
        extendRules: {
          extendValue: [
            {max: 10000, message: '活动及如果长度在1万个字符之内'}
          ]
        },
        flag: true,//判断哪个弹出
        omr: null,
        ommVo: null,
        omp: null,
        //活动评论
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
        MeetResultEntity: null,
        dialogFormVisible: false,
        dialogTemplate: false,//模板模态框
        dialogStatus: '',
        otlMeetingManager_btn_edit: true,
        otlMeetingManager_btn_del: false,
        otlMeetingManager_btn_add: true,
        extendInfoFalg: 1,
        extendDialogForm: false,
        extendValueMapper: undefined,
        textMap: {
          update: 'ᠨᠠᠶᠢᠷᠠᠭᠤᠯᠬᠤ', // 编辑
          create: 'ᠡᠭᠦᠰᠭᠡᠨ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ' // 创建
        },
        sumReadAndSisgnin: [],
        uuidInfo: '',
        addMeetVLoading: false,
        ifshow: false,
        tableKey: 0,
        tableKey1: 1,
        id: getZhiBId(), // 党员所在部门的id
        // 会议结果
        extendDisabled: false,
        extendInfoForm: {
          mId: undefined,
          extendValue: undefined,
          createdTime: undefined,
          createdUid: store.state.user.userId
        },
        // 上传下载
        meetingMessage: null,
        fileList3: [],
        upLoadData: {
          mId: undefined,
          createdUid: store.state.user.userId
        },
        Headers: {'Authorization': getToken()},
        // 折叠面板
        activeNames: [],
        activeNames2: [],
        activeNames3: [],
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
      };
    },
    created() {

    },
    methods: {
      OnError(response, file) {
        this.$message({
          type: 'error',
          message: file.name + 'ᠳᠤᠰᠢᠶᠠᠵᠦ ᠳᠡᠶᠢᠯᠦᠭᠰᠡᠨ ᠦᠭᠡᠢ', // 上传失败
        })
      },
      OnSuccess(response, file) {
        this.$message({
          type: 'success',
          message: file.name + 'ᠳᠤᠰᠢᠶᠠᠪᠠ', // 上传成功
        })
      },
      handleCreate() {
        this.dialogTemplate = true;
      },
      handleUpdate(mid) {
        this.dialogFormVisible = true;
      },
      // 此操作将取消该次活动, 确认么 提示
      updateMeetStateMethod(row) {
        this.$confirm('ᠲᠤᠰ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠡᠨᠡ ᠤᠳᠠᠭᠠᠨ ᠤ ᠬᠦᠳᠡᠯᠭᠡᠭᠡᠨ ᠢ ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠤᠯᠭᠠᠨ᠎ᠠ᠂ ᠲᠡᠢᠮᠦ  ᠤᠤ ?', 'ᠰᠠᠨᠠᠭᠤᠯᠭ᠎ᠠ', {
          confirmButtonText: 'ᠲᠣᠳᠣᠷᠬᠠᠢ', // 确定
          cancelButtonText: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ', // 取消
          // type: 'warning'
        }).then(() => {
          updateMeetState(row).then(response => {
            this.$message({
              type: 'success',
              message: 'ᠲᠤᠰ ᠤᠳᠠᠭᠠᠨ ᠤ ᠬᠦᠳᠡᠯᠭᠡᠭᠡᠨ ᠢ ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠪᠠ!'// 该次活动已取消
            });
            this.getList();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'ᠲᠤᠰ ᠤᠳᠠᠭᠠᠨ ᠤ ᠬᠦᠳᠡᠯᠭᠡᠭᠡᠨ ᠨᠢ ᠬᠠᠳᠠᠭᠠᠯᠠᠭᠳᠠᠪᠠ~'// 该次活动被保留了
          })
        })
      },
      cancelTable() {
        this.dialogFormVisible = false;
      },
      cancel(formName) {
        this.dialogTemplate = false;
        this.flag = true;
        const set = this.$refs;
        set[formName].resetFields();
      },
      //会议结果添加
      createExtendInfo(formName) {
        this.extendInfoFalg = 2;

      },
      cancelExtendInfo(formName) {
        this.dialogFormVisible = false;
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mongolians.scss";
</style>
