import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
/** note: submenu only apppear when children.length>=1
 *   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
 **/

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true},
  {path: '/authredirect', component: _import('login/authredirect'), hidden: true},
  {path: '/404', component: _import('errorPage/404'), hidden: true},
  {path: '/401', component: _import('errorPage/401'), hidden: true},
  { path: '/portal', component: _import('portal/index'), hidden: true },
  {path: '/register', component: _import('register/index'), hidden: true},
  {path: '/ForgetPassword', component: _import('ForgetPassword/index'), hidden: true},

  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: {title: ' ', icon: 'dashboard', noCache: true}
    }],
    hidden: true,
  },
  //组织生活用户
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'organ/dashboard',
      component: _import('mongolianorg/dashboard/index'),
      name: '首页信息',
      meta: { title: ' ', icon: 'dashboard', noCache: true }
    }],
    hidden: true,
  },
  //发展党员
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'joinparty/joinparty-description',
      component: _import('join-party/description'),
      name: '首页信息',
      meta: { title: '发展党员首页', icon: 'dashboard', noCache: true }
    }],
    hidden: true,
  },
  // 在线教育用户
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: '/onlinestudyuser-dashboard',
      component: _import('mongolianorg/dashboard/index'),
      redirect: 'http://wangxue.etkqqzhdj.gov.cn/mengwen.php/Home/Mengwen/mengwen.html#',
      name: '在线教育用户首页',
      meta: {
        title: '在线教育用户首页',
        icon: 'dashboard',
        noCache: true
      }
    }],

    hidden: true,
  },


]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

