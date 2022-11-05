import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixins = {
  data () {
    return {
      itemImageListener: null
    }
  },
  mounted () {
    const refresh = debounce(this.$refs.imageScroll.refresh)
    this.itemImageListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoaded', this.itemImageListener)
  },
  deactivated () {
    this.$bus.$off('itemImgLoaded', this.itemImageListener)
  }
}

export const backTopMixins = {
  data () {
    return {
      isShowBackTop: false
    }
  },
  components: { BackTop },
  methods: {
    showBackTop (position) {
      this.isShowBackTop = (-position.y) > 1000
    },
    backTop () {
      this.$refs.imageScroll.scrollTop(0, 0)
    }
  }
}
