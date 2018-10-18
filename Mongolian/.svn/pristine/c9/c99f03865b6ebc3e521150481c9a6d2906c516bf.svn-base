
<template>
  <div>
    <div >
      <el-tabs v-model="activeName" @tab-click="handleClickTab">
        <el-tab-pane label="ᠪᠠᠶᠡᠯᠡᠭᠦᠯᠬᠦ ᠪᠡᠷ ᠪᠠᠶᠢᠭ᠎ᠠ ᠡᠭᠦᠷᠬᠡ " width="120"  name="first">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="applyname" label=" ᠤᠪᠤᠭ ᠨᠡᠷ᠎ᠡ" width="120"  align="center">
            </el-table-column>
            <el-table-column prop="deptname" label="ᠨᠠᠮ  ᠤᠨ ᠡᠭᠦᠷ ᠳᠤ ᠤᠷᠤᠬᠤ ᠨᠡᠷᠡᠶᠢᠳᠦᠯ" width="120"   align="center">
            </el-table-column>
            <el-table-column prop="createTime" label="ᠡᠭᠦᠳᠦᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠴᠠᠭ" width="120"   align="center">
            </el-table-column>
            <el-table-column prop="statusname" label="ᠶᠠᠪᠤᠴᠠ ᠤᠨ ᠪᠠᠶᠢᠳᠠᠯ" width="120"  align="center">
            </el-table-column>
            <el-table-column width="120"  label="ᠠᠵᠢᠯᠯᠠᠬᠤ" align="center">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看流程图</el-button>
                <el-button @click="handleEdit(scope.$index,scope.row)" type="text" size="small">执行任务</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="ᠡᠭᠦᠷᠭᠡ ᠵᠢᠨ ᠠᠬᠢᠴᠠ" name="second">
          <el-table :data="tableData2" border style="width: 100%">
            <el-table-column prop="applyname" label="ᠤᠪᠤᠭ ᠨᠡᠷ᠎ᠡ" width="120" align="center">
            </el-table-column>
            <el-table-column prop="deptname" label="ᠨᠠᠮ  ᠤᠨ ᠡᠭᠦᠷ ᠳᠤ ᠤᠷᠤᠬᠤ ᠨᠡᠷᠡᠶᠢᠳᠦᠯ" width="400" align="center">
            </el-table-column>
            <el-table-column prop="createTime" label="ᠡᠭᠦᠳᠦᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠴᠠᠭ" width="150" align="center">
            </el-table-column>
            <el-table-column prop="statusname" label="ᠡᠭᠦᠷᠭᠡ ᠵᠢᠨ ᠠᠬᠢᠴᠠ " width="150" align="center">
            </el-table-column>
            <el-table-column label="ᠠᠵᠢᠯᠯᠠᠬᠤ" align="center" width="120" >
              <template slot-scope="scope">
                <el-button @click="handleClick2(scope.$index,scope.row)" type="text" size="small">查看流程图</el-button>
                <el-button @click="handleEdit2(scope.$index,scope.row)" type="text" size="small">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>

<script>
// import { getmyself } from "@/api/join-party/getmyself";
// import { workstep, historystep } from "@/api/join-party/step";
export default {
  name: "stepList",
  data() {
    return {
      url: "/JoinPartyController/viewCurrentImage",
      status: "",
      activeName: "first",
      tableData: [],
      tableData2: []
    };
  },
  created() {
    this.getworkstep();
    this.gethistorystep();
    this.checkmyself();
  },
  methods: {
    checkmyself() {
      getmyself().then(respones => {
        let data = respones;
        if (!data.organizationname) {
          this.$notify({
            title: "个人信息不完整",
            message: "请先完善个人信息并选择要加入的党支部",
            type: "warning"
          });
          this.$router.push({ path: "/joinparty/joinparty-basicInfo" });
          return false;
        }
      });
    },
    handleEdit(index, row) {
      this.$router.push({ path: "/joinparty/joinparty-stepList", query: { taskId: row.taskId ,page : row.status} });
    },
    handleClickTab() {},
    handleClick(index, row) {
      window.open(
        process.env.BASE_API +
          this.url +
          "?processDefinitionId=" +
          row.processDefinitionId +
          "&processInstanceId=" +
          row.processInstanceId
      );
    },
    handleClick2(index, row) {
       window.open(
          process.env.BASE_API +
            this.url +
            "?processDefinitionId=" +
            row.processDefinitionId +
            "&processInstanceId=" +
            row.processInstanceId
        );
    },
    handleEdit2(index, row) {
       this.$router.push({ path: "/joinparty/joinparty-stepList", query: { id: row.id ,page : "100"} });
    },
    getworkstep() {
      workstep().then(respones => {
        let data = respones;
        if (data) {
          this.tableData = data;
        }
      });
    },
    gethistorystep() {
      historystep().then(respones => {
        let data = respones;
        if (data) {
          this.tableData2 = data;
          console.log(data);
        }
      });
    }
  }
};
</script>

