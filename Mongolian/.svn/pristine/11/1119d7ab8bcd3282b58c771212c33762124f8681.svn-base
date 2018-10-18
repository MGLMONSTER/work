<template>
    <div>
        <!-- <div class="personalDetails"> -->
        <!-- <header>
        个人信息
      </header> -->
        <!-- <div class="details">
      <img :src=" './static/image/portal/man.png'" alt="" width="130px" height="140px">
      <span >姓名：<i>{{getInfo.name}}</i></span>
      <span >学历：<i>{{getInfo.highestSchooling}}</i></span>
      <span>籍贯：<i>{{getInfo.nativePlace}}</i></span>
      <span>民族：<i>{{getInfo.peoplesCode}}</i></span>
      <span >积分：<i>100</i></span>
      <span >身份证号码：<i>{{getInfo.username}}</i></span>
      <span >电话：<i>{{getInfo.mobilePhone}}</i></span>
      <span >邮箱：<i>{{getInfo.emailAddress}}</i></span>
      <span >家庭住址：<i>{{getInfo.currentAddress}}</i></span>
      </div> -->
        <!--<div class="details">-->
        <!--<img :src=" './static/image/portal/' + details.imgUrl" alt="" width="130px" height="140px">-->
        <!--<span v-if="details.name != ''">姓名：<i>{{this.details.name}}</i></span>-->
        <!--<span v-if="details.highestSchooling != ''">学历：<i>{{this.details.highestSchooling}}</i></span>-->
        <!--<span v-if="details.nativePlace != ''">籍贯：<i>{{this.details.nativePlace}}</i></span>-->
        <!--<span v-if="details.peoplesCode != ''">民族：<i>{{details.peoplesCode}}</i></span>-->
        <!--<span v-if="details.integral != ''">积分：<i>{{details.integral}}积分</i></span>-->
        <!--<span v-if="details.idCardNumber != ''">身份证号码：<i>{{details.idCardNumber}}</i></span>-->
        <!--<span v-if="details.mobilePhone != ''">电话：<i>{{details.mobilePhone}}</i></span>-->
        <!--<span v-if="details.emailAddress != ''">邮箱：<i>{{details.emailAddress}}</i></span>-->
        <!--<span v-if="details.currentAddress != ''">家庭住址：<i>{{details.currentAddress}}</i></span>-->
        <!--</div>-->
        <!-- </div> -->
        <!-- <div v-for="(item,index) in temps" :key="index" class="div1">
      <router-link :to="item.href" target=_blank>
        <img class="Images-1" :src=" './static/image/portal/' + item.icon" :alt="item.title" width="110px" height="110px">
        <span style="color:#333333;font-family:Microsoft YaHei;font-size: 14px;">{{item.title}}</span>
      </router-link>
      </div> -->
        <!-- <div style="clear:both">
    </div> -->
        <div v-for="(item,index) in person" :key="index" class="div1">
            <router-link :to="item.href" target=_blank>
                <img class="Images-1" :src=" './static/image/portal/' + item.icon" :alt="item.title" width="110px" height="110px">
                <!-- <span style="color:#333333;font-family:Microsoft YaHei;font-size: 14px;">{{item.title}}</span> -->
            </router-link>
        </div>
        <div style="clear:both"></div>
    </div>
