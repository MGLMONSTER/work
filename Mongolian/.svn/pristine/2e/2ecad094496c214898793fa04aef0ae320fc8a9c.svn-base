import request from '@/utils/request'

const prefix = '/api/tpr'
export function page(query) {
  return request({
    url: prefix + '/api/dict/pwTfWay/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: prefix + '/api/dict/pwTfWay',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: prefix + '/api/dict/pwTfWay/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: prefix + '/api/dict/pwTfWay/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: prefix + '/api/dict/pwTfWay/' + id,
    method: 'put',
    data: obj
  })
}

export function getWay(id) {
  return request({
    url: prefix + '/pwTfWay/getWay/' + id,
    method: 'get'
  })
}

export function getCoordinates(id) {
  return request({
    url: prefix + '/pwTfApply/getWay/' + id,
    method: 'get'
  })
}
