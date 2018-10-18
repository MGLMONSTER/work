import request from '@/utils/request'

export function fetchTree(query) {
  return request({
    url: '/api/admin/region/tree',
    method: 'get',
    params: query
  })
}

export function fetchAll() {
  return request({
    url: '/api/admin/region/all',
    method: 'get'
  })
}

export function addObj(obj) {
  return request({
    url: '/api/admin/region',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/api/admin/region/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/api/admin/region/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: '/api/admin/region/' + id,
    method: 'put',
    data: obj
  })
}

/**
 * 查找区域树
 */
export function getAreaTree() {
  return request({
    url: '/api/admin/area/selectAreaTree',
    method: 'get'
  })
}

/**
 * 根据区域id查找区域信息
 * @param id
 */
export function selectAreaById(id) {
  return request({
    url: '/api/admin/area/selectAreaById/' + id,
    method: 'get'
  })
}

/**
 * 根据区域id查找区域信息
 * @param id
 */
export function selectAreaByParentId(parentId) {
  return request({
    url: '/api/admin/area/selectAreaByParentId/' + parentId,
    method: 'get'
  })
}

/**
 * 根据区域id查找区域信息
 * @param id
 */
export function selectAreaByIdAndParentId(id, parentId) {
  return request({
    url: '/api/admin/area/selectAreaByIdAndParentId/' + id + '/' + parentId,
    method: 'get'
  })
}

/**
 * 根据区域id修改区域信息
 * @param id
 */
export function updateArea(id, obj) {
  return request({
    url: '/api/admin/area/' + id,
    method: 'put',
    data: obj
  })
}

/**
 * 根据区域id删除区域信息
 * @param id
 */
export function deleteArea(id) {
  return request({
    url: '/api/admin/area/' + id,
    method: 'delete'
  })
}

/**
 * 保存区域信息
 * @param obj
 */
export function saveArea(obj) {
  return request({
    url: '/api/admin/area',
    method: 'post',
    data: obj
  })
}

/**
 * 模糊查找区域
 * @param {区域名称} areaName 
 */
export function selectByLikeName(obj) {
  return request({
    url: '/api/admin/area/selectByLikeName',
    method: 'post',
    data: obj
  })
}