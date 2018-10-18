<template>
  <div>
    <div v-if="!isShow">
      <div class="app-table">
        <div class="filter-container">
          <div class="filter-input">
            <el-row :gutter="20">
              <el-col :span="8">
                <!--<el-input class="filter-item" placeholder="转接类型" v-model="listQuery.type" @change="handleStatusChange" style=" margin-top: 10px; margin-left: -10px;"> </el-input>-->
                <!--<div style="margin-top: 10px;margin-left: 15px; width: 160px; z-index: 10000; height: 200px;border: 1px solid #cccccc;box-shadow:0px 0px 5px 2px #dddddd;">-->
                  <!--<span v-for="item in typeOptions" :key="item.value" style="float: left;padding-top: 10px; height: 200px;display: block;cursor:pointer; width: 40px;-->
    <!--line-height: 40px;">{{item.label}}</span>-->
                  <!--<span style="clear: both;"></span>-->
                <!--</div>-->
                <el-select class="setselectss" v-model="listQuery.type" placeholder="ᠪᠦᠬᠦ ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠶᠢᠨ ᠲᠥᠷᠥᠯ ᠵᠦᠢᠯ " @change="handleTypeChange" style="margin-top: 10px;">
                  <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"> <!-- 转接类型 -->
                  </el-option>
                </el-select>
                <!--<select v-model="listQuery.type" name="category" id="category"@change="handleStatusChange" >-->
                  <!--<option v-for="item in typeOptions" :key="item.value" :value="item.value">{{ item.label }}</option>-->
                <!--</select>-->
              </el-col>
              <el-col :span="8">
                <el-select class="setselectss" v-model="listQuery.status" placeholder="ᠪᠦᠬᠦ ᠬᠢᠨᠠᠯᠲᠠ ᠶᠢᠨ ᠪᠠᠶᠢᠳᠠᠯ" @change="handleStatusChange" style="margin-top: 10px;"> <!-- 审核状态 -->
                  <el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value" >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-input @keyup.enter.native="handleFilter" class="filter-item" placeholder="ᠨᠡᠷ᠎ᠡ ᠪᠤᠶᠤ ᠪᠡᠶ᠎ᠡ ᠶᠢᠨ ᠦᠨᠡᠮᠯᠡᠯ ᠦᠨ ᠨᠣᠮᠧᠷ " v-model="listQuery.name" style=" margin-top: 10px; margin-left: -10px;"> </el-input>
              </el-col> <!-- 姓名或身份证号 -->
              <el-col :span="4">
                <el-button class="filter-item" type="primary" size="small" icon="search" @click="handleFilter" style="margin-top: 10px; margin-left: -10px;">{{$t('table.sousu')}}</el-button>
              </el-col>
            </el-row>
          </div>
      </div>
      <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row >

        <!--<el-table-column align="center" label="id" width="30">-->
          <!--<template slot-scope="scope">-->
            <!--<span>{{scope.row.id}}</span>-->
          <!--</template>-->
        <!--</el-table-column>-->
        <el-table-column width="30" align="center" label="ᠨᠡᠷ᠎ᠡ"> <!-- 党员姓名 -->
          <template slot-scope="scope">
            <span v-if="scope.row.UserName != null">{{scope.row.UserName}}</span>
            <span v-if="scope.row.TempUserName != null">{{scope.row.TempUserName}}</span>
          </template>
        </el-table-column>
        <el-table-column width="30" align="center" label="ᠪᠡᠶ᠎ᠡ ᠶᠢᠨ ᠦᠨᠡᠮᠯᠡᠯ ᠦᠨ ᠨᠣᠮᠧᠷ  "> <!-- 身份证号 -->
          <template slot-scope="scope">
            <span v-if="scope.row.IdCardNumber != null">{{scope.row.IdCardNumber}}</span>
            <span v-if="scope.row.IdNumber != null">{{scope.row.IdNumber}}</span>
          </template>
        </el-table-column>
        <el-table-column width="30" align="center" label="ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠶᠢᠨ ᠲᠥᠷᠥᠯ ᠵᠦᠢᠯ "> <!--转接类型 -->
          <template slot-scope="scope">
            <span>{{getType(scope.row.type)}}</span>
          </template>
        </el-table-column>
        <el-table-column width="30" align="center" label="ᠣᠭ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ"> <!-- 原组织名称 -->
          <template slot-scope="scope">
            <span>{{scope.row.OriginalDeptName}}</span>
          </template>
        </el-table-column>
        <el-table-column width="30" align="center" label="ᠣᠷᠢᠯᠲᠠ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ "> <!--目标组织名称 -->
          <template slot-scope="scope">
            <span>{{scope.row.TargetDeptName}}</span>
          </template>
        </el-table-column>
        <el-table-column width="30" align="center" label="ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠤᠨ ᠪᠠᠶᠢᠳᠠᠯ"> <!--转接状态 -->
          <template slot-scope="scope">
            <span>{{getStatus(scope.row.status)}}</span>
          </template>
        </el-table-column>
        <el-table-column width="30" align="center" label="ᠬᠢᠨᠠᠵᠤ ᠪᠠᠶᠢᠭ᠎ᠠ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ "> <!-- 当前审核组织 -->
          <template slot-scope="scope">
            <span>{{scope.row.CurrentDeptName}}</span>
          </template>
        </el-table-column>
        <!--<el-table-column width="30" align="center" label="创建时间">-->
          <!--<template slot-scope="scope">-->
            <!--<span>{{scope.row.CreatedTime}}</span>-->
          <!--</template>-->
        <!--</el-table-column>-->
        <!--<el-table-column width="30" align="center" label="更新时间">-->
          <!--<template slot-scope="scope">-->
            <!--<span>{{scope.row.UpdatedTime}}</span>-->
          <!--</template>-->
        <!--</el-table-column>-->
        <el-table-column align="center" label="ᠠᠵᠢᠯᠯᠠᠬᠤ" width="30"> <!-- 操作 -->
          <template slot-scope="scope">
            <el-button size="small" type="primary" @click="showObj(scope.row.id)">{{$t('table.seeing')}}</el-button><!-- -->
            <el-button size="small" type="success" @click="handlePass(scope.row)" v-if="passAllowed(scope.row.CurrentId)">{{$t('table.seeing')}}<!--通过 -->
            </el-button>
            <el-button size="small" type="danger" @click="handleReject(scope.row)" v-if="passAllowed(scope.row.CurrentId)">{{$t('table.seeing')}}<!--驳回 -->
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div v-show="!listLoading" class="pagination-container">
        <!--<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>-->
        <el-pagination
          :page-size="listQuery.limit"
          :pager-count="11"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
      </div>
      <el-dialog title="组织关系转接介绍信" :visible.sync="introduceVisible" width="50%" top="0"> <!-- -->
        <div class="example-outer">
          <h3>党组织关系转移介绍信（样本）</h3>
          <div class="example-box">
            <div class="example-title">党<br>员<br>介<br>绍<br>信<br>存<br>根</div>
            <div class="example-body">
              <p class="example-number">编号：
                <el-input v-model="introduceForm.counterfoilNum" style="width: 100px"></el-input>
              </p>
              <br>
              <p class="example-detail">{{ introduceForm.counterfoilContent }}</p>
              <p class="example-date">
                <el-date-picker v-model="introduceForm.counterfoilTime" type="date" @change="counterfoilTimeChange" value-format="yyyy年MM月dd日" style="width: 150px">
                </el-date-picker>
              </p>
            </div>
            <div class="example-right">第<br>一<br>联</div>
          </div>
          <div class="example-footer">贴回执联处</div>
          <div class="example-stamp">（加盖骑缝章）</div>
        </div>
        <div class="introduce-outer">
          <h3>中国共产党员组织关系介绍信</h3>
          <div class="introduce-box">
            <div class="introduce-body">
              <p class="introduce-number">编号：
                <el-input v-model="introduceForm.number" style="width: 100px"></el-input>
              </p>
              <br>
              <p class="introduce-target">{{ introduceForm.recipients }}：</p>
              <p class="introduce-content">{{ introduceForm.content }}</p>
              <p class="introduce-stamp">（盖章）</p>
              <div style="clear:both"></div>
              <p class="introduce-date">
                <el-date-picker v-model="introduceForm.date" type="date" @change="introduceDateTimeChange" value-format="yyyy年MM月dd日" style="width: 150px">
                </el-date-picker>
              </p>
              <div style="clear:both"></div>
              <p>党员联系电话或其他联系方式：
                <el-input v-model="introduceForm.userContactPhone" style="width:200px"></el-input>
              </p>
              <p>党员原所在基层党委通讯地址：
                <el-input v-model="introduceForm.deptContactAddress" style="width:200px"></el-input>
              </p>
              <p>联系电话：
                <el-input v-model="introduceForm.contactPhone" style="width:100px"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;传真：
                <el-input v-model="introduceForm.contactFax" style="width:100px"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;邮编：
                <el-input v-model="introduceForm.contactPostcode" style="width:100px"></el-input>
              </p>
            </div>
            <div class="introduce-right">第<br>二<br>联</div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="introduceVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitIntroduce()" :loading="introduceLoading">提交审核</el-button>
        </span>
      </el-dialog>
      <el-dialog title="组织关系转接回执联" :visible.sync="returnVisible" width="50%" top="100px">
        <div class="return-outer">
          <h3>中国共产党员组织关系介绍信回执联</h3>
          <div class="return-box">
            <div class="return-body">
              <p class="return-number">编号：
                <el-input v-model="returnForm.number" style="width: 100px"></el-input>
              </p>
              <br><br>
              <p class="return-target">{{ returnForm.recipients }}：</p>
              <p class="return-content">{{ returnForm.content }}</p>
              <p class="return-stamp">（盖章）</p>
              <div style="clear:both"></div>
              <p class="return-date">
                <el-date-picker v-model="returnForm.date" type="date" @change="returnDateTimeChange" value-format="yyyy年MM月dd日" style="width: 150px">
                </el-date-picker>
              </p>
              <div style="clear:both"></div>
              <p>经办人：
                <el-input v-model="returnForm.responsiblePerson" style="width: 100px"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;联系电话：
                <el-input v-model="returnForm.phone" style="width: 100px"></el-input>
              </p>
            </div>
            <div class="return-right">第<br>三<br>联</div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="returnVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitReturn()" :loading="returnLoading">提交审核</el-button>
        </span>
      </el-dialog>
      <el-dialog title="组织关系转接驳回理由" :visible.sync="rejectVisible" width="50%" top="100px">
        <div class="reject-box">
          <el-form label-position="top" ref="rejectForm" :model="rejectForm" label-width="80px" :rules="rejectRules">
            <el-input type="textarea" :rows="10" v-model="rejectForm.content"></el-input>
            <el-date-picker type="date" v-model="rejectForm.date" style="margin-top:10px;float:right;margin-right:10px;">
            </el-date-picker>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="rejectVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitReject()" :loading="opinionLoading">提交审核</el-button>
        </span>
      </el-dialog>
    </div>
    <showPage :id="id" v-if="isShow"></showPage>
  </div>
