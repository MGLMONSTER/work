import request from '@/utils/request'

const prefix = '/api/tpr'
export function page(query) {
  return request({
    url: prefix + '/api/dict/pwTfTempUser/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: prefix + '/api/dict/pwTfTempUser',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: prefix + '/api/dict/pwTfTempUser/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: prefix + '/api/dict/pwTfTempUser/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: prefix + '/api/dict/pwTfTempUser/' + id,
    method: 'put',
    data: obj
  })
}

export function changeStatus(id, handle) {
  return request({
    url: prefix + '/api/dict/pwTfTempUser/' + id + '/change/' + handle,
    method: 'post'
  })
}
