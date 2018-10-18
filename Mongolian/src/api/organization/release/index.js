import request from '@/utils/request'

export function addTemplate(obj) {
return request({
url: '/api/olt/otlMeetTemplate',
method: 'post',
data: obj
})
}

export function putTemplate(id, mtid,obj) {
return request({
url: '/api/olt/otlMeetTemplate/upDataFieldValue/' + id + "/" +mtid,
method: 'put',
data: obj
})
}

export function getTemplate(id) {
return request({
url: '/api/olt/otlMeetTemplate/' + id,
method: 'get'
})
}

export function pageTemplate(query) {
return request({
url: '/api/olt/otlMeetTemplate/page',
method: 'get',
params: query
})
}


export function delTemplate(id) {
return request({
url: '/api/olt/otlMeetTemplate/delectEntity/' + id,
method: 'delete',
})
}

export function getElementCount() {
return request({
url: '/api/olt/otlMeetTemplate/getCount',
method: 'get'
})
}

export function putElementCount(id,obj) {
return request({
url: '/api/olt/otlMeetTemplate/updateElementCount/' + id,
method: 'put',
data: obj
})
}

export function pagePlace(query) {
return request({
url: '/api/olt/otlMeetPlace/page',
method: 'get',
params: query
})
}


export function addPlace(obj) {
return request({
url: '/api/olt/otlMeetPlace',
method: 'post',
data: obj
})
}


export function addMeetByKeyId(obj) {
return request({
url: '/api/olt/otlMeeting/getKeyIdInsert',
method: 'post',
data: obj
})
}

export function addMeetField(obj) {
return request({
url: '/api/olt/otlMeeting/insertOfMeetField',
method: 'post',
data: obj
})
}

export function page(query) {
return request({
url: '/api/olt/otlMeetType/page',
method: 'get',
params: query
})
}

export function addObj(obj) {
return request({
url: '/api/olt/otlMeetType',
method: 'post',
data: obj
})
}

export function getObj(id) {
return request({
url: '/api/olt/otlMeetType/' + id,
method: 'get'
})
}

export function delObj(id) {
return request({
url: '/api/olt/otlMeetType/' + id,
method: 'delete'
})
}

export function putObj(id, obj) {
return request({
url: '/api/olt/otlMeetType/' + id,
method: 'put',
data: obj
})
}
