import request from '@/utils/request'
import { getToken, getZhiBId } from '@/utils/auth'
export function huanjieG(remindDeptId, remindedDeptId, remindTitle, remindContent, time) {
    const data = {
        remindDeptId,
        remindedDeptId,
        remindTitle,
        remindContent,
        time,
    }
    return request({
        url: "/api/committee/cpcMessageReminding/message",
        method: "post",
        data,
    })
}
export function DownInfo(row) {
    return request({
        url: "/api/committee/cpcGeneralStart/report/preparation/materials/user/" + getZhiBId() + "/file/" + row,
        method: "get",
    })
}
export function DownInfo1(index) {
    return request({
        url: "/api/committee/cpcApply/apply/organizationPeople/" + index,
        method: "get",
    })
}
export function DownInfo2(index) {
    return request({
        url: "/api/committee/cpcApply/apply/summarize/" + index,
        method: "get",
    })
}
export function DownInfo12(row, index) {
    return request({
        url: "/api/committee/cpcGeneralStart/report/preparation/materials/user/" + row + "/file/" + index,
        method: "get",
    })
}
export function DownInfo13(DzzbId) {
    return request({
        url: "/api/committee/cpcApply/apply/organizationPeople/" + DzzbId,
        method: "get",
    })
}
export function DownInfo14(index) {
    return request({
        url: "/api/committee/cpcApply/apply/summarize/" + index,
        method: "get",
    })
}
export function DownInfoAdmin(fileName) {
    const data = {
        fileName,
    }
    return request({
        url: "/api/committee/template/downtemplate",
        method: "post",
        data,
        // headers: {
        //     'Content-Type': ''
        // }
    })
}
export function SexInfo(id) {
    return request({
        url: "/api/committee/countController/zhibu/sex/" + id, //
        method: "get",
    })
}
// export function SexInfo1(userName, passWord, name, genderCode, idCardNumber, mobilePhone) {
//     const data = {
//         userName,
//         passWord,
//         name,
//         genderCode,
//         idCardNumber,
//         mobilePhone
//     }
//     return request({
//         url: "/flow/register/addUserInfo",
//         method: "post",
//         data,
//     })
// }
export function GetForm(id) {
    return request({
        url: "/api/committee/countController/zhibu/tree/all",
        method: "get",
        params: {
            id
        }
    })
}
export function GetBranchInfo() {
    return request({
        url: "",
        method: "get",
    })
}