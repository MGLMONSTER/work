import request from '@/utils/request'
export function UserInfo123(userId1) {
    return request({
        url: "/api/committee/partyorgcontroller/user",
        method: "get",
        params: {
            userId: userId1
        }
    })
}
export function UserInfo124(id) {
    return request({
        url: "/api/committee/countController/zhibu/getdeptdetail",
        method: "get",
        params: {
            id
        }
    })
}
export function getTjInfo(year, id) {
    return request({
        url: "/api/olt/meetingStatic/getThreeMeetingStatic/" + year + "/" + id,
        method: "get",
    })
}