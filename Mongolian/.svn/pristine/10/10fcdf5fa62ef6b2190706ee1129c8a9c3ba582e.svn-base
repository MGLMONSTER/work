<template>
  <div class="appmain-right">
    <div class="leftfa-bar">
      <!--<div class="left-bar">-->
        <!--<firstbar :routes="permission_routers" aboutfa="/Admini"></firstbar>-->
      <!--</div>-->
    </div>
    <div class='tab-div'>
      <div class='app-table'>
        <!-- v-loading.body="listLoading"  -->
        <div class="filter-input">
          <span class="input-span">    </span><br/>
          <el-input @keyup.enter.native="handleFilter" class="filter-search" v-model="listQuery.place"></el-input>
          <el-button class="filter-item" type="primary" size="small" icon="search" @click="handleFilter"><span
            style="font-size:14px;"></span></el-button>
          <el-button class="filter-item" v-if="otlMeetPlaceManager_btn_add" style="margin-left: 10px;"
                     @click="handleCreate" type="primary" size="small" icon="edit"><span style="font-size:14px;">ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠭᠠᠵᠠᠷ ᠨᠡᠮᠡᠬᠦ </span>
          </el-button>
        </div>
        <el-table :key='tableKey' :data="list" border fit highlight-current-row style=" margin-left:10px;">
          <el-table-column align="center" label="ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠭᠠᠵᠠᠷ" width='30%'>
            <template slot-scope="scope">
              <span>{{scope.row.place}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠤᠳᠠᠭ᠎ᠠ" width='30%'>
            <template slot-scope="scope">
              <span>{{scope.row.total}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="ᠪᠠᠶᠢᠳᠠᠯ " width='30%'>
            <template slot-scope="scope">
              <span v-if="scope.row.status === 0">ᠡᠬᠢᠯᠡᠨ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ </span>
              <span v-if="scope.row.status === 1"> ᠬᠡᠷᠡᠭᠯᠡᠬᠦ  ᠪᠡᠨ ᠵᠤᠭᠰᠤᠬᠤ </span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="" width="30%">
            <template slot-scope="scope">
              <el-button v-if="otlMeetPlaceManager_btn_edit" size="small" type="success"
                         @click="handleUpdate(scope.row)">ᠨᠠᠶᠢᠷᠠᠭᠤᠯᠬᠤ
              </el-button>
              <el-button v-if="otlMeetPlaceManager_btn_del" size="small" type="danger" @click="handleDelete(scope.row)">
                ᠬᠠᠰᠤᠬᠤ
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- v-show="!listLoading"  -->
        <div class="pagination-container">
          <el-pagination :page-size="listQuery.limit" :pager-count="10" layout="prev, pager, next" :total="total">
          </el-pagination>
          <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination> -->
        </div>
      </div>
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" :show-close="false"
               :close-on-click-modal="false" width="auto">

      <el-form :model="form" :rules="rules" ref="form">
        <div class="filter-input">
          <el-form-item label="ᠬᠤᠷᠠᠯ ᠤᠨ ᠭᠠᠵᠠᠷ" prop="place">
            <el-input v-model="form.place" placeholder="ᠬᠦᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠭᠠᠵᠠᠷ ᠢᠶᠡᠨ ᠲᠠᠭᠯᠠᠭᠠᠷᠠᠢ "></el-input>
          </el-form-item>
          <!-- <el-form-item label="统计" prop="total">
        <el-input v-model="form.total" placeholder="请输入统计"></el-input>
      </el-form-item> -->
          <el-form-item label="ᠪᠠᠶᠢᠳᠠᠯ " prop="status">
            <!-- <el-input v-model="form.status" placeholder="请输入状态"></el-input> -->
            <el-select class="setselect" v-model="form.status">
              <el-option v-for="item in statusOptions" :key="item.value" :label="item.status"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('form')" type="primary" size="small"></el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="create('form')" size="small">ᠲᠣᠳᠣᠷᠬᠠᠢ
        </el-button>
        <el-button v-else type="primary" @click="update('form')" size="small">ᠲᠣᠳᠣᠷᠬᠠᠢ</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  // import firstbar from '../../components/firstbar';
  import {mapGetters} from 'vuex';

  export default {
    name: 'otlMeetPlace',
    // components: {firstbar},
    data() {
      return {
        form: {
          place: undefined, total: undefined, status: undefined
        },
        statusOptions: [{value: 0, status: '启用'}, {value: 1, status: '停用'}],
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
          ], total: [
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
          ], status: [
            {
              required: true,
              message: '请选择状态',
              trigger: 'change'
            }
          ]
        },
        // list: null,
        list: [{
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 0,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 0,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 0,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 0,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        }, {
          place: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ place',
          title: 'ᠲᠤᠷᠰᠢᠯᠳᠡ  ᠶᠢᠨ  ᠳ᠋ᠠᠶᠢᠲ᠋ᠠ title',
          status: 1,
        },],
        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 20,
          place: undefined
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
    computed: {
      ...mapGetters([
        'permission_routers',
      ])
    },
    methods: {

      handleFilter() {
      },
      handleSizeChange(val) {
        this.listQuery.limit = val;
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
      },
      handleCreate() {
        this.dialogStatus = 'create';
        this.dialogFormVisible = true;
      },
      handleUpdate(row) {
        this.dialogFormVisible = true;
        this.dialogStatus = 'update';
      },
      handleDelete(row) {
      },
      cancel(formName) {
        this.dialogFormVisible = false;
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

  /* reset element-ui css */
  .el-input {
    input {
      font-size: 13pt;
      width: 40px;
      height: 200px;
      display: table-cell;
      -webkit-writing-mode: vertical-lr;
      writing-mode: vertical-lr;
      -ms-writing-mode: tb-lr;
      -o-writing-mode: vertical-lr;
      -moz-writing-mode: vertical-lr;
      font-family: 'OrhonChaganTig';
      unicode-bidi: embed;
      text-orientation: sideways-right;
      -webkit-text-orientation: sideways-right;
      -mz-text-orientation: sideways-right;
      -o-text-orientation: sideways-right;
      -ms-text-orientation: sideways-right;
      word-spacing: normal;
      word-wrap: normal;
      word-break: keep-all;
    }
  }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mongolians.scss";

  .appmain-right {
    margin-top: 10px;
  }
</style>
