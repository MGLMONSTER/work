<template>
  <div class="tags-view-container">
    <scroll-pane class='tags-view-wrapper' ref='scrollPane'>
        <router-link ref='tag' class="tags-view-item" :class="isActive(tag)?'active':''" v-for="tag in Array.from(visitedViews)" v-if="tag.path!='/dashboard'"
          :to="tag.path" :key="tag.path" @contextmenu.prevent.native="openMenu(tag,$event)">
          {{generateTitle(tag.title)}}
          <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
        </router-link>
      <!--<router-link class="tags-view-item" to="/dashboard"  style="position: fixed;top:80px;left:244px;height:90px;">-->
        <!-- -->
      <!--</router-link>-->
    </scroll-pane>
    <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedTag(selectedTag)">Close</li>
      <li @click="closeOthersTags">Close Others</li>
      <li @click="closeAllTags">Close All</li>
    </ul>
  </div>
</template>

<script>
import ScrollPane from '@/components/ScrollPane'
import { generateTitle } from '@/utils/i18n'
export default {
  name: 'TagsView',
  components: { ScrollPane },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      addclass:'',
      selectedTag: {}
    }
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    }
  },
  watch: {
    $route() {
      this.addViewTags()
      this.moveToCurrentTag()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    this.addViewTags()
  },
  methods: {
    generateTitle, // generateTitle by vue-i18n
    generateRoute() {
      if (this.$route.name) {
        return this.$route
      }
      return false
    },
    isActive(route) {
      return route.path === this.$route.path || route.name === this.$route.name
    },
    addViewTags() {
      const route = this.generateRoute()
      if (!route) {
        return false
      }
      this.$store.dispatch('addVisitedViews', route)
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag.$el)
            break
          }
        }
      })
    },
    closeSelectedTag(view) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag.path)
      this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    closeAllTags() {
      this.$store.dispatch('delAllViews')
      this.$router.push('/')
    },
    openMenu(tag, e) {
      this.visible = true
      this.selectedTag = tag
      this.left = e.clientX
      this.top = e.clientY
    },
    closeMenu() {
      this.visible = false
    },
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tags-view-container {
  position: fixed;top: 80px;left: 242px;
  z-index:1000;
  font-size:14pt;
  width: 45px !important;
  overflow: hidden!important;
  .tags-view-wrapper {
    height: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
    .tags-view-item {
      /*position: relative;*/
      /*top:94px;*/
      /*left:2px;*/
      /*height: 26px;*/
      line-height: 26px;
      background:#e03636;
      color: #fff;
      padding: 10px 8px;
      font-size: 14px;
      margin-top: 4px;
      display: table-cell;
      -webkit-writing-mode:vertical-lr;
      writing-mode:vertical-lr;
      -ms-writing-mode:tb-lr;
      -o-writing-mode:vertical-lr;
      -moz-writing-mode:vertical-lr;
      font-family: 'OrhonChaganTig';
      unicode-bidi: embed;
      text-orientation: sideways-right;
      -webkit-text-orientation: sideways-right;
      -mz-text-orientation: sideways-right;
      -o-text-orientation: sideways-right;
      -ms-text-orientation: sideways-right;
      word-spacing: normal;
      word-wrap: normal;
      word-break: keep-all;
      &.active {
        //background: linear-gradient(to right, #ff0000 50%,#ffffff 100%);
        background:#bf2e2e;
        color: #fff;
        border-radius: 6px;
        // &::before {
        //   content: '';
        //   background: #fff;
        //   display: inline-block;
        //   width: 8px;
        //   height: 8px;
        //   border-radius: 50%;
        //   position: relative;
        //   margin-right: 2px;
        // }
      }
      &:hover{
        //background: linear-gradient(to right, #db6363 20%,#faacac 50%,#db6363 100%);
        background:#ad2a2a;
        color: #f8c6c6;
        border-radius: 6px;
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 2;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 14pt;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
.router-link-active{
  background:#bf2e2e!important;
  color: #fff;
  border-radius: 6px;
}
</style>
