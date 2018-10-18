<template>
  <div >
    <!--class="app-container"-->
    <el-tabs type="border-card" class="tab-user" tab-position="left" style="min-height: 200px; width: 100%;height: 90%; overflow-x:auto; " @tab-click="changeTab">
      <el-tab-pane label="ᠬᠡᠷᠡᠭᠯᠡᠭᠴᠢ ᠶᠢᠨ ᠵᠠᠩᠭᠢ "> <!--用户信息 -->
      <p>ᠨᠡᠷ᠎ᠡ:  <!--姓名 -->
        <span>{{obj.name}}</span>
      </p>
      <p>ᠪᠡᠶ᠎ᠡ ᠶᠢᠨ ᠦᠨᠡᠮᠯᠡᠯ ᠦᠨ ᠨᠣᠮᠧᠷ：<!--身份证号码 -->
        <span>{{obj.idNumber}}</span>
      </p>
      <p>ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠶᠢᠨ ᠲᠥᠷᠥᠯ ᠵᠦᠢᠯ ：<!--转接类型 -->
        <span>{{getType(obj.type)}}</span>
      </p>
      <p>ᠤᠭ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ：<!--原组织 -->
        <span>{{obj.originalDeptName}}</span>
      </p>
      <p>ᠰᠢᠯᠵᠢᠨ ᠣᠷᠣᠬᠤ ᠵᠣᠷᠢᠯᠲᠠ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ：<!--目标组织 -->
        <span>{{obj.targetDeptName}}</span>
      </p>
      <p>ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠤᠨ ᠪᠠᠶᠢᠳᠠᠯ"：<!--姓名转接状态 -->
        <span>{{getStatus(obj.status)}}</span>
      </p>
      <p>ᠠᠮ ᠤᠨ ᠰᠦᠢᠳᠬᠡᠯ ᠳᠤᠰᠢᠶᠠᠬᠤ ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ：<!--党费缴纳至时间 -->
        <span>{{obj.payTo}}</span>
      </p>
      <p>ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠤᠲᠠᠰᠦ：<!--联系电话 -->
        <span>{{obj.phone}}</span>
      </p>
      <p>ᠬᠠᠶᠠᠭ：<!--住址 -->
        <span>{{obj.residence}}</span>
      </p>
      <p>ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠭᠤᠭᠤᠴᠠᠭ᠎ᠠ ：<!--创建时间 -->
        <span>{{obj.createdTime}}</span>
      </p>
      <p>ᠰᠢᠨᠡᠳᠬᠡᠭᠰᠡᠨ ᠭᠤᠭᠤᠴᠠᠭ᠎ᠠ ：<!--更新时间 -->
        <span>{{obj.updatedTime}}</span>
      </p>
      </el-tab-pane>
      <el-tab-pane label="ᠬᠢᠨᠠᠨ ᠪᠠᠶᠢᠴᠠᠭᠠᠬᠤ ᠠᠷᠭ᠎ᠠ ᠵᠠᠮ"> <!-- 审核路径 -->
        <div class="app-table"
             style="margin-left:5px;margin-top:5px;width:auto; padding:20px;border:1px solid #f5f7fa; height:100%;">
        <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
          <el-table-column align="center" label="id" width="10">
            <template slot-scope="scope">
              <span>{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="ᠪᠠᠶᠢᠭ᠎ᠠ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲ" width="10"> <!--审核组织 -->
            <template slot-scope="scope">
              <span>{{scope.row.pOrganizationName}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="ᠪᠠᠶᠢᠳᠠᠯ" width="10"><!--状态 -->
            <template slot-scope="scope">
              <span>{{getCheckStatus(scope.row.status)}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="ᠠᠵᠢᠯᠯᠠᠭᠤᠯᠬᠤ" width="10"><!--操作 -->
            <template slot-scope="scope">
              <span v-if="scope.row.status == 2 && scope.row.deptId != obj.targetDeptId">
                <el-button size="small" type="primary" @click="showIntroduce(scope.row.id)">介绍信</el-button> <!--介绍信 -->
              </span>
              <span v-if="scope.row.status == 2 && scope.row.deptId == obj.targetDeptId">
                <el-button size="small" type="primary" @click="showReturn(scope.row.id)">回执信</el-button> <!--回执信 -->
              </span>
              <span v-if="scope.row.status == -1">
                <el-button size="small" type="primary" @click="showOpinion(scope.row.id)">驳回意见</el-button> <!--驳回意见 -->
              </span>
            </template>
          </el-table-column>
        </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="ᠬᠢᠨᠠᠨ ᠪᠠᠶᠢᠴᠠᠭᠠᠬᠤ ᠭᠠᠵᠠᠷ ᠤᠨ ᠵᠢᠷᠤᠭ "> <!-- 审核地图 -->
        <OutMap v-if="showMap"></OutMap>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="组织关系转接介绍信" :visible.sync="introduceVisible" width="50%" top="0">
      <div class="example-outer">
        <h3>党组织关系转移介绍信（样本）</h3>
        <div class="example-box">
          <div class="example-title">党<br>员<br>介<br>绍<br>信<br>存<br>根</div>
          <div class="example-body">
            <p class="example-number">编号：{{ introduceForm.counterfoilNum }}</p>
            <br>
            <p class="example-detail">{{ introduceForm.counterfoilContent }}</p>
            <p class="example-date">{{ introduceForm.counterfoilTime }}</p>
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
            <p class="introduce-number">编号：{{ introduceForm.number }}</p>
            <br>
            <p class="introduce-target">{{ introduceForm.recipients }}：</p>
            <p class="introduce-content">{{ introduceForm.content }}</p>
            <p class="introduce-stamp">（盖章）</p>
            <div style="clear:both"></div>
            <p class="introduce-date">{{ introduceForm.date }}</p>
            <div style="clear:both"></div>
            <p>党员联系电话或其他联系方式：{{ introduceForm.userContactPhone }}</p>
            <p>党员原所在基层党委通讯地址：{{ introduceForm.deptContactAddress }}</p>
            <p>联系电话：{{ introduceForm.contactPhone }}&nbsp;&nbsp;&nbsp;&nbsp;传真：{{ introduceForm.contactFax }}&nbsp;&nbsp;&nbsp;&nbsp;邮编：{{ introduceForm.contactPostcode }}</p>
          </div>
          <div class="introduce-right">第<br>二<br>联</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="introduceVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="组织关系转接回执联" :visible.sync="returnVisible" width="50%" top="100px">
      <div class="return-outer">
        <h3>中国共产党员组织关系介绍信回执联</h3>
        <div class="return-box">
          <div class="return-body">
            <p class="return-number">编号：{{ returnForm.number }}</p>
            <br><br>
            <p class="return-target">{{ returnForm.recipients }}：</p>
            <p class="return-content">{{ returnForm.content }}</p>
            <p class="return-stamp">（盖章）</p>
            <div style="clear:both"></div>
            <p class="return-date">{{ returnForm.date }}</p>
            <div style="clear:both"></div>
            <p>经办人：{{ returnForm.responsiblePerson }}&nbsp;&nbsp;&nbsp;&nbsp;联系电话：{{ returnForm.phone }}</p>
          </div>
          <div class="return-right">第<br>三<br>联</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="returnVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="组织关系转接驳回理由" :visible.sync="rejectVisible" width="50%" top="100px">
      <div class="reject-box">
        {{ rejectForm.content }}
        <br>
        <p style="margin-top:10px;float:right;margin-right:10px;">{{ rejectForm.date }}</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="rejectVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">
import { getObj } from '@/api/transfer-manage/pwTfApply/index'
import { getWay } from '@/api/transfer-manage/pwTfWay/index'
import { getIntroduce } from '@/api/transfer-manage/pwTfIntroduction/index'
import { getReturn } from '@/api/transfer-manage/pwTfReturn/index'
import { getOpinion } from '@/api/transfer-manage/pwTfOpinion/index'
import OutMap from './maps.vue'

export default {
  name: 'transfer-show',
  props: ['id'],
  components: {
    OutMap
  },
  data() {
    return {
      obj: {
        id: null,
        name: null,
        idNumber: null,
        type: null,
        originalDeptName: null,
        originalDeptId: null,
        targetDeptName: null,
        targetDeptId: null,
        payTo: null,
        phone: null,
        residence: null,
        status: null,
        createdTime: null,
        updatedTime: null
      },
      list: null,
      tableKey: 0,
      listLoading: false,
      showMap: false,
      introduceVisible: false,
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
      returnVisible: false,
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
      rejectVisible: false,
      rejectForm: {
        transId: undefined,
        content: undefined,
        date: undefined
      }
    }
  },

  created() {
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })

    getObj(this.id)
      .then(response => {
        this.obj = response
        loading.close()
      })
      .catch(() => {
        loading.close()
      })

    getWay(this.id).then(response => {
      this.list = response
    })
  },

  methods: {
    getType(type) {
      switch (type) {
        case 0:
          return 'ᠬᠤᠲᠠ ᠶᠢᠨ ᠲᠤᠲᠤᠷᠠᠬᠢ ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ' // 市内转接
        case 1:
          return 'ᠬᠤᠳᠠ ᠲᠣᠳᠣᠷ᠎ᠠ ᠡᠴᠡ ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠨ ᠭᠠᠷᠭᠠᠬᠤ ' // 市内转出
        case 2:
          return 'ᠬᠤᠲᠠ ᠶᠢᠨ ᠭᠠᠳᠠᠨ᠎ᠠ ᠠᠴᠠ ᠰᠢᠯᠵᠢᠨ ᠢᠷᠡᠬᠦ  ' // 市外转入
        default:
          return '未知'
      }
    },
    getStatus(status) {
      switch (status) {
        case 0:
          return 'ᠬᠢᠨᠠᠵᠤ ᠪᠤᠢ ' // 审核中
        case 1:
          return 'ᠬᠢᠨᠠᠯᠲᠠ ᠪᠡᠷ ᠪᠠᠲᠤᠯᠠᠭᠰᠠᠨ ' // 审核通过
        case -1:
          return 'ᠬᠢᠨᠠᠯᠲᠠ ᠪᠡᠷ ᠨᠢᠴᠤᠭᠠᠭᠰᠠᠨ ' // 审核驳回
        default:
          return '未知'
      }
    },
    getCheckStatus(status) {
      switch (status) {
        case 0:
          return '等待审核'
        case 1:
          return 'ᠬᠢᠨᠠᠵᠤ ᠪᠤᠢ ' // 审核中
        case 2:
          return 'ᠬᠢᠨᠠᠯᠲᠠ ᠪᠡᠷ ᠪᠠᠲᠤᠯᠠᠭᠰᠠᠨ ' // 审核通过
        case -1:
          return 'ᠬᠢᠨᠠᠯᠲᠠ ᠪᠡᠷ ᠨᠢᠴᠤᠭᠠᠭᠰᠠᠨ ' // 审核驳回
        default:
          return '未知'
      }
    },
    showIntroduce(id) {
      alert(id)
      getIntroduce(id).then(response => {
        this.introduceVisible = true
        this.introduceForm = response.data
      })
    },
    showReturn(id) {
      getReturn(id).then(response => {
        this.returnVisible = true
        this.returnForm = response
      })
    },
    showOpinion(id) {
      getOpinion(id).then(response => {
        this.rejectVisible = true
        this.rejectForm = response
      })
    },
    changeTab(tab, event) {
      if (tab.index === 2) {
        this.showMap = true
      }
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
