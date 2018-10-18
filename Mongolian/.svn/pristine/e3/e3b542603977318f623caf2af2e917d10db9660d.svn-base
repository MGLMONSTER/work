<template>
	<div class="main_body" style="
  -webkit-text-orientation: sideways-right; height: 90%;">
		<div class="title">ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠠᠷᠢᠴᠠᠭ᠎ᠠ ᠪᠠᠨ ᠰᠢᠯᠵᠢᠭᠦᠯᠭᠦ </div> <!-- 组织关系转接 -->
		<div class="form">
      <div class="filters-input">
			<el-form label-position="top" ref="form" :model="form" label-width="80px" :rules="rules">
				<el-form-item label="ᠨᠡᠷ᠎ᠡ" disabled> <!--姓名-->
					  <el-input v-model="name"></el-input>
				</el-form-item>
				<el-form-item label="ᠪᠡᠶ᠎ᠡ ᠶᠢᠨ ᠦᠨᠡᠮᠯᠡᠯ ᠦᠨ ᠨᠣᠮᠧᠷ"> <!--身份证号-->
					<el-input v-model="id_number" disabled></el-input>
				</el-form-item>
				<el-form-item label="ᠰᠢᠯᠵᠢᠭᠦᠯᠬᠦ ᠵᠤᠷᠢᠯᠲᠠ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ"> <!--要转移的目标部门-->

					<el-input v-model="targetDeptName" placeholder=" ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠪᠡᠨ ᠰᠣᠩᠭᠣᠬᠤ" @focus="deptTreeDialogVisible = true" style="font-family: 'OrhonChaganTig';"></el-input>
				</el-form-item>
				<el-form-item label="ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠤᠲᠠᠰᠦ" prop="phone"> <!--联系电话-->
					<el-input v-model.number="form.phone"></el-input>
				</el-form-item>
				<el-form-item label="ᠬᠠᠶ᠋ᠢᠭ" prop="residence"> <!--住址-->
					<el-input v-model="form.residence"></el-input>
				</el-form-item>
				<el-form-item label="ᠨᠠᠮ ᠤᠨ ᠰᠦᠢᠳᠬᠡᠯ ᠳᠤᠰᠢᠶᠠᠬᠤ ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ" prop="payTo"> <!--党费缴纳至时间-->
					<el-date-picker class="settimessz" v-model="form.payTo" type="month" @change="logTimeChange" value-format="yyyy-MM" style="height: 200px;">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="ᠭᠤᠶᠤᠴᠢᠯᠠᠬᠤ ᠰᠢᠯᠲᠠᠭᠠᠨ"> <!--申请原因-->
					<el-input type="textarea" v-model="form.description" :autosize="{ minRows: 15, maxRows: 17}" :rows="3"></el-input>
				</el-form-item>
				<el-form-item label=""> <!--附件-->
					<el-upload :action="uploadUrl" :limit="5" :before-remove="beforeRemove" :on-exceed="handleExceed" :on-success="handleSuccess" multiple name="file" :file-list="fileList" :headers="uploadHeaders">
						<el-button size="small" type="primary">ᠠᠴᠢᠶᠠᠯᠠᠬᠤ </el-button> <!-- 点击上传-->  <!-- -->
						<div slot="tip" class="el-upload__tip"> ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ5M ᠡᠴᠡ ᠬᠡᠲᠦᠷᠡᠭᠦᠯᠵᠦ ᠪᠣᠯᠬᠤ ᠦᠭᠡᠢ  </div> <!-- 大小不能超过5M-->
					</el-upload>
				</el-form-item>
				<el-form-item>
					<el-button size="small" type="primary" :loading="loading" @click="onSubmit">ᠳᠤᠰᠢᠶᠠᠬᠤ</el-button> <!-- 提交-->
				</el-form-item>
			</el-form>
      </div>
		</div>
		<el-dialog title=" ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠢᠶᠡᠨ ᠰᠣᠩᠭᠣᠬᠤ   " :visible.sync="deptTreeDialogVisible" width="auto" style="writing-mode:horizontal-tb;"> <!-- 选择目标党支部-->
      <div class="filter-input" style="height: 100%;">
			<span style="display: block;height: 100%;">
				<el-form :inline="true">
					<el-form-item>
						<el-input placeholder="ᠵᠠᠩᠭᠢᠯᠠᠭ᠎ᠠ ᠶᠢᠨ ᠦᠰᠦᠭ  ᠢᠶᠡᠷ ᠬᠠᠶᠢᠬᠤ " v-model="deptTreeFilterText"><!-- 输入关键字进行过滤-->
						</el-input>
					</el-form-item>
					<el-form-item>
						<el-button size="small" type="primary" @click="handleDeptTreeFilter" :loading="searchLoading">ᠬᠠᠶᠢᠬᠤ</el-button> <!-- 搜索-->
					</el-form-item>
				</el-form>
				<div v-if="deptTreeNormal">
					<el-tree :data="deptTree" :props="deptTreeProps" lazy :load="deptTreeLoad" @node-click="handleDeptTreeClick" node-key="porganizationCode" ref="tree1"></el-tree>
				</div>
				<div v-else>
					<el-tree :data="deptTree" :props="deptTreeProps" @node-click="handleDeptTreeClick" node-key="porganizationCode" :default-expand-all="true" ref="tree2"></el-tree>
				</div>
			</span>
      </div>
      <span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="deptTreeDialogVisible = false" size="small">ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ</el-button> <!-- 关 闭 -->
			</span>
		</el-dialog>
	</div>
