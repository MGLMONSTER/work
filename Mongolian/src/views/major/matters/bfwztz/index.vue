<template>
  <div class="app-container calendar-list-container">
    <h2 style="text-align:center;margin-bottom: 20px">帮扶物资台账</h2>
    <div class="filter-container">
      <el-select @keyup.enter.native="handleFilter" style="width: 200px; margin-left:35%; margin-bottom: 20px" class="filter-item" v-model="listQuery.detailedType" filterable placeholder="请选择村落">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-button class="filter-item" type="primary" icon="search" @click="handleFilter" style="margin-left: 5px ; margin-bottom: 20px">搜索</el-button>

    </div>
    <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">

      <!-- <el-table-column align="center" label="id" width="65">
      <template slot-scope="scope">
        <span>{{scope.row.id}}</span>
      </template>
    </el-table-column> -->
      <el-table-column  align="center" label="村落">
        <template slot-scope="scope">
          <span>{{scope.row.detailedId}}</span>
        </template>
      </el-table-column>

        <el-table-column  align="center" label="总申请金额">
      <template slot-scope="scope">
        <span>{{scope.row.detailedType}}</span>
      </template>
    </el-table-column>
        <el-table-column  align="center" label="总支出金额">
      <template slot-scope="scope">
        <span>{{scope.row.villageName}}</span>
      </template>
    </el-table-column>
        <el-table-column  align="center" label="总剩余金额">
      <template slot-scope="scope">
        <span>{{scope.row.capitalInfo}}</span>
      </template>
      </el-table-column>

        <el-table-column fixed="right" align="center" label="操作" width="150"> <template slot-scope="scope">
          <el-button v-if="vgeDetailedManager_btn_edit" size="small" type="success" @click="handleUpdate(scope.row)">查看
          </el-button></template>
        </el-table-column>
    </el-table>
    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
    </div>



    <el-dialog  :visible.sync="dialogFormVisible" width="70%">
      <h2 style="text-align:center;margin-bottom: 20px">嘎查村帮扶资金使用明细</h2>
      <el-select @keyup.enter.native="handleFilter" style="width: 200px; margin-left:35%; margin-bottom: 20px" class="filter-item" v-model="listQuery.detailedType"  placeholder="按照资金使用方向查看">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button class="filter-item" type="primary" icon="search" @click="handleFilter" style="margin-left: 5px">搜索</el-button>
      <el-table :data="list1" style="width: 100%">
      <el-table-column  align="center" label="申请人">
        <template slot-scope="scope">
          <span>{{scope.row.detailedId}}</span>
        </template>
      </el-table-column>
      <el-table-column  align="center" label="金额">
        <template slot-scope="scope">
          <span>{{scope.row.detailedType}}</span>
        </template>
      </el-table-column>
        <el-table-column  align="center" label="资金流向">
          <template slot-scope="scope">
            <span>{{scope.row.detailedCount}}</span>
          </template>
        </el-table-column>
      <el-table-column  align="center" label="资金使用方向">
        <template slot-scope="scope">
          <span>{{scope.row.villageName}}</span>
        </template>
      </el-table-column>
      <el-table-column  align="center" label="时间">
        <template slot-scope="scope">
          <span>{{scope.row.createDate}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" align="center" label="操作" width="150"> <template slot-scope="scope">
        <el-button v-if="vgeDetailedManager_btn_edit1" size="small" type="success" @click="handleUpdate1(scope.row)">查看
        </el-button></template>
      </el-table-column>
      </el-table>


      <div v-show="!listLoading" class="pagination-container">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
      </div>


      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('form')">返回</el-button>
      </div>
    </el-dialog>



    <el-dialog  :visible.sync="dialogFormVisible1" width="70%">

      <el-form :model="form1" :rules="rules1" ref="form1" label-width="100px">

        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="村落" prop="detailedId">
              <el-input v-model="form.detailedId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="申请日期" prop="createDate">
               <el-input v-model="form.createDate"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="资金使用方向" prop="detailedType">
              <el-input v-model="form.detailedType" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="帮扶金额" prop="villageName">
              <el-input v-model="form.villageName" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="剩余金额" prop="villageCode">
              <el-input v-model="form.villageCode" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="申请人" prop="capitalInfo">
              <el-input v-model="form.capitalInfo" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="审批人" prop="villageCode">
              <el-input v-model="form.villageCode" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="审批人" prop="capitalInfo">
              <el-input v-model="form.capitalInfo" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-col :span="24">
          <el-form-item label="帮扶资金简述" prop="detailedCount">
            <el-input v-model="form.detailedCount" ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="详情或备注" prop="detailedCount">
            <el-input
              type="textarea"
              :rows="3"

              v-model="textarea">
            </el-input>
          </el-form-item>
        </el-col>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel1('form')">返回</el-button>
      </div>
    </el-dialog>



  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ElCol from "element-ui/packages/col/src/col"
  export default {
    components: { ElCol },
    name: 'vgeDetailed',
    data() {
      return {
        textarea: '',
        options: [
          {
            value: '选项1',
            label: '嘎查村'
          }, {
            value: '选项2',
            label: '其他村'
          },{
            value: '选项3',
            label: '全国各地'
          }
        ],
        options1: [
          {
            value: '选项1',
            label: '建设'
          }, {
            value: '选项2',
            label: '消防'
          }, {
            value: '选项3',
            label: '贫困补贴'
          }, {
            value: '选项4',
            label: '全部'
          }
        ],
        form: {
        detailedId : undefined,        createDate : undefined,        detailedType : undefined,        villageName : undefined,        villageCode : undefined,        capitalInfo : undefined , detailedCount : undefined         },
        form1: {
          detailedId : undefined,        createDate : undefined,        detailedType : undefined,        villageName : undefined,        villageCode : undefined,        capitalInfo : undefined , detailedCount : undefined         },
        rules: {
    detailedId: [
  {
    required: true,
    message: '请输入创建人id',
    trigger: 'blur'
  },
  {
    min: 3,
    max: 20,
    message: '长度在 3 到 20 个字符',
    trigger: 'blur'
  }
],
 createDate: [
  {
    required: true,
    message: '请输入创建日期',
    trigger: 'blur'
  },
//   {
//     min: 0,
//     max: 20,
//     message: '长度在 3 到 20 个字符',
//     trigger: 'blur'
//   }
],
detailedType: [
  {
    required: true,
    message: '请输入流入类型：0资金 1物资',
    trigger: 'blur'
  },
  {
    min: 0,
    max: 20,
    message: '长度在 3 到 20 个字符',
    trigger: 'blur'
  }
],
          villageName: [
  {
    required: true,
    message: '请输入嘎查村名字',
    trigger: 'blur'
  },
  {
    min: 3,
    max: 20,
    message: '长度在 3 到 20 个字符',
    trigger: 'blur'
  }
],   villageCode: [
  {
    required: true,
    message: '请输入嘎查村编号（id）',
    trigger: 'blur'
  },
  {
    min: 3,
    max: 20,
    message: '长度在 3 到 20 个字符',
    trigger: 'blur'
  }
],
          capitalInfo: [
  {
    required: true,
    message: '请输入资金用途（物资用途）详细到用在什么地方',
    trigger: 'blur'
  },
  {
    min: 3,
    max: 20,
    message: '长度在 3 到 20 个字符',
    trigger: 'blur'
  }
],detailedCount: [
  {
    required: true,
    message: '请输入数量',
    trigger: 'blur'
  },
  {
    min: 0,
    max: 20,
    message: '长度在 0 到 20 个字符',
    trigger: 'blur'
  }
]        },
        rules1: {},
        list: [
          {
            detailedId:'嘎查',
            detailedType: 1000,
            villageName: 900,
            capitalInfo: 100,
          },
          {
            detailedId:'嘎查',
            detailedType: 1000,
            villageName: 900,
            capitalInfo: 100,
          },
          {
            detailedId:'嘎查',
            detailedType: 1000,
            villageName: 900,
            capitalInfo: 100,
          },
          {
            detailedId:'嘎查',
            detailedType: 1000,
            villageName: 900,
            capitalInfo: 100,
          }
        ],
        list1: [
          {
            detailedId:'张三',
            detailedCount:'支出',
            detailedType: 1000,
            villageName: '道路整修',
            createDate: '2018/01/01',
          },
          {
            detailedId:'李四',
            detailedCount:'申请拨款',
            detailedType: 1000,
            villageName: '道路整修',
            createDate: '2018/01/01',
          },
          {
            detailedId:'王五',
            detailedCount:'申请拨款',
            detailedType: 1000,
            villageName: '道路整修',
            createDate: '2018/01/01',
          },
          {
            detailedId:'小六',
            detailedCount:'申请拨款',
            detailedType: 1000,
            villageName: '道路整修',
            createDate: '2018/01/01',
          }
        ],

        total: null,
        listLoading: false,
        listQuery: {
          page: 1,
          limit: 10,
          name: undefined
        },
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogStatus: '',
        vgeDetailedManager_btn_edit: true,
        vgeDetailedManager_btn_del: true,
        vgeDetailedManager_btn_edit1: true,
        vgeDetailedManager_btn_del1: true,
        vgeDetailedManager_btn_add: true,
        textMap: {
          create: '创建'
        },
        tableKey: 0
      }
    },
    created() {
      //this.getList();
      // this.vgeDetailedManager_btn_edit = this.elements['vgeDetailedManager:btn_edit'];
      // this.vgeDetailedManager_btn_del = this.elements['vgeDetailedManager:btn_del'];
      // this.vgeDetailedManager_btn_add = this.elements['vgeDetailedManager:btn_add'];
    },
    // computed: {
    //   ...mapGetters([
    //     'elements'
    //   ])
    // },
    methods: {
      getList() {
        this.listLoading = true
        page(this.listQuery)
            .then(response => {
              //console.log(response.data.data)
          this.list = response.data.data.rows
        this.total = response.data.data.total
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
      handleCreate() {
        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = false
      },
      handleUpdate() {
        this.dialogFormVisible = true
      },
      handleUpdate1(){
        this.dialogFormVisible = false
        this.dialogFormVisible1 = true
      },

      cancel(formName) {
        this.dialogFormVisible = false
        const set = this.$refs
        set[formName].resetFields()
      },

      cancel1(formName) {
        this.dialogFormVisible1 = false
        this.dialogFormVisible = true
        const set = this.$refs
        set[formName].resetFields()
      }
    }
  }
</script>
