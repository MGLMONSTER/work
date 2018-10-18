  <template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="关键字" v-model="listQuery.place"> </el-input>
       <el-input  @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="支部名称" v-model="listQuery.name"> </el-input>
       <el-date-picker style="width: 200px;" class="filter-item" v-model="listQuery.date" type="date" placeholder="选择日期">
       </el-date-picker>
      <el-button class="filter-item" type="primary" icon="search" @click="handleFilter">搜索</el-button>
    </div>
    <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
        <el-table-column  align="center" label="支部名称">
      <template slot-scope="scope">
        <span>{{scope.row.name}}</span>
      </template>
    </el-table-column>
        <el-table-column  align="center" label="会议次数">
      <template slot-scope="scope">
        <span>{{scope.row.total}}</span>
      </template>
    </el-table-column>
        <el-table-column align="center" label="应考勤">
      <template slot-scope="scope">
       <span>{{scope.row.attendance}}</span>
      </template>
    </el-table-column>
    <el-table-column  align="center" label="已考勤">
      <template slot-scope="scope">
        <span>{{scope.row.tooAttendance}}</span>
      </template>
    </el-table-column>
    <el-table-column  align="center" label="出勤率">
      <template slot-scope="scope">
        <span>{{scope.row.dance}}</span>
      </template>
    </el-table-column>
    <el-table-column  align="center" label="缺勤率">
      <template slot-scope="scope">
        <span>{{scope.row.lack}}</span>
      </template>
    </el-table-column>
    <el-table-column  align="center" label="请假率">
      <template slot-scope="scope">
        <span>{{scope.row.leave}}</span>
      </template>
    </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" width="150"> <template slot-scope="scope">
        <el-button v-if="otlMeetPlaceManager_btn_edit" size="small" type="success" @click="handleUpdate(scope.row)">查看
        </el-button>
        <!-- <el-button v-if="otlMeetPlaceManager_btn_del" size="small" type="danger" @click="handleDelete(scope.row)">删除
        </el-button> -->
      </template> </el-table-column>
    </el-table>
    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
    </div>
  </div>
</template>

<script>
  import {
      selectByPlaceQuery,
      addObj,
      getObj,
      delObj,
      putObj
  } from '@/api/organization/otlMeetPlace/index';
  import {getZhiBId} from '@/utils/auth';
  export default {
    name: 'otlMeetPlace',
    data() {
      return {
        form: {
        place : undefined,        total : undefined,        status : undefined          },
        statusOptions:[{value:0,status:'启用'},{value:1,status:'停用'}],
        rules: {
    place: [
  {
    required: true,
    message: '请输入会议地点',
    trigger: 'blur'
  },
  {
    min: 1,
    message: '会议地点不能为空',
    trigger: 'blur'
  }
],   total: [
  {
    required: true,
    message: '请输入统计',
    trigger: 'blur'
  },
  {
    min: 1,
    message: '统计不能为空',
    trigger: 'blur'
  }
],   status: [
  {
    required: true,
    message: '请选择状态',
    trigger: 'change'
  }
]        },
      list: [
      {name:'中共中国中煤能源股份有限公司鄂尔多斯分公司机关第二支部委员会',total:15,attendance:54,tooAttendance:54,dance:"100%",lack:"0%",leave:"0%"},
      {name:'中共鄂尔多斯市广播电视台机关委员会',total:23,attendance:74,tooAttendance:70,dance:"94%",lack:"6%",leave:"0%"},
      {name:'中共鄂尔多斯市广播电视台汉语全媒体新闻中心支部委员会',total:9,attendance:46,tooAttendance:45,dance:"97%",lack:"0%",leave:"3%"},
      {name:'中共鄂尔多斯市气象局第一支部委员会',total:18,attendance:74,tooAttendance:73,dance:"95%",lack:"2%",leave:"0%"},
      {name:'中共鄂尔多斯市地方税务局恩格贝生态示范区分局支部委员会',total:32,attendance:53,tooAttendance:51,dance:"96",lack:"4%",leave:"0%"},
      {name:'中共鄂尔多斯市伊化矿业资源有限责任公司掘锚一队支部委员会',total:14,attendance:33,tooAttendance:28,dance:"84%",lack:"10%",leave:"6%"},
      {name:'中共中国移动通信集团内蒙古有限公司鄂尔多斯分公司离退休支部委员会',total:18,attendance:52,tooAttendance:49,dance:"94%",lack:"4%",leave:"2%"},
      {name:'中共中国电信股份有限公司鄂尔多斯分公司核心商圈营销中心支部委员会',total:21,attendance:87,tooAttendance:85,dance:"97%",lack:"3%",leave:"0%"},
      ],
        total: null,
        listLoading: false,
        listQuery: {
          page: 1,
          limit: 20,
          place: undefined,
          name:undefined,
          date:undefined
        },
        dialogFormVisible: false,
        dialogStatus: '',
        otlMeetPlaceManager_btn_edit: true,
        otlMeetPlaceManager_btn_del: true,
        otlMeetPlaceManager_btn_add: true,
        textMap: {
          update: '编辑',
          create: '创建'
        },
        tableKey: 0
      }
    },
    created() {
    },
    methods: {
      getList() {
        this.listLoading = true;
        page(this.listQuery)
            .then(response => {
          this.list = response.data.rows;
        this.total = response.data.total;
        this.listLoading = false;
      })
      },
      handleFilter() {
        this.getList();
      },
      handleSizeChange(val) {
        this.listQuery.limit = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.getList();
      },
      handleCreate() {
        this.dialogStatus = 'create';
        this.dialogFormVisible = true;
      },
      handleUpdate(row) {
        getObj(row.id)
            .then(response => {
          this.form = response.data;
        this.dialogFormVisible = true;
        this.dialogStatus = 'update';
      });
      },
      handleDelete(row) {
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            })
            .then(() => {
          delObj(row.id)
      .then(() => {
          this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000
        });
        const index = this.list.indexOf(row);
        this.list.splice(index, 1);
      });
      });
      },
      create(formName) {
        const set = this.$refs;
        set[formName].validate(valid => {
        if (valid) {
        addObj(this.form)
        .then(() => {
        this.dialogFormVisible = false;
        this.getList();
        this.$notify({
        title: '成功',
        message: '创建成功',
        type: 'success',
        duration: 2000
        });
        })
        } else {
        return false;
        }
        });
      },
      cancel(formName) {
        this.dialogFormVisible = false;
        const set = this.$refs;
        set[formName].resetFields();
        this.form = {place : undefined,total : undefined,status : undefined}
      },
      update(formName) {
        const set = this.$refs;
        set[formName].validate(valid => {
        if (valid) {
        this.dialogFormVisible = false;
        this.form.password = undefined;
        putObj(this.form.id, this.form).then(() => {
        this.dialogFormVisible = false;
        this.getList();
        this.$notify({
        title: '成功',
        message: '修改成功',
        type: 'success',
        duration: 2000
        });
        });
        } else {
        return false;
        }
        });
      }
    }
  }
</script>
