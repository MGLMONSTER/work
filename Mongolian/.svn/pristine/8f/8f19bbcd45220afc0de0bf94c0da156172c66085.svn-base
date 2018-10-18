import request from '@/utils/request'

export function portalPage(query) {
return request({
url: '/api/admin/portal/page',
method: 'get',
params: query
})
}

export function portalAll() {
  return request({
    url: '/api/admin/portal/all',
    method: 'get'
  })
}

export function portalAddObj(obj) {
return request({
url: '/api/admin/portal',
method: 'post',
data: obj
})
}

export function portalGetObj(id) {
return request({
url: '/api/admin/portal/' + id,
method: 'get'
})
}

export function portalDelObj(id) {
return request({
url: '/api/admin/portal/' + id,
method: 'delete'
})
}

export function portalPutObj(id, obj) {
return request({
url: '/api/admin/portal/' + id,
method: 'put',
data: obj
})
}

export function selectByType(type) {
  return request({
    url: '/api/admin/portal/selectByType/' + type,
    method: 'get'
  })
}

/**
 * 查询portal列表
 */
export function getAllPortal() {
  return request({
    url: '/api/admin/portal/getAllPortal',
    method: 'get'
  })
}
/**
 * 新版获取入口权限
 */
export function getPortalMenus() {
  return request({
    url: '/api/admin/portal/portal/all',
    method: 'get'
  })
}
