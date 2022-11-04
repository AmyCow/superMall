<template>
  <div class="detail">
    <detail-nav/>
    <scroll class="detail__content" ref="detailScroll">
      <detail-swiper :top-images="topImages" @imageLoad="imageLoad"/>
      <detail-base-info :good="good"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-common-info :common-info="commonInfo" @imgLoad="imageLoad"/>
      <detail-params :detail-params="detailParams"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import DetailNav from './childrenComponents/DetailNav'
import DetailSwiper from './childrenComponents/DetailSwiper'
import DetailBaseInfo from './childrenComponents/DetailBaseInfo'
import DetailShopInfo from './childrenComponents/DetailShopInfo'
import DetailCommonInfo from './childrenComponents/DetailCommonInfo'
import DetailParams from './childrenComponents/DetailParams'

import { getGoodDetail, Good, ShopInfo, Parm } from 'network/details'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Detail',
  components: {
    Scroll,

    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailCommonInfo,
    DetailParams
  },
  created () {
    this.id = this.$route.params.id
    this.getDetail(this.id)
  },
  data () {
    return {
      id: '',
      topImages: [],
      good: {},
      shopInfo: {},
      commonInfo: {},
      detailParams: {}
    }
  },
  methods: {
    getDetail (id) {
      getGoodDetail(id).then(res => {
        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.good = new Good(data.itemInfo, data.columns, data.shopInfo.services)
        this.shopInfo = new ShopInfo(data.shopInfo)
        this.commonInfo = data.detailInfo
        this.detailParams = new Parm(data.itemParams.info, data.itemParams.rule || '')
      })
    },
    imageLoad () {
      this.$refs.detailScroll.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
.detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  &__content{
    height: calc(100% - 44px);
    overflow: hidden;
  }
}
</style>