export const asyncRouterMap = [

  // 组织生活管理
  {
    path: '/mongolianorg',
    component: Layout,
    redirect: 'noredirect',
    meta: {title: 'ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ', icon: 'user'},//组织生活灌流
    name: ' ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ',
    authority: 'OtlLifeManage',
    children: [
      {
        path: 'dashboard',
        component: _import('mongolianorg/dashboard/index'),
        name: '首页信息',
        meta: { title: 'ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ  ᠦᠨ ᠲᠡᠷᠢᠭᠦᠨ ᠨᠢᠭᠤᠷ ', icon: 'dashboard', noCache: true }
      },
      {
        path: '/threeMeet',
        component: _import('mongolianorg/mgolithreeMeeting/index'),//三会一课
        // redirect: '/threeMeet/member',
        name: 'ᠭᠤᠷᠪᠠᠨ ᠬᠤᠷᠠᠯ ᠨᠢᠭᠡ ᠬᠢᠴᠢᠶᠡᠯ',
        meta: {title: 'ᠭᠤᠷᠪᠠᠨ ᠬᠤᠷᠠᠯ ᠨᠢᠭᠡ ᠬᠢᠴᠢᠶᠡᠯ', icon: 'table'},
        authority: 'threeMeet',
        children: [
          {
            path: 'member',
            component: _import('mongolianorg/mgolithreeMeeting/partyMemberConference/index'),
            name: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠳ ᠦᠨ ᠶᠡᠬᠡ ᠬᠤᠷᠠᠯ',
            meta: {title: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠳ ᠦᠨ ᠶᠡᠬᠡ ᠬᠤᠷᠠᠯ', icon: 'form'},//支部党员大会
            authority: 'member'
          },
          {
            path: 'branch',
            component: _import('mongolianorg/mgolithreeMeeting/partyBranchCommittee/index'),//党支部委员会
            name: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠵᠦᠪᠯᠡᠯ',
            meta: {title: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠵᠦᠪᠯᠡᠯ', icon: 'drag'},
            authority: 'branch'
          },
          {
            path: 'group',
            component: _import('mongolianorg/mgolithreeMeeting/partyGroupMeeting/index'),//党小组会
            name: 'ᠨᠠᠮ ᠤᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠳᠤᠭᠤᠶᠢᠯᠠᠩ ᠤᠨ ᠬᠤᠷᠠᠯ',
            meta: {title: 'ᠨᠠᠮ ᠤᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠳᠤᠭᠤᠶᠢᠯᠠᠩ ᠤᠨ ᠬᠤᠷᠠᠯ', icon: 'job'},
            authority: 'group'
          },
          {
            path: 'lecture',
            component: _import('mongolianorg/mgolithreeMeeting/partyLecture/index'),//党课
            name: 'ᠨᠠᠮ ᠤᠨ ᠬᠢᠴᠢᠶᠡᠯ',
            meta: {title: 'ᠨᠠᠮ ᠤᠨ ᠬᠢᠴᠢᠶᠡᠯ', icon: 'log'},
            authority: 'lecture'
          }]
      },
      {
        path: 'twoLearn',
        component: _import('mongolianorg/mgolitwoLearn/index'),//俩学一做
        meta: {title: 'ᠬᠣᠶᠠᠷ ᠢ ᠰᠤᠷᠤᠯᠴᠠᠵᠤ ᠨᠢᠭᠡ ᠳᠦ ᠲᠡᠩᠴᠡᠭᠦᠯᠬᠦ', icon: 'group'},
        name: 'ᠬᠣᠶᠠᠷ ᠢ ᠰᠤᠷᠤᠯᠴᠠᠵᠤ ᠨᠢᠭᠡ ᠳᠦ ᠲᠡᠩᠴᠡᠭᠦᠯᠬᠦ',
        authority: 'twoLearn',
      },
      {
        path: 'organizationActivity',
        component: _import('mongolianorg/mgoliorganizationActivity/index'),//组织活动
        meta: {title: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ', icon: 'message'},
        name: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ',
        authority: 'organizationActivity',
      },
      {
        path: 'democratic',
        component: _import('mongolianorg/mgolidemocraticLife/index'),//民主生活会
        meta: {title: 'ᠠᠷᠠᠳᠴᠢᠯᠠᠯ ᠤᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠤᠨ ᠬᠤᠷᠠᠯ', icon: 'org'},
        name: 'ᠠᠷᠠᠳᠴᠢᠯᠠᠯ ᠤᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠤᠨ ᠬᠤᠷᠠᠯ',
        authority: 'democratic',
      },
      {
        path: 'management',//
        component: _import('mongolianorg/mgolimanagement/index'),
        meta: {title: '    ', icon: 'setting'},
        name: '   ',
        authority: 'management',
      },
      {
        path: '/Admini',//模版管理
        component: _import('mongolianorg/mgolitemplateManagement/index'),
        // redirect: '/Admini/release',
        meta: {title: 'ᠬᠡᠪ ᠬᠠᠪᠲᠠᠰᠤ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ', icon: 'star'},
        name: 'ᠬᠡᠪ ᠬᠠᠪᠲᠠᠰᠤ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ',
        authority: 'Admini',
        children: [
          {
            path: 'release',
            component: _import('mongolianorg/mgolitemplateManagement/release/index'),
            meta: {title: ' ', icon: 'tab'},
            name: ' ',
            authority: 'release',
          },
          {
            path: 'place',//活动地点
            component: _import('mongolianorg/mgolitemplateManagement/meetingplace/index'),
            meta: {title: 'ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ ᠭᠠᠵᠠᠷ', icon: 'qq'},
            name: 'ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ ᠭᠠᠵᠠᠷ',
          }
        ]
      },
      // {
      //   path: 'analysis',//统计分析
      //   component: _import('mongolianorg/Static/index'),
      //   name: 'ᠪᠦᠷᠢᠳᠬᠡᠯ ᠦᠨ ᠵᠠᠳᠠᠯᠤᠯᠲᠠ',
      //   meta: {title: 'ᠪᠦᠷᠢᠳᠬᠡᠯ ᠦᠨ ᠵᠠᠳᠠᠯᠤᠯᠲᠠ', icon: 'people', noCache: true},
      //   authority: 'analysis'
      // }
    ]
  },

  // 组织生活用户
  {
    path: '/otlLifeUser',
    component: Layout,
    redirect: 'noredirect',
    meta: {title: 'ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ', icon: 'user'},//组织生活灌流
    name: '组织生活用户',
    authority: 'otlLifeUser',
    children: [
      {
        path: 'dashboard',
        component: _import('mongolianorg/dashboard/index'),
        name: '首页信息',
        meta: { title: 'ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ  ᠦᠨ ᠲᠡᠷᠢᠭᠦᠨ ᠨᠢᠭᠤᠷ ', icon: 'dashboard', noCache: true }
      },
      {
        path: '/threeMeetuser',
        component: _import('mongolianorguser/mgolithreeMeetinguser/index'),//三会一课
        // redirect: '/threeMeet/member',
        name: '三会一课',
        meta: {title: 'ᠭᠤᠷᠪᠠᠨ ᠬᠤᠷᠠᠯ ᠨᠢᠭᠡ ᠬᠢᠴᠢᠶᠡᠯ', icon: 'table'},
        authority: 'threeMeetReceived',
        children: [
          {
            path: 'memberuser',
            component: _import('mongolianorguser/mgolithreeMeetinguser/partyMemberConference/index'),
            name: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠳ ᠦᠨ ᠶᠡᠬᠡ ᠬᠤᠷᠠᠯ',
            meta: {title: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠳ ᠦᠨ ᠶᠡᠬᠡ ᠬᠤᠷᠠᠯ', icon: 'form'},//支部党员大会
            authority: 'memberReceived'
          },
          {
            path: 'branch',
            component: _import('mongolianorguser/mgolithreeMeetinguser/partyBranchCommittee/index'),//党支部委员会
            name: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠵᠦᠪᠯᠡᠯ',
            meta: {title: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠵᠦᠪᠯᠡᠯ', icon: 'drag'},
            authority: 'branchReceived'
          },
          {
            path: 'group',
            component: _import('mongolianorguser/mgolithreeMeetinguser/partyGroupMeeting/index'),//党小组会
            name: 'ᠨᠠᠮ ᠤᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠳᠤᠭᠤᠶᠢᠯᠠᠩ ᠤᠨ ᠬᠤᠷᠠᠯ',
            meta: {title: 'ᠨᠠᠮ ᠤᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠳᠤᠭᠤᠶᠢᠯᠠᠩ ᠤᠨ ᠬᠤᠷᠠᠯ', icon: 'job'},
            authority: 'groupReceived'
          },
          {
            path: 'lecture',
            component: _import('mongolianorguser/mgolithreeMeetinguser/partyLecture/index'),//党课
            name: 'ᠨᠠᠮ ᠤᠨ ᠬᠢᠴᠢᠶᠡᠯ',
            meta: {title: 'ᠨᠠᠮ ᠤᠨ ᠬᠢᠴᠢᠶᠡᠯ', icon: 'log'},
            authority: 'lectureReceived'
          }]
      },
      {
        path: 'twoLearn',
        component: _import('mongolianorguser/mgolitwoLearnuser/index'),//俩学一做
        meta: {title: 'ᠬᠣᠶᠠᠷ ᠢ ᠰᠤᠷᠤᠯᠴᠠᠵᠤ ᠨᠢᠭᠡ ᠳᠦ ᠲᠡᠩᠴᠡᠭᠦᠯᠬᠦ', icon: 'group'},
        name: 'ᠬᠣᠶᠠᠷ ᠢ ᠰᠤᠷᠤᠯᠴᠠᠵᠤ ᠨᠢᠭᠡ ᠳᠦ ᠲᠡᠩᠴᠡᠭᠦᠯᠬᠦ',
        authority: 'twoLearnReceived',
      },
      {
        path: 'organizationActivity',
        component: _import('mongolianorguser/mgoliorganizationActivityuser/index'),//组织活动
        meta: {title: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ', icon: 'message'},
        name: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ',
        authority: 'organizationActivityReceived',
      },
      {
        path: 'democratic',
        component: _import('mongolianorguser/mgolidemocraticLifeuser/index'),//民主生活会
        meta: {title: 'ᠠᠷᠠᠳᠴᠢᠯᠠᠯ ᠤᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠤᠨ ᠬᠤᠷᠠᠯ', icon: 'org'},
        name: 'ᠠᠷᠠᠳᠴᠢᠯᠠᠯ ᠤᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠤᠨ ᠬᠤᠷᠠᠯ',
        authority: 'democraticReceived',
      }]
  },
  // 组织关系转接开始
  {
    path: '/transferLyy',
    component: Layout,
    // redirect: 'noredirect',
    name: ' ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ  ᠶᠢᠨ ᠬᠠᠷᠢᠴᠠᠭ᠎ᠠ ᠪᠡᠨ ᠰᠢᠯᠵᠢᠭᠦᠯᠬᠦ',
    authority: 'transferLyy',
    meta: { title: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠠᠷᠢᠴᠠᠭ᠎ᠠ ᠪᠠᠨ ᠰᠢᠯᠵᠢᠭᠦᠯᠭᠦ ', icon: 'form', noCache: true},
    children: [{
      path: 'transferDescription',
      component: _import('transfer/description'),
      name: 'ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠦᠨ ᠶᠠᠪᠤᠴᠠ',
      authority: 'transferDescription',
      meta: {
        title: 'ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠦᠨ ᠶᠠᠪᠤᠴᠠ',
        noCache: true
      }
    },
    {
      path: 'TransferApply', // 一级链路路径地址
      component: _import('transfer/apply'), // 孩子地址真实路径不加“/”
      name: 'ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠦᠨ ᠭᠤᠶᠤᠴᠢᠯᠠᠯ ',
      authority: 'TransferApply',
      meta: {
        title: 'ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠦᠨ ᠭᠤᠶᠤᠴᠢᠯᠠᠯ ',
        noCache: true
      }
    },
    {
      path: 'CheckInfo', // 二级链路路径地址
      name: 'ᠠᠬᠢᠴᠠ ᠶᠢ ᠦᠵᠡᠬᠦ',
      component: _import('transfer/check'), // 孩子地址真实路径不加“/”
      authority: 'CheckInfo',
      meta: {
        title: 'ᠠᠬᠢᠴᠠ ᠶᠢ ᠦᠵᠡᠬᠦ', // 查询进度
        noCache: true,
      }
    },
    {
      path: 'show', // 二级链路路径地址
      name: 'transfer-show',
      component: _import('transfer/show'), // 孩子地址真实路径不加“/”
      authority: "show",
      meta: {
        title: '转接详情',
        noCache: true,
      },
      // hidden: true
    }]
  },
  {
    path: '/transfer-manage',
    component: Layout,
    redirect: 'noredirect',
    name: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠠᠷᠢᠴᠠᠭᠠᠨ ᠦ ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ ',
    icon: 'user',
    authority: 'transfer-manage',
    children: [{
      path: 'transferManageIndex',
      component: _import('transfer-manage/index'),
      name: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠠᠷᠢᠴᠠᠭᠠᠨ ᠦ ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ ',
      authority: 'transferManageIndex',
      meta: {
        title: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠠᠷᠢᠴᠠᠭᠠᠨ ᠦ ᠰᠢᠯᠵᠢᠭᠦᠯᠦᠯ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ '
      }
    },
    {
      path: 'show',
      component: _import('transfer-manage/show'),
      name: 'transfer-manage-show',
      authority: 'show',
      meta: {
        title: '转接详情' //转接详情
      },
      hidden: true
    },
    ]
  },
// 组织关系转接结束
  // {path: '*', redirect: '/404', hidden: true}

  //发展党员
{
  path: '/joinparty',
  component: Layout,
  redirect: '/joinparty',
  authority: 'joinparty',
  meta: {
    title: ' ᠨᠠᠮ  ᠳᠤ ᠡᠬᠢᠯᠡᠵᠦ ᠤᠷᠤᠬᠤ',
    icon: 'component'
  },
  children: [
    {
      path: 'joinparty-description',
      component: _import('join-party/description'),
      name: 'description',
      authority: 'joinparty-description',
      meta: {
        title: ' ᠨᠠᠮ  ᠳᠤ ᠤᠷᠤᠬᠤ ᠶᠠᠪᠤᠴᠠ ᠵᠢᠨ ᠢᠯᠡᠳᠬᠡᠯ ᠵᠢᠷᠤᠭ ',
        icon: 'component'
      }
    },
    {
      path: 'joinparty-basicInfo',
      component: _import('join-party/basicInfo'),
      name: 'joinparty',
      authority: 'joinparty-basicInfo',
      meta: {
        title: 'ᠦᠨᠳᠦᠰᠦᠨ ᠵᠠᠩᠭᠢ',
        icon: 'component'
      }
    },
    {
      path: 'joinparty-stepList',
      component: _import('join-party/step'),
      name: 'step',
      authority: 'joinparty-stepList',
      meta: {
        title: 'ᠨᠠᠮ  ᠳᠤ ᠤᠷᠤᠬᠤ ᠶᠠᠪᠤᠴᠠ',
        icon: 'component'
      }
    }

  ]
},
]
