<template>
  <div id="id">
    <div id="Info">
      <div class="Info-1">
        <div class="Info-2" style="margin-right:30px;" v-if="personStatus" @click="UserModular(1)">
          <div style="float:left;margin-right:5px;" :class="{'UserMTest':UserM}">
            <svg-icon icon-class="VerticalBar"/>
          </div>
          <!--用户模块-->
          <div style="float:left;writing-mode: vertical-lr;" :class="{'UserMTest':UserM}" >ᠬᠡᠷᠡᠭᠯᠡᠭᠴᠢ  ᠶᠢᠨ ᠬᠡᠰᠡᠭ </div>
          <div style="clear:both"></div>
        </div>
        <div class="Info-2" v-if="businesStatus" @click="UserModular(2)">
          <div style="float:left;margin-right:5px;">
            <svg-icon :class="{'UserMTest1':UserT}" icon-class="VerticalBar"/>
          </div>
          <!--业务模块-->
          <div style="float:left;writing-mode: vertical-lr;" :class="{'UserMTest1':UserT}">ᠲᠤᠬᠠᠶᠢᠯᠠᠭᠰᠠᠨ ᠠᠵᠢᠯ  ᠤᠨ ᠬᠡᠰᠡᠭ </div>
          <div style="clear:both"></div>
        </div>
        <div style="clear:both"></div>
        <transition name="slide-fade" mode="in-out">
          <ul class="Ul-li" v-if="showInfo">
            <!-- 用户模块 -->
            <li v-for="(item,index) in personArr" :key="index">
              <!-- <router-link :to="item.href" target="_blank" v-if="item.authority == '1'">
                  <img :src=" './static/image/portal/User/'+item.icon" :alt="item.title">
                  <span>{{item.code}}</span>
              </router-link>
              <router-link v-else to="">
                  <img  :src=" './static/image/portal/User/'+item.icon" :alt="item.title">
              </router-link> -->
              <div v-if="item.authority == '1'">
                <img :src=" './static/image/portal/User/'+item.icon" :alt="item.title" @click="go(item)">
              </div>
              <div v-else>
                <img :src=" './static/image/portal/User/'+item.icon" :alt="item.title" @click="go(item)">
              </div>
            </li>
            <div style="clear:both"></div>
          </ul>
        </transition>
        <transition name="slide-fade" mode="in-out">
          <ul class="Ul-li-Two" v-if="hiddenInfo">
            <!-- 业务模块 -->
            <li v-for="(item,index) in businessArr" :key="index">
              <div v-if="item.authority == '1'">
                <img :src=" './static/image/portal/Decision/'+item.icon" :alt="item.title" @click="go(item)">
              </div>
              <div v-else>
                <img :src=" './static/image/portal/Decision/'+item.icon" :alt="item.title" @click="go(item)">
              </div>
              <!-- <router-link :to="item.href" target="_blank" v-if="item.authority == '1'">
                  <img :src=" './static/image/portal/Decision/'+item.icon" :alt="item.title">
              </router-link>
              <router-link v-else to="">
                  <img :src=" './static/image/portal/Decision/'+item.icon" :alt="item.title">
              </router-link> -->
            </li>
            <div style="clear:both"></div>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import {getPortalMenus} from "@/api/admin/portal";
  import store from "@/store/index";
  import sessionStore from "@/utils/sessionStore";
  import {getToken} from "@/utils/auth";

  export default {
    data() {
      return {
        showInfo: true,
        hiddenInfo: false,
        personArr: [],
        businessArr: [],
        UserM: true,
        UserT: false,
        personStatus: false,
        businesStatus: false,
        token: getToken()
      };
    },
    created() {
      this.getMenu();
    },
    methods: {
      go(obj) {
        sessionStore.clear();
        if (obj.authority == "1") {
          // alert(obj.authority);
          // 所有的访问树形菜单
          let flag = false;
          const menus = store.getters.permissionMenus;
          for (let i = 0; i < menus.length; i++) {
            if (menus[i].code == obj.code) {
              sessionStore.setItem(
                store.state.user.userId,
                menus.slice(i, i + 1)
              );
              flag = true
            }
          }
          if (flag) {
            if(obj.href ==="onlinestudyuser-dashboard"){
              window.location.href = "http://wangxue.etkqqzhdj.gov.cn/mengwen.php/Home/Mengwen/mengwen.html#"
            }else{this.$router.push({path: obj.href});}

          } else {
            this.$notify({
              title: "提示",
              message: "您访问的系统正在维护，请稍后尝试访问。",
              type: "warning"
            });
          }
          // let routeData =
          // window.open(routeData.href, "_blank");
        } else {
          this.$notify({
            title: "提示",
            message: "抱歉，你访问的系统没有权限。",
            type: "warning"
          });
        }
      },
      getMenu() {
        getPortalMenus().then(response => {
          response.forEach((item, index) => {
            if (item.type == "person") {
              if (item.authority == "1") {
                this.personStatus = true;
              }
              this.personArr.push(item);
            }
            if (item.type == "business") {
              if (item.authority == "1") {
                this.businesStatus = true;
              }
              this.businessArr.push(item);
            }
          });
        });
      },
      UserModular(val) {
        if (val == 1) {
          this.showInfo = true;
          this.hiddenInfo = false;
          this.UserM = true;
          this.UserT = false;
        } else if (val == 2) {
          this.showInfo = false;
          this.hiddenInfo = true;
          this.UserT = true;
          this.UserM = false;
        }
      }
    }
  };
