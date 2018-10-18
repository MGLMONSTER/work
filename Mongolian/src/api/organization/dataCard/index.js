import request from '@/utils/request'

export function getPieDate(){
return request({
url:'/api/olt/echarts/getPieData',
method:'get',
})
}