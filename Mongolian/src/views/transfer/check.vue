<template>
	<!--<div class="app-container">-->
    <div class="app-table">
		<div v-if="!isShow">
			<el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row>
				<el-table-column align="center" label="ᠤᠭ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ" width="10"> <!--原组织 -->
					<template slot-scope="scope">
						<span>{{scope.row.originalDeptName}}</span>
					</template>
				</el-table-column>
				<el-table-column align="center" label="ᠰᠢᠯᠵᠢᠨ ᠣᠷᠣᠬᠤ ᠵᠣᠷᠢᠯᠲᠠ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ " width="10"> <!--转入目标组织 -->
					<template slot-scope="scope">
						<span>{{scope.row.targetDeptName}}</span>
					</template>
				</el-table-column>
				<el-table-column align="center" label="ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠤᠲᠠᠰᠦ" width="10"> <!--联系电话 -->
					<template slot-scope="scope">
						<span>{{scope.row.phone}}</span>
					</template>
				</el-table-column>
				<el-table-column align="center" label="ᠬᠠᠶᠠᠭ" width="10"> <!--住址 -->
					<template slot-scope="scope">
						<span>{{scope.row.residence}}</span>
					</template>
				</el-table-column>
				<el-table-column align="center" label="ᠨᠠᠮ ᠤᠨ ᠰᠦᠢᠳᠬᠡᠯ ᠳᠤᠰᠢᠶᠠᠬᠤ ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ" width="10"> <!--党费缴至时间 -->
					<template slot-scope="scope">
						<span>{{scope.row.payTo}}</span>
					</template>
				</el-table-column>
				<el-table-column align="center" label="ᠬᠢᠨᠠᠵᠤ ᠪᠠᠶᠢᠭ᠎ᠠ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ " width="10"> <!-- 当前审核组织-->
					<template slot-scope="scope">
						<span>{{scope.row.porganizationName}}</span>
					</template>
				</el-table-column>
				<el-table-column align="center" label="ᠬᠢᠨᠠᠯᠲᠠ ᠶᠢᠨ ᠪᠠᠶᠢᠳᠠᠯ " width="10"> <!-- 审核状态-->
					<template slot-scope="scope">
						<span>{{statusLabel(scope.row.status)}}</span>
					</template>
				</el-table-column>
				<el-table-column align="center" label="ᠠᠵᠢᠯᠯᠠᠭᠤᠯᠬᠤ" width="10"> <!-- 操作-->
					<template slot-scope="scope">
						<el-button type="primary" size="small" @click="toShow(scope.row.id)">{{$t('table.seeing')}}</el-button><!-- 查看 -->
						<el-button type="danger" size="small" @click="handleRollBack(scope.row.id)" v-if="scope.row.allowedRollBack">ᠪᠤᠴᠠᠬᠤ </el-button> <!-- 回退-->
					</template>
				</el-table-column>
			</el-table>
		</div>
    <showPage :id="id" v-if="isShow"></showPage>
    </div>
	<!--</div>-->
</template>
<script type="text/javascript">
import { page, getConfig, rollBack } from '@/api/transfer/apply'
import showPage from './show.vue'

export default {
  components: {
    showPage
  },
  data() {
    return {
      isShow: false,
      id: null,
      list: [],
      listLoading: true,
      total: null,
      listQuery: {
        page: 1,
        limit: 20
      },
      rollBackDays: 0
    }
  },
  created() {
    this.listLoading = true

    getConfig().then(response => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].labels === 'roll_back_day') {
          this.rollBackDays = Number(response[i].value)
        }
      }

      page(this.listQuery).then(response => {
        this.list = this.allowedRollBack(this.rollBackDays, response)
        this.total = response.length
        this.listLoading = false
      })
    })
  },
  methods: {
    statusLabel(status) {
      switch (status) {
        case 0:
          return 'ᠬᠢᠨᠠᠵᠤ ᠪᠤᠢ ' // 审核中
        case 1:
          return 'ᠬᠢᠨᠠᠯᠲᠠ ᠪᠡᠷ ᠪᠠᠲᠤᠯᠠᠭᠰᠠᠨ' // 审核通过
        case -1:
          return 'ᠬᠢᠨᠠᠯᠲᠠ ᠪᠡᠷ ᠨᠢᠴᠤᠭᠠᠭᠰᠠᠨ' // 审核驳回
        case -2:
          return 'ᠪᠤᠴᠠᠪᠠ' // 已回退
        default:
          return 'ᠦᠯᠦ ᠮᠡᠳᠡᠭᠳᠡᠬᠦ ' //未知
      }
    },
    toShow(id) {
      this.id = id
      this.isShow = true
    },
    allowedRollBack(days, list) {
      const nowDateTime = Date.parse(new Date())

      for (let i = 0; i < list.length; i++) {
        const date = new Date(list[i].updatedTime)
        date.setDate(date.getDate() + this.rollBackDays)
        if (nowDateTime > Date.parse(date) && list[i].status === 0) {
          list[i].allowedRollBack = true
        } else {
          list[i].allowedRollBack = false
        }
      }

      return list
    },
    handleRollBack(id) {
      this.$confirm(
        'ᠲᠠᠨ ᠤ ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ  ᠢᠶᠡᠨ ᠳᠠᠮᠵᠢᠭᠤᠯᠬᠤ ᠭᠤᠶᠤᠯᠲᠠ ' + this.rollBackDays + 'ᠡᠳᠦᠷ ᠥᠩᠭᠡᠷᠡᠭᠰᠡᠨ ᠪᠠᠶᠢᠨ᠎ᠠ᠃ ᠭᠤᠶᠤᠯᠲᠠ ᠶᠢᠨ ᠪᠢᠴᠢᠭ ᠢᠶᠡᠨ ᠡᠭᠡᠭᠦᠯᠬᠦ ᠤᠤ？ ', // 您的转接申请超过 天未审核，是否要回退？
        'ᠰᠠᠨᠠᠭᠤᠯᠭ᠎ᠠ', // 提示
        {
          confirmButtonText: 'ᠪᠤᠴᠠᠬᠤ ', // 回退
          cancelButtonText: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ',
          type: 'warning' // 取消
        }
      ).then(() => {
        rollBack(id).then(response => {
          this.$notify({
            title: ' ᠠᠮᠵᠢᠯᠲᠢ', // 成功
            message: 'ᠠᠮᠵᠢᠯᠲᠢ ᠤᠴᠠᠬᠤ ', // 回退成功
            type: 'success',
            duration: 2000
          })
          this.$router.go(0)
        })
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mongolians.scss";
  </style>
