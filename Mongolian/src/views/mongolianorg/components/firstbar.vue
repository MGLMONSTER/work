<template>
  <div class="secondbar">
    <template v-for="item in routes" v-if="item.hidden && item.children ">
      <ul class="second-ul">
        <template v-for="child in item.children" v-if="item.path=== aboutfa ">
          <li class="second-li">
            <router-link class='firsta' :to="item.path+'/'+child.path" :key="child.name">
              <span class="firstspan" v-if="child.meta&&child.meta.title">{{generateTitle(child.meta.title)}}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </template>
  </div>
</template>
<script>
import { generateTitle } from '@/utils/i18n'

export default {
  name: 'firstbar',
  props: {
    routes: {
      type: Array
    },
    aboutfa:{
      type:String
    }
  },
   data(){
    return {
      screenHeight: document.body.clientHeight,
      height: {
        height:'',
      }
    }
  },
  created() {
    this.ww();
  },
  mounted () { 
    const that = this
    window.onresize = () =>{ 
    return (()=>{ 
      window.screenHeight = document.body.clientHeight;
      that.screenHeight = window.screenHeight
      this.ww()
    })()
   } 
  },
  watch: { 
   screenHeight (val) { 
     if (!this.timer) { 
       this.screenHeight = val 
       this.timer = true 
        let that = this 
        setTimeout(function () { 
        // that.screenWidth = that.$store.state.canvasWidth 
        console.log(that.screenHeight) 
        that.init() 
        that.timer = false 
       }, 400) 
      } 
     } 
   },
  methods: {
    generateTitle,
    ww(){
      this.height.height=this.screenHeight+'px';
    } 
  }
}
</script>
<style scoped>
.secondbar{
  width:20%;
  word-wrap: break-word; 
  word-break: break-all; 
}
.second-ul{
  width: 40px;
  height: auto;
  list-style: none;
}
.second-li{
  position: relative;
  top:-20px;
  left: -40px;
  list-style: none;
  writing-mode: vertical-lr;
  -webkit-writing-mode: vertical-lr;
  -o-writing-mode: vertical-lr;
  -ms-writing-mode: tb-lr;
  -moz-writing-mode: vertical-lr;
  font-family: OrhonChaganTig, Helvetica, Arial, Verdana;
  unicode-bidi: embed;
  text-orientation: sideways-right;
  -webkit-text-orientation: sideways-right;
  -mz-text-orientation: sideways-right;
  -o-text-orientation: sideways-right;
  -ms-text-orientation: sideways-right;
  word-spacing: normal;
  word-wrap: normal;
  word-break: keep-all;
  height: auto;
  width: 40px;
}
.second-li .firsta{
  display: block;
  width: 40px;
  padding: 10px 0;
  border-radius: 6px;
  background: #f5f7fa;
}
.second-li .firsta .firstspan{
  display: block;
  width: 40px;
  line-height:40px;
   writing-mode:vertical-lr;
  -webkit-writing-mode:vertical-lr;
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
}
.second-li .firsta:hover{
  background: #e03636 !important;
  color: #fff;
}
.router-link-active{
  background: #fff !important;
  color:#ff0000;
  }
</style>

