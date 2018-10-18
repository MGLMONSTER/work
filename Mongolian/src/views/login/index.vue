<template>
  <div class="login-container">
    <div class="login-left">
      <img src="../../styles/image/bg-icon.png" style="width:100%;">
    </div>
    <div class="login-right">
      <div>
        <a href="http://116.117.157.186:10001/#/login"><img class="changelang" src="../../styles/image/changelang.png" /></a>
        <span @click="ChangeZc" class="register-btn">ᠳᠠᠩᠰᠠᠯᠠᠬᠤ</span>
        <span class="register-btn-t"> ᠨᠡᠪᠲᠡᠷᠬᠤ </span>
      </div>
      <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"
               label-position="left">
        <div class="title-container"><!-- {{$t('login.title')}} -->
          <img src="../../styles/image/logo.png">
          <!-- <lang-select class="set-language"></lang-select> -->
        </div>
        <el-form-item prop="username">
          <span class="svg-container svg-container_login">
            <img src="../../styles/image/user.png">
          </span>
          <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on"
                    placeholder="ᠬᠡᠷᠡᠭᠯᠡᠭᠴᠢ ᠶᠢᠨ ᠨᠡᠷ᠎ᠡ " width="100%"/>
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container svg-container_login">
            <img class="svg-icon1" src="../../styles/image/password.png">
          </span>
          <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                    autoComplete="on" placeholder="ᠨᠢᠭᠤᠴᠠ ᠨᠤᠮᠸᠷ"/>
          <span class="show-pwd" @click="showPwd">
            <svg-icon icon-class="eye"/>
          </span>
        </el-form-item>
        <!-- <el-form-item class='verCode-item'>
          <el-input class='login-verCode' name="verCode" type="text" v-model="loginForm.verCode" placeholder="   "/>
          <span class="verCode-img">
            <img src="../../styles/image/verCode.png" style="margin: 0 auto;width:100%">
          </span>
          <i class="another-group">换一组</i>native.prevent
        </el-form-item> -->

        <!-- 验证码 -->
        <!-- 点击式按钮建议宽度不低于200px,高度介于36px与46px  -->
        <!-- 嵌入式仅需设置宽度，高度根据宽度自适应，最小宽度为200px -->
        <!-- <div id="vaptcha_container" style="width:323px;height:36px;margin-left:43px;margin-bottom:20px">
          <div class="vaptcha-init-main">
            <div class="vaptcha-init-loading">
              <a href="/" target="_blank"><img src="https://cdn.vaptcha.com/vaptcha-loading.gif"/></a>
              <span class="vaptcha-text">验证码启动中...</span>
            </div>
          </div>
        </div> -->
        <!-- 结束 -->
        <el-button class="login-btn-s" type='text' :loading="loading" size='' @click.native.prevent="handleLogin"><span
          style="color:#ffffff;"> ᠨᠡᠪᠲᠡᠷᠬᠤ</span></el-button>
        <el-form-item style='background:rgba(255, 255, 255, 0);border:none; margin-top: 20px;' class="mwitem">
          <el-checkbox v-model="loginForm.remember">  ᠨᠢᠭᠤᠴᠠ ᠨᠤᠮᠸᠷ ᠢᠶᠠᠨ ᠴᠡᠭᠡᠵᠢᠯᠡᠬᠦ</el-checkbox>
          <span class="login-forget" @click="forgetpass()"> ᠨᠢᠭᠤᠴᠠ ᠨᠤᠮᠸᠷ ᠢᠶᠠᠨ ᠮᠠᠷᠲᠠᠬᠤ</span>
        </el-form-item>
      </el-form>
    </div>

    <!-- <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog" append-to-body>
      {{$t('login.thirdpartyTips')}}
      <br/>
      <br/>
      <br/>
      <social-sign />
    </el-dialog> -->

  </div>
</template>

<script>
  // import { isvalidUsername } from '@/utils/validate'
  import LangSelect from '@/components/LangSelect'
  import {RegisterInfo} from "@/api/RegisterInfo"
  import {getState, getUserName, getPassWord} from "@/utils/auth"
  // import SocialSign from './socialsignin'

  export default {
    components: { LangSelect },
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
          callback(new Error(' '))
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
            message: ' ',
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
        passwordType: 'password',
        loading: false,
        showDialog: false,
        challenge: '', // 验证码的key
        vid: '', // 验证码的vid
        YzInfo: false, // 验证码的状态
        RememberPassword: Boolean(Number(getState())),
        // LoginL:true,
        // LoginL1:false,
      }
    },
    methods: {
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
            };
            this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
              this.$router.push({ path: '/portal'});
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
  $light_gray: #5D5D5D;
  /* reset element-ui css */
  .login-container {
    .mwitem span, .el-checkbox, .register-btn, .register-btn-t,.login-btn-s span {
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

    }
    .el-checkbox__label {
      padding-left: 0px !important;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      font-family: 'OrhonChaganTig';
      input {
        background: #e9e9e9;
        border: 0px;
        font-family: 'OrhonChaganTig';
        -webkit-appearance: none;
        border-radius: 0px;
        color: $light_gray;
        height: 40px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .el-input__inner {
      font-family: 'OrhonChaganTig';
      padding-top: 0;
    }
    .el-form-item__error {
      font-size: 0.4em;
    }
    .el-button {
      background: rgba(255, 255, 255, 0);
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: #e9e9e9;
      border-radius: 5px;
      color: #454545;
      width: 75%;
      height: 45px;
      margin-left: 10%;
    }
    .el-checkbox {
      margin-left: 5px;
    }
  }
  .el-icon-warning{
    writing-mode: horizontal-tb;
    margin-left: 7px;
    margin-bottom: 10px;
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #5D5D5D;
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url('../../styles/image/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .login-left {
      width: 53%;
      float: left;
      margin-top: 100px;
      margin-left: 8%;
    }
    .login-right {
      float: left;
      width: 30%;
      margin-left: 7%;
      margin-top: 50px;
    }
    .login-btn-t {
      display: block;
      width: 100px;
      height: 40px;
      float: right;
      cursor: pointer;
      background-image: url('../../styles/image/login-dtn.png');
      // background-repeat:no-repeat;
      // background-size:100% 100%;
    }
    .register-btn-t {
      display: block;
      padding: 5px 40px;
      height: 40px;
      line-height: 40px;
      float: right;
      cursor: pointer;
      background: #fb7070;
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
    .login-form {
      background-image: url('../../styles/image/loginformbg.png');
      width: 100%;
      /*height: 100%;*/
      min-height: 550px;
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
    .login-btn-s {
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
    .login-btn-s:hover {
      background-image: url('../../styles/image/pickstate.png');
    }
    .changelang {
      cursor: pointer;
      float: left;
    }
    .login-forget {
      color: $light_gray;
      font-size: 1em;
      cursor: pointer;
      line-height: 20px;
      float: right;
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
      width: 70%;
      margin: 0 auto;
    }
    .title-container img {
      margin-top: 15%;
      margin-bottom: 10%;
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

  .vaptcha-init-main {
    display: table;
    width: 100%;
    height: 100%;
    background-color: #EEEEEE;
  }

  .vaptcha-init-loading {
    display: table-cell;
    vertical-align: middle;
    text-align: center
  }

  .vaptcha-init-loading > a {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: none;
  }

  .vaptcha-init-loading > a img {
    vertical-align: middle
  }

  .vaptcha-init-loading .vaptcha-text {
    font-family: sans-serif;
    font-size: 12px;
    color: #CCCCCC;
    vertical-align: middle
  }
</style>
