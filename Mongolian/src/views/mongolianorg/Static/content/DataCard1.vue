<template>
    <div id="main" style="width: 100%;height:270px;"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
require('echarts/lib/component/title')
export default {
  name: 'organizationalActivity',
  data() {
    return {
      charts: '',
      opinion: ['未提醒', '正在进行', '已完成'],
      opinionData: [
        { value: 123, name: '未提醒' },
        { value: 337, name: '正在进行' },
        { value: 540, name: '已完成' }
      ]
    }
  },
  methods: {
    drawPie(id){ 
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data:this.opinion
        },       
        series: [
          {
            name:'访问来源',
            type:'pie',
            radius:['50%','70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'blod'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
        data:this.opinionData
          }
        ]
      })
    }
  },//调用
  mounted(){
    this.$nextTick(function() {
      this.drawPie('main')
    })
  }      
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
#main{
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
}
</style>
