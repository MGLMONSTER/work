import request from '@/utils/request'

const prefix = '/api/tpr'
export function deptTree(id) {
  return request({
    url: prefix + '/tbPartyOrgCatalog/getByParentId/' + id,
    method: 'get'
  })
}

export function deptTreeFilter(keyword) {
  return request({
    url: prefix + '/tbPartyOrgCatalog/selectLisk',
    method: 'post',
    params: {
      name: keyword
    }
  })
}

export function sortTree(data) {
  // 根节点
  let rootNode = null
  for (let i = 0; i < data.length; i++) {
    if (typeof (data[i].upPOrganizationCode) === 'undefined' ||
			data[i].upPOrganizationCode === 0 ||
			data[i].upPOrganizationCode == null
    ) {
      rootNode = data[i]
      data.splice(i, 1)
    }
  }
  rootNode.children = recursionTree(data, rootNode.porganizationCode)
  return rootNode
}

function recursionTree(data, rootID) {
  const childs = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].upPOrganizationCode === rootID) {
      const child = recursionTree(data, data[i].porganizationCode)
      if (child.length > 0) {
        data[i].children = child
      }

      childs.push(data[i])
      data.splice(i, 1)
    }
  }
  return childs
}
