import request from '@/utils/request'

export function page(query) {
return request({
url: '/olt/otlMeeting/page',
method: 'get',
params: query
})
}

export function addObj(obj) {
return request({
url: '/olt/otlMeeting',
method: 'post',
data: obj
})
}

export function getObj(id) {
return request({
url: '/olt/otlMeeting/' + id,
method: 'get'
})
}

export function delObj(id) {
return request({
url: '/olt/otlMeeting/' + id,
method: 'delete'
})
}

export function putObj(id, obj) {
return request({
url: '/olt/otlMeeting/' + id,
method: 'put',
data: obj
})
}
