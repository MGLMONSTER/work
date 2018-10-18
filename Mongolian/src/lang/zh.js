export default {
  route: {
    dashboard: '首页',
    introduction: '简述',
    documentation: '文档',
    permission: '权限测试页',
    icons: '图标',
    components: '组件',
    componentIndex: '介绍',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON编辑器',
    dndList: '列表拖拽',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    charts: '图表',
    keyboardChart: '键盘图表',
    lineChart: '折线图',
    mixChart: '混合图表',
    example: '综合实例',
    Table: 'Table',
    dynamicTable: '动态Table',
    dragTable: '拖拽Table',
    inlineEditTable: 'Table内编辑',
    complexTable: '综合Table',
    treeTable: '树形表格',
    customTreeTable: '自定义树表',
    tab: 'Tab',
    form: '表单',
    createForm: '创建表单',
    editForm: '编辑表单',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: '换肤',
    clipboardDemo: 'Clipboard',
    i18n: '国际化'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    screenfull: '全屏',
    theme: '换肤'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    roles: '你的权限',
    switchRoles: '切换权限'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定',

    // 蒙文部分
    mnbegin: 'ᠡᠬᠢᠯᠡᠬᠦ', // 开始
    mnend: 'ᠲᠡᠭᠦᠰᠭᠦ', // 结束
    activitytime: 'ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ', // 活动时间
    orglife: 'ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ', // 组织生活管理
    threemeet: 'ᠭᠤᠷᠪᠠᠨ ᠬᠤᠷᠠᠯ ᠨᠢᠭᠡ ᠬᠢᠴᠢᠶᠡᠯ', // 三会一课
    zbdydh: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠨᠠᠮ ᠤᠨ ᠭᠡᠰᠢᠭᠦᠳ ᠦᠨ ᠶᠡᠬᠡ ᠬᠤᠷᠠᠯ', // 支部党员大会
    dzbwyh: 'ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ ᠦᠨ ᠵᠦᠪᠯᠡᠯ', // 党支部委员会
    dxzh: 'ᠨᠠᠮ ᠤᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠳᠤᠭᠤᠶᠢᠯᠠᠩ ᠤᠨ ᠬᠤᠷᠠᠯ', // 党校小组会
    dk: 'ᠨᠠᠮ ᠤᠨ ᠬᠢᠴᠢᠶᠡᠯ', // 党课
    zzhd: 'ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ', // 组织活动
    lxyz: 'ᠬᠣᠶᠠᠷ ᠢ ᠰᠤᠷᠤᠯᠴᠠᠵᠤ ᠨᠢᠭᠡ ᠳᠦ ᠲᠡᠩᠴᠡᠭᠦᠯᠬᠦ', // 两学一做
    ztdrhd: 'ᠭᠣᠣᠯ ᠰᠡᠳᠦᠪᠲᠦ ᠨᠠᠮ ᠤᠨ ᠡᠳᠦᠷ ᠦᠨ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ', // 主题党日活动
    mzshh: 'ᠠᠷᠠᠳᠴᠢᠯᠠᠯ ᠤᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠤᠨ ᠬᠤᠷᠠᠯ', // 民主生活会
    mbgl: 'ᠬᠡᠪ ᠬᠠᠪᠲᠠᠰᠤ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ', // 模板管理
    hddd: 'ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ ᠭᠠᠵᠠᠷ', // 活动地点
    tjfx: 'ᠪᠦᠷᠢᠳᠬᠡᠯ ᠦᠨ ᠵᠠᠳᠠᠯᠤᠯᠲᠠ', // 13.统计分析
    yfb: 'ᠨᠢᠭᠡᠨᠲᠡ ᠨᠡᠶᠢᠲᠡᠯᠡᠭᠰᠡᠨ', // 已发布
    yjsc: 'ᠨᠢᠭᠡᠨᠲᠡ ᠬᠦᠯᠢᠶᠡᠨ ᠠᠪᠤᠭᠰᠠᠨ', // 15.已接受
    hdzt: 'ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ ᠭᠣᠣᠯ ᠰᠡᠳᠦᠪ', // 16.活动主题
    selectms: 'ᠬᠤᠷᠠᠯ ᠡᠬᠢᠯᠡᠬᠦ ᠰᠠᠷ᠎ᠠ ᠶᠢ ᠰᠣᠩᠭᠣᠬᠤ', // 17.选择会议开始月
    sousu: 'ᠬᠠᠶᠢᠬᠤ', // 18.搜索
    addhd: 'ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠨᠡᠮᠡᠬᠦ', // 19.添加活动
    hdzt: 'ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ ᠭᠣᠣᠯ ᠰᠡᠳᠦᠪ', // 20.活动主题
    hdtiime: 'ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ', //  21.活动时间
    zb: ' ᠨᠠᠮ ᠤᠨ ᠡᠭᠦᠷ', // 22.支部
    hdgz: 'ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ ᠮᠥᠷᠳᠡᠯᠲᠡ', // 23.活动跟踪
    ccaoz: 'ᠠᠵᠢᠯᠯᠠᠬᠤ', //  24.操作
    zwdata: 'ᠣᠳᠣᠬᠠᠨ ᠳᠤ ᠲᠣᠭ᠎ᠠ ᠪᠠᠷᠢᠮᠲᠠ ᠦᠭᠡᠢ', // 25.暂无数据
    cyry: 'ᠣᠷᠣᠯᠴᠠᠭᠰᠠᠳ', //    26.参与人员
    lxry: 'ᠰᠤᠯᠠ ᠣᠷᠣᠯᠴᠠᠭᠰᠠᠳ ', // 27.列席人员
    starttime: 'ᠡᠬᠢᠯᠡᠬᠦ ᠴᠠᠭ', // 28.开始时间
    endtime: 'ᠲᠡᠭᠦᠰᠬᠦ ᠴᠠᠭ', // 29.结束时间
    nddd: 'ᠲᠤᠭᠤᠷᠪᠢᠨ ᠲᠣᠭᠲᠠᠭᠠᠭᠰᠠᠨ ᠭᠠᠵᠠᠷ', // 30.拟定地点
    zcr: 'ᠬᠥᠲᠥᠯᠥᠭᠴᠢ', // 31.主持人
    hyzl: 'ᠬᠤᠷᠠᠯ ᠤᠨ ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ', // 32.会议资料
    djsc: 'ᠳᠡᠪᠰᠢᠭᠦᠯᠬᠦ', // 33.点击上传
    hysm: 'ᠬᠤᠷᠠᠯ ᠤᠨ ᠲᠣᠳᠣᠷᠬᠠᠶᠢᠯᠠᠯᠲᠠ', // 34.会议说明
    quxiao: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠬᠤ', // 35.取消
    fabu: 'ᠵᠠᠷᠯᠠᠬᠤ', // 36.发布
    seletreny: 'ᠣᠷᠣᠯᠴᠠᠭᠰᠠᠳ ᠢ ᠰᠣᠩᠭᠤᠭᠠᠷᠠᠢ', // 37.请选择参与人员
    zhuant: 'ᠪᠠᠶᠢᠳᠠᠯ', // 38.状态
    tjviw: 'ᠪᠦᠷᠢᠳᠬᠡᠨ ᠵᠠᠳᠠᠯᠤᠯᠲᠠ ᠶᠢ ᠦᠵᠡᠭᠳᠡᠬᠦᠶᠢᠴᠡ ᠪᠣᠯᠭᠠᠬᠤ', // 39.统计分析可视化
    tjbd: 'ᠲᠣᠭ᠎ᠠ ᠪᠦᠷᠢᠳᠬᠡᠯ ᠦᠨ ᠵᠠᠳᠠᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠦᠰᠦᠨᠦᠭᠲᠦ', // 40.统计分析表单
    hycs: 'ᠬᠤᠷᠠᠯ ᠦᠨ ᠤᠳᠠᠭ᠎ᠠ ᠲᠣᠭ᠎ᠠ', // 41.会议次数
    ykq: 'ᠠᠵᠢᠯ ᠳᠤ ᠭᠠᠷᠬᠤ ᠵᠣᠬᠢᠰᠲᠠᠢ', // 42.应考勤
    zed: 'ᠨᠢᠭᠡᠨᠲᠡ ᠠᠵᠢᠯ ᠳᠤ ᠭᠠᠷᠤᠭᠰᠠᠨ', // 43.已考勤
    cql: 'ᠠᠵᠢᠯ ᠳ᠊ᠤ ᠭᠠᠷᠤᠭᠰᠠᠨ ᠨᠣᠷᠮ᠎ᠠ', // 44.出勤率
    qql: 'ᠠᠵᠢᠯ ᠰᠠᠭᠠᠲᠠᠭᠰᠠᠨ ᠨᠣᠷᠮ᠎ᠠ', // 45.缺勤率
    qjl: 'ᠴᠢᠯᠥᠭᠡ ᠭᠤᠶᠤᠬᠰᠠᠨ ᠨᠤᠷᠮ᠎ᠠ', // 46.请假率
    seeing: 'ᠪᠠᠶᠢᠴᠠᠭᠠᠬᠤ', // 47.查看
    mzehh: 'ᠠᠷᠠᠳᠴᠢᠯᠠᠭᠰᠠᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠤᠨ ᠬᠤᠷᠠᠯ', // 1、	民主生活会
    faqitype: 'ᠲᠥᠷᠥᠯ ᠵᠦᠢᠯ', // 2、	发起类型
    selecttype: 'ᠲᠥᠷᠥᠯ ᠵᠦᠢᠯ ᠢᠶᠡᠨ ᠰᠤᠩᠭᠤᠭᠠᠷᠠᠢ', // 3、	请选择类型
    jieshof: 'ᠬᠦᠯᠢᠶᠠᠨ ᠠᠪᠤᠭᠴᠢ ᠡᠲᠡᠭᠡᠳ', // 4、接收方
    jobry: 'ᠣᠷᠣᠯᠴᠠᠭᠴᠢ', // 5、	参与人员
    beizhu: 'ᠵᠡᠭᠦᠯᠲᠡ', // 8、	备注
    rede: 'ᠤᠩᠰᠢᠯᠭ᠎ᠠ ᠶᠢᠨ ᠪᠠᠶᠢᠳᠠᠯ', // 11.	阅读状态
    qiandaozt: 'ᠪᠦᠷᠢᠳᠬᠡᠭᠦᠯᠦᠭᠰᠡᠨ ᠪᠠᠶᠢᠳᠠᠯ', // 12.	签到状态
    creattime: 'ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ', // 13.	创建于
    pingl: 'ᠰᠢᠭᠦᠮᠵᠢ', // 14.	评 论
    printty: 'ᠳᠠᠷᠤᠮᠠᠯᠯᠠᠬᠤ', // 15.	打印
    fanhui: 'ᠪᠤᠴᠠᠬᠤ', // 16.	返回
    selecthddz: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠭᠠᠵᠠᠷ ᠢᠶᠠᠨ ᠰᠤᠩᠭᠤᠭᠠᠷᠠᠢ', // 17.	请选择活动地点
    editll: 'ᠨᠠᠶᠢᠷᠠᠭᠤᠯᠬᠤ',//18.	编辑
    tsyj: "ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠤ ᠦᠷᠭᠦᠯᠵᠢᠯᠡᠨ ᠶᠠᠪᠤᠭᠳᠠᠬᠤ ᠡᠰᠡᠬᠦ ᠶᠢ ᠳᠣᠭᠲᠠᠭᠠᠨ᠎ᠠ'ᠠᠩᠬᠠᠷᠤᠯ' ", // 19.	此操作将会发布活动, 是否继续?', '提示'
    qiandao: 'ᠨᠡᠷ᠎ᠡ ᠶᠢᠨ ᠪᠦᠷᠢᠳᠬᠡᠯ',//20.	签到
    yqiandao: 'ᠪᠦᠷᠢᠳᠬᠡᠭᠦᠯᠦᠭᠰᠡᠨ',//21.	已签
    qiandaosucc: 'ᠪᠦᠷᠢᠳᠬᠡᠭᠦᠯᠵᠦ ᠳᠡᠶᠢᠯᠦᠭᠰᠡᠨ',//22.	签到成功
    qiandaolo: 'ᠪᠦᠷᠢᠳᠬᠡᠭᠦᠯᠵᠦ ᠡᠰᠡ ᠳᠡᠶᠢᠯᠦᠭᠰᠡᠨ',//23.	签到失败
    pselemb: 'ᠬᠡᠪ ᠢᠶᠡᠨ ᠰᠤᠩᠭᠤᠭᠠᠷᠠᠢ',//27.	请选择模板
    plssele: 'ᠰᠣᠩᠭᠤᠭᠠᠷᠠᠢ', //请选择
    pinputzt: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠭᠤᠤᠯ ᠠᠭᠤᠯᠭ᠎ᠠ ᠪᠠᠨ ᠪᠢᠴᠢᠵᠦ ᠣᠷᠣᠭᠤᠯᠤᠭᠠᠴᠢ',//28.	请输入活动主题
    nextzt: 'ᠳᠣᠣᠷᠠᠲᠤ ᠱᠠᠲᠤᠨ ᠤ ᠨᠠᠮ ᠤᠨ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ',//30.	下级党组织
    sjztdwg: 'ᠳᠡᠭᠡᠳᠦ ᠱᠠᠲᠤᠨ ᠤ ᠨᠠᠮ ᠤᠨ ᠵᠣᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠨᠠᠮ ᠤᠨ ᠠᠵᠢᠯ ᠤᠨ ᠠᠵᠢᠯᠲᠠᠨ',//31.	上级党组织党务工作者
    fabsucc: 'ᠨᠡᠶᠢᠲᠡᠯᠡᠵᠡᠢ',// 32᠂ 发布成功
    hyzongji: 'ᠬᠤᠷᠠᠯ ᠤᠨ ᠳ᠋ᠦᠩᠨᠡᠯᠲᠡ',// 1  会议总结
    inputhuiy: 'ᠬᠤᠷᠠᠯ ᠦᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠢ ᠲᠠᠭᠯᠠᠬᠤ',// 2  填写会议结果
    editjl: 'ᠰᠢᠢᠳᠪᠦᠷᠢ ᠶᠢ ᠵᠠᠯᠠᠷᠠᠭᠤᠯᠬᠤ',//3  修改结论
    newhyj: 'ᠰᠢᠨ᠎ᠡ ᠬᠤᠷᠠᠯ ᠦᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ',// 4  新的会议结果
    fyihj: 'ᠬᠤᠷᠠᠯ ᠦᠨ ᠵᠡᠭᠦᠪᠦᠷᠢ', // 5  会议附件
    xiazai: 'ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ ᠪᠠᠭᠤᠯᠭᠠᠬᠤ', // 6  下载文件
    canhren: 'ᠬᠤᠷᠠᠯ ᠳᠦ ᠤᠷᠤᠯᠴᠠᠭᠰᠠᠳ', // 7  参会人员
    hdpilu: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠰᠢᠭᠦᠮᠵᠢ', // 8  活动评论
    tishy: 'ᠡᠨᠳᠡ ᠳᠤᠰ ᠤᠳᠠᠭᠠᠨ ᠦ ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠳᠦ ᠰᠢᠭᠦᠮᠵᠢ ᠦᠭᠭᠦᠭᠡᠷᠠᠢ',//9  在这里对本次活动进行评论吧
    rell: 'ᠲᠣᠳᠣᠷᠬᠠᠢ',// 10 确定
    addhdd: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠭᠠᠵᠠᠷ ᠨᠡᠮᠡᠬᠦ',//13 添加活动地点
    hdcs: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠤᠳᠠᠭ᠎ᠠ',//15 活动次数
    zhta: 'ᠪᠠᠶᠢᠳᠠᠯ',//16 状态
    qyb: 'ᠡᠬᠢᠯᠡᠨ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ', // 17 启用
    pstop: 'ᠬᠡᠷᠡᠭᠯᠡᠬᠦ ᠪᠡᠨ ᠵᠤᠭᠰᠤᠬᠤ',//18 停用
    delectd: 'ᠬᠠᠰᠤᠬᠤ',//20 删除
    hyiddi: 'ᠬᠤᠷᠠᠯ ᠤᠨ ᠭᠠᠵᠠᠷ',//21 会议地点
    pinputhddd: 'ᠬᠦᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠭᠠᠵᠠᠷ ᠢᠶᠡᠨ ᠲᠠᠭᠯᠠᠭᠠᠷᠠᠢ',//22 请输入活动地点
    creadtd: 'ᠡᠭᠦᠰᠭᠡᠨ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ',//23 创建
    addmb: 'ᠵᠠᠭᠪᠤᠷ ᠨᠡᠮᠡᠬᠦ',//24 添加模板
    hdmc: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠎ᠨᠡᠷᠡᠶᠢᠳᠦᠯ',//25 活动名称
    createus: 'ᠬᠡᠷᠡᠭᠯᠡᠭᠴᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ',//26 创建用户
    cretdtime: 'ᠪᠠᠶᠢᠭᠤᠯᠠᠭᠰᠠᠨ ᠴᠠᠭ',//27 创建时间
    editmb: 'ᠵᠠᠭᠪᠤᠷ ᠢ ᠨᠠᠶᠢᠷᠠᠭᠤᠯᠬᠤ',//28 编辑模板
    delectmb: 'ᠵᠠᠭᠪᠤᠷ ᠢ ᠬᠠᠰᠤᠬᠤ',//29 删除模板
    zdname: 'ᠪᠠᠳᠠᠭ ᠤᠨ ᠨᠡᠷᠡᠶᠢᠳᠦᠯ',//30 字段名
    selecttyp: 'ᠲᠦᠷᠦᠯ ᠵᠦᠢᠯ ᠢ ᠰᠣᠩᠭᠣᠬᠤ',//31 选择类型
    hdtype: 'ᠬᠦᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠲᠦᠷᠦᠯ ᠵᠦᠢᠯ',//32 活动类型
    slecttime: 'ᠴᠠᠭ ᠢᠶᠡᠨ ᠰᠣᠩᠭᠣᠭᠠᠷᠠᠢ',//请选择时间
    inputlxry: 'ᠰᠤᠯᠠ ᠣᠷᠣᠯᠴᠠᠭᠰᠠᠳ ᠦᠨ ᠨᠡᠷ᠎ᠡ ᠶᠢ ᠪᠢᠴᠢᠭᠡᠷᠡᠢ',//请输入列席人员
    inputzcr: 'ᠬᠥᠲᠥᠯᠦᠭᠴᠢ ᠶᠢᠨ ᠨᠡᠷ᠎ᠡ ᠶᠢ ᠪᠢᠴᠢᠭᠡᠷᠡᠢ',//请输入主持人姓名

    djsczl: 'ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ ᠢᠶᠡᠨ ᠳᠡᠪᠰᠢᠭᠦᠯᠬᠦ',//点击上传资料

    wenjm: 'ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ ᠦᠨ ᠨᠡᠷ᠎ᠡ',//文件名
    inputhysm: 'ᠬᠤᠷᠠᠯ ᠦᠨ ᠲᠣᠳᠣᠷᠬᠠᠶᠢᠯᠠᠯᠲᠠ ᠪᠡᠨ ᠪᠢᠴᠢᠭᠡᠷᠡᠢ',//请输入会议说明

    yiquxi: 'ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠪᠠ',//已取消
    sorkwj: 'ᠪᠢᠴᠢᠯᠭᠡᠨ ᠬᠤᠷᠠᠯ ᠳᠦ ᠨᠡᠪᠲᠡᠷᠡᠬᠦ',//视屏会议入口
    hdfbcg: 'ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠨᠡᠶᠢᠲᠡᠯᠡᠭᠳᠡᠪᠡ',//活动发布成功
    qidong: 'ᠡᠬᠢᠯᠡᠬᠦ',// 启动
    jieshu: 'ᠲᠡᠭᠦᠰᠬᠦ',// 结束
    yyued: 'ᠨᠢᠭᠡᠨᠲᠡ ᠦᠵᠡᠭᠰᠡᠨ',//已阅读'
    ren: 'ᠬᠦᠮᠦᠨ',//人

    weiyud: 'ᠦᠵᠡᠭᠡ ᠦᠭᠡᠢ',//未阅读

    yiqiand: 'ᠨᠡᠷ᠎ᠡ ᠪᠡᠨ ᠪᠦᠷᠢᠳᠭᠡᠭᠰᠡᠨ',//已签到
    weiqiand: 'ᠨᠡᠷ᠎ᠡ ᠪᠡᠨ ᠪᠦᠷᠢᠳᠭᠡᠭᠰᠡᠨ ᠦᠭᠡᠢ',//未签到

    readtime: 'ᠦᠵᠡᠭᠰᠡᠨ ᠴᠠᠭ',//阅读时间

    qiandtime: 'ᠨᠡᠷ᠎ᠡ ᠪᠡᠨ ᠪᠦᠷᠢᠳᠭᠡᠭᠰᠡᠨ ᠴᠠᠭ',//签到时间

    wenjian: 'ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ',//文件

    ges: '个',//个
    scshij: 'ᠳᠡᠪᠰᠢᠭᠦᠯᠦᠭᠰᠡᠨ ᠴᠠᠭ', // 上传时间

    downloade: 'ᠪᠠᠭᠤᠯᠭᠠᠬᠤ', // 下载
    hdzj: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠳ᠋ᠦᠩᠨᠡᠯᠲᠡ', // 活动总结
    pinglunr: ' ᠰᠢᠭᠦᠮᠵᠢᠯᠡᠭᠴᠢ ', // 评论人
    contexts: 'ᠠᠭᠤᠯᠭ᠎ᠠ',  // 内容
    tsxiqx: 'ᠲᠤᠰ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠨᠢ ᠡᠨᠡ ᠤᠳᠠᠭᠠᠨ ᠤ ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠢ ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠨ᠎ᠠ ᠂ ᠵᠥᠪᠰᠢᠶᠡᠷᠡᠨ᠎ᠡ ᠤᠤ ？',//1、	此操作将取消该次活动, 确认么
    tishi: 'ᠰᠠᠨᠠᠭᠤᠯᠭ᠎ᠠ',//2、	提示
    activecon: 'ᠲᠤᠰ ᠤᠳᠠᠭᠠᠨ ᠤ ᠬᠦᠳᠡᠯᠭᠡᠭᠡᠨ ᠢ ᠬᠦᠴᠦᠨ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠪᠠ',//3、	该次活动已取消
    baoliu: 'ᠲᠤᠰ ᠤᠳᠠᠭᠠᠨ ᠤ ᠬᠦᠳᠡᠯᠭᠡᠭᠡᠨ ᠨᠢ ᠬᠠᠳᠠᠭᠠᠯᠠᠭᠳᠠᠪᠠ',//4、	该次活动被保留了
    jindu: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠠᠬᠢᠴᠠ',//5、	活动进度
    hdxxmeg: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠨᠠᠷᠢᠨ ᠠᠭᠤᠯᠭ᠎ᠠ',//6、	活动详细信息
    lenghtmeg: 'ᠬᠥᠳᠡᠯᠭᠡᠭᠡᠨ ᠦ ᠭᠣᠣᠯ ᠰᠡᠳᠦᠪ ᠨᠢ 30ᠦᠰᠦᠭ ᠦᠨ ᠬᠣᠭᠣᠷᠣᠨᠳᠣ ᠪᠠᠶᠢᠬᠤ ᠬᠡᠷᠡᠭᠲᠡᠢ',//7、	活动主题长度在30个字符之内
    selecstartome: 'ᠡᠬᠢᠯᠡᠬᠦ ᠴᠠᠭ ᠢ ᠰᠣᠩᠭᠤᠭᠠᠷᠠᠢ',//8、	请选择开始时间
    selendtime: 'ᠳᠠᠭᠤᠰᠬᠤ ᠴᠠᠭ ᠢ ᠰᠣᠩᠭᠤᠭᠠᠷᠠᠢ',//9、	请选择结束时间
    pswrdlen: 'ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ ᠨᠢ ᠵᠢᠷᠭᠤᠭᠠᠨ ᠤᠷᠤᠨ ᠡᠴᠡ ᠪᠠᠭ᠎ᠠ ᠪᠠᠶᠢᠵᠤ ᠪᠣᠯᠬᠤ ᠦᠭᠡᠢ',//10、密码不能少于六位
    usermeg: 'ᠳᠠᠩᠰᠠ ᠶᠢ ᠬᠤᠭᠤᠰᠤᠨ ᠪᠠᠶᠢᠯᠭᠠᠵᠤ ᠪᠣᠯᠬᠤ ᠦᠭᠡᠢ',//11、账户不能为空
    lenghttxt: 'ᠤᠷᠲᠤ ᠨᠢ 3 ᠡᠴᠡ 20 ᠦᠰᠦᠭ ᠦᠨ ᠬᠣᠭᠤᠷᠤᠨᠲᠦ ᠪᠠᠶᠢᠬᠤ ᠬᠡᠷᠡᠭᠲᠡᠢ',//12、长度在 3 到 20 个字符

  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  }
}
