import Vue from "vue"
import axios from "axios"
import {getToken} from '@/utils/auth'
import {getZhiBId} from '@/utils/auth'

export const actions = {
  Noapply111({commit, state}) {
    axios({
      url: "/api/committee/partyorgcontroller/zhibu/applied/noapply?id=" + getZhiBId() + "&timeId=" + state.StartTimeStatus,
      method: "get",
      headers: {'Authorization': getToken()},
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }
}
