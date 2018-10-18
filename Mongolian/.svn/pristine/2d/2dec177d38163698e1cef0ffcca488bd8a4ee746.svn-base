import request from '@/utils/request'

const prefix = '/api/tpr'
export function page(query) {
  return request({
    url: prefix + '/api/dict/pwTfOpinion/page',
    method: 'get',
    params: query
  })
}

export function addOpinionObj(obj) {
  return request({
    url: prefix + '/pwTfOpinion/saveOpinion',
    method: 'post',
    params: obj
  })
}

export function getOpinion(id) {
  return request({
    url: prefix + '/pwTfWay/getPwTfOpinion/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: prefix + '/api/dict/pwTfOpinion/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: prefix + '/api/dict/pwTfOpinion/' + id,
    method: 'put',
    data: obj
  })
}
