<template>
    <div id="info">
        <IEcharts style="height:170px;width:177px;" :option="bar" :loading="loading" />
    </div>
</template>
<script>
import IEcharts from "vue-echarts-v3/src/full.js";
import { getZhiBId } from "@/utils/auth";
import {
getJoinOrNotPeople
} from "@/api/organization/dashboard/index";
export default {
    data() {
        return {
            loading: false,
            cirInfo: "335", //出勤
            cirInfo1: "310", //缺勤
            cirInfo2: "200",  //请假
            //部门id
            deptId: getZhiBId()            
        };
    },
    components: {
        IEcharts
    },
    computed: {
        bar() {
            return {
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                grid: {
                    x: 25,
                    y: 45,
                    x2: 5,
                    y2: 20,
                    width: "100px",
                    height: "100px",
                    borderWidth: 1
                },
                // legend: {
                //     orient: "vertical",
                //     x: "left",
                //     data: [
                //         "直接访问",
                //         "邮件营销",
                //         "联盟广告",
                //         "视频广告",
                //         "搜索引擎"
                //     ]
                // },
                series: [
                    {
                        name: "考情统计",
                        type: "pie",
                        radius: ["50%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: "center"
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: "10px",
                                    fontWeight: "bold"
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            { value: this.cirInfo, name: "出勤" },
                            { value: this.cirInfo1, name: "缺勤" },
                            { value: this.cirInfo2, name: "请假" }
                        ]
                    }
                ],
                color: ["rgb(169,216,110)", "rgb(95,174,227)", "rgb(248,16,15)"]
            };
        }
    },
    created(){
        getJoinOrNotPeople(this.deptId).then(response => {
            if(response[0]!=null){
            this.cirInfo = response[0].joinMeetPeople;
            this.cirInfo1 = response[0].donotJoinMeetPeople;
            this.cirInfo2 = 0;
            }
        })
    },
    methods: {
        // onReady(instance, ECharts) {
        //     console.log(instance, ECharts);
        // },
        // onClick(event, instance, ECharts) {
        //     console.log(arguments);
        // }
    }
};
</script>
<style scoped>
</style>
