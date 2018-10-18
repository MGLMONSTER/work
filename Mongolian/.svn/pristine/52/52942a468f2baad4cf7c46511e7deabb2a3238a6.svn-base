import request from '@/utils/request'

const prefix = '/api/tpr'
export function page(query) {
  return request({
    url: prefix + '/pwTfApply/getlist',
    method: 'post',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: prefix + '/api/dict/pwTfApply',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: prefix + '/baseUser/getInfoByAdmin/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: prefix + '/api/dict/pwTfApply/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: prefix + '/api/dict/pwTfApply/' + id,
    method: 'put',
    data: obj
  })
}

export function check(id, handle) {
  return request({
    url: prefix + '/api/transfer/' + id + '/check/' + handle,
    method: 'post'
  })
}

export function checkWay(id) {
  return request({
    url: prefix + '/api/dict/pwTfWay/page',
    method: 'get'
    // data: {trans_id: id}
  })
}

export function getRole() {
  return request({
    url: prefix + '/pwTfApply/getRole',
    method: 'get'
  })
}