</script>
<style scoped lang="scss">
  #Info {
    width: 100vw;
    height: 100vh;
    background: url("../../assets/image/portal/background.jpg") no-repeat 0 0 /100% 100%;
  }

  .Info-1 {
    width: 1240px;
    max-width: 1400px;
    height: 100%;
    margin: 0px auto;
    // border: 1px solid white;
    padding-top: 10px;
  }

  .Info-2 {
    // position: relative;
    width: 130px;
    height: 50px;
    line-height: 30px;
    float: left;
    // margin-top: 20px;
    // margin-bottom: 20px;
    font-size: 20px;
    // color: #fed7da;
    // box-shadow: 0px 3px 0px rgba(177, 0, 0, 1), 0px 3px 6px rgba(0, 0, 0, 0.8);
    // padding-right: 4px;
    &:hover {
      cursor: pointer;
    }
  }

  .Ul-li {
    margin: 0px;
    padding: 0px;
    > li {
      list-style-type: none;
      float: left;
      > div {
        display: inline-block;
        > img {
          width: 168px;
          height: 148px;
          opacity: 0.9;
          margin-right: 20px;
          margin-top: 10px;
          cursor: pointer;
          &:hover {
            cursor: pointer;
            transition: width 2s;
            -moz-transition: width 2s; /* Firefox 4 */
            -webkit-transition: width 2s; /* Safari 和 Chrome */
            -o-transition: width 2s; /* Opera */
            position: relative;
            bottom: 6px;
            box-shadow: 0px 3px 10px rgba(177, 0, 0, 1),
            0px 3px 10px rgba(0, 0, 0, 0.8);
          }
        }
      }
    }
    > li:nth-child(1) {
      > div {
        > img {
          width: 350px;
          height: 146px;
        }
      }
    }
    > li:nth-child(2) {
      > div {
        > img {
          width: 355px;
          height: 146px;
          margin-right: 20px;
        }
      }
    }
    > li:nth-child(5) {
      > div {
        > img {
          width: 350px;
          height: 146px;
        }
      }
    }
    > li:nth-child(7) {
      > div {
        > img {
          margin-right: 20px;
        }
      }
    }
    > li:nth-child(13) {
      > div {
        > img {
          margin-right: 20px;
        }
      }
    }
    > li:nth-child(11) {
      > div {
        > img {
          margin-left: -5px;
        }
      }
    }
  }

  .Ul-li-Two {
    margin: 0px;
    padding: 0px;
    > li {
      list-style: none;
      float: left;
      margin-right: 10px;
      margin-top: 10px;
      > div {
        > img {
          cursor: pointer;
          &:hover {
            transition: width 2s;
            -moz-transition: width 2s; /* Firefox 4 */
            -webkit-transition: width 2s; /* Safari 和 Chrome */
            -o-transition: width 2s; /* Opera */
            position: relative;
            cursor: pointer;
            bottom: 6px;
            box-shadow: 0px 3px 10px rgba(177, 0, 0, 1),
            0px 3px 10px rgba(0, 0, 0, 0.8);
          }
        }
      }
    }
    > li:nth-child(8) {
      > div {
        > img {
          width: 345px;
          height: 146px;
        }
      }
    }
    > li:nth-child(12) {
      > div {
        > img {
          width: 342px;
          height: 150px;
          margin-right: 0px;
        }
      }
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(100px);
    opacity: 0;
  }

  .UserMTest {
    color: white;
  }

  .UserMTest1 {
    color: rgb(230, 225, 225);
  }
</style>
