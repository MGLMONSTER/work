<template>
  <div class="appmain-right">
    <div class="leftfa-bar">
      <div class="left-bar">
        <firstbar :routes="permission_routers" aboutfa="/Admini"></firstbar>
      </div>
    </div>
    <div class='tab-div'>
      <div class='app-table' style="height:90%; width:auto; padding:20px;border:1px solid #f5f7fa;  ">
        <div class="filter-input">
          <span class="input-span">    </span><br/>
          <el-input @keyup.enter.native="handleFilter" class="filter-search" placeholder="ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠎ᠨᠡᠷᠡᠶᠢᠳᠦᠯ "
                    v-model="listQuery.title"></el-input>
          <el-button class="filter-item" type="primary" size="small" icon="search" @click="handleFilter"><span
            style="font-size:14px;"></span></el-button>
          <el-button class="filter-item" v-if="otlMeetTypeManager_btn_add" style="margin-left: 10px;"
                     @click="handleCreate('meet')" type="primary" size="small" icon="edit"><span
            style="font-size:14px;">ᠵᠠᠭᠪᠤᠷ ᠨᠡᠮᠡᠬᠦ </span></el-button>
        </div>
        <el-table :key='tableKey' :data="list" border fit highlight-current-row style="margin-left:10px;">
          <el-table-column align="center" label=" ᠬᠦᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠲᠦᠷᠦᠯ ᠵᠦᠢᠯ" width='40'>
            <template slot-scope="scope">
              <span>{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="ᠬᠡᠷᠡᠭᠯᠡᠭᠴᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ " width='40'>
            <template slot-scope="scope">
              <span v-if="scope.row.createdUid === 5">李兆基</span>
            </template>
          </el-table-column>
          <!-- <el-table-column  align="center" label="状态">
                <template slot-scope="scope">
                  <span>{{scope.row.status}}</span>
                </template>
                </el-table-column> -->
          <el-table-column align="center" label=" ᠪᠠᠶᠢᠭᠤᠯᠠᠭᠰᠠᠨ ᠴᠠᠭ " width='40'>
            <template slot-scope="scope">
              <span>{{scope.row.createdTime}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="" width='40'>
            <template slot-scope="scope">
              <el-button v-if="otlMeetTypeManager_btn_edit" size="small" type="success"
                         @click="handleUpdate(scope.row)">ᠵᠠᠭᠪᠤᠷ ᠢ ᠨᠠᠶᠢᠷᠠᠭᠤᠯᠬᠤ
              </el-button>
              <el-button v-if="otlMeetTypeManager_btn_del" size="small" type="danger" @click="handleDelete(scope.row)">
                ᠵᠠᠭᠪᠤᠷ ᠢ ᠬᠠᠰᠤᠬᠤ
              </el-button>
            </template>
          </el-table-column>
        </el-table><!-- v-show="!listLoading" -->
        <div class="pagination-container">
          <el-pagination :page-size="listQuery.limit" :pager-count="10" layout="prev, pager, next" :total="total">
          </el-pagination>
          <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination> -->
        </div>
      </div>
    </div>
    <!-- <el-dialog :visible.sync="dialogPlaceVisible" width="35%" :close-on-click-modal="modalClose" >
          <el-form ref="formPlace" label-width="80px" id="dynamic_form" >
              <el-form-item label="地点名">
                  <el-input v-model="formPlace.place" style="width:50%;"></el-input>
              </el-form-item>
          </el-form>
          <div class="dialog-footer" style="text-align: right;">
              <el-button  type="primary" @click="placeCreate()">保存地点</el-button>
            </div>
        </el-dialog> -->
    <el-dialog :visible.sync="dialogTableVisible" width="auto" :close-on-click-modal="modalClose">
      <el-form ref="formMeet" id="dynamic_form" :rules="meet" :model="formMeet">
        <div class="filter-input">
          <el-form-item label=" " prop="title">  <!-- 会议名字 -->
            <el-input v-model="formMeet.title" style="width: 60%;"></el-input>
          </el-form-item>
          <el-form-item label="ᠲᠥᠷᠥᠯ ᠵᠦᠢᠯ " prop="needApply"><!-- 是否需要申请 -->
            <el-select class="setselect" v-model="formMeet.needApply" style="width:60%;"
                       @change="needType(formMeet.needApply)">
              <el-option v-for="item in meetTypes" :key="item.meetTypeId" :label="item.meetTypeName"
                         :value="item.meetTypeId"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="    "> <!-- 接受方 -->
            <el-input v-model="formMeet.accepts" style="width: 60%;" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="ᠣᠷᠣᠯᠴᠠᠭᠴᠢ ">
            <el-tree
              ref="tree"
              :data="data" :props="defaultProps" show-checkbox
              node-key="id"
              @check-change="checkChange"
            >
            </el-tree>
          </el-form-item>
          <el-form-item label="ᠬᠤᠷᠠᠯ  ᠳᠤ ᠣᠷᠣᠯᠴᠠᠭᠰᠠᠳ " prop="attendance">
            <el-input v-model="formMeet.attendance" style="width: 60%;"></el-input>
          </el-form-item>
          <el-form-item label="ᠲᠣᠭᠳᠠᠭᠰᠠᠨ ᠭᠠᠵᠠᠷ" prop="place">  <!-- 拟定地点 -->
            <el-select class="setselect" v-model="formMeet.place" style="width: 60%;">
              <el-option v-for="item in places" :key="item.id" :label="item.place" :value="item.place"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="  " prop="beginTime">  <!-- 开始时间 -->
            <!-- <input v-model="formMeet.beginTime"  type="text" class="el-input__inner" style="width: 60%;"></input> -->
            <el-date-picker v-model="formMeet.beginTime" class="settime" style="width: 60%;" type="datetime"
                            placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm">

            </el-date-picker>
          </el-form-item>
          <el-form-item label=" " prop="compere">
            <el-input v-model="formMeet.compere" style="width: 60%;"></el-input>
          </el-form-item>
          <el-form-item label="   " prop="comperePhone">
            <el-input v-model.number="formMeet.comperePhone" style="width: 60%;" auto-complete="off"></el-input>
          </el-form-item>
          <i v-html="form.content"></i>  <!-- 动态字段开始 -->
          <el-form-item label=" " prop="remarks">
            <el-input v-model="formMeet.remarks" type="textarea" :rows="5"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div class="dialog-footer" style="text-align: right;">
        <el-button type="primary" size="small" @click="state()">ᠵᠠᠭᠪᠤᠷ ᠨᠡᠮᠡᠬᠦ ᠨᠡᠷᠡᠶᠢᠳᠦᠯ</el-button>
        <!-- <el-button  type="primary" @click="Release('formMeet')">发布会议</el-button> -->
      </div>
    </el-dialog>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="auto"
               :close-on-click-modal="modalClose">
      <el-form v-if="flag" :rules="formField" :model="formData" ref="formData">
        <div class="filter-input">
          <el-form-item label="ᠪᠠᠳᠠᠭ ᠤᠨ ᠨᠡᠷᠡᠶᠢᠳᠦᠯ " prop="meetName">
            <el-input v-model="formData.meetName" style="width:60%;"></el-input>
          </el-form-item>
          <el-form-item label="ᠲᠥᠷᠥᠯ ᠵᠦᠢᠯ  ᠢᠶᠡᠨ ᠰᠤᠩᠭᠤᠭᠠᠷᠠᠢ " prop="type">
            <el-select class="setselect" v-model="formData.type" placeholder="ᠲᠥᠷᠥᠯ ᠵᠦᠢᠯ  ᠢᠶᠡᠨ ᠰᠤᠩᠭᠤᠭᠠᠷᠠᠢ "
                       style="width:60%;">
              <el-option v-for="item in fieldOptions" :key="item.fieldId" :label="item.fieldName"
                         :value="item.fieldId"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
      <el-form v-else="flag" id="fixedForm">
        <div class="filter-input">
          <el-form-item label="ᠬᠦᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠲᠦᠷᠦᠯ ᠵᠦᠢᠯ ">
            <el-input v-model="editableTabs.title" style="width:60%;"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" @click="createTab()">保 存</el-button> -->
        <el-button @click="cancel('formData')" size="small">ᠦᠭᠡᠶᠢᠰᠭᠡᠬᠦ</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" size="small" @click="createTab()">ᠲᠣᠳᠣᠷᠬᠠᠢ</el-button>
        <el-button v-else type="primary" size="small" @click="createField('formData')">ᠲᠣᠳᠣᠷᠬᠠᠢ</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import firstbar from '../../components/firstbar';
  import {mapGetters} from 'vuex';

  export default {
    ßname: 'otlMeetType',
    components: {firstbar},
    data() {
      return {
        // labelName:{accept:"接收方",place:"拟定地点",initiatingType:"发起类型",meetType:"会议类型",meetName:"会议名称",beginTime:"拟定时间"},
        places: [],//存储地点
        modalClose: false,//点击遮罩层是否可以关闭
        flag: false,//判断出现哪个模态框
        editableTabs: {needApply: undefined, title: undefined, content: "", total: undefined},
        dialogFormVisible: false,
        dialogTableVisible: false,//弹出框的状态
        dialogPlaceVisible: false,
        meetTypes: [
          {meetTypeName: '通知', meetTypeId: 0},
          {meetTypeName: '申请', meetTypeId: 1}
        ],
        listData: [],
        fieldOptions: [//添加表单字段时的分类数组
          {fieldName: '文本框', fieldId: 0},
          {fieldName: '文本域', fieldId: 1},
          // {fieldName:'下拉框',fieldId:2 },
          // {fieldName:'单选框',fieldId:3},
          {fieldName: '日期选择框', fieldId: 4}
        ],
        label: 1, //默认选择哪个单选框 暂时没用到
        formMeet: {
          mtid: undefined,
          title: undefined,
          beginTime: undefined,
          place: undefined,
          needApply: undefined,
          accepts: "",
          applyStatus: undefined,
          applyUid: undefined,
          meetingStatus: undefined,
          createdUid: undefined,
          readTotal: undefined,
          createdTime: undefined,
          updatedTime: undefined,
          meetingDeptid: undefined,
          compere: "",
          comperePhone: "",
          remarks: "",
          attendance: ""
        },
        formPlace: {id: undefined, place: undefined, total: undefined, status: undefined},
        MeetField: [],
        form: {
          needApply: undefined,
          title: undefined,
          content: "",
          createdUid: undefined,
          status: undefined,
          createdTime: undefined
        },
        newTabName: null,//新的标签页（选中这个页）
        formData: {//formData对象
          type: undefined,
          meetName: '',
        },
        meet: {
          title: [{required: true, message: '请输入活动名称', trigger: 'blur'}],
          needApply: [{required: true, message: '请选择类型'}],
          place: [{required: true, message: '请选择活动地点', trigger: 'change'}],
          beginTime: [{required: true, message: '请选择开始时间', trigger: 'change'}],
          compere: [{required: true, message: '请输入主持人', trigger: 'blur'}],
          comperePhone: [{required: true, message: '请输入主持人联系方式'}, {type: 'number', message: '联系方式必须为数字值'}],
          remarks: [{required: true, message: '请输入备注', trigger: 'blur'}],
          attendance: [{required: true, message: '请输入列席人员', trigger: 'blur'}]
        },
        formField: {//对添加字段进行表单验证
          meetName: [{required: true, message: '请输入字段名', trigger: 'blur'}, {
            min: 1,
            message: '名字不能为空',
            trigger: 'blur'
          }],
          type: [{required: true, message: '请选择类型'}]
        },
        listQuery: {page: 1, limit: 10, title: undefined,},
        listQueryt: {page: null, limit: null, mTId: undefined},
        dialogStatus: '',
        otlMeetTypeManager_btn_edit: true,
        otlMeetTypeManager_btn_del: true,
        otlMeetTypeManager_btn_add: true,
        textMap: {update: '编辑', create: '创建'},
        // list: null,
        list: [{
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 5,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 5,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 5,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 5,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        }, {
          createdTime: '2018-5-30',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          createdUid: 1,
        },],
        tlist: null,
        total: null,
        listLoading: true,
        tableKey: 0,
        fieldCount: null,//元素id值统计
        data: [],
        defaultProps: {
          children: 'childList',
          label: 'name'
        },
        tree: [],
      }
    },

    created() {
    },
    computed: {
      ...mapGetters([
        'permission_routers',
      ])
    },
    methods: {
      checkChange(data) {
      },
      handleFilter() {
      },
      handleSizeChange(val) {
        this.listQuery.limit = val;
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
      },
      handleCreate(name) {
        this.dialogFormVisible = true;
      },
      handleUpdate(row) {//编辑模板的时候根据id查询
        this.dialogTableVisible = true;
        this.dialogStatus = 'update';
      },
      handleDelete(row) {
      },
      state() {//判断弹出框是否弹出函数
        this.dialogFormVisible = true;
        this.flag = true;
      },
      cancel(formName) {
        this.dialogFormVisible = false;
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mongolians.scss";

</style>
<style scope>

  .app {
    width: 100%;
    height: 500px;

  }

  .app_top {
    width: 500px;
    margin: 0 auto;
    border: 1px solid #000000;
  }

  .clearfix::after {     
      display: block;
      visibility: hidden;
      clear: both;
      height: 0;
      content: " ";
    
  }

  .clearfix {
    zoom: 1;
  }
</style>
