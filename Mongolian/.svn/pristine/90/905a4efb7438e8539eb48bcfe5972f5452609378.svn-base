import request from '@/utils/request'

export function page(query) {
return request({
url: '/api/olt/otlMeeting/messageVo',
method: 'get',
params: query
})
}

export function addObj(obj) {
return request({
url: '/api/olt/otlMeeting',
method: 'post',
data: obj
})
}

export function getObj(id) {
return request({
url: '/api/olt/otlMeeting/vo/' + id,
method: 'get'
})
}

export function delObj(id) {
return request({
url: '/api/olt/otlMeeting/' + id,
method: 'delete'
})
}

export function putObj(id, obj) {
return request({
url: '/api/olt/otlMeeting/' + id,
method: 'put',
data: obj
})
}

export function putState(mid,uid,obj){
return request({
url: '/api/olt/otlMeetPeople/upDateSign/' + mid + '/' + uid,
method: 'put',
data: obj
})
}


export function pagState(query){
return request({
url: '/api/olt/otlMeetPeople/page',
method: 'get',
params: query
})
}

export function ompPage(query) {
return request({
url: '/api/olt/otlMeetPeople/page',
method: 'get',
params: query
})
}

export function getState(mid,uid){
return request({
url: '/api/olt/otlMeeting/getPeopleState/'+mid+'/'+uid,
method: 'get'
})
}
//会议评论
export function addResult(obj) {
return request({
url: '/api/olt/otlMeetResult/addResult',
method: 'post',
data: obj
})
}

export function resultPage(query) {
return request({
url: '/api/olt/otlMeetResult/resultPage',
method: 'get',
params: query
})
}
//会议结果
export function getExtendInfoObj(mId) {
return request({
url: '/api/olt/otlExtendInfo/' + mId,
method: 'get'
})
}
//下载
export function downLoadList(mId) {
return request({
url: '/api/olt/file/downLoadList/' + mId,
method: 'get'
})
}
//获取下载类型数量
export function getFileTypeNum(mId) {
    return request({
        url: "/api/olt/file/getFileTypeNum/" + mId,
        method: "get"
    })
}

//获取已读未读已签未签
export function getSumReadAndSisgnin(mId) {
    return request({
        url: "/api/olt/otlMeetPeople/getSumReadAndSisgnin/" + mId,
        method: "get"
    })
}