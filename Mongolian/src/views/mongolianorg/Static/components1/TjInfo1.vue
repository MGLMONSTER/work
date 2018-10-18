<template>
  <div id="StatisticalInfo">
    <div class="charts"  style="float:left;">
    <div id="myChart11" style="width:1000px;height:500px;padding:20px"></div>
    </div>
  </div>
</template>
<script>
  import { Info1,Info2 } from "@/api/TjInfo/Info.js"
// import { ZbInfo } from "@/api/Administration/huanjieG/HjInfo.js"
// import { getZhiBId,getToken} from "@/utils/auth";
// import { Wjj123 } from "@/api/Administration/huanjieG/HjInfo"
// import Charts1 from "./Charts1.vue"
  export default {
    data(){
        return {
        StarTimeStatus:"", //时间ID
        options11:[],
        value: '',
        options12:"",
          message111:[],
          message112:"",
          message114:"",
          message113:"",
        }
    },
    mounted(options){


      Info2(this.message111,this.ZhiBIdInfoZz111).then(response=>{
        console.log(response);
        let arrayInfo = [];
        let arrayInfo1 = [];
        let arrayInfo2 = [];
        let arrayInfo3 = [];
        for(var i=0;i<response.length;i++){
          arrayInfo.push(response[i].branchNumber)
        };
        for(var i=0;i<response.length;i++){
          arrayInfo1.push(response[i].lectureNumber)
        };
        for(var i=0;i<response.length;i++){
          arrayInfo2.push(response[i].meetGroupNumber)
        };
        for(var i=0;i<response.length;i++){
          arrayInfo3.push(response[i].memberNumber)
        };
        this.message112 = arrayInfo;
        this.message113 = arrayInfo1;
        this.message114 = arrayInfo2;
        this.message115 = arrayInfo3;
        // console.log(this.message112);


    // console.log(this.StarTimeStatus)
    //
    let echarts = require('echarts/lib/echarts')//
     require('echarts/lib/chart/pie')
    // 例如：引入柱状图
    //require('echarts/lib/chart/bar');
    let chartBox=document.getElementsByClassName('charts')[0]
    let myChart11=document.getElementById('myChart11')
    function resizeCharts() {//为调整图标尺寸的方法
        myChart11.style.width=chartBox.style.width+'px'
        myChart11.style.height=chartBox.style.height+'px'
            }
     let mainChart = echarts.init(myChart11)// 基于准备好的dom，初始化echarts实例
     var option = null;
option = {
    title: {
        text: '三会一课'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['支部党员大会','党支部委员会','党小组会','党课']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'党课',
            type:'line',
            stack: '总量',
            data:this.message112,
        },
        {
            name:'党小组会',
            type:'line',
            stack: '总量',
            data:this.message113,
        },
        {
            name:'党支部委员会',
            type:'line',
            stack: '总量',
            data:this.message114,
        },
        {
            name:'支部党员大会',
            type:'line',
            stack: '总量',
            data:this.message115
        },
    ]
};

     // 使用刚指定的配置项和数据显示图表。
     if (option && typeof option === "object") {
         mainChart.setOption(option, true)
      };
      });
 },
  props:[
    'message111'
  ],
    computed:{
      ZhiBIdInfoZz111(){
        return this.$store.state.ZhiBIdInfoZz
      }
    }
//   components:{
//     Charts1
//   },
}
</script>
