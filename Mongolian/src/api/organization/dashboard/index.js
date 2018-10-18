import request from '@/utils/request'

// 查询月度党支部委员会和党小组会
export function getMemberAndLecture(deptId) {
  return request({
    url: '/api/olt/dashBoard/getMemberAndLecture/' + deptId,
    method: 'get',
  })
}

//查询月度党支部委员会和党小组会
export function getBranchAndMeetGroup(deptId) {
  return request({
    url: '/api/olt/dashBoard/getBranchAndMeetGroup/' + deptId,
    method: 'get',
  })
}

//查询所有会议类型次数
export function getAllMeetingNumber(deptId) {
  return request({
    url: '/api/olt/dashBoard/getAllMeetingNumber/' + deptId,
    method: 'get',
  })
}

//查询以参会未参会人员数目
export function getJoinOrNotPeople(deptId) {
  return request({
    url: '/api/olt/dashBoard/getJoinOrNotPeople/' + deptId,
    method: 'get',
  })
}

//会议提醒
export function getMessageVoInDashboard(query) {
  return request({
    url: '/api/olt/dashBoard/getMessageVoInDashboard',
    method: 'get',
    params: query
  })
}

//最新评论
export function getResultInDashboard(query) {
  return request({
    url: '/api/olt/dashBoard/getResultInDashboard',
    method: 'get',
    params: query
  })
}

//用户页查询所有会议类型次数
export function getUserAllMeetingNumber(uId) {
  return request({
    url: '/api/olt/dashBoard/getUserAllMeetingNumber/' + uId,
    method: 'get',
  })
}

//用户页查询以参会未参会人员数目
export function getUserJoinOrNotPeople(uId) {
  return request({
    url: '/api/olt/dashBoard/getUserJoinOrNotPeople/' + uId,
    method: 'get',
  })
}

//用户页会议提醒
export function getUserMessageVoInDashboard(query) {
  return request({
    url: '/api/olt/dashBoard/getUserMessageVoInDashboard',
    method: 'get',
    params: query
  })
}

//用户页我的评论
export function getUserResultInDashboard(query) {
  return request({
    url: '/api/olt/dashBoard/getUserResultInDashboard',
    method: 'get',
    params: query
  })
}

//用户页会议提醒
export function getUserAfterMeetInDashboard(query) {
  return request({
    url: '/api/olt/dashBoard/getUserAfterMeetInDashboard',
    method: 'get',
    params: query
  })
}

