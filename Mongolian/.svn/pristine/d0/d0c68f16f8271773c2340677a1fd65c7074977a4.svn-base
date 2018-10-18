<template>
    <div id="info" style="margin:0 auto">
        <IEcharts style="height:170px;width:177px;" :option="bar" :loading="loading" />
    </div>
</template>
<script>
import IEcharts from "vue-echarts-v3/src/full.js";
import { getZhiBId } from "@/utils/auth";
import store from '@/store/index'
import {
getUserJoinOrNotPeople
} from "@/api/organization/dashboard/index";
export default {
    data() {
        return {
            loading: false,
            cirInfo:'0',   //已参会
            cirInfo1:"0",  //未参会
            //部门id
            uId: store.state.user.userId   
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
                        name: "会议统计",
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
                            { value: this.cirInfo, name: "已参会" },
                            { value: this.cirInfo1, name: "未参会" },
                        ]
                    }
                ],
                color: ["rgb(210,124,218)", "rgb(192,192,192)"]
            };
        }
    },
    created(){
        getUserJoinOrNotPeople(this.uId).then(response => {
            if(response !=  null){
                this.cirInfo = response[0].joinMeetPeople;
                this.cirInfo1 = response[0].donotJoinMeetPeople;
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
