<template>
    <div id="icon">
        <div class="LeftInfo">
            <div class="LeftInfo-top">
                个人信息
            </div>
            <div class="LeftInfo-content">
                <img class="LeftInfo-image" src="../../../../styles/image/man.png" alt="信息展示">
                <div class="LeftInfo-image-Info">
                        <ul>
                            <li><span>姓名</span>: {{getInfo.name}}</li>
                            <li><span>学历</span>: {{getInfo.highestSchooling}}</li>
                              <li><span>籍贯</span>: {{getInfo.nativePlace | JgInfo(getInfo.nativePlace)}}</li>
                            <li><span>名族</span>: {{getInfo.peoplesCode}}</li>
                            <li><span>积分</span>: 168积分</li>
                        </ul>
                </div>
                <div style="clear:both"></div>
            </div>
            <ul class="LeftInfo-Bottom-Info">
                <li><span>身份证号码</span>: {{getInfo.username}}</li>
                <li><span>电话</span>: {{getInfo.mobilePhone}}</li>
                <li><span>邮箱</span>: {{getInfo.emailAddress}}</li>
                <li><span>家庭住址</span>: {{getInfo.currentAddress |AddressInfo(getInfo.currentAddress)}}</li>
            </ul>
        </div>
        <div class="LeftInfo-bottom">
            <div class="LeftInfo-Bottom-top">
                <div style="float:left;font-size:16px;color:#5d5d5d">
                    待办事项
                </div>
                <div style="float:right;margin-right:20px;font-size:12px;color:#a6a6a6">
                    更多
                </div>
                <div style="clear:both">

                </div>
            </div>
            <div class="LeftInfo-Bottom-P">
              <p>这些年，总书记手把新东方手教少数民族...</p>
              <p>这些年，总书记手把新东方手教少数民族...</p>
              <p>这些年，总书记手把新东方手教少数民族...</p>
              <p>这些年，总书记手把新东方手教少数民族...</p>
              <p>这些年，总书记手把新东方手教少数民族...</p>
            </div>
        </div>
    </div>
</template>
<script>
  // import {getUserDetatilById} from '@/api/admin/user/index'
  import { mapGetters } from "vuex"
    export default {
        data(){
            return {
                Address:"鄂尔多斯党建网是由中共鄂尔 多斯市委组织部主办",
                details:"",
            }
        },
        filters:{
            AddressInfo(val){
              if(val!=undefined){
                if(val.length>10){
                    return val.substr(0,10)+"..."
                }else{
                    return val;
                }
              }else{
                return val;
              }
            },
            JgInfo(val){
                if(val!=undefined){
                  if(val.length>10){
                      return val.substr(0,10)+"..."
                  }else{
                      return val;
                  }
                }else{
                  return val;
                }
            }
        },
        created(){
          // this.getUserInfo(store.state.user.userId);
        },
        methods:{
          // getUserInfo(id) {
          //   getUserDetatilById(id).then(response => {
          //     if (response != '') {
          //       this.details = response
          //       console.log(this.details)
          //     }
          //   })
          // }
        },
        computed:{
          ...mapGetters([
            'getInfo'
          ])
        },
    }
</script>
<style scoped lang="scss">
    .LeftInfo{
        height:376px;
        border-radius:10px;
        background:white;
        box-shadow:1px 1px 10px #ccc;
        .LeftInfo-top{
            height:56px;
            text-indent:20px;
            font-size:14px;
            line-height:56px;
            border-bottom:1px dashed #f1f3f6;
            color:#5d5d5d;
        }
        .LeftInfo-content{
            padding:20px;
            padding-bottom:10px;
        }
        .LeftInfo-image{
            float:left;
            display:block;
        }
        .LeftInfo-image-Info{
            float:left;
            font-size:14px;
            margin-left:10px;
            ul {
                padding:0px;
                margin:0px;
                >li{
                    list-style: none;
                    margin-bottom:14px;
                    color:#5d5d5d;
                    >span{
                        color:#939393;
                    }
                }
            }
        }
    }
    .LeftInfo-Bottom-Info{
        padding:0px;
        margin:0px;
        margin-left:20px;
        >li{
            list-style: none;
            font-size:14px;
            margin-bottom:15px;
        }
        >li:nth-child(4){
            line-height:20px;
        }
    }
  .LeftInfo-bottom{
    height:266px;
    // padding:20px;
    background:white;
    margin-top:10px;
    border-radius:10px;
    box-shadow:1px 1px 10px #ccc;
    .LeftInfo-Bottom-top{
      hieght:54px;
      line-height:54px;
      margin-left:20px;
      border-bottom:1px dashed #f1f3f6;
    }
  }
  .LeftInfo-Bottom-P{
    padding:12px 20px 12px 20px;
    font-size:12px;
  }
</style>
