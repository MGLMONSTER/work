<template>
    <div id="myChart" :style="{width: '100%', height: '270px'}"></div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      //基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      //绘制图表
      myChart.setOption({
        title: { text: '组织人数' },
        tooltip: {},
        xAxis: {
          data: ["Jan", "Feb", "Mar", "Apr", "May", "June","July","Aug","Setp","Oct","Nov","Dec"]
        },
        yAxis: {},
        series: [{
          name: '人数',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 30, 40, 10, 47  ]
        }]
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
#myChart{
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
}
</style>
