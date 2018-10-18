<template>
  <div>
    <div v-for="(item,index) in decision" :key="index" class="div1">
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
import store from "@/store/index";
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            temps: [],
            decision: [], // 当前可用的地址数组
            decisionright: [], // 可以访问的地址
            decisionnoright: [] // 禁止访问的地址
        };
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            this.decision = [];
            const decisionmenutemps = [];
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
                        // 决策类可访问地址
                        if (menus[i].type == "decision") {
                            // 可以访问的菜单地址
                            decisionmenutemps.push(menus[i]);
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
                response.forEach(item => {
                    // console.log(i,item.icon)
                    // 区分个人、业务、决策模块
                    if (item.type == "decision") {
                        if (decisionmenutemps.length <= 0) {
                            if (!item.icon.indexOf("noright-")) {
                                // console.log('有头',item.icon)
                                this.decisionnoright.push(item);
                            } else {
                                // console.log('没有头')
                                /**
                                 * 禁止访问的图标
                                 * 可以对对象删除地址
                                 */
                                let item2 = JSON.parse(JSON.stringify(item));
                                item2.icon = "noright-" + item2.icon;
                                item2.href = "";
                                this.decisionnoright.push(item2);
                            }
                        }
                        for (
                            let index = 0;
                            index < decisionmenutemps.length;
                            index++
                        ) {
                            // console.log(JSON.stringify(item.icon),JSON.stringify(menutemps[index].icon))
                            // JSON.stringify(item.icon) === JSON.stringify(menutemps[index].icon)
                            if (
                                JSON.stringify(item.icon) ===
                                JSON.stringify(decisionmenutemps[index].icon)
                            ) {
                                // 可以访问
                                // console.log('可以访问',item.icon)
                                let item1 = JSON.parse(JSON.stringify(item));
                                this.decisionright.push(item1);
                            } else {
                                //   console.log('禁止访问',item.icon)
                                // 禁止访问
                                //  console.log('if',item.icon.indexOf("noright-"))
                                if (!item.icon.indexOf("noright-")) {
                                    // console.log('有头',item.icon)
                                    this.decisionnoright.push(item);
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
                                    this.decisionnoright.push(item2);
                                }
                            }
                        }
                    }
                });
                // 各自数组去重
                this.decisionright = uniqeByKeys(this.decisionright, [
                    "href",
                    "title",
                    "id",
                    "icon"
                ]);
                // console.log('right',this.right.length)
                this.decisionnoright = uniqeByKeys(this.decisionnoright, [
                    "href",
                    "title",
                    "id",
                    "icon"
                ]);
                // console.log('noright',this.noright.length)

                // 处理可访问和禁止访问的重复数据
                this.decisionright.forEach(r => {
                    this.decisionnoright.forEach((nr, i) => {
                        if (JSON.stringify(r.id) === JSON.stringify(nr.id)) {
                            this.decisionnoright.splice(i, 1);
                        }
                    });
                });
                // console.log(this.noright.length)
                this.decision = uniqeByKeys(this.decision, [
                    "href",
                    "title",
                    "id",
                    "icon"
                ]);
                // 合并
                this.decisionright.forEach(element => {
                    this.decision.push(element);
                });
                this.decisionnoright.forEach(element => {
                    this.decision.push(element);
                });
                console.log("decision", this.decision);
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
    },
    computed: {
        ...mapGetters(["getInfo"])
    }
};
</script>
<style>
/* .div1 {
    width: 130px;
    height: 160px;
    text-align: center;
    float: left;
    margin: 9px;
  } */
.image-1 {
    float: left;
    margin: 20px;
}
</style>
