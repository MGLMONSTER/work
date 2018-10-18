const mutations = {
    ChangeUpload(state) {
        state.activeName += 1;
    },
    ChangeUpload1(state) {
        state.VShow = true
    },
    ClickingSwitch1(state) {
        state.dialogTableVisible = true;
    },
    ChangePrimary(state) {
        state.ChangeHidden = false;
        state.ShowComponent = true;
    },
    ChangeButton(state) {
        state.ChangeHidden = true;
        state.ShowComponent = false;
    },
    Change12(state) { //确定人选的信息
        state.IdentifyShow = false;
        state.BatchResults = true;
        state.BrewingCandidate11 = false;
    },
    Change112(state) { //确定人选开始会议 
        state.IdentifyShow = false;
        state.BatchResults = false;
        state.StartMeeting = true;
        state.BrewingCandidate11 = false;
    },
    planStatusId1(state, val) { //进度条的值
        state.activeName = val
    },
    planStatusId2(state, val) { //申请ID
        state.planStatusId2 = val;

    },
    ChangeUpload22(state) { //大会选举的确定人选显示
        state.ChangeHidden = false;
        state.IdentifyShow11 = true;
    },
    startId(state, val) { //换届之前的信息ＩＤ
        state.startId = val;
    },
    submitFormInfo(state) { //宣传人员批复
        state.ChangeIf = false;
        state.ChangeIfif = true;
    },
    DetermineThe(state) { //确定人选待批复

    },
    ChangeBrewingCanDy(state) {　 //点击下一步出现的审批状态
        state.ChangeBrewingCanDy = false;
        state.BatchResults = true;
        state.BrewingCanPf = true;
        state.BatchResults = false;
    },
    ChangeBrewingCanDy112(state) { //点击酝酿等待批复的下一步
        state.BrewingCandidate11 = false;
        state.IdentifyShow = true;
    },
    ChangeUpload10(state) { //后续工作，总结材料的总结，材料归档
        state.VShow2 = false;
        state.VShow1 = false;
        state.VShow3 = true;
    },
    ChangeUploadVshow(state) { //进入后续工作显示的信息
        state.VShow1 = false;
        state.VShow2 = true;
    },
    ResponseDateDate(state, val) { //开始会议的地址存储
        state.ResponseDateDate = val;
        localStorage.setItem("ResponseDateDate", val)
    },
    ResponseText(state) {
        state.ResponseText + 1;
    },
    StartTimeStatus(state, val) {
        state.StartTimeStatus = val;
    },
    Noapply(state, val) {
        state.Noapply = val;
    },
    TableDataHaveHand(state, val) {
        state.TableDataHaveHand = val;
    },
    StateComplected(state, val) {
        state.StateComplected = val
    },
    Status1(state, val) {
        state.Status1 = val
    },
    Status2(state, val) {
        state.Status2 = val
    },
    Status3(state, val) {
        state.Status3 = val
    },
    Status4(state, val) {
        state.Status4 = val
    },
    Status5(state, val) {
        state.Status5 = val
    },
    Status6(state, val) {
        state.Status6 = val
    },
    Status7(state, val) {
        state.Status7 = val
    },
    COMMITStore(state, val) {
        state.Setepss = val;
    },
    partyorgcontroller111(state, val) {
        state.partyorgcontroller111 = val;
    },
    GeneralTimeid111(state, val) {
        state.generalTimeid = val;
    },
    Active123(state, val) {
        state.Active123 = val;
    },
    GeneralTimeidCount1(state, val) { //待批复的总数
        state.GeneralTimeidCount1 = val;
    },
    TableDataHaveHandCount(state, val) { //进行中的信息展示
        state.TableDataHaveHandCount = val
    },
    StateComplectedCount1(state, val) { //已完成的信息的数量
        state.StateComplectedCount1 = val
    },
    Active124(state, val) {
        state.Active123 = val
    },
    Active125(state, val) {
        state.Active123 = val
    },
    Active126(state, val) {
        state.Active123 = val
    },
    tableDataLength123(state, val) {
        state.tableDataLength123 = val;
    },
    SexInfoinfo(state, val) {
        state.SexInfoinfo = val;
    }
}
export default mutations