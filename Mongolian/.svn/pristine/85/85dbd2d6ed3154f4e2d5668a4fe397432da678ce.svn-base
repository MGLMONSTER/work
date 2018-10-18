<template>
  <div class="contentStatic-container">
    <!-- <github-corner></github-corner> -->
      <div class="filter-container">

        <div class="filter-input">
        <!-- <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="关键字"> </el-input> -->
          <el-input  @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="支部名称" > </el-input>
          <el-date-picker style="width: 200px;" class="filter-item" type="date" placeholder="选择日期">
          </el-date-picker>
        <el-button class="filter-item" type="primary" icon="search" >搜索</el-button>
        </div>
      </div>

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
                 <!--  <data-card2></data-card2> -->
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
    expectedData: [500, 1000, 5500, 400, 1100,5500, 165,1000,5800,700,800,5500],
    actualData: [6430, 6582,6791,6154, 6162, 6740, 6145,6199,6360,6500,6700,6290],
    partyLecture:[100,900,6000,2000,3000,2000,700,5400,540,900,1500,4100],
    partyGroup:[7430, 5582,5791,6954, 6962, 6040, 6045,7199,7360,6500,6100,6700]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140,54, 162, 140, 145,19],
    actualData: [180, 160, 151, 106, 145, 150, 130,16,82,63,59,29]
  },
  reminds: {
    expectedData: [80, 100, 121, 104, 105, 90, 100,98,27,65,18,54],
    actualData: [120, 90, 100, 138, 142, 130, 130,61,75,54,150,186]
  },
  temas: {
    expectedData: [130, 140, 141, 142, 145, 150, 160,85,29,60,94,128],
    actualData: [120, 82, 91, 154, 162, 140, 130,89,19,150,59,47,74]
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
  @import "src/styles/mongolians.scss";
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
