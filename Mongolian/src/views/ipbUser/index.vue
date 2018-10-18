<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item"
      			placeholder="部门编号" v-model="listQuery.deptId"> 
      </el-input>
      <el-button class="filter-item" type="primary" icon="search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" v-if="ipbUserManager_btn_add" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="edit">添加</el-button>
    </div>
    <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="id" width="65">
      <template slot-scope="scope">
        <span>{{scope.row.id}}</span>
      </template>
    </el-table-column>
        <el-table-column  align="center" label="姓名">
      <template slot-scope="scope">
        <span>{{scope.row.name}}</span>
      </template>
    </el-table-column>
        <el-table-column  align="center" label="部门名称">
      	<template slot-scope="scope">
        <span>{{scope.row.deptName}}</span>
      	</template>
    	</el-table-column>
        <el-table-column  align="center" label="民族">
      <template slot-scope="scope">
        <span>{{scope.row.mz}}</span>
      </template>
    </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" width="150"> <template slot-scope="scope">
        <el-button v-if="ipbUserManager_btn_edit" size="small" type="success" @click="handleUpdate(scope.row)">编辑
        </el-button>
        <el-button v-if="ipbUserManager_btn_del" size="small" type="danger" @click="handleDelete(scope.row)">删除
        </el-button>
      </template> </el-table-column>
    </el-table>
    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
    </el-form-item>

        <el-form-item label="部门名称" prop="deptId">
      		<!-- <el-input v-model="form.deptName" placeholder="请输入部门名称"></el-input> -->
      		<el-select v-model="form.deptId" placeholder="请选择">
    			<el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
    		</el-option>
  		</el-select>
    	</el-form-item>


        <el-form-item label="民族" prop="mz">
      		<el-input v-model="form.mz" placeholder="请输入民族"></el-input>
    	</el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('form')">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="create('form')">确 定</el-button>
        <el-button v-else type="primary" @click="update('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {
      page,
      addObj,
      getObj,
      delObj,
      putObj,
      pageAll
  } from '@/api/ipbUser/index';
  import { mapGetters } from 'vuex';
  export default {
    name: 'ipbUser',
    data() {
      return {
      	options:[],
        form: {
        name : undefined,        deptId : undefined,        mz : undefined          },
        rules: {
    name: [
  {
    required: true,
    message: '请输入姓名',
    trigger: 'blur'
  },
  {
    min: 1,
    message: '名字不能为空',
    trigger: 'blur'
  }
],   deptId: [
  {
    required: true,
    message: '请输入部门编号',
    trigger: 'blur'
  },
  {
    min: 1,
    message: '部门编号不能为空',
    trigger: 'blur'
  }
],   mz: [
  {
    required: true,
    message: '请输入民族',
    trigger: 'blur'
  },
  {
    min: 1,
    message: '民族不能为空',
    trigger: 'blur'
  }
]        },
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 20,
          deptId: undefined
        },
        dialogFormVisible: false,
        dialogStatus: '',
        ipbUserManager_btn_edit: true,
        ipbUserManager_btn_del: true,
        ipbUserManager_btn_add: true,
        textMap: {
          update: '编辑',
          create: '创建'
        },
        tableKey: 0
      }
    },
    created() {
      this.getList();
      this.ipbUserManager_btn_edit = this.elements['ipbUserManager:btn_edit'];
      this.ipbUserManager_btn_del = this.elements['ipbUserManager:btn_del'];
      this.ipbUserManager_btn_add = this.elements['ipbUserManager:btn_add'];
    },
    computed: {
      ...mapGetters([
        'elements'
      ])
    },
    methods: {
      getList() {
        this.listLoading = true;
        pageAll().then(response =>{
        	//console.log(response.data);
        	this.options = response.data;
        	console.log("options :" , this.options)
        })
        page(this.listQuery).then(response => {
        	//console.log(this.listQuery);
        	//console.log(response.data.data.rows);
          	this.list = response.data.data.rows;
	        this.total = response.data.data.total;
	        this.listLoading = false;
      	})
      },
      handleFilter() {
        this.getList();
      },
      handleSizeChange(val) {
      	console.log(val);
        this.listQuery.limit = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.getList();
      },
      handleCreate() {
        this.resetTemp();
        this.dialogStatus = 'create';
        this.dialogFormVisible = true;
      },
      handleUpdate(row) {
        getObj(row.id)
            .then(response => {
            	//console.log(response.data.data);
          this.form = response.data.data;
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
        message: '创建成功',
        type: 'success',
        duration: 2000
        });
        });
        } else {
        return false;
        }
        });
      },
      resetTemp() {
        this.form = {
          username: undefined,
          name: undefined,
          sex: '男',
          password: undefined,
          description: undefined
        };
      }
    }
  }
</script>
