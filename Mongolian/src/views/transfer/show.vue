<template>
	<div >
    <!--class="app-container"-->
		<el-tabs type="border-card" tab-position="left" style="min-height: 400px;">
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
				<p>ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ  ᠢᠶᠡᠨ ᠰᠣᠯᠢᠬᠤ ᠭᠤᠶᠤᠯᠲᠠ ᠶᠢᠨ ᠪᠠᠶᠢᠳᠠᠯ ：<!--转接状态 -->
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
		</el-tabs>
	</div>
</template>

<script type="text/javascript">
import { getObj } from '@/api/transfer/apply'

export default {
  name: 'transfer-show',
  props: ['id'],
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
          return 'ᠦᠯᠦ ᠮᠡᠳᠡᠭᠳᠡᠬᠦ ' // 未知
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
          return 'ᠦᠯᠦ ᠮᠡᠳᠡᠭᠳᠡᠬᠦ ' // 未知
      }
    }
  }
}
</script>
