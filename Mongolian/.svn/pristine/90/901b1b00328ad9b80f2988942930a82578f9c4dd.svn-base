import request from '@/utils/request'

export function page(query) {
    return request({
        url: '/api/olt/otlMeeting/publishedPageVo',
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
        url: '/api/olt/otlMeeting/publishedMessage/' + id,
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

export function pageMeetType(query) {
    return request({
        url: '/api/olt/otlMeetType/page',
        method: 'get',
        params: query
    })
}

export function getMeetType(id) {
    return request({
        url: '/api/olt/otlMeetType/' + id,
        method: 'get'
    })
}

export function pagePlace(beginTime,deptId) {
    return request({
        url: '/api/olt/otlMeetPlace/meetPlacePage/' + beginTime + '/' + deptId,
        method: 'get'
    })
}

export function listPlace(deptId) {
    return request({
        url: '/api/olt/otlMeetPlace/meetPlace/' + deptId,
        method: 'get'
    })
}

export function addMeetByKeyId(obj) {
    return request({
        url: '/api/olt/otlMeeting/getKeyIdInsert',
        method: 'post',
        data: obj
    })
}

export function pageTemplate(query) {
    return request({
        url: '/api/olt/otlMeetTemplate/page',
        method: 'get',
        params: query
    })
}

export function addMeetField(obj) {
    return request({
        url: '/api/olt/otlMeeting/insertOfMeetField',
        method: 'post',
        data: obj
    })
}


export function pagePeoper(id) {
    return request({
        url: '/api/olt/otlMeeting/participants/' + id,
        method: 'get'
    })
}

export function addMeetPeople(tree,meetingMessage) {
    const   params = new URLSearchParams();
            let dataInfo = JSON.stringify(tree);
            params.append("tree",dataInfo);
            params.append("meetingMessage",meetingMessage);
    return request({
        url: '/api/olt/otlMeeting/insertOfMeetPeoper',
        method: 'post',
        data: params
    })
}

export function ompPage(query) {
    return request({
        url: '/api/olt/otlMeetPeople/peoplePage',
        method: 'get',
        params: query
    })
}

export function getPlace(id) {
    return request({
        url: '/api/olt/otlMeetPlace/' + id,
        method: 'get'
    })
}

export function putPlace(id, obj) {
    return request({
        url: '/api/olt/otlMeetPlace/' + id,
        method: 'put',
        data: obj
    })
}

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

export function getBeforMeetValue(lifeType,deptId) {
    return request({
        url: '/api/olt/otlMeeting/getBeforMeetValue/' + lifeType + '/' + deptId,
        method: 'get'
    })
}

export function addExtendInfoObj(obj) {
    return request({
        url: '/api/olt/otlExtendInfo',
        method: 'post',
        data: obj
    })
}

export function getExtendInfoObj(mId) {
    return request({
        url: '/api/olt/otlExtendInfo/' + mId,
        method: 'get'
    })
}
export function downloadFile(str) {
    return request({
        url: '/api/olt/otlMeeting/enclosureDownLoad/' + str,
        method: 'get'
    })
}

export function updateExtendInfoObj(obj) {
    return request({
        url: '/api/olt/otlExtendInfo/updateExtend',
        method: 'post',
        data: obj
    })
}

export function downLoadList(mId) {
    return request({
        url: '/api/olt/file/downLoadList/' + mId,
        method: 'get'
    })
}
export function DeleteInfo(id) {
    return request({
        url: "/api/olt/file/deleteLoadList/" + id,
        method: "get"
    })
}

export function getSumReadAndSisgnin(mId) {
    return request({
        url: "/api/olt/otlMeetPeople/getSumReadAndSisgnin/" + mId,
        method: "get"
    })
}

export function getFileTypeNum(mId) {
    return request({
        url: "/api/olt/file/getFileTypeNum/" + mId,
        method: "get"
    })
}
//取消会议
export function updateMeetState(row) {
    return request({
        url: "/api/olt/otlMeeting/updateMeetState",
        method: "put",
        data: row
    })
}
//打印查询参会人员
export function ompPageInfo (mid){
    return request({
        url:"/api/olt/otlMeetingApp/publishedMessage/"+mid,
        method:"get",
    })
}
export function QueryInfo (mid){
    return request({
        url:"/api/olt/otlMeetPeople/peopleList/"+mid,
        method:"get",
    })
}
