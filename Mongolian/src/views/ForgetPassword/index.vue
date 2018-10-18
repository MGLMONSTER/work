<template>
  <div class="login-container">

    <el-row>
      <el-col :xs="14" :md="14" :lg="14" :xl="14">
        <div class="login-left">
          <img src="../../styles/image/bg-icon.png">
        </div>
      </el-col>
      <el-col :xs="10" :md="10" :lg="10" :xl="10">
        <div class="login-right">
          <div>
            <span @click="ChangeZc" class="register-btn">ᠳᠠᠩᠰᠠᠯᠠᠬᠤ</span>
            <span @click="ChangeZz" class="register-btn-t"> ᠨᠡᠪᠲᠡᠷᠬᠤ</span>
            <!-- <span @click="ChangeZc" class="register-btn"></span>

            <span class="login-btn-t" @click="LoginBt"> </span> -->
          </div>
          <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"
                   label-position="left">
            <div class="title-container">
              <!-- {{$t('login.title')}} -->
              <img src="../../styles/image/logo.png">
              <!-- <lang-select class="set-language"></lang-select> -->
            </div>
            <div class="Image-div">
              <img src="../../styles/image/Bars.png" class="Images" alt="图片的信息">
              <span class="ok1">ᠨᠢᠭᠤᠴᠠ</span>
              <span class="ok1">ᠨᠤᠮᠸᠷ</span>
              <span class="ok1">ᠢᠶᠠᠨ</span>
              <span class="ok1">ᠤᠯᠤᠬᠤ</span>

              <img src="../../styles/image/Bars.png" class="Images" alt="图片的信息">
            </div>
            <el-form-item prop="CardNo">
                          <span class="svg-container svg-container_login" style="margin-right:5px">
                              <img class="svg-icon" src="../../styles/image/CardNo.png">
                          </span>
              <el-input style="padding-left:5px" name="CardNo" type="text" v-model="loginForm.CardNo" autoComplete="off"
                        placeholder="ᠪᠡᠶ᠎ᠡ ᠦᠨᠡᠮᠯᠡᠯ ᠦᠨ ᠨᠣᠮᠸᠷ"/>
            </el-form-item>
            <div class="PhoneInfo">
              <span class="ok1">ᠲᠠ </span>
              <span class="ok1"> ᠪᠤᠳᠤᠵᠤ </span>
              <span class="ok1"> ᠭᠠᠷ </span>
              <span class="ok1"> ᠤᠲᠠᠰᠤ </span>:
              <!-- <span>{{PhoneInfo | PhoneG}}</span> -->
            </div>
            <el-form-item prop="SMScode" style="width:160px;float:left;margin-top:">
              <el-input name="SMScode" type="text" v-model="loginForm.SMScode" autoComplete="off"
                        placeholder="ᠰᠢᠯᠭᠠᠨ ᠪᠠᠲᠤᠯᠠᠬᠤ ᠨᠣᠮᠸᠷ"/>
            </el-form-item>
            <div style="float:left;margin-top:16px;margin-left:10px">
              <el-button class="ok" style="height: 45px; padding: 0px" type="primary" size="medium">
                ᠰᠢᠯᠭᠠᠨ ᠪᠠᠲᠤᠯᠠᠬᠤ ᠨᠣᠮᠸᠷ ᠢᠶᠠᠨ ᠤᠯᠤᠬᠤ
              </el-button>
            </div>
            <!-- <el-button @click="ChangeSMS" :disabled="ButtonSMS" style="float:left;margin-top:15px;margin-left:5px" size="medium" :type="TypeSMS">{{SmsCode}}</el-button> -->
            <div style="clear:both"></div>
            <el-form-item prop="pass" label="ᠨᠢᠭᠤᠴᠠ ᠨᠤᠮᠸᠷ">
              <el-input style="padding-left:10px" type="password" v-model="loginForm.pass"
                        auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass" label="ᠨᠢᠭᠤᠴᠠ ᠨᠤᠮᠸᠷ     ᠢᠶᠠᠨ ᠪᠠᠲᠤᠯᠠᠬᠤ">
              <el-input style="padding-left:50px" type="password" v-model="loginForm.checkPass"
                        auto-complete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item class="Div-Item">
                <el-button @click.native.prevent="Determine123" class="Div-Submit" :loading="LoadingTrue" style="height:41px;width:300px;box-shadow:none">
                </el-button>
            </el-form-item> -->
            <el-button class="login-btn-s" type='text' :loading="loading" size='' @click.native.prevent="handleLogin">
              <span style="color:#ffffff;margin-top:-60px">ᠲᠣᠭᠲᠠᠭᠠᠬᠤ </span></el-button>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  // import { isvalidUsername } from '@/utils/validate'
  import LangSelect from '@/components/LangSelect'
  import {RegisterInfo} from "@/api/RegisterInfo"
  import {getState, getUserName, getPassWord} from "@/utils/auth"
  // import SocialSign from './socialsignin'

  export default {
    components: {LangSelect},
    name: 'login',
    data() {
      // const validateUsername = (rule, value, callback) => {
      //   if (!isvalidUsername(value)) {
      //     callback(new Error('请输入合法的用户名'))
      //   } else {
      //     callback()
      //   }
      // }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 4) {
          callback(new Error('密码不能少于六位'))
        } else {
          callback()
        }
      }
      return {
        imgsrc: '../../styles/image/changelang.png',
        loginForm: {
          username: getUserName(),
          password: getPassWord(),
          verCode: 'Emsf',
          remember: '',
          RememberPassword: undefined,
        },
        loginRules: {
          username: [{
            required: true,
            message: '账户不能为空',
            trigger: 'blur'

          }, {
            min: 3,
            max: 20,
            message: '长度在 3 到 20 个字符',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            trigger: 'blur',
            validator: validatePassword
          }]
        },
        TypeSMS: "primary",
        ButtonSMS: false, //验证码按钮的状态
        SmsCode: "发送验证码", //输入的短信验证码
        loading: false,
        // LoginL:true,
        // LoginL1:false,
      }
    },
    methods: {
      ChangeSMS() {
        //发送验证码
        if (this.judge) {
          VerificationCode(this.PhoneInfo).then(response => {
            this.SMSInfo = response.data;
            // console.log(response);
          });
          this.ButtonSMS = true;
          let _this = this;
          this.TypeSMS = "info";
          let Timeing = setInterval(() => {
            if (_this.NumberI > 1) {
              _this.SmsCode = _this.NumberI + "秒后重发";
              _this.NumberI--;
            } else {
              clearInterval(Timeing);
              _this.SmsCode = "重新发送";
              _this.NumberI = 60;
              _this.ButtonSMS = false;
              _this.TypeSMS = "primary";
            }
          }, 1000);
        } else {
          this.$message({
            type: "info",
            message: "请输入有效的身份证号码!"
          });
        }
      },
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },
      ChangeZc() {
        this.$router.push({path: '/register'})
      },
      ChangeZz() {
        this.$router.push({path: '/login'})
      },
      forgetpass() {   //忘记密码
        this.$router.push({path: '/ForgetPassword'});
        console.log(111);
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          // if(this.YzInfo){
          if (valid) {
            this.loading = true
            if (this.RememberPassword) {
              // this.$store.dispatch('LoginRemember',this.RememberPassword);
              this.loginForm.RememberPassword = true;
            }
            ;
            this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
              this.$router.push({path: '/'});
              this.loading = false
            }).catch(() => {
              this.loading = false
            })
          } else {
            this.loading = false
            console.log('error submit!!')
            return false
          }
          // }else{
          //   this.$message({
          //     type:"warning",
          //     message:"验证码错误！"
          //   })
          // }
        })
      },
      afterQRScan() {
        // const hash = window.location.hash.slice(1)
        // const hashObj = getQueryObject(hash)
        // const originUrl = window.location.origin
        // history.replaceState({}, '', originUrl)
        // const codeMap = {
        //   wechat: 'code',
        //   tencent: 'code'
        // }
        // const codeName = hashObj[codeMap[this.auth_type]]
        // if (!codeName) {
        //   alert('第三方登录失败')
        // } else {
        //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
        //     this.$router.push({ path: '/' })
        //   })
        // }
      }
    },
    created() {
      window.addEventListener('hashchange', this.afterQRScan);
      RegisterInfo().then(response => {
        console.log(response);
        this.vid = response.vid;
        this.challenge = response.challenge;
      })
    },
    destroyed() {
      // window.removeEventListener('hashchange', this.afterQRScan)
    },
    // mounted(){
    //          // 根据服务端接口获取的vid与challenge创建实例
    //       // 验证参数对象

    //   let _this = this;
    //   var config={
    //   vid:this.vid, //验证单元id, string, 必填
    //   challenge:this.challenge, //验证流水号, string, 必填
    //   container:"#vaptcha_container",//验证码容器, HTMLElement或者selector, 必填
    //   type:"float", //必填，表示点击式验证模式
    //   https:false,//协议类型,boolean,可选true,false,不填则自适应。
    //   color:"#E03636",  //按钮颜色
    //   outage:"/api/admin/register/getDownTime", //服务器端配置的宕机模式接口地址
    //   success:function(token,challenge){//验证成功回调函数, 参数token, challenge 为string, 必填
    //   //执行表单验证失败时，需要重新初始化VAPTCHA
    //   //todo:执行人机验证成功后的操作
    //   _this.YzInfo = true;
    //   // console.log("成功")
    //   },
    //   fail:function(){//验证失败回调函数
    //   //todo:执行人机验证失败后的操作
    //   }
    //   }
    //   //Vaptcha对象
    //   var obj;
    //   window.vaptcha(config,function(vaptcha_obj){
    //   obj = vaptcha_obj;
    //   obj.init();
    //   });
    // }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  $light_gray: #5d5d5d;

  /* reset element-ui css */
  .login-container {
    .el-form-item__label, .el-radio__label, .register-btn, .register-btn-t, .register-btn-s span {
      font-size: 1em;
      white-space: inherit;
      font-family: 'OrhonChaganTig';
      writing-mode: vertical-lr;
      -ms-writing-mode: tb-lr;
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
      display: inline-block;
      height: 30px !important;
      width: 70% !important;
      input {
        background: #e9e9e9;
        font-family: 'OrhonChaganTig';
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        color: $light_gray;
        height: 30px !important;
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
    el-button {
      background: rgba(255, 255, 255, 0);
    }
    //   	.login span{
    // 	font-size: 15px;
    // 	padding: 13px 32px;
    // 	background: #e03636;
    // 	border-radius: 5px;
    // }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: #e9e9e9;
      border-radius: 5px;
      color: #454545;
      width: 300px;
      margin-left: 42px;
      margin-top: 15px;
      // padding-top:5px;
      padding-left: 5px;
    }
    .Div-Item {
      border: none;
      background: none;
      border-radius: 0px;
      color: #454545;
      width: 300px;
      margin-left: 42px;
      margin-top: 0px;
      padding-top: 0px;
      padding-left: 0px;
    }
    .el-checkbox {
      margin-left: 42px;
      margin-top: 8px;
    }
  }

  .login-container .el-input {
    width: 70% !important;
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #5d5d5d;
  .Div-Submit {
    background-image: url("../../styles/image/Determine.png");
  }

  //   .Div-Submit:hover{
  //         background-image:url("../../../styles/image/Determine.png")
  //     }
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url("../../styles/image/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    .login-left {
      width: 711px;
      height: 468px;
      float: left;
      margin-top: 100px;
      margin-left: 115px;
    }
    .login-right {
      float: left;
      margin-left: 110px;
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
      background: #e03636;
      /*background:#fb7070;*/
      margin-right: 14px;
      margin-left: 20px;
      cursor: pointer;
      color: #fff;
      border-radius: 5px;
      font-size: 0.5em;
    }
    .register-button:hover {
      background-image: url('../../styles/image/pickstate.png');
    }
    .register-btn-s:hover {
      background-image: url('../../styles/image/pickstate.png');
    }
    // .register-btn:hover {
    //     background-image: url("../../styles/image/register.png");
    // }
    .login-form {
      background-image: url("../../styles/image/loginformbg.png");
      background: white;
      border-radius: 10px;
      width: 412px;
      height: 100%;
      // border-radiu
      margin-top: 60px;
    }
    .verCode-item {
      background: rgba(255, 255, 255, 0);
    }
    .verCode-item .login-verCode {
      width: 140px;
      height: 40px;
      border: 1px solid #e9e9e9;
      border-radius: 6px;
      float: left;
    }
    .verCode-item .verCode-img {
      display: block;
      width: 78px;
      float: left;
      height: 40px;
      margin-left: 17px;
      margin-right: 18px;
    }
    .another-group {
      color: #ff4d4d;
      font-size: 14px;
      cursor: pointer;
    }
    .login-btn-s {
      display: block;
      background-image: url("../../styles/image/btndefault.png");
      background-size: 100%;
      background-repeat: no-repeat;
      width: 300px;
      height: 100px;
      margin-left: 42px;
      cursor: pointer;
      border: none;
    }
    .login-btn-s:hover {
      background-image: url("../../styles/image/pickstate.png");
    }
    .login-forget {
      margin-left: 127px;
      color: $light_gray;
      font-size: 11px;
      cursor: pointer;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
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
    .title-container img {
      margin-top: 28px;
      margin-left: 72px;

    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0px;
      }
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
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }

  /* 验证码 */
  .vaptcha-init-main {
    display: table;
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
  }

  .vaptcha-init-loading {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  .vaptcha-init-loading > a {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: none;
  }

  .vaptcha-init-loading > a img {
    vertical-align: middle;
  }

  .vaptcha-init-loading .vaptcha-text {
    font-family: sans-serif;
    font-size: 12px;
    color: #cccccc;
    vertical-align: middle;
  }

  .Images {
    vertical-align: middle;
  }

  .Image-span {
    margin-left: 5px;
    margin-right: 10px;
  }

  .Image-div {
    margin-left: 90px;
    color: #5d5d5d;
  }

  .PhoneInfo {
    margin-left: 40px;
    color: #bbbbbb;
  }

  .ok {
    background: #409EFF;
    border-color: #409EFF;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
  }


  .ok1 {
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
  }
</style>
