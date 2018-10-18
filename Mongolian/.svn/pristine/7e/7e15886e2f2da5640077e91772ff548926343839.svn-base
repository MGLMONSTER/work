<template>
  <div class="register-container">
    <div class="register-left">
      <img src="../../styles/image/bg-icon.png" style="width:100%;">
    </div>
    <div class="register-right">
      <div>
        <span class="register-btn">ᠳᠠᠩᠰᠠᠯᠠᠬᠤ</span>
        <span class="register-btn-t" @click='zlogin'> ᠨᠡᠪᠲᠡᠷᠬᠤ</span>
      </div>

      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="20%" class="register-form">
        <div class="title-container"><!-- {{$t('login.title')}} -->
          <img src="../../styles/image/logo.png">
          <!-- <lang-select class="set-language"></lang-select> -->
        </div>
        <el-form-item style="margin-bottom:10px;" label="ᠬᠡᠷᠡᠭᠯᠡᠭᠴᠢ   ᠶᠢᠨ ᠨᠡᠷ᠎ᠡ" prop="name"><!--姓名-->
          <el-input v-model="ruleForm2.name" style="width:40%;"></el-input>
          <div style="float:right;margin-right:20%;">
            <el-radio-group @change="ChangeRadio" v-model="radio123">
              <el-radio :label="1"> ᠡᠷᠡᠭᠲᠡᠶ </el-radio><!--男-->
              <el-radio :label="0"> ᠡᠮᠡᠭᠲᠡᠢ </el-radio><!--女-->
            </el-radio-group>
          </div>
        </el-form-item>
        <div style="clear:both"></div>
        <!-- 身份证号 -->
        <el-form-item style="margin-bottom:10px;" label="ᠪᠡᠶ᠎ᠡ ᠦᠨᠡᠮᠯᠡᠯ     ᠦᠨ ᠨᠣᠮᠸᠷ" prop="IdNumber">
          <el-input style="width:90%;" v-model="ruleForm2.IdNumber"></el-input>
        </el-form-item>
        <!-- 手机号 -->
        <el-form-item style="margin-bottom:10px;" label="ᠭᠠᠷ ᠤᠲᠠᠰᠤ" prop="phone">
          <el-input style="width:90%;" v-model.number="ruleForm2.phone"></el-input>
        </el-form-item>
        <el-form-item label="ᠰᠢᠯᠭᠠᠨ ᠪᠠᠲᠤᠯᠠᠬᠤ ᠨᠣᠮᠸᠷ" prop="Verification">
          <el-input style="width:30%;" v-model.number="ruleForm2.Verification"></el-input>
          <div style="float:right;margin-right:20%">
            <el-button :disabled="DisabledDj" @click="Yzmedium" type="primary" size="medium">
              ᠰᠢᠯᠭᠠᠨ ᠪᠠᠲᠤᠯᠠᠬᠤ ᠨᠣᠮᠸᠷ ᠢᠶᠠᠨ ᠤᠯᠤᠬᠤ
            </el-button>
          </div>
        </el-form-item>

        <div style="clear:both"></div>
        <el-form-item style="margin-top:10px; margin-bottom:10px;" label=" ᠨᠢᠭᠤᠴᠠ ᠨᠤᠮᠸᠷ" prop="pass">
          <el-input style="width:90%;" type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom:10px;" label="ᠨᠢᠭᠤᠴᠠ ᠨᠤᠮᠸᠷ     ᠢᠶᠠᠨ ᠪᠠᠲᠤᠯᠠᠬᠤ" prop="checkPass">
          <el-input style="width:90%;" type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="register-btn-s" type='text' :loading="loading" size='' @click.native.prevent="submitForm('ruleForm2')">
            <span style="color:#ffffff; margin-top: -2px; writing-mode: vertical-lr;">ᠪᠠᠲᠤᠯᠠᠬᠤ</span>
          </el-button>

          <!--<span class="register-button" type='text' :loading="loadingT"-->
          <!--@click.native.prevent="submitForm('ruleForm2')">注册</span>-->
          <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
        </el-form-item>
        <!-- <el-form-item style="margin-bottom:10px;">
                    <div class="Prompt">
                        <span id="promptSpan"></span>
                    </div>
                    </el-form-item> -->
        <!--<div  class="btn2frame"><div class="btn2" id="btn2"> </div></div>-->
        <el-form-item style="margin-bottom:10px;">
          <!-- <div style="padding:0px 5px;text-align:right;margin-right:10%;">已有账号？<span class="ChangeLogin" @click="ChangeLogin" style="text-decoration:none;color:#e03636;">立即登录</span>
          </div> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  // import  { getVerificationCode,InfoPhone } from "@/api/TjInfo/Info.js"    //注册的信息
  import axios from "axios"
  import {getToken} from '@/utils/auth'

  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        }
        ;
        var username = /^[\u4E00-\u9FA5]+$/;
        // /^[\u4E00-\u9FA5A-Za-z]+$/;
        if (!username.test(value)) {
          return callback(new Error("输入的只能为汉字"))
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          let regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
          if (!regExp.test(value)) {
            callback(new Error("密码由数字和字母组成，长度不小6位"));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkAgePhone = (rule, value, callback) => {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (value === '') {
          callback(new Error('请输入手机号码'));
        } else if (!myreg.test(value)) {
          callback(new Error("手机号码输入格式不正确"))
        } else {
          callback();
        }
      }
      var checkAgeNumber = (rule, value, callback) => {
        var regIdCard = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
        if (value === '') {
          callback(new Error('请输入身份证号码'));
        } else if (!regIdCard.test(value)) {
          callback(new Error("输入的身份证号码不正确"))
        }
        else {
          this.$axios({
            url: "/api/admin/register/getIdCard/" + value,
            method: "get",
            // headers:{
            //   'Authorization': getToken(),
            // },
          }).then(response => {
            // console.log(response)
            if (response.data) {
              callback();
            } else {
              callback(new Error("身份证信息存在!"))
            }
          }).catch(error => {
            // console.log(error);
            callback(new Error("请求超时,请连接网络!"));
          })
          // getVerificationCode(value).then(response=>{
          //   console.log(response);
          //   callback();
          // })

        }
      }
      var VerificationT = (rule, value, callback) => {
        if (value === '') {
          callback(new Error("请输入验证码"))
        } else {
          callback();
        }
      }
      return {
        UserName: undefined,
        pass: '',
        checkPass: '',
        name: '',
        radio123: '',
        loadingT: false,
        ValueInfo: "免费获取验证码",
        DisabledInfo: false,
        DisabledDj: false,
        DTime: 60,
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: '',
          phone: '', //手机号码
          value111: "",  //显示的选项
          IdNumber: "",  //身份证号码的显示
          Verification: "",  //验证码的的信息

        },
        rules2: {
          // pass: [
          //   {validator: validatePass, trigger: 'blur'}
          // ],
          // checkPass: [
          //   {validator: validatePass2, trigger: 'blur'}
          // ],
          // name: [
          //   {validator: checkAge, trigger: 'blur'}
          // ],
          // phone: [
          //   {validator: checkAgePhone, trigger: 'blur'}
          // ],
          // IdNumber: [
          //   {validator: checkAgeNumber, trigger: 'blur'}
          // ],
          // Verification: [
          //   {validator: VerificationT, trigger: 'blur'}
          // ]
        }
      }
    },
    methods: {
      //点击获取验证码显示的时间
      Yzmedium() {
        // InfoPhone(this.ruleForm2.phone).then(response=>{   //注册的接口
        // 	console.log(response);
        // });
        let _this = this;
        this.DisabledDj = true;  //点击验证码按钮，验证码状态禁用
        //发送请求
        let interval = setInterval(function () {
          if (_this.DTime > 1) {
            _this.ValueInfo = _this.DTime;
            _this.DTime--;
          } else {
            _this.ValueInfo = "重新获取验证码";
            _this.DTime = 60;

            _this.DisabledDj = false;

            clearInterval(interval)
          }

        }, 1000)
      },
      zlogin() {
        this.$router.push({path: "/login"})
      },
      ChangeRadio(val) {
        console.log(val);
      },
      // ChnageRadio(val){
      // 	console.log(val);
      // },
      submitForm(formName) {
        if (!this.radio123 == '') {

          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.loadingT = true;
              getVerificationCode(this.ruleForm2.name, this.radio123, this.ruleForm2.IdNumber, this.ruleForm2.phone, this.ruleForm2.pass).then(response => {
                this.loadingT = false;
                console.log(response);
                let _this = this;
                setTimeout(function () {
                  _this.$router.push({path: "/login"});
                }, 3000);
                this.$message({
                  type: "success",
                  message: "注册成功，3s自动跳转到登录页面",
                });
              })
              // alert('submit!');
              // 性别  0是女，1是男;
              // this.radio123
              // //姓名
              // this.ruleForm2.name
              // //身份证号码
              // this.ruleForm2.IdNumber
              // //验证码
              // this.ruleForm2.Verification
              // //密码
              // this.ruleForm2.pass
            } else {
              // console.log('error submit!!');
              this.$message({
                type: "error",
                message: "注册失败，请重新注册",
              })
              return false;
            }
          });
        } else {
          this.$message({
            type: "error",
            message: "请选择性别",
          })
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    watch: {
      UserName(val) {
        var chineseReg = /^[u4e00-u9fa5]+$/;
        console.log(chineseReg.test(val));
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  $light_gray: #5D5D5D;
  /* reset element-ui css */
  .register-container {
    .el-radio__input {
      margin-top: -20px;
    }
    .el-form-item__label, .el-radio__label, .register-btn, .register-btn-t, .register-btn-s span {
      font-size: 1em;
      white-space: inherit;
      font-family: 'OrhonChaganTig';
      writing-mode: vertical-lr;
      -webkit-writing-mode: vertical-lr;
      -ms-writing-mode: tb-lr;
      -o-writing-mode: vertical-lr;
      -moz-writing-mode: vertical-lr;
      text-orientation: sideways-right;
      -webkit-text-orientation: sideways-right;
      -ms-text-orientation: sideways-right;
      -o-text-orientation: sideways-right;
      -moz-text-orientation: sideways-right;
      unicode-bidi: embed;
      word-spacing: normal;
      word-wrap: normal;
      word-break: keep-all;
      height: 30px;
      line-height: 25px;
    }

    .el-input {
      height: 45px;
      font-family: 'OrhonChaganTig';
      input {
        font-family:"OrhonChaganTig";
        -webkit-appearance: none;
        border-radius: 5px;
        color: $light_gray;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }

    .el-button span{
      font-family: 'OrhonChaganTig';
      writing-mode:vertical-lr;
      white-space: pre-wrap;
      word-break: keep-all;
    }

    .el-form-item__label {
      font-size: 10px;
    }
    .el-form-item__error {
      font-size: 0.4em;
      margin-top: -9px;
    }
    .el-input__inner {
      padding-top: 0;
    }
    .el-form-item {
      border-radius: 5px;
      color: #454545;
      width: 90%;
      margin: 0 auto;
      height: 47px;
    }
    .el-checkbox {
      margin-left: 5px;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #5D5D5D;
  .register-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url('../../styles/image/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .register-left {
      width: 50%;
      float: left;
      margin-top: 100px;
      margin-left: 4%;
    }
    .register-right {
      float: left;
      width: 35%;
      margin-left: 10%;
      margin-top: 50px;
    }
    .register-btn-t {
      display: block;
      padding: 5px 40px;
      height: 40px;
      line-height: 40px;
      float: right;
      cursor: pointer;
      background: #e03636;
      color: #fff;
      border-radius: 5px;
      font-size: 0.5em;
    }
    .register-btn {
      display: block;
      height: 40px;
      padding: 5px 40px;
      height: 40px;
      line-height: 40px;
      float: right;
      // background: #e03636;
      background: #fb7070;
      margin-right: 14px;
      margin-left: 20px;
      cursor: pointer;
      color: #fff;
      border-radius: 5px;
      font-size: 0.5em;
    }
    .register-form {
      background-image: url('../../styles/image/loginformbg.png');
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      margin-top: 10%;
    }
    .verCode-item {
      background: rgba(255, 255, 255, 0)
    }
    .verCode-item .login-verCode {
      width: 42%;
      height: 40px;
      border: 1px solid #e9e9e9;
      border-radius: 6px;
      float: left;
    }
    .verCode-item .verCode-img {
      display: block;
      width: 30%;
      float: left;
      height: 40px;
      margin-left: 6%;
      margin-right: 7%;
    }
    .another-group {
      color: #ff4d4d;
      font-size: 0.4em;
      cursor: pointer;
    }
    .register-btn-s {
      display: block;
      background-image: url('../../styles/image/btndefault.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 75%;
      height: 50px;
      margin-left: 10%;
      cursor: pointer;
      border: none;
    }
    .register-button {
      display: block;
      background-image: url('../../styles/image/btndefault.png');
      background-size: 100%;
      background-repeat: no-repeat;
      width: 80%;
      height: 50px;
      cursor: pointer;
      margin: 0 auto;
    }
    .register-button:hover {
      background-image: url('../../styles/image/pickstate.png');
    }
    .register-btn-s:hover {
      background-image: url('../../styles/image/pickstate.png');
    }
    .register-forget {
      margin-left: 40%;
      color: $light_gray;
      font-size: 0.5em;
      cursor: pointer;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title-container {
      width: 50%;
      margin: 0 auto;
    }
    .title-container img {
      margin-top: 15%;
      margin-bottom: 10%;
      width: 100%;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
  .ok1 {
    writing-mode: vertical-lr;
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    -o-writing-mode: vertical-lr;
    -moz-writing-mode: vertical-lr;
}
</style>
