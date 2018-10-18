import request from "@/utils/request"

export function ChangePhone (username,newPass){
    const data = {
        username,
        newPass
    }
    return request({
        url:"/api/admin/user/changePasswordByUsername",  
        method:"put",
        params:data
    })
}
export function Personal (username,password){
    return request({
        url:"/api/admin/user/validatePassword/"+username+"/"+password,
        method:"get",
    })
}