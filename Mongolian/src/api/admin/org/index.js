import request from '@/utils/request'

// ======================  党组织目录  ===============================

/**
 * 根据组织id查询组织信息
 */
export function selectPartyOrgCatalogById(orgId) {
  return request({
    url: '/api/admin/partyOrgCatalog/selectPartyOrgCatalogById/' + orgId,
    method: 'get'
  })
}

/**
 * 根据组织parentId查询组织信息
 */
export function selectPartyOrgCatalogByParentId(parentId) {
  return request({
    url: '/api/admin/partyOrgCatalog/selectPartyOrgCatalogByParentId/' + parentId,
    method: 'get'
  })
}

/**
 * 获取组织树
 */
export function getPartyOrgTrees() {
  return request({
    url: '/api/admin/partyOrgCatalog/getPartyOrgTrees',
    method: 'get'
  })
}

export function catalogPage(query) {
  return request({
    url: '/api/admin/partyOrgCatalog/page',
    method: 'get',
    params: query
  })
}

export function catalogAddObj(obj) {
  return request({
    url: '/api/admin/partyOrgCatalog',
    method: 'post',
    data: obj
  })
}

export function catalogGetObj(id) {
  return request({
    url: '/api/admin/partyOrgCatalog/' + id,
    method: 'get'
  })
}

export function catalogDelObj(id) {
  return request({
    url: '/api/admin/partyOrgCatalog/' + id,
    method: 'delete'
  })
}

export function catalogPutObj(id, obj) {
  return request({
    url: '/api/admin/partyOrgCatalog/' + id,
    method: 'put',
    data: obj
  })
}

// ============================  党组织基础信息  ========================

export function baseInfoPage(query) {
  return request({
    url: '/api/admin/partyOrgBaseInfo/page',
    method: 'get',
    params: query
  })
}

export function baseInfoAll() {
  return request({
    url: '/api/admin/partyOrgBaseInfo/all',
    method: 'get',
  })
}

export function baseInfoAddObj(obj) {
  return request({
    url: '/api/admin/partyOrgBaseInfo',
    method: 'post',
    data: obj
  })
}

export function baseInfoGetObj(id) {
  return request({
    url: '/api/admin/partyOrgBaseInfo/' + id,
    method: 'get'
  })
}

export function baseInfoDelObj(id) {
  return request({
    url: '/api/admin/partyOrgBaseInfo/' + id,
    method: 'delete'
  })
}

export function baseInfoPutObj(id, obj) {
  return request({
    url: '/api/admin/partyOrgBaseInfo/' + id,
    method: 'put',
    data: obj
  })
}

// ============================  党组织扩展信息  =============================

export function ExtendInfoPage(query) {
  return request({
    url: '/api/admin/partyOrgExtendInfo/page',
    method: 'get',
    params: query
  })
}

export function ExtendInfoAddObj(obj) {
  return request({
    url: '/api/admin/partyOrgExtendInfo',
    method: 'post',
    data: obj
  })
}

export function ExtendInfoGetObj(id) {
  return request({
    url: '/api/admin/partyOrgExtendInfo/' + id,
    method: 'get'
  })
}

export function ExtendInfoDelObj(id) {
  return request({
    url: '/api/admin/partyOrgExtendInfo/' + id,
    method: 'delete'
  })
}

export function ExtendInfoPutObj(id, obj) {
  return request({
    url: '/api/admin/partyOrgExtendInfo/' + id,
    method: 'put',
    data: obj
  })
}

// =============================  党组织单位性质类别  ================================
export function OrgProperyPage(query) {
  return request({
    url: '/api/admin/partyOrgProperyType/page',
    method: 'get',
    params: query
  })
}

export function OrgProperyAddObj(obj) {
  return request({
    url: '/api/admin/partyOrgProperyType',
    method: 'post',
    data: obj
  })
}

export function OrgProperGgetObj(id) {
  return request({
    url: '/api/admin/partyOrgProperyType/' + id,
    method: 'get'
  })
}

export function OrgProperyDelObj(id) {
  return request({
    url: '/api/admin/partyOrgProperyType/' + id,
    method: 'delete'
  })
}

export function OrgProperyPutObj(id, obj) {
  return request({
    url: '/api/admin/partyOrgProperyType/' + id,
    method: 'put',
    data: obj
  })
}



export function addPartyOrgCatalog(obj) {
  return request({
    url: '/api/admin/partyOrgCatalog/addPartyOrgCatalog',
    method: 'post',
    data: obj
  })
}

/**
 * 获取中组部组织类别
 */
export function getOrgTypeCode() {
  return request({
    url: '/api/admin/cdpTbOrgTypeCode/getOrgTypeCode',
    method: 'get'
  })
}

/**
 * 模糊查询组织列表
 * @param {组织名称} name 
 */
export function getOrgCodeLikeName(name) {
  return request({
    url: '/api/admin/partyOrgBaseInfo/getOrgCodeLikeName?name='+name,
    method: 'get'
  })
}

/**
 * 修改组织基本信息和目录信息
 * @param {组织基础信息和目录信息对象} obj 
 */
export function updatePartyOrgInfo(obj) {
  return request({
    url: '/api/admin/partyOrgBaseInfo/updatePartyOrgInfo',
    method: 'put',
    data: obj
  })
}


/**
 * 删除组织信息
 * @param {组织id} id 
 */
export function deletePartyOrg(id) {
  return request({
    url: '/api/admin/partyOrgBaseInfo/deletePartyOrg/' + id,
    method: 'delete'
  })
}