</template>

<script>
import {
  page,
  check,
  getObj,
  getRole
} from '@/api/transfer-manage/pwTfApply/index'
import { addObj } from '@/api/transfer-manage/pwTfIntroduction/index'
import { addReturnObj } from '@/api/transfer-manage/pwTfReturn/index'
import { addOpinionObj } from '@/api/transfer-manage/pwTfOpinion/index'
import { mapGetters } from 'vuex'
import showPage from './show.vue'
export default {
  name: 'pwTfApply',
  components: {
    showPage
  },
  data() {
    return {
      isShow: false,
      id: null,
      list: null,
      total: null,
      listLoading: true,
      introduceVisible: false,
      returnVisible: false,
      rejectVisible: false,
      handleID: null,
      listQuery: {
        page: 1,
        limit: 20,
        name: '',
        type: 3,
        status: 2
      },
      tableKey: 0,
      typeOptions: [
        {
          value: 0,
          label: 'ᠬᠤᠲᠠ ᠶᠢᠨ ᠲᠤᠲᠤᠷᠠᠬᠢ ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ' // 市内转接
        },
        {
          value: 1,
          label: 'ᠬᠤᠳᠠ ᠲᠣᠳᠣᠷ᠎ᠠ ᠡᠴᠡ ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠨ ᠭᠠᠷᠭᠠᠬᠤ ' // 市内转出
        },
        {
          value: 2,
          label: 'ᠬᠤᠲᠠ ᠶᠢᠨ ᠭᠠᠳᠠᠨ᠎ᠠ ᠠᠴᠠ ᠰᠢᠯᠵᠢᠨ ᠢᠷᠡᠬᠦ  ' // 市外转入
        },
        {
          value: 3,
          label: 'ᠪᠦᠬᠦ ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠶᠢᠨ ᠲᠥᠷᠥᠯ ᠵᠦᠢᠯ ' // 所有转接类型
        }
      ],
      statusOptions: [
        {
          value: 2,
          label: 'ᠪᠦᠬᠦ ᠬᠢᠨᠠᠯᠲᠠ ᠶᠢᠨ ᠪᠠᠶᠢᠳᠠᠯ' // 所有审核状态
        },
        {
          value: 0,
          label: 'ᠬᠢᠨᠠᠯᠲᠠ ᠬᠦᠯᠢᠶᠡᠵᠦ ᠪᠠᠶᠢᠭ᠎ᠠ ' // 待审核的
        },
        {
          value: 1,
          label: 'ᠬᠢᠨᠠᠯᠲᠠ ᠪᠡᠷ ᠪᠠᠲᠤᠯᠠᠭᠰᠠᠨ ' // 审核通过的
        },
        {
          value: -1,
          label: 'ᠬᠢᠨᠠᠯᠲᠠ ᠪᠡᠷ ᠨᠢᠴᠤᠭᠠᠭᠰᠠᠨ ' // 审核驳回的
        },
        {
          value: -2,
          label: 'ᠭᠤᠶᠤᠴᠢᠯᠠᠯ ᠪᠤᠴᠠᠭᠠᠭᠳᠠᠭᠰᠠᠨ ' // 退回申请的
        },
        {
          value: 3,
          label: 'ᠳᠤᠰ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠢᠨᠠᠯᠲᠠ ᠪᠡᠨ ᠬᠦᠯᠢᠶᠡᠵᠦ ᠪᠠᠶᠢᠬᠤ  ' // 待当前组织审核的
        }
      ],
      rejectForm: {
        transId: undefined,
        content: undefined,
        date: undefined
      },
      rejectRules: {},
      introduceForm: {
        transId: undefined,
        counterfoilNum: undefined,
        counterfoilContent: undefined,
        counterfoilTime: undefined,
        number: undefined,
        recipients: undefined,
        content: undefined,
        date: undefined,
        userContactPhone: undefined,
        deptContactAddress: undefined,
        contactPhone: undefined,
        contactFax: undefined,
        contactPostcode: undefined,
        stampPath: ''
      },
      introduceRules: {},
      returnForm: {
        transId: undefined,
        number: undefined,
        recipients: undefined,
        content: undefined,
        date: undefined,
        responsiblePerson: undefined,
        phone: undefined,
        stampPath: undefined
      },
      returnRules: {},
      passObj: {
        id: undefined,
        UserName: undefined,
        OriginalDeptName: undefined,
        TargetDeptName: undefined,
        IdCardNumber: undefined
      },
      passObjPayTo: undefined,
      introduceLoading: false,
      returnLoading: false,
      opinionLoading: false,
      passObjExtend: {
        payTo: null,
        sex: null,
        nation: null
      },
      deptID: undefined
    }
  },
  created() {
    getRole().then(response => {
      this.deptID = response
      this.getList()
      const date = this.getCurrentDateString()
      this.rejectForm.date = date
      this.introduceForm.counterfoilTime = date
      this.introduceForm.date = date
      this.returnForm.date = date
    })
  },
  computed: {
    ...mapGetters(['elements'])
  },
  watch: {
    passObj: function(val) {
      if (val.CurrentId === val.TargetDeptId) {
        this.returnForm.transId = val.id
        this.returnForm.recipients = val.OriginalDeptName
        this.returnForm.content =
          val.UserName + '同志的党员组织关系已转达我处，特此回复。'
      } else {
        this.introduceForm.transId = val.id
        this.introduceForm.counterfoilContent =
          val.UserName +
          '同志系中共正式党员，组织关系由' +
          val.OriginalDeptName +
          '转到。'
        this.introduceForm.recipients = val.TargetDeptName
        // 介绍信内容
        this.introduceForm.content = val.UserName + '同志，'
        if (this.passObjExtend.sex != null) {
          this.introduceForm.content += this.passObjExtend.sex + '，'
        }
        this.introduceForm.content += this.getAge(val) + '岁，'
        if (this.passObjExtend.nation != null) {
          this.introduceForm.content += this.passObjExtend.nation + '，'
        }
        this.introduceForm.content +=
          '系中共正式党员，身份证号码' +
          val.IdCardNumber +
          '，由' +
          val.OriginalDeptName +
          '去' +
          val.TargetDeptName +
          '。请转接组织关系。该同志党费已交到' +
          this.passObjExtend.payTo +
          '。（有效期10天）'
      }
    },
    passObjExtend: function(val) {
      // 介绍信内容
      this.introduceForm.content = this.passObj.UserName + '同志，'
      if (val.sex != null) {
        this.introduceForm.content += val.sex + '，'
      }
      this.introduceForm.content += this.getAge(this.passObj) + '岁，'
      if (val.nation != null) {
        this.introduceForm.content += val.nation + '，'
      }
      this.introduceForm.content +=
        '系中共正式党员，身份证号码' +
        this.passObj.IdCardNumber +
        '，由' +
        this.passObj.OriginalDeptName +
        '去' +
        this.passObj.TargetDeptName +
        '。请转接组织关系。该同志党费已交到' +
        val.payTo +
        '。（有效期10天）'
    },
    handleID: function(val) {
      this.rejectForm.transId = val
    }
  },
  methods: {
    getList() {
      this.listLoading = true
      page(this.listQuery).then(response => {
        console.log(response)
        this.list = response
        this.total = response.length
        this.listLoading = false
      })
    },
    handleFilter() {
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    getType(type) {
      switch (type) {
        case 0:
          return 'ᠬᠤᠲᠠ  ᠶᠢᠨ ᠲᠤᠲᠤᠷᠠᠬᠢ ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ'
        case 1:
          return '市内转出'
        case 2:
          return '市外转入'
        default:
          return '未知'
      }
    },
    getStatus(status) {
      switch (status) {
        case 0:
          return 'ᠬᠢᠨᠠᠵᠤ ᠪᠤᠢ'
        case 1:
          return '审核通过'
        case -1:
          return '审核驳回'
        default:
          return 'ᠦᠯᠦ ᠮᠡᠳᠡᠭᠳᠡᠬᠦ'
      }
    },
    getCurrentDateString() {
      const date = new Date()
      let dateString = ''
      dateString += date.getFullYear()
      dateString += '-' + (date.getMonth() + 1)
      dateString += '-' + date.getDate()
      return dateString
    },
    handleCheck(id, handle) {
      this.listLoading = true
      check(id, handle).then(response => {
        this.$notify({
          title: '成功',
          message: '审核成功',
          type: 'success',
          duration: 2000
        })
        this.getList()
      })
      this.listLoading = false
    },
    showObj(id) {
      this.id = id
      this.isShow = true
    },
    handleTypeChange() {
      this.getList()
    },
    handleStatusChange() {
      this.getList()
    },
    getGender(code) {
      if (code === 1) {
        return '男'
      } else {
        return '女'
      }
    },
    handlePass(data) {
      getObj(data.id).then(response => {
        const extend = {}
        extend['payTo'] = response.payTo
        if (typeof response.peoplesCode !== 'undefined') {
          extend['nation'] = response.peoplesCode
        }
        if (typeof response.genderCode !== 'undefined') {
          extend['sex'] = this.getGender(response.genderCode)
        } else {
          extend['sex'] = this.getGender(response.sex)
        }
        this.passObjExtend = extend
        this.introduceForm.userContactPhone = response.phone
      })
      // 当前操作的ID
      this.handleID = data.id
      this.passObj = data
      // 判断是否是最后一个审核的组织
      if (data.CurrentId === data.TargetDeptId) {
        this.returnVisible = true
      } else {
        this.introduceVisible = true
      }
    },
    handleReject(data) {
      this.handleID = data.id
      this.rejectVisible = true
    },
    passAllowed(passID) {
      return parseInt(this.deptID) === parseInt(passID)
    },
    counterfoilTimeChange(val) {
      this.introduceForm.counterfoilTime = val
    },
    introduceDateTimeChange(val) {
      this.introduceForm.date = val
    },
    returnDateTimeChange(val) {
      this.returnForm.date = val
    },
    submitIntroduce() {
      this.introduceLoading = true
      addObj(this.introduceForm)
        .then(response => {
          this.introduceLoading = false
          this.$router.go(0)
        })
        .catch(() => {
          this.introduceLoading = false
        })
    },
    submitReturn() {
      this.returnLoading = true
      addReturnObj(this.returnForm)
        .then(response => {
          this.returnLoading = false
          this.$router.go(0)
        })
        .catch(() => {
          this.returnLoading = false
        })
    },
    submitReject() {
      this.opinionLoading = true
      addOpinionObj(this.rejectForm)
        .then(response => {
          this.opinionLoading = false
          this.$router.go(0)
        })
        .catch(() => {
          this.opinionLoading = false
        })
    },
    getAge(obj) {
      if (typeof obj.IdCardNumber !== 'undefined' && obj.IdCardNumber != null) {
        return this.cutIdCard(obj.IdCardNumber)
      } else if (typeof obj.IdNumber !== 'undefined' && obj.IdNumber != null) {
        return this.cutIdCard(obj.IdNumber)
      } else {
        return null
      }
    },
    cutIdCard(idCard) {
      const now = new Date()
      const currentYear = now.getFullYear()
      const birthYear = idCard.substr(6, 4)
      return currentYear - birthYear
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mongolians.scss";


.example-outer h3 {
  text-align: center;
  position: relative;
}
.example-box {
  width: 90%;
  height: 175px;
  border: 1px solid #333;
  margin-left: 5%;
}
.example-title {
  width: 10%;
  height: 100%;
  float: left;
  border-right: 1px solid #333;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  padding-top: 5px;
}
.example-body {
  width: 80%;
  height: 100%;
  float: left;
  position: relative;
}
.example-right {
  width: 10%;
  height: 100%;
  float: left;
  border-left: 1px solid #333;
  text-align: center;
  padding-top: 50px;
}
.example-number {
  float: right;
  margin-right: 20px;
}
.example-detail {
  margin: 40px 10px;
  text-indent: 50px;
}
.example-date {
  position: absolute;
  right: 20px;
  bottom: 10px;
}
.example-footer {
  width: 90%;
  height: 30px;
  border-bottom: 1px solid #333;
  margin-left: 5%;
  text-align: center;
  line-height: 30px;
}
.example-stamp {
  position: absolute;
  margin-top: 5px;
  right: 50px;
}
.introduce-outer {
  width: 90%;
  margin: 40px auto;
}
.introduce-outer h3 {
  text-align: center;
}
.introduce-box {
  border: 1px solid #333;
  width: 100%;
  height: 500px;
}
.introduce-body {
  width: 90%;
  height: 100%;
  float: left;
  padding: 5px;
}
.introduce-right {
  border-left: 1px solid #333;
  width: 10%;
  float: left;
  height: 100%;
  text-align: center;
  padding-top: 150px;
}
.introduce-number {
  float: right;
  font-size: 14px;
  margin-right: 10px;
}
.introduce-target {
  font-weight: bold;
  margin-top: 30px;
}
.introduce-content {
  text-indent: 50px;
}
.introduce-stamp {
  float: right;
  margin-top: 20px;
  margin-right: 150px;
}
.introduce-date {
  float: right;
  margin-right: 100px;
}
.return-outer {
  width: 90%;
  margin: 40px auto;
}
.return-outer h3 {
  text-align: center;
}
.return-box {
  border: 1px solid #333;
  width: 100%;
  height: 330px;
}
.return-body {
  width: 90%;
  height: 100%;
  float: left;
  padding: 5px;
}
.return-right {
  border-left: 1px solid #333;
  width: 10%;
  float: left;
  height: 100%;
  text-align: center;
  padding-top: 100px;
}
.return-number {
  float: right;
  font-size: 14px;
  margin-right: 10px;
}
.return-target {
  font-weight: bold;
  margin-top: 30px;
}
.return-content {
  text-indent: 50px;
}
.return-stamp {
  float: right;
  margin-top: 5px;
  margin-right: 150px;
}
.return-date {
  float: right;
  margin-right: 100px;
}
.reject-box {
  border: 1px solid #333;
  width: 90%;
  height: 280px;
  margin: 0 auto;
}
</style>
