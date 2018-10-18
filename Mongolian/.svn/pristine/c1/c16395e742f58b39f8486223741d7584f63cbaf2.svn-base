<template>
  <div class="contentStatic-container">
    <github-corner></github-corner>

    <el-container style="border:1px solid #eee;">
        <el-aside width="325px">
            <div class="chart-wrapper">
                <Information-card></Information-card>
            </div>
             <div class="chart-wrapper">
                <icon-card @handleSetLineChartData="handleSetLineChartData"></icon-card>
            </div>
        </el-aside>
        <el-main style="padding:0px 20px 20px">
            <div class="chart-wrapper">
                <static-card :chart-data="lineChartData"></static-card>
            </div>
            <div class="chart-wrapper" style="margin-bottom:10px;padding-bottom:20px;">
              <el-row class="Icon-card" :gutter="10">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="card-panel-col">
                  <data-card1></data-card1>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="card-panel-col">
                  <data-card2></data-card2>
                </el-col>
              </el-row>
            </div>
            <div class="chart-wrapper" style="margin-bottom:0px;padding:5px;">
                <Manage></Manage>
            </div>
        </el-main>
    </el-container>
  </div>
</template>
<script>
import GithubCorner from '@/components/GithubCorner'
import InformationCard from './InformationCard'
import IconCard from './IconCard'
import StaticCard from './StaticCard'
import Manage from './Manage'
import DataCard1 from './DataCard1'
import DataCard2 from './DataCard2'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
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
  name: 'contentStatic',
  components: {
    GithubCorner,
    InformationCard,
    IconCard,
    StaticCard,
    DataCard1,
    DataCard2,
    Manage
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.contentStatic-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 15px;
  }
}
</style>
