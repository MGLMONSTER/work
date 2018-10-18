<template>
  <div class="scroll-container" ref="scrollContainer">
    <div class="scroll-wrapper" ref="scrollWrapper">
      <slot></slot>
    </div>
  </div><!--  ":style="{left: left + 'px'} -->
</template>

<script>
  const padding = 15 // tag's padding

  export default {
    name: 'scrollPane',
    data() {
      return {
        left: 0
      }
    },
    methods: {
      handleScroll(e) {
        const eventDelta = e.wheelDelta || -e.deltaY * 3
        const $container = this.$refs.scrollContainer
        const $containerWidth = $container.offsetWidth
        const $wrapper = this.$refs.scrollWrapper
        const $wrapperWidth = $wrapper.offsetWidth

        if (eventDelta > 0) {
          this.left = Math.min(0, this.left + eventDelta)
        } else {
          if ($containerWidth - padding < $wrapperWidth) {
            if (this.left < -($wrapperWidth - $containerWidth + padding)) {
              this.left = this.left
            } else {
              this.left = Math.max(this.left + eventDelta, $containerWidth - $wrapperWidth - padding)
            }
          } else {
            this.left = 0
          }
        }
      },
      moveToTarget($target) {
        const $container = this.$refs.scrollContainer
        const $containerWidth = $container.offsetWidth
        const $targetLeft = $target.offsetLeft
        const $targetWidth = $target.offsetWidth

        if ($targetLeft < -this.left) {
          // tag in the left
          this.left = -$targetLeft + padding
        } else if ($targetLeft + padding > -this.left && $targetLeft + $targetWidth < -this.left + $containerWidth - padding) {
          // tag in the current view
          // eslint-disable-line
        } else {
          // tag in the right
          this.left = -($targetLeft - ($containerWidth - $targetWidth) + padding)
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .scroll-container {
    white-space: nowrap;
    width: 45px;
    overflow: hidden!important;
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 242px;
    position: fixed;
    .scroll-wrapper {
      position: absolute;
      font-size: 13pt;
      width: 58px;
      height: 100% !important;
      overflow-y: auto;
      -webkit-writing-mode: vertical-lr;
      writing-mode: vertical-lr;
      -ms-writing-mode: tb-lr;
      -o-writing-mode: vertical-lr;
      -moz-writing-mode: vertical-lr;
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
      text-align: left;
    }
  }
</style>
