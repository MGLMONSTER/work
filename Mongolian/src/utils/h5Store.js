const STORAGE_KEY = 'ipb-admin-'

export default {

  fetch(name, exp) {
    const data = localStorage.getItem(STORAGE_KEY + name)
    if (data == null) {
      return null
    }
    const dataObj = JSON.parse(data)
    if (new Date().getTime() - dataObj.time > exp) {
      // console.log('checkTime', new Date().getTime())
      // console.log(new Date().getTime() - dataObj.time)
      // console.log(new Date().getTime() - dataObj.time > exp)
      localStorage.removeItem(STORAGE_KEY + name)
      // console.log('信息已过期,正在重新获取...')
    } else {
      // console.log(new Date().getTime() - dataObj.time)
      // console.log(new Date().getTime() - dataObj.time < exp)
      // console.log('信息还能用...')
      // console.log("data="+dataObj.data)
      // console.log(JSON.parse(dataObj.data))
      const dataObjDatatoJson = dataObj.data
      return dataObjDatatoJson
    }

    // return window.JSON.parse(window.localStorage.getItem(STORAGE_KEY + name) || '[]')
  },

  save(name, obj) {
    const curTime = new Date().getTime()
    window.localStorage.setItem(STORAGE_KEY + name, window.JSON.stringify({data: obj, time: curTime }))
  },

  remove(name) {
    window.localStorage.removeItem(STORAGE_KEY + name)
  }
}