</template>
<script>
import { getAllPortal } from "@/api/admin/portal/index";
import { getUserDetatilById } from "@/api/admin/user/index";
import store from "@/store/index";
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            details: {
                imgUrl: "man.png",
                name: "未知",
                highestSchooling: "未知",
                nativePlace: "未知",
                peoplesCode: "未知",
                integral: "0",
                idCardNumber: "1523829382834728",
                mobilePhone: "13300001111",
                emailAddress: "0123456qq.com",
                currentAddress: "内蒙古鄂尔多斯市"
            },
            temps: [],
            person: [], // 当前可用的地址数组
            personright: [], // 可以访问的地址
            personnoright: [] // 禁止访问的地址
        };
    },
    created() {
        this.getList();
        this.getUserInfo(store.state.user.userId);
        // console.log(99999);
        // console.log(this.getInfo);
    },
    methods: {
        getList() {
            this.person = [];
            const personmenutemps = [];
            getAllPortal().then(response => {
                //   console.log('business sum number',response.length)
                //   console.group()
                //   response.forEach(item => {
                //       console.log(item.title)
                //   })
                // console.groupEnd()
                // 获取可访问的portal菜单
                if (store.getters.portalmenus != null) {
                    const menus = store.getters.portalmenus;
                    // 去重复对象
                    const temp = uniqeByKeys(menus, [
                        "href",
                        "title",
                        "id",
                        "icon"
                    ]);

                    for (let i = 0; i < temp.length; i++) {
                        // 个人类可访问地址
                        if (menus[i].type == "person") {
                            // 可以访问的菜单地址
                            personmenutemps.push(menus[i]);
                        }
                    }
                    //  console.log("business right menus", menutemps.length, menutemps);
                }
                // console.log("干净 response",response)
                // console.log('PartyAffairsManagement：', menu)

                //
                /**
                 * 查找可访问和禁止访问的对象
                 * right 可以访问对象 （有重复数据）
                 * noright 禁止访问对象 （有重复数据）
                 */
                response.forEach(item => {
                    // console.log(i,item.icon)

                    // 区分个人、业务、决策模块
                    if (item.type == "person") {
                        // 如果一个可访问的地址都没有，就把所有的入口都纳入不可访问
                        if (personmenutemps.length <= 0) {
                            if (!item.icon.indexOf("noright-")) {
                                // console.log('有头',item.icon)
                                this.personnoright.push(item);
                            } else {
                                // console.log('没有头')
                                /**
                                 * 禁止访问的图标
                                 * 可以对对象删除地址
                                 */
                                let item2 = JSON.parse(JSON.stringify(item));
                                item2.icon = "noright-" + item2.icon;
                                item2.href = "";
                                this.personnoright.push(item2);
                            }
                        }
                        for (
                            let index = 0;
                            index < personmenutemps.length;
                            index++
                        ) {
                            // console.log(JSON.stringify(item.icon),JSON.stringify(menutemps[index].icon))
                            // JSON.stringify(item.icon) === JSON.stringify(menutemps[index].icon)
                            if (
                                JSON.stringify(item.icon) ===
                                JSON.stringify(personmenutemps[index].icon)
                            ) {
                                // 可以访问
                                // console.log('可以访问',item.icon)
                                let item1 = JSON.parse(JSON.stringify(item));
                                this.personright.push(item1);
                            } else {
                                //   console.log('禁止访问',item.icon)
                                // 禁止访问
                                //  console.log('if',item.icon.indexOf("noright-"))
                                if (!item.icon.indexOf("noright-")) {
                                    // console.log('有头',item.icon)
                                    this.personnoright.push(item);
                                } else {
                                    // console.log('没有头')
                                    /**
                                     * 禁止访问的图标
                                     * 可以对对象删除地址
                                     */
                                    let item2 = JSON.parse(
                                        JSON.stringify(item)
                                    );
                                    item2.icon = "noright-" + item2.icon;
                                    item2.href = "";
                                    this.personnoright.push(item2);
                                }
                            }
                        }
                    }
                });
                // 各自数组去重
                this.personright = uniqeByKeys(this.personright, [
                    "href",
                    "title",
                    "id",
                    "icon"
                ]);
                // this.businessright = uniqeByKeys(this.businessright,["href", "title", "id","icon"])
                // console.log('right',this.right.length)
                this.personnoright = uniqeByKeys(this.personnoright, [
                    "href",
                    "title",
                    "id",
                    "icon"
                ]);
                // this.businessnoright = uniqeByKeys(this.businessnoright,["href", "title", "id","icon"])
                // console.log('noright',this.noright.length)

                // 处理可访问和禁止访问的重复数据
                this.personright.forEach(r => {
                    this.personnoright.forEach((nr, i) => {
                        if (JSON.stringify(r.id) === JSON.stringify(nr.id)) {
                            this.personnoright.splice(i, 1);
                        }
                    });
                });
                // console.log(this.noright.length)
                this.person = uniqeByKeys(this.person, [
                    "href",
                    "title",
                    "id",
                    "icon"
                ]);
                // 合并
                this.personright.forEach(element => {
                    this.person.push(element);
                });
                this.personnoright.forEach(element => {
                    this.person.push(element);
                });
                // console.log('Handle menus number',this.business.length)
                console.log("person", this.person);
                //将对象元素转换成字符串以作比较
                function obj2key(obj, keys) {
                    var n = keys.length,
                        key = [];
                    while (n--) {
                        key.push(obj[keys[n]]);
                    }
                    return key.join("|");
                }

                //去重操作
                function uniqeByKeys(array, keys) {
                    var arr = [];
                    var hash = {};
                    for (var i = 0, j = array.length; i < j; i++) {
                        var k = obj2key(array[i], keys);
                        if (!(k in hash)) {
                            hash[k] = true;
                            arr.push(array[i]);
                        }
                    }
                    return arr;
                }
            });
            // selectByType('person').then(response => {
            //   this.temps = response;
            //   // console.log(8080);
            //   // console.log(this.temps);
            // })
        },
        getUserInfo(id) {
            getUserDetatilById(id).then(response => {
                if (response != "") {
                    this.details = response;
                    // console.log(this.details)
                }
            });
        }
    },
    computed: {
        ...mapGetters(["getInfo"])
    }
};
</script>
<style scoped>
header {
    padding: 12px 10px;
    font-size: 15px;
    background: #e03636;
    color: white;
}

.details {
    padding: 10px;
}

.details img {
    float: left;
}

.details span {
    float: left;
    font-size: 14px;
    color: #666666;
    margin: 5px;
}

.details span i {
    color: #333333;
    font-style: normal;
}

/* .div1 {
    width: 130px;
    height: 160px;
    text-align: center;
    float: left;
    margin: 9px;
  } */

.personalDetails {
    margin-top: 9px;
    width: 277px;
    height: 347px;
    float: right;
    box-shadow: #f5f5f6 0px 0px 5px;
    clear: both;
    border: 1px solid #eee;
    margin-right: 23px;
}
.Images-1 {
    float: left;
    margin: 20px;
}
</style>
