import request from '@/utils/request'
export function MessageNo(id) {
    return request({
        url: "/api/committee/cpcMessageReminding/Message/getMessages",
        method: "get",
        params: { id },
    })
}

export function MessagePage(id, page) {
    return request({
        url: "/api/committee/cpcMessageReminding/Message/getMessages",
        method: "get",
        params: { id, page }
    })
}

export function MessageStatus(id) {
    return request({
        url: "/api/committee/cpcMessageReminding/Message/detail/" + id,
        method: "get",
    })
}

export function MessageStatus11(id) {
    return request({
        url: "/api/committee/cpcMessageReminding/Message/read/all",
        method: "get",
        params: { id }
    })
}
export function UserPermission(id, page, word) {
    return request({
        url: "/api/committee/manage/auth/zhibu",
        method: "get",
        params: {
            id,
            page,
            word
        }
    })
}
export function UserInfo(id) {
    return request({
        url: "/api/committee/manage/party/person/" + id,
        method: "get"
    })
}
export function UserInfoSq(id) {
    const params = new URLSearchParams();
    params.append("id", id);
    // let data1 = JSON.stringify(this.tableData)
    // params.append("dataStr",data1)
    const data = {

    }
    return request({
        url: "/api/committee/manage/auth",
        method: "post",
        data: params,
    })
}