</template>
<script>
import { addObj, uploadFile } from '@/api/transfer/apply'
import { deptTree, sortTree, deptTreeFilter } from '@/api/transfer/deptTree'
import { getUserInfo } from '@/api/transfer/user'
import { getToken } from '@/utils/auth'

export default {
  data() {
    return {
      name: undefined,
      id_number: undefined,
      targetDeptName: undefined,
      fileList: [],
      uploadUrl: null,
      form: {
        targetDeptId: undefined,
        phone: undefined,
        residence: undefined,
        payTo: undefined,
        description: undefined,
        attachments: ''
      },
      rules: {
        targetDeptId: [
          {
            required: true,
            message: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠪᠡᠨ ᠰᠣᠩᠭᠣᠬᠤ ', // 请选择目标组织
            trigger: 'change'
          }
        ],
        phone: [
          {
            required: true,
            message: 'ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠤᠲᠠᠰᠤ ᠬᠣᠭᠣᠰᠣᠨ ᠪᠠᠶᠢᠵᠤ ᠪᠣᠯᠬᠤ ᠦᠭᠡᠢ ', // 联系电话不能为空
            trigger: 'blur'
          }
        ],
        residence: [
          {
            required: true,
            message: 'ᠰᠠᠭᠤᠭ᠎ᠠ ᠬᠠᠶ᠋ᠢᠭ ᠬᠣᠭᠣᠰᠣᠨ ᠪᠠᠶᠢᠵᠤ ᠪᠣᠯᠬᠤ ᠦᠭᠡᠢ ', // 住址不能为空
            trigger: 'blur'
          }
        ],
        payTo: [
          {
            required: true,
            message: 'ᠲᠠ ᠨᠠᠮ ᠤᠨ ᠰᠦᠢᠳᠬᠡᠯ ᠲᠤᠰᠢᠶᠠᠭᠰᠠᠨ ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ ᠪᠠᠨ ᠰᠣᠩᠭᠣᠭᠠᠷᠠᠢ', // 请选择党费缴纳至时间
            trigger: 'blur'
          }
        ]
      },
      loading: false,
      deptTree: undefined,
      deptTreeProps: {
        children: 'children',
        label: 'porganizationName',
        isLeaf: 'leaf'
      },
      deptTreeDialogVisible: false,
      deptTreeFilterText: null,
      deptTreeNormal: true,
      searchLoading: false,
      uploadHeaders: {
        'Authorization': getToken()
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
    this.uploadUrl = uploadFile()
    getUserInfo()
      .then(response => {
        this.name = response.name
        this.id_number = response.idCardNumber
        this.form.phone = response.mobilePhone
        loading.close()
      })
      .catch(() => {
        loading.close()
      })
  },
  methods: {
    onSubmit() {
      const set = this.$refs
      set['form'].validate(valid => {
        if (valid) {
          this.loading = true
          addObj(this.form)
            .then(() => {
              this.$notify({
                title: ' ᠠᠮᠵᠢᠯᠲᠢ', // 成功
                message: 'ᠠᠮᠵᠢᠯᠲᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ', // 创建成功
                type: 'success',
                duration: 2000
              })
              this.loading = false
              this.$router.push({ path: '/transferLyy/CheckInfo' })
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    handleExceed(files, fileList) {
      this.$message.warning(`最多只能选择 5 个附件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleSuccess(response, file, fileList) {
      this.fileList.push({
        name: file.name,
        url: response
      })
    },
    handleDeptTreeClick(data) {
      if (typeof data.checked !== 'undefined' && data.checked === 1) {
        this.targetDeptName = data.porganizationName
        this.form.targetDeptId = data.porganizationCode
        this.deptTreeDialogVisible = false
      }
    },
    deptTreeLoad(node, resolve) {
      if (typeof node.data === 'undefined') {
        deptTree(0).then(response => {
          const data = response
          data.unshift({
            porganizationCode: 0,
            porganizationName: '转出到市外',
            leaf: true,
            checked: 1
          })
          return resolve(data)
        })
      } else {
        deptTree(node.data.porganizationCode).then(response => {
          if (response.length <= 0) {
            node.data.checked = 1
          }
          return resolve(response)
        })
      }
    },
    handleDeptTreeFilter() {
      this.searchLoading = true
      deptTreeFilter(this.deptTreeFilterText)
        .then(response => {
          this.deptTreeNormal = false
          this.deptTree = sortTree(response)
          this.searchLoading = false
        })
        .catch(() => {
          this.searchLoading = false
        })
    },
    logTimeChange(val) {
      this.form.payTo = val
    }
  },
  watch: {
    fileList: function(newValue) {
      let concat = ''
      for (let i = 0; i < newValue.length; i++) {
        concat += ',' + newValue[i].url
      }
      this.form.attachments = concat.substr(1)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mongolians.scss";
.main_body {
  margin-left:10px;
  width: 100%;
  /*margin: 50px 120px 50px 120px;*/
  height: 100%;
  background: #c62f2f;
  color: #fff;
  padding-bottom: 8px;
}
.title {
  text-align: center;
  padding: 13px 0 0 0;
  margin: 0;
  padding-left: 10px;
  font-size: 22px;
}
.form {
  width: 95%;
  background: #f7f4f4;
  color: #000;
  margin: 13px 8px 0 8px;
  padding: 10px;
}
label {
  height: 35px;
  line-height: 35px;
  margin-left: 6px;
}
</style>
