import request from '@/utils/request'


export function pageAll(query) {
  return request({
    url: '/ipbDept/all',
    method: 'get',
    params: query
  })
}

export function page(query) {
	return request({
		url: '/ipbUser/page',
		method: 'get',
		params: query
	})
}

export function addObj(obj) {
	return request({
		url: '/ipbUser',
		method: 'post',
		data: obj
	})
}

export function getObj(id) {
	return request({
		url: '/ipbUser/' + id,
		method: 'get',
	})
}

export function delObj(id) {
	return request({
		url: '/ipbUser/' + id,
		method: 'delete'
	})
	}

export function putObj(id, obj) {
	return request({
		url: '/ipbUser/' + id,
		method: 'put',
		data: obj
	})
}
