<template>
  <div class="dashboard-editor-container">

    <!-- <panel-group @handleSetLineChartData="handleSetLineChartData"></panel-group> -->
    <PanelGrupInfo></PanelGrupInfo>
    <!-- <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData"></line-chart>
    </el-row> -->

  </div>
</template>

<script>
// import PanelGroup from './components/PanelGroup'
import PanelGrupInfo from "./components/PanelGrupInfo"
import LineChart from './components/LineChart'
const lineChartData = {
  newVisitis: {
    expectedData: [150,180,171,154, 162, 155, 165],
    actualData: [30, 0, 9, 26, 18, 25, 15],
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  reminds: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  temas: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'dashboard-admin',
  components: {
    // PanelGroup,
    LineChart,
    PanelGrupInfo   
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  created(){
      console.log('开始');
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  // background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
