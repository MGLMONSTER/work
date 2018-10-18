import request from '@/utils/request'

export function page(query) {
    return request({
        url: '/api/admin/user/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/api/admin/user',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/api/admin/user/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/api/admin/user/delUserById/' + id,
        method: 'delete'
    })
}

export function putObj(id, obj) {
    return request({
        url: '/api/admin/user/' + id,
        method: 'put',
        data: obj
    })
}


export function saveUser(obj) {
    return request({
        url: '/api/admin/user/saveUser',
        method: 'post',
        data: obj
    })
}

export function getUserList(query) {
    return request({
        url: '/api/admin/user/getUserList',
        method: 'get',
        params: query
    })
}

export function getUserById(id) {
    return request({
        url: '/api/admin/user/getUserById/' + id,
        method: 'get'
    })
}

export function getUserDetatilById(id) {
    return request({
        url: '/api/admin/portal/userInfo/' + id,
        method: 'get'
    })
}

export function updateUserById(id, obj) {
    return request({
        url: '/api/admin/user/updateUserById/' + id,
        method: 'put',
        data: obj
    })
}

export function changePassword(data) {
    return request({
        url: '/api/admin/user/changePassword',
        method: 'post',
        params: data
    })
}

/**
 * 获取党内职务
 */
export function getInnerPartyCodes() {
    return request({
        url: '/api/admin/user/getInnerPartyCodes',
        method: 'get'
    })
}