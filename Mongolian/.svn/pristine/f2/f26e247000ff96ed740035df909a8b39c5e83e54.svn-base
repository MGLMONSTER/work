import request from '@/utils/request'
export function Info1(id) {
    return request({
        url: "api/olt/dashBoard/getDeptTree/" + id,
        method: "get",
    })
}
export function Info2(year, id) {
    return request({
        url: "api/olt/meetingStatic/getThreeMeetingStatic/" + id,
        method: "get",
        params:{
            year
        }
    })
}

export function getAllMeetNum(year,deptid){
    return request({
        url:"api/olt/meetingStatic/getAllMeetNum/"+ deptid,
        method: "get",
        params:{year}
    })
}    


export function getVerificationCode(name, genderCode, idCardNumber, mobilePhone, passWord) {
    const data = {
        name,
        genderCode,
        idCardNumber,
        mobilePhone,
        passWord,
    }
    return request({
        url: "/api/admin/register/addUserInfo",
        method: "post",
        data,
    })
}
export function InfoPhone(phone) {
    return request({
        url: "/api/admin/register/getVerificationCode/" + phone,
        method: "get",
    })
}
export function InfoList(query) {
    return request({
        url: "/api/olt/meetingStatic/getMeetingStaticWithTree",
        method: "get",
        params: query,
    })
}
export function ChangeButton12(year, id) {
    return request({
        url: "/api/olt/meetingStatic/getThreeMeetingStatic/" + id,
        methods: "get",
        params:{
            year
        }
    })
}
export function SpeedTable (id,timeid){
    return request ({
        url:"/api/committee/countController/table/count",
        methods:"get",
        params:{
            id,
            timeid
        }
    })    
}