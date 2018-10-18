import request from '@/utils/request'

const prefix = '/api/tpr'
export function page(query) {
  return request({
    url: prefix + '/baseUser/getListInfo',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: prefix + '/pwTfApply/transfer',
    method: 'post',
    params: obj
  })
}

export function getObj(id) {
  return request({
    url: prefix + '/baseUser/getInfoByUser/' + id,
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

export function getDescription() {
  return request({
    url: prefix + '/api/transfer/description',
    method: 'get'
  })
}

export function getConfig() {
  return request({
    url: prefix + '/pwSysConfig/getConfig',
    method: 'get'
  })
}

export function rollBack(id) {
  return request({
    url: prefix + '/baseUser/back/' + id,
    method: 'get'
  })
}

export function uploadFile() {
  return prefix + '/Upload'
}
