<template>
	<div class="main_body">
		<div class="form">
      <div class="filters-input"> 
			<el-form label-position="top" ref="form" :model="form" label-width="80px" :rules="rules">
                 <el-row :gutter="20">
                <el-col :span="12"> 
                    <div style="text-align:center">ᠦᠨᠳᠦᠰᠦᠨ ᠵᠠᠩᠭᠢ</div>
                <el-form-item label="ᠨᠡᠷ᠎ᠡ"> <!--姓名-->
					<el-input v-model="name"  disabled></el-input>
				</el-form-item>
				<el-form-item label="ᠦᠨᠳᠦᠰᠦᠲᠡᠨ "> <!--民族-->
					<el-input v-model="id_number" ></el-input>
				</el-form-item>
                <el-form-item label="ᠪᠡᠶ᠎ᠡ ᠶᠢᠨ ᠦᠨᠡᠮᠯᠡᠯ ᠦᠨ ᠨᠣᠮᠧᠷ"> <!--身份证号-->
					<el-input v-model="id_number" disabled></el-input>
				</el-form-item>
				<el-form-item label="ᠰᠤᠷᠤᠯᠭ᠎ᠠ ᠶᠢᠨ ᠨᠠᠮᠲᠠᠷ"> <!--学历-->
					<el-input v-model="id_number"></el-input>
				</el-form-item>
				<el-form-item label="ᠡᠷᠳᠡᠮ ᠦᠨ ᠴᠣᠯᠠ" prop="phone"> <!--学位-->
					<el-input v-model.number="form.phone"></el-input>
				</el-form-item>
                <el-form-item label="ᠲᠥᠷᠥᠭᠰᠡᠨ ᠡᠳᠦᠷ ᠤᠨ ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ " prop="payTo"> <!--出生日期-->
					<el-date-picker class="settimessz" v-model="form.payTo" type="month" @change="logTimeChange" value-format="yyyy-MM" style="height: 200px;">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="ᠤᠬ ᠨᠤᠲᠤᠭ" prop="residence"> <!--籍贯-->
					<el-input v-model="form.residence"></el-input>
				</el-form-item>
                <el-form-item label="ᠤᠲᠠᠰᠤᠨ ᠨᠣᠮᠧᠷ" prop="residence"> <!--手机号码-->
					<el-input v-model="form.residence"></el-input>
				</el-form-item>
                <el-form-item label="ᠪᠠᠶᠢᠭᠤᠯᠤᠭ᠎ᠠ ᠨᠢᠭᠡᠴᠢ ᠶᠢᠨ ᠲᠤᠰᠢᠶᠠᠯ" prop="residence"> <!--单位职务-->
					<el-input v-model="form.residence"></el-input>
				</el-form-item>
                <el-form-item label="ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠤᠲᠠᠰᠤ" prop="residence"> <!--联系电话-->
					<el-input v-model="form.residence"></el-input>
				</el-form-item>
                <el-form-item label="ᠢᠮᠧᠯ " prop="residence"> <!--邮箱-->
					<el-input v-model="form.residence"></el-input>
				</el-form-item>
				<el-form-item label="ᠨᠠᠮ ᠳᠤ ᠤᠷᠤᠭᠰᠠᠨ ᠴᠠᠭ" prop="payTo"> <!--入党时间-->
					<el-date-picker class="settimessz" v-model="form.payTo" type="month" @change="logTimeChange" value-format="yyyy-MM" style="height: 200px;">
					</el-date-picker>
				</el-form-item>
                 <el-form-item label="ᠨᠠᠮ ᠤᠨ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠳᠤ ᠣᠷᠣᠬᠤ" prop="residence"> <!--加入党组织-->
					<el-input v-model="form.residence"></el-input>
				</el-form-item></el-col>
                <el-col :span="12">
                <div style="text-align:center">ᠨᠠᠷᠢᠨ ᠵᠠᠩᠭᠢ</div> 
                <el-form-item label="ᠰᠠᠭᠤᠭ᠎ᠠ ᠭᠠᠵᠠᠷ ᠤᠨ ᠬᠠᠶ᠋ᠢᠭ"> <!--现住址-->
					  <el-input v-model="name"></el-input>
				</el-form-item>
				<el-form-item label="ᠲᠥᠷᠥᠭᠰᠡᠨ ᠭᠠᠵᠠᠷ "> <!--出生地-->
					<el-input v-model="id_number" ></el-input>
				</el-form-item>
                <el-form-item label="ᠲᠤᠰᠬᠠᠶ ᠮᠡᠷᠭᠡᠵᠢᠯ ᠦᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ "> <!--专业技能-->
					<el-input v-model="id_number" ></el-input>
				</el-form-item>
                <el-form-item label="ᠤᠷᠠᠯᠢᠭ ᠲᠠᠮᠢᠷ ᠤᠨ ᠣᠨᠴᠠᠭᠠᠶ ᠠᠪᠢᠶᠠᠰ"> <!--文体特长-->
					<el-input v-model="id_number"></el-input>
				</el-form-item>
				</el-col>
                <el-col :span="12">
                  <div style="text-align:center">ᠰᠤᠷᠭᠠᠨ ᠬᠥᠮᠦᠵᠢᠯ ᠭᠦᠷᠲᠡᠭᠰᠡᠨ ᠪᠠᠶᠢᠳᠠᠯ </div> 
                  <div style="margin-left:15px">ᠰᠣᠷᠣᠯᠭ᠎ᠠ ᠶᠢᠨ ᠨᠠᠮᠳᠠᠷ</div>
                  <el-input v-model="id_number"></el-input>
                  <div style="margin-left:60px">ᠰᠣᠷᠭᠠᠭᠣᠯᠢ</div>
                  <el-input v-model="id_number"></el-input>
                  <div style="margin-left:60px">ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠳᠤ ᠣᠷᠣᠭᠰᠠᠨ ᠵᠢᠯ </div>
                  <el-date-picker class="settimessz" type="month" @change="logTimeChange" value-format="yyyy-MM" style="height: 120px;">
                  </el-date-picker>
                  <div style="margin-left:60px">ᠲᠡᠭᠦᠰᠦᠭᠰᠡᠨ ᠵᠢᠯ</div>
                  <el-date-picker class="settimessz" type="month" @change="logTimeChange" value-format="yyyy-MM" style="height: 120px;">
                  </el-date-picker>
                </el-col>        
          </el-row>	
			</el-form>
      </div>
		</div>
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
        // targetDeptId: [
        //   {
        //     required: true,
        //     message: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠪᠡᠨ ᠰᠣᠩᠭᠣᠬᠤ ', // 请选择目标组织
        //     trigger: 'change'
        //   }
        // ],
        // phone: [
        //   {
        //     required: true,
        //     message: 'ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠤᠲᠠᠰᠤ ᠬᠣᠭᠣᠰᠣᠨ ᠪᠠᠶᠢᠵᠤ ᠪᠣᠯᠬᠤ ᠦᠭᠡᠢ ', // 联系电话不能为空
        //     trigger: 'blur'
        //   }
        // ],
        // residence: [
        //   {
        //     required: true,
        //     message: 'ᠰᠠᠭᠤᠭ᠎ᠠ ᠬᠠᠶ᠋ᠢᠭ ᠬᠣᠭᠣᠰᠣᠨ ᠪᠠᠶᠢᠵᠤ ᠪᠣᠯᠬᠤ ᠦᠭᠡᠢ ', // 住址不能为空
        //     trigger: 'blur'
        //   }
        // ],
        // payTo: [
        //   {
        //     required: true,
        //     message: 'ᠲᠠ ᠨᠠᠮ ᠤᠨ ᠰᠦᠢᠳᠬᠡᠯ ᠲᠤᠰᠢᠶᠠᠭᠰᠠᠨ ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ ᠪᠠᠨ ᠰᠣᠩᠭᠣᠭᠠᠷᠠᠢ', // 请选择党费缴纳至时间
        //     trigger: 'blur'
        //   }
        // ]
      },
    //   loading: false,
      
    }
  },
  methods: {
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
