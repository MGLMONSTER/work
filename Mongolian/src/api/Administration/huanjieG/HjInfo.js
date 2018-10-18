import request from '@/utils/request'
export function Wjj123(id) {
    return request({
        url: "/api/committee/countController/zhibu/" + id,
        method: "get",
    })
}
export function ZbInfo(id, word) {
    return request({
        url: "/api/committee/countController/zhibu/tree",
        method: "get",
        params: {
            id,
            word,
        }
    })
}