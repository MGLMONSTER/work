/*
 * session.js
 * sessionstorage的实现
 */
const STORAGE_KEY = 'ipb-admin-'
export default {
  getItem(key) {
    let item = sessionStorage.getItem(STORAGE_KEY + key)
    // 这点要判断是字符串还是对象
    let result = /^[{\[].*[}\]]$/g.test(item)
    if (result) {
      return JSON.parse(item)
    } else {
      return item
    }
  },
  setItem(key, value) {
    // 这点要判断是字符串还是对象
    if (typeof value == "string") {
      sessionStorage.setItem(STORAGE_KEY + key, value)
    } else {
      let item = JSON.stringify(value)
      sessionStorage.setItem(STORAGE_KEY + key, item)
    }
  },
  removeItem(key) {
    sessionStorage.removeItem(STORAGE_KEY + key)
  },
  clear() {
    sessionStorage.clear()
  },
}
