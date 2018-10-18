import request from '@/utils/request'

const prefix = '/api/tpr'
export function page(query) {
  return request({
    url: prefix + '/api/dict/pwTfIntroduction/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: prefix + '/pwTfIntroduction/saveIntroduction',
    method: 'post',
    params: obj
  })
}

export function getIntroduce(id) {
  return request({
    url: prefix + '/pwTfWay/getPwTfIntroduction/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: prefix + '/api/dict/pwTfIntroduction/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: prefix + '/api/dict/pwTfIntroduction/' + id,
    method: 'put',
    data: obj
  })
}
