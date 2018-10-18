<template>
    <!--class="app-container calendar-list-container"-->
    <div class="app-table"
         style="margin-left:5px;margin-top:5px;width:auto; padding:20px;border:1px solid #f5f7fa; height:100%;">
      <div class="filter-input">
        <div style="padding:10px;margin:0px;" id="icon111">
          <ul class="UlInfo">
            <li>
              <el-tree
                ref="treeX"
                :data="data111"
                :props="defaultProps"
                accordion
                style="position:absolute;top:5px;z-index:10;"
                @node-click="handleNodeClick"
                @node-expand="NodeExoand"
                @node-collapse="NodeCollapse"
                @node-contextmenu="NodeContextMenu"
                :highlight-current="true"
              >
              </el-tree>
              <!-- @node-contextmenu="ChangeContext" -->
            </li>
            <li>
              <el-input v-model="input123"
                        placeholder="请输入内容"></el-input>
            </li>
            <li>
              <el-date-picker
                class="settimess"
                v-model="selectYear"
                type="year"
                placeholder="选择年"
                format='yyyy年度'
                value-format='yyyy/MM/dd'

              >
              </el-date-picker>
              <el-button size="small" class="filter-item" @click="ChangeButton" type="primary" icon="search">搜索</el-button>
            </li>
          </ul>
          <div style="clear:both"></div>
          <!-- <TjInfo1 :message111 = "OptionsValue"></TjInfo1> -->
          <div style="writing-mode:horizontal-tb; width: 100%;">
            <IEcharts
              :option="bar"
              :loading="loading"
              @ready.native="onReady"
              style="height:600px;margin-top:20px;"
              @click.native="onClick"
            />
            <!-- <button @click="doRandom">Random</button> -->
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  // import { getTjInfo } from "@/api/UserInfo/userInfo.js"
  import {Info1, Info2, ChangeButton12} from "@/api/TjInfo/Info.js"
  import TjInfo1 from "./TjInfo1"
  import IEcharts from 'vue-echarts-v3/src/full.js';
  import {getZhiBId, getToken} from "@/utils/auth";
  import moment from "moment"

  export default {
    data() {
      return {
        // lineChartData: lineChartData.newVisitis,
        data111: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'childList',
          label: 'name'
        },
        selectYear: "",
        value1: "",
        value123: "",
        value222: "",
        input123: "",  //组织树显示的名称
        getTjInfoV: "",
        loading: false,
        message111: [],
        message112: "",
        message114: "",
        message113: "",
        message115: "",
        handleNodeClickId12: getZhiBId(),  //组织树点击的时候的显示的信息
      }
    },
    methods: {
      //搜索显示的详细的信息
      ChangeButton() {
        let Infoage = moment(this.selectYear).format("YYYY/MM/DD");
        ChangeButton12(Infoage, this.handleNodeClickId12).then(response => {
          console.log(response);
          this.$message({
            type: "success",
            message: "搜索成功",
          })
          let arrayInfo = [];
          let arrayInfo1 = [];
          let arrayInfo2 = [];
          let arrayInfo3 = [];
          for (var i = 0; i < response.length; i++) {
            arrayInfo.push(response[i].branchNumber)
          }
          ;
          for (var i = 0; i < response.length; i++) {
            arrayInfo1.push(response[i].lectureNumber)
          }
          ;
          for (var i = 0; i < response.length; i++) {
            arrayInfo2.push(response[i].meetGroupNumber)
          }
          ;
          for (var i = 0; i < response.length; i++) {
            arrayInfo3.push(response[i].memberNumber)
          }
          ;
          this.message112 = arrayInfo;
          this.message113 = arrayInfo1;
          this.message114 = arrayInfo2;
          this.message115 = arrayInfo3;
        })
      },
      handleNodeClick(val) {
        this.input123 = val.name;
        //  console.log(val.id);
        this.handleNodeClickId12 = val.id;
        //  this.$store.commit("handleNodeClickId",val.id)
      },
      onReady(instance, ECharts) {
        console.log(instance, ECharts);
      },
      onClick(event, instance, ECharts) {
        console.log(arguments);
      },
      NodeExoand() {  //树形点击展开
        this.$store.commit("ChangeInfoTree", "4000px")
      },
      NodeCollapse() { //树形点击关闭
        this.$store.commit("ChangeInfoTree", "700px")
      },
      NodeContextMenu() {  //树形右键点击
        for (var i = 0; i < this.$refs.treeX.store._getAllNodes().length; i++) {
          this.$refs.treeX.store._getAllNodes()[i].expanded = false;
        }
        console.log("触发了");
      }
    },
    components: {
      TjInfo1,
      IEcharts,
    },
    // methods:{
    //     ChangeContext(event,array,Xz,Xzk){
    //     for(var i=0;i<this.$refs.treeX.store._getAllNodes().length;i++){
    //     this.$refs.treeX.store._getAllNodes()[i].expanded=this.isexpand;
    //     }
    //     }
    // },
    computed: {
      ZhiBIdInfoZz() {
        return this.$store.state.ZhiBIdInfoZz
      },
      ZhiBIdInfoZz111() {
        return this.$store.state.ZhiBIdInfoZz
      },
      bar() {
        return {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['支部党员大会', '党支部委员会', '党小组会', '党课']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '党课',
              type: 'line',
              stack: '总量',
              data: this.message112,
            },
            {
              name: '党小组会',
              type: 'line',
              stack: '总量',
              data: this.message113,
            },
            {
              name: '党支部委员会',
              type: 'line',
              stack: '总量',
              data: this.message114,
            },
            {
              name: '支部党员大会',
              type: 'line',
              stack: '总量',
              data: this.message115
            },
          ]
        }
      }
    },
    mounted() {
      let newYear = (new Date()).getTime();
      let newYear1 = moment(new Date()).format("YYYY/MM/DD");
      this.selectYear = newYear1.toString();
      Info1(this.ZhiBIdInfoZz).then(response => {
        this.data111 = response;
        // console.log(response)
      });
      // Info2(this.OptionsValue,this.ZhiBIdInfoZz).then(response=>{
      //     // console.log(response);
      //     let arrayInfo = [];
      //   let arrayInfo1 = [];
      //     for(var i=0;i<response.length;i++){
      //       arrayInfo.push(response[i].branchNumber)
      //     };
      //   this.getTjInfoV = arrayInfo;
      //     // console.log(this.getTjInfoV)
      // });
      Info2(this.selectYear, getZhiBId()).then(response => {
        console.log(response);
        let arrayInfo = [];
        let arrayInfo1 = [];
        let arrayInfo2 = [];
        let arrayInfo3 = [];
        for (var i = 0; i < response.length; i++) {
          arrayInfo.push(response[i].branchNumber)
        }
        ;
        for (var i = 0; i < response.length; i++) {
          arrayInfo1.push(response[i].lectureNumber)
        }
        ;
        for (var i = 0; i < response.length; i++) {
          arrayInfo2.push(response[i].meetGroupNumber)
        }
        ;
        for (var i = 0; i < response.length; i++) {
          arrayInfo3.push(response[i].memberNumber)
        }
        ;
        this.message112 = arrayInfo;
        this.message113 = arrayInfo1;
        this.message114 = arrayInfo2;
        this.message115 = arrayInfo3;
      })
    },
  }
</script>
<style scoped lang="scss">
  @import "src/styles/mongolians.scss";
  .UlInfo {
    position: relative;
    > li {
      list-style: none;
      float: left;
    }
  }

  .echarts {
    width: 400px;
    height: 400px;
  }
</style>
