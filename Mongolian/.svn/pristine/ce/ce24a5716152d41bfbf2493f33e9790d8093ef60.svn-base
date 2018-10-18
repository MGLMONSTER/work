<template>
  <div>
  <el-menu class="navbar" :style="width" mode="horizontal">
    <img class="navbar-icon" src="../../../styles/image/navlogo.png" style="width:600px; height:190px;margin-top:-57px;">
    <!-- <hamburger class="hamburger-container" :toggleClick="toggleSideBar"></hamburger> -->
    <!-- <breadcrumb class="breadcrumb-container"></breadcrumb> -->
    <div class="right-menu">
      <lang-select style="display:none" class="set-language"></lang-select>
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper" style="float:left" @click="UserInfo">
          <img style="width:20px;height:20px;vertical-align:middle;margin-right:5px;color:white;border-radius:50%" class="user-avatar" src="../../../styles/avatar.jpg">
          <!--avatar+'?imageView2/1/w/80/h/80'-->
          <span style="color:#EBB9B5">{{getInfo.name}}</span>
          <i style="color:#EBB9B5" class="el-icon-caret-bottom"></i>
        </div>
        <div class="iconfont111">
          <!--右侧图标-->
          <div style="float:left">
            <i @click="RouterPushHome" style="font-size:20px;color:#EBB9B5" class="iconfont icon-zhuye"></i>
          </div>
          <div @click="RouterPushInfo" class="fontSpan1" style="float:left">
            <i style="font-size:23px;color:#EBB9B5" class="iconfont icon-icon--"> </i>
            <div style="color:#EBB9B5" class="fontSpan2"></div>
          </div>
          <div style="float:left">
            <i style="font-size:20px;color:#EBB9B5" @click="logout" class="iconfont icon-hekriconkaiguan"></i>
            <div style="clear:both"></div>
          </div>
        </div>
        <div style="clear:both"></div>
        <el-dropdown-menu slot="dropdown">
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
  <!-- 点击用户信息弹出 -->
  <el-dialog title="账号设置" :modal-append-to-body="false" :visible.sync="dialogUserInfo" width="50%" :before-close="handleClose">
    <div class="Account">
      <div>
        基本信息
        <!-- <icon-svg icon-class="password" /> -->
      </div>
      <ul class="Account-Ul">
        <li>姓名
          <span>{{getInfo.name}}</span> <img class="Account-Ul-img" src="../../../styles/image/rectangle.png" alt="管理员"></li>
        <li>出生日期
          <i class="el-icon-date" style="margin-left:20px;color:#737373"></i>
          <span style="margin-left:10px;">2018-6-27</span>
        </li>
        <div style="clear:both"></div>
        <li>籍贯
          <span>内蒙古鄂尔多斯</span>
        </li>
        <li>民族
          <span>{{getInfo.peoplesCode}}</span>
        </li>
        <li>身份证号码
          <span>{{getInfo.username}}</span>
        </li>
        <li>转正式时间
          <i class="el-icon-date" style="margin-left:50px;color:#737373"></i>
          <span style="margin-left:10px">2018-6-27</span>
        </li>
        <li>党籍状态
          <span>转正</span>
        </li>
        <li>婚姻状况
          <span>
                            <el-radio v-model="radioStatus" disabled label="1">已婚</el-radio>
                            <el-radio v-model="radioStatus" disabled label="2">未婚</el-radio>
                        </span>
        </li>
        <li>电话号码
          <span>{{getInfo.mobilePhone | PhoneStatus}}</span>
          <span @click="Modify" class="span2">修改</span>
          <span class="span3">仅自己可见</span>
        </li>
        <li>邮箱账号
          <span>{{Mailbox | MailboxStatus}}</span>
          <span @click="Modify" class="span2">修改</span>
          <span class="span3">仅自己可见</span>
        </li>
        <li>当前密码
          <span>{{setPasswordInfo | PasswordStatus}}</span>
          <span @click="Modify" class="span2">修改</span>
          <span class="span3">仅自己可见</span>
        </li>
      </ul>
    </div>
    <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogUserInfo = false">确 定</el-button>
            </span>
  </el-dialog>
  <!-- 结束 -->

  <!-- 账号安全的展示/点击修改 -->
  <el-dialog title="账号安全" :visible.sync="dialogSecurity" width="45%" :before-close="handleSecurity" :modal-append-to-body="false">
    <ul class="Security-Ul-1">
      <li>
        <span class="PhoneT">电话号码</span>
        <span>您绑定的手机号码 {{PhoneInfo | PhoneStatus}}</span>
      </li>
      <li>
        <span class="PhoneT">邮箱账号</span>
        <span>您当前绑定的安全邮箱 {{Mailbox | MailboxStatus}}</span>
      </li>
      <li>
        <span class="PhoneT">修改密码</span>
        <span>密码要求至少长度超过6位 {{PasswordInfo | PasswordStatus}}</span>
      </li>
    </ul>
    <ul class="Security-Ul">
      <li>
        <el-button @click="ChangeT('phone')" type="primary">更换</el-button>
      </li>
      <li>
        <el-button @click="ChangeT('mail')" type="primary">修改</el-button>
      </li>
      <li>
        <el-button @click="ChangeT('passwod')" type="primary">修改</el-button>
      </li>
    </ul>
    <div style="clear:both"></div>
  </el-dialog>
  <!-- 结束 -->

  <!-- 账号安全/修改手机号码详情页面 -->
  <el-dialog title="账号安全" :modal-append-to-body="false" :visible.sync="dialogDetailedP" width="45%" :before-close="handleDetailedP">
    <div style="text-align:center;margin-bottom:30px;">
      修改手机号码
    </div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="150px" class="demo-ruleForm">
      <el-form-item label="原手机号" prop="PrimaryPhone">
        <el-input type="text" style="width:350px;" v-model="ruleForm2.PrimaryPhone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="新手机号" prop="newPhone">
        <el-input type="text" style="width:350px;" v-model="ruleForm2.newPhone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="Verification" style="float:left">
        <el-input v-model.number="ruleForm2.Verification" style="width:150px;"></el-input>
      </el-form-item>
      <el-button @click="SendCodeF" style="float:left;margin-left:20px;" :type="PrimType" :disabled="DisTrue">{{SendCode}}</el-button>
      <div style="clear:both"></div>
      <el-form-item>
        <el-button type="primary" style="width:339px;margin-top:20px" @click="submitForm('ruleForm2')">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <!-- 结束 -->

  <!-- 账号安全/修改邮箱详情页面 -->
  <el-dialog title="账号安全" :modal-append-to-body="false" :visible.sync="dialogDetailedM" width="45%" :before-close="handleDetailedM">
    <div style="text-align:center;margin-bottom:30px;">
      修改邮箱
    </div>
    <el-form :model="ruleForm2M" status-icon :rules="rules2M" ref="ruleForm2M" label-width="150px" class="demo-ruleForm">
      <el-form-item label="新邮箱" prop="newMail">
        <el-input type="text" style="width:350px;" v-model="ruleForm2M.newMail" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="newVerification" style="float:left">
        <el-input v-model.number="ruleForm2M.newVerification" style="width:150px;"></el-input>
      </el-form-item>
      <div class="codeInfo" @click="refreshCode">
        <SIdentify :identifyCode="identifyCode"></SIdentify>
      </div>
      <div style="clear:both"></div>
      <el-form-item style="margin-top:20px">
        <el-button type="primary" style="margin-left:50px;width:100px;" @click="submitFormM('ruleForm2M')">确定</el-button>
        <el-button style="width:100px;" plain @click="dialogDetailedM=false">返回</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <!-- 结束 -->

  <!-- 账号安全/修改密码详情页面 -->
  <el-dialog title="账号安全" :modal-append-to-body="false" :visible.sync="dialogDetailedPass" width="45%" :before-close="handleDetailedPass">
    <div style="text-align:center;margin-bottom:30px;">
      修改密码
    </div>
    <el-form :model="ruleForm2Pass" status-icon :rules="rules2Pass" ref="ruleForm2Pass" label-width="200px" class="demo-ruleForm">
      <el-form-item label="原始密码" prop="OriginalPass">
        <el-input style="width:300px" type="password" v-model="ruleForm2Pass.OriginalPass"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input style="width:300px" type="password" v-model="ruleForm2Pass.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input style="width:300px" type="password" v-model="ruleForm2Pass.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <div style="clear:both"></div>
      <el-form-item style="margin-top:20px">
        <el-button type="primary" :loading="PassLoading" style="margin-left:50px;width:100px;" @click="submitFormPass('ruleForm2Pass')">确定</el-button>
        <el-button style="width:100px;" plain @click="ClickFPassword">返回</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <!-- 结束 -->
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import Breadcrumb from "@/components/Breadcrumb";
  import Hamburger from "@/components/Hamburger";
  //  import ErrorLog from '@/components/ErrorLog'
  import Screenfull from "@/components/Screenfull";
  import LangSelect from "@/components/LangSelect";
  import ThemePicker from "@/components/ThemePicker";
  import ChagePassowrd from "./ChangePassword";
  import SIdentify from "@/components/Verification/index"; //前端邮箱验证码
  import { ChangePhone,Personal } from "@/api/Personal/index"
  export default {
    components: {
      Breadcrumb,
      Hamburger,
      //      ErrorLog,
      Screenfull,
      LangSelect,
      ThemePicker,
      ChagePassowrd,
      SIdentify
    },
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("请输入验证码!"));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (value === "") {
          callback(new Error("请输入手机号码"));
        } else {
          if (!myreg.test(value)) {
            callback(new Error("输入的手机号码格式不正确!"));
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (value === "") {
          callback(new Error("请输入手机号码"));
        } else if (!myreg.test(value)) {
          callback(new Error("输入的手机号码格式不正确!"));
        } else {
          callback();
        }
      };
      var newMailI = (rule, value, callback) => {
        var myreg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        if (!myreg.test(value)) {
          callback(new Error("输入的邮箱格式不正确!"));
        } else if (!value) {
          callback(new Error("请输入邮箱"));
        } else {
          callback();
        }
      };
      var newVerificationI = (rule, value, callback) => {
        if (!value) {
          callback(new Error("请输入验证码"));
        } else if (value != this.identifyCode) {
          callback(new Error("输入的验证码不正确!"));
        } else {
          callback();
        }
      };
      var OriginalPassI = (rule, value, callback) => {
        if (!value) {
          callback(new Error("请输入原始密码"));
        } else if(value!=""){
          Personal(this.getInfo.username,value).then(response=>{
            // console.log(response);
            if(response.status == 0){
              return callback();
            }else{
              return callback(new Error("原始密码错误！"))
            }
          })
          // return callback(new Error("原始密码错误!"));
        }else{
          callback();
        }
      };
      var passI = (rule, value, callback) => {
        let myreg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if (value === "") {
          callback(new Error("请输入密码"));
        } else if (this.ruleForm2Pass.checkPass !== "") {
          this.$refs.ruleForm2Pass.validateField("checkPass");
          callback();
        } else if (!myreg.test(value)) {
          callback(new Error("密码长度为6-20位，数字和英文字母组合"));
        } else {
          callback();
        }
      };
      var checkPassI = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm2Pass.pass) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        dialogPasswordVisible: false,
        dialogUserInfo: false,
        radioStatus: "1", //已婚，未婚
        PhoneInfo: 15148848847, //电话
        Mailbox: "851708184@qq.com", //邮箱
        PasswordInfo: "z123456", //密码
        dialogSecurity: false, //点击修改
        dialogDetailedP: false, //手机详情页面
        PassLoading:false,   //密码修改的loading
        ruleForm2: {
          PrimaryPhone: "",
          newPhone: "",
          Verification: ""
        },
        rules2: {
          PrimaryPhone: [{ validator: validatePass, trigger: "blur" }],
          newPhone: [{ validator: validatePass2, trigger: "blur" }],
          Verification: [{ validator: checkAge, trigger: "blur" }]
        },
        DisTrue: false, //手机号发送的验证码按钮
        SendCode: "发送验证码", //验证码的内容
        PrimType: "primary", //验证码按钮类型
        PhoneTime: 60, //验证码倒计时
        dialogDetailedM: false, //邮箱的显示
        ruleForm2M: {
          newMail: "",
          newVerification: ""
        },
        rules2M: {
          newMail: [{ validator: newMailI, trigger: "blur" }],
          newVerification: [
            { validator: newVerificationI, trigger: "blur" }
          ]
        },
        identifyCodes: "1234567890",
        identifyCode: "",
        dialogDetailedPass: false, //修改密码弹出的信息
        ruleForm2Pass: {
          OriginalPass: "",
          pass: "",
          checkPass: ""
        },
        rules2Pass: {
          OriginalPass: [{ validator: OriginalPassI, trigger: "blur" }],
          pass: [{ validator: passI, trigger: "blur" }],
          checkPass: [
            {
              validator: checkPassI,
              trigger: "blur"
            }
          ]
        }
      };
    },
    computed: {
      ...mapGetters(["sidebar", "name", "avatar", "getInfo","setPasswordInfo"])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch("toggleSideBar");
      },
      logout() {
        this.$store.dispatch("LogOut").then(() => {
          location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
        });
      },
      onChangePassword() {
        this.dialogPasswordVisible = true;
      },
      closePasswordDialog() {
        this.dialogPasswordVisible = false;
      },
      RouterPushHome() {
        this.$router.push({ path: "/portal" });
      },
      RouterPushInfo() {
        this.$router.push({ path: "/portal" });
      },
      UserInfo() {
        //修改用户信息
        // this.dialogUserInfo = true;
      },
      handleClose() {
        this.dialogUserInfo = false;
      },
      handleSecurity() {
        //账号安全关闭
        this.dialogSecurity = false;
      },
      Modify() {
        //点击修改
        this.dialogUserInfo = false;
        this.dialogSecurity = true;
      },
      handleDetailedP() {
        //手机详情页面
        this.dialogDetailedP = false;
      },
      ChangeT(val) {
        this.makeCode();
        //点击变换
        if (val == "phone") {
          return false;
          // this.dialogDetailedP = true;
          // this.dialogSecurity = false;
        } else if (val == "mail") {
          return false;
          // this.dialogDetailedM = true;
          // this.dialogSecurity = false;
        } else {
          this.dialogDetailedPass = true;
          this.dialogPasswordVisible = false;
        }
      },
      submitForm(formName) {
        //手机号码的表单提交
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$message({
              type: "success",
              message: "修改成功"
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      SendCodeF() {
        //手机号码验证阿妈
        this.PrimType = "info";
        this.DisTrue = true;
        let Timeout = setInterval(() => {
          if (this.PhoneTime > 1) {
            this.SendCode = this.PhoneTime + "秒后重发";
            this.PhoneTime--;
          } else {
            clearInterval(Timeout);
            this.PrimType = "primary";
            this.DisTrue = false;
            this.PhoneTime = 60;
            this.SendCode = "重新发送";
          }
        }, 1000);
      },
      submitFormM(formName) {
        //手机号码的表单提交
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$message({
              type: "success",
              message: "修改成功"
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      handleDetailedM() {
        this.dialogDetailedM = false;
      },
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ];
        }
        // console.log(this.identifyCode);
      },
      handleDetailedPass() {
        //修改密码
        this.ClearInfo();
        this.dialogDetailedPass = false;
      },
      submitFormPass(formName) {
        //密码表单提交
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.PassLoading = true;
            ChangePhone(this.getInfo.username,this.ruleForm2Pass.pass).then(response=>{
              console.log(response);
              if(response.data){
                this.$message({
                  type: "success",
                  message: "修改成功"
                });
                this.PassLoading = false;
                this.dialogSecurity = false;
                this.dialogDetailedPass = false;
              }else{
                this.$message({
                  type: "error",
                  message: "修改失败"
                });
              }
            });
          }
        });
      },
      ClearInfo(){
        this.ruleForm2Pass.OriginalPass = "";
        this.ruleForm2Pass.pass = "";
        this.ruleForm2Pass.checkPass = "";
        this.PassLoading =false;
      },
      ClickFPassword(){
        this.ClearInfo();
        this.dialogDetailedPass=false
      }
    },
    filters: {
      PhoneStatus(val) {
        return val;
        // if(val!=""){
        //     //手机号码的截取
        // let statusJ = val.toString();
        // let statusR = statusJ.replace(statusJ.substr(3, 4), "****");
        // return statusR;
        // }else{
        //     return val;
        // }
      },
      MailboxStatus(val) {
        if(val!=""){
          //邮箱的截取
          let statusJ = val.replace(val.substr(3, 4), "****");
          return statusJ;
        }else{
          return val;
        }
      },
      PasswordStatus(val) {
        if(val!=""){
          let passS = val.length;
          let arr = "";
          for (var i = 0; i < passS; i++) {
            arr += "*";
          }
          return arr;
        }else{
          return "*******";
        }
      }
    },
    mounted() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 80px;
    line-height: 80px;
    border-radius: 0px !important;
    background: #e33434;
    overflow: hidden;
    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
      color: white;
    }
    .breadcrumb-container {
      float: left;
    }
    .errLog-container {
      display: inline-block;
      vertical-align: top;
    }
    .right-menu {
      float: right;
      height: 100%;
      &:focus {
        outline: none;
      }
      .right-menu-item {
        display: inline-block;
        margin: 0 8px;
      }
      .screenfull {
        height: 20px;
      }
      .international {
        vertical-align: top;
      }
      .theme-switch {
        vertical-align: 15px;
      }
      .avatar-container {
        // height: 50px;
        // margin-right: 30px;
        .avatar-wrapper {
          cursor: pointer;
          // margin-top: 5px;
          // position: relative;
          // .user-avatar {
          //   width: 40px;
          //   height: 40px;
          //   border-radius: 10px;
          // }
          // .el-icon-caret-bottom {
          //   position: absolute;
          //   right: -20px;
          //   top: 25px;
          //   font-size: 12px;
          // }
        }
      }
    }
  }

  .iconfont111 {
    float: left;
    margin-left: 10px;
    i {
      margin-right: 15px;
    }
    div {
      margin-left: 5px;
    }
    i:hover {
      cursor: pointer;
      color: blue;
    }
  }

  .fontSpan1 {
    position: relative;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }

  .fontSpan2 {
    position: absolute;
    left: 20px;
    top: -10px;
    // border:1px solid red;
  }
  .Account {
    padding: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
    font-size: 15px;
    .Account-Ul {
      margin-top: 40px;
      .Account-Ul-img {
        margin-left: 50px;
        margin-right: 50px;
      }
      .span2 {
        color: red;
        &:hover {
          cursor: pointer;
        }
      }
      .span3 {
        color: #bbbbbb;
        font-size: 13px;
      }
      > li {
        color: #bbbbbb;
        margin-bottom: 30px;
        > span {
          color: #737373;
          margin-left: 30px;
        }
      }
      > li:nth-child(1) {
        float: left;
      }
      > li:nth-child(2) {
        float: left;
      }
    }
  }
  .PhoneT {
    color: #bbbbbb;
    margin-right: 30px;
  }
  .Security-Ul {
    float: right;
    margin-right: 30px;
    > li {
      margin-bottom: 10px;
    }
  }
  .Security-Ul-1 {
    float: left;
    > li {
      margin-bottom: 25px;
    }
  }
  .codeInfo {
    width: 100px;
    height: 40px;
    float: left;
    margin-left: 30px;
    &:hover {
      cursor: pointer;
    }
  }
</style>
