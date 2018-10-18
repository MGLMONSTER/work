import request from '@/utils/request'

const prefix = '/api/tpr'
export function page(query) {
  return request({
    url: prefix + '/api/dict/pwTfReturn/page',
    method: 'get',
    params: query
  })
}

export function addReturnObj(obj) {
  return request({
    url: prefix + '/pwTfReturn/saveReturn',
    method: 'post',
    params: obj
  })
}

export function getReturn(id) {
  return request({
    url: prefix + '/pwTfWay/getPwTfReturn/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: prefix + '/api/dict/pwTfReturn/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: prefix + '/api/dict/pwTfReturn/' + id,
    method: 'put',
    data: obj
  })
}
