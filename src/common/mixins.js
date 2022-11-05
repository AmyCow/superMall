import { debounce } from './utils'

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
