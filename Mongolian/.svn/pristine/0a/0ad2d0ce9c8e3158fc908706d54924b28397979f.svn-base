import {
  loginByUsername,
  logout,
  getInfo,
  getMenus
} from '@/api/login'
import {
  UserInfo124
} from "@/api/UserInfo/userInfo"
import {
  Message
} from 'element-ui'
import {
  getToken,
  setToken,
  removeToken,
  setZhiBId,
  getZhiBId,
  setInfoSuccess,
  setPassWord,
  getPassWord,
  setUserName,
  setState,
  removePassword
} from '@/utils/auth'

const user = {
  state: {
    user: '',
    userId: undefined,
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    getInfoL: "",
    menus: undefined,
    menusall: undefined,
    portalmenus: undefined,
    eleemnts: undefined,
    permissionMenus: undefined,
    setting: {
      articlePlatform: []
    },
    setDeptId: "",
    setZbInfo: "",
    setPasswordInfo: "",
    currentMenuCode: undefined,
    currentMenu: undefined,
  },

  mutations: {
    SET_ZHIBUID: (state, id) => {
      state.zhiBuId = id;
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus
    },
    SET_MENUS_ALL: (state, menusall) => {
      state.menusall = menusall
    },
    SET_PORTAL_MENUS: (state, portalmenus) => {
      state.portalmenus = portalmenus
    },
    SET_ELEMENTS: (state, elements) => {
      state.elements = elements
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = ''
    },
    SET_PERMISSION_MENUS: (state, val) => {
      state.permissionMenus = val;
    },
    SET_DeptId: (state, val) => {
      state.setDeptId = val;
    },
    SET_ZbInfo: (state, val) => {
      state.setZbInfo = val;
    },
    SET_GETINFOY(state, val) { //用户信息
      state.getInfoL = val;
    },
    SET_LOCALSTRONG(state, val) { //用户的密码
      state.localstrong = val;
    },
    SETPASSWORDINFO(state, val) {
      state.setPasswordInfo = val;
    },
    SET_CURRENTMENUCODE(state, val) {
      state.currentMenuCode = val;
    },
    SET_CURRENTMENU(state, val) {
      state.currentMenu = val;
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({
                      commit
                    }, userInfo) {
      const username = userInfo.username.trim()
      commit("SETPASSWORDINFO", userInfo.password);
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password, userInfo.remember).then(response => {
          const data = response
          setZhiBId(response.deptId);
          commit('SET_DeptId', response.deptId);
          if (data.access_token === '' || data.access_token === undefined) {
            Message({
              message: '账户或密码错误！',
              type: 'warning'
            })
            return Promise.reject('error')
          } else {
            const token = 'Bearer ' + data.access_token;
            setToken(token);
            if (userInfo.RememberPassword) {
              setPassWord(userInfo.password);
              setState(1);
            } else {
              if (getPassWord != null) {
                removePassword();
                setState(0);
              }
              ;

            }
            setUserName(username)
            commit('SET_TOKEN', token);
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息

    GetInfo({
              commit,
              state
            }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          // console.log(response.menus);
          commit("SET_GETINFOY", response);

          UserInfo124(getZhiBId()).then(response => {
            if (response.data != undefined) {
              // console.log(response.data.porganizationDesc);
              setInfoSuccess(response.data.porganizationDesc);
              commit('SET_ZbInfo', response.data.porganizationDesc)
            }
          })
          const data = response
          commit('SET_ROLES', 'admin')
          commit('SET_NAME', data.name)
          commit('SET_USERID', data.id)
          commit('SET_AVATAR', '/static/image/portal/man.png')
          commit('SET_INTRODUCTION', data.description)
          commit('SET_MENUS_ALL', data.menus);
          const menus = {}
          for (let i = 0; i < data.menus.length; i++) {
            menus[data.menus[i].code] = true
          }
          console.log('有权限的菜单（应该不用动）', menus);
          commit('SET_MENUS', menus)
          const elements = {}
          for (let i = 0; i < data.elements.length; i++) {
            elements[data.elements[i].code] = true
          }
          commit('SET_ELEMENTS', elements)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
        getMenus(state.token).then(response => {
          commit('SET_PERMISSION_MENUS', response)
        })
      })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({
             commit,
             state
           }) {
      return new Promise((resolve, reject) => {
        const token = state.token
        commit('SET_TOKEN', '')
        logout(token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_MENUS', undefined)
          commit('SET_ELEMENTS', undefined)
          commit('SET_PERMISSION_MENUS', undefined)
          commit('SET_CURRENTMENUCODE', undefined)
          commit('SET_CURRENTMENU', undefined)
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({
                commit
              }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_MENUS', undefined)
        commit('SET_ELEMENTS', undefined)
        commit('SET_PERMISSION_MENUS', undefined)
        commit('SET_CURRENTMENUCODE', undefined)
        commit('SET_CURRENTMENU', undefined)
        removeToken()
        resolve()
      })
    }

    // 动态修改权限
    // ChangeRoles({ commit }, role) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', role)
    //     setToken(role)
    //     getUserInfo(role).then(response => {
    //       const data = response.data
    //       commit('SET_ROLES', data.roles)
    //       commit('SET_NAME', data.name)
    //       commit('SET_AVATAR', data.avatar)
    //       commit('SET_INTRODUCTION', data.introduction)
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
