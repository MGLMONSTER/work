<template>
    <div>
        <div v-for="(item,index) in business" :key="index" class="div1">
            <router-link :to="item.href" target=_blank>
                <img class="Images-1" :src=" './static/image/portal/' + item.icon" :alt="item.title" width="110px" height="110px">
                <!-- <span style="color:#333333;font-family:Microsoft YaHei;font-size: 14px;">{{item.title}}</span> -->
            </router-link>
        </div>
        <div style="clear:both">

        </div>
    </div>
</template>
<script>
import { selectByType, getAllPortal } from "@/api/admin/portal/index";
import store from "@/store/index";

export default {
    data() {
        return {
            imgdefaulturl: "./static/image/portal/default.png",
            branch: {
                name: "鄂尔多斯党支部",
                integral: "5888",
                number: "45006",
                ranking: "8"
            },
            person: [], // 当前可用的地址数组
            business: [], // 当前可用的地址数组
            decision: [], // 当前可用的地址数组
            personright: [], // 可以访问的地址
            businessright: [], // 可以访问的地址
            decisionright: [], // 可以访问的地址
            personnoright: [], // 禁止访问的地址
            businessnoright: [], // 禁止访问的地址
            decisionnoright: [] // 禁止访问的地址
        };
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            this.business = [];
            const businessmenutemps = [];
            getAllPortal().then(response => {
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
                        // 业务类可访问地址
                        if (menus[i].type == "business") {
                            // 可以访问的菜单地址
                            businessmenutemps.push(menus[i]);
                        }
                    }
                }
                // console.log("干净 response",response)
                // console.log('PartyAffairsManagement：', menu)

                //
                /**
                 * 查找可访问和禁止访问的对象
                 * right 可以访问对象 （有重复数据）
                 * noright 禁止访问对象 （有重复数据）
                 */
                response.forEach((item, i) => {
                    // console.log(i,item.icon)

                    // 区分个人、业务、决策模块
                    if (item.type == "business") {
                        if (businessmenutemps.length <= 0) {
                            if (!item.icon.indexOf("noright-")) {
                                // console.log('有头',item.icon)
                                this.businessnoright.push(item);
                            } else {
                                // console.log('没有头')
                                /**
                                 * 禁止访问的图标
                                 * 可以对对象删除地址
                                 */
                                let item2 = JSON.parse(JSON.stringify(item));
                                item2.icon = "noright-" + item2.icon;
                                item2.href = "";
                                this.businessnoright.push(item2);
                            }
                        }
                        for (
                            let index = 0;
                            index < businessmenutemps.length;
                            index++
                        ) {
                            // console.log(JSON.stringify(item.icon),JSON.stringify(menutemps[index].icon))
                            // JSON.stringify(item.icon) === JSON.stringify(menutemps[index].icon)
                            if (
                                JSON.stringify(item.icon) ===
                                JSON.stringify(businessmenutemps[index].icon)
                            ) {
                                // 可以访问
                                // console.log('可以访问',item.icon)
                                let item1 = JSON.parse(JSON.stringify(item));
                                this.businessright.push(item1);
                            } else {
                                //   console.log('禁止访问',item.icon)
                                // 禁止访问
                                //  console.log('if',item.icon.indexOf("noright-"))
                                if (!item.icon.indexOf("noright-")) {
                                    // console.log('有头',item.icon)
                                    this.businessnoright.push(item);
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
                                    this.businessnoright.push(item2);
                                }
                            }
                        }
                    }
                });
                // 各自数组去重
                this.businessright = uniqeByKeys(this.businessright, [
                    "href",
                    "title",
                    "id",
                    "icon"
                ]);
                // console.log('right',this.right.length)
                this.businessnoright = uniqeByKeys(this.businessnoright, [
                    "href",
                    "title",
                    "id",
                    "icon"
                ]);
                // console.log('noright',this.noright.length)

                this.businessright.forEach(r => {
                    this.businessnoright.forEach((nr, i) => {
                        if (JSON.stringify(r.id) === JSON.stringify(nr.id)) {
                            this.businessnoright.splice(i, 1);
                        }
                    });
                });
                // console.log(this.noright.length)
                this.business = uniqeByKeys(this.business, [
                    "href",
                    "title",
                    "id",
                    "icon"
                ]);
                // 合并
                this.businessright.forEach(element => {
                    this.business.push(element);
                });
                this.businessnoright.forEach(element => {
                    this.business.push(element);
                });
                // console.log('Handle menus number',this.business.length)
                console.log("business", this.person);
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
        }
    }
};
</script>
<style>
header {
    padding: 12px 10px;
    font-size: 15px;
    background: #e03636;
    color: white;
}

.branch {
    padding: 10px;
}

.branch img {
    float: left;
}

.branch span {
    float: left;
    font-size: 14px;
    color: #666666;
    margin: 5px;
}

.branch span i {
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
