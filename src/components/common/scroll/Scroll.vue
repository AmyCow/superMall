<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: ''
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    if ([2, 3].includes(this.probeType)) {
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
    }
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  updated () {
    // this.scroll.refresh()
  },
  methods: {
    scrollTop (x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollY () {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
