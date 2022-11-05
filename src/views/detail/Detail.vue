<template>
  <div class="detail">
    <detail-nav ref="detailNav" @titleClick="titleClick"/>
    <scroll class="detail__content"
            ref="imageScroll"
            @scroll="contentScroll"
            :probe-type="3"
    >
      <detail-swiper :top-images="topImages" @imageLoad="imageLoad"/>
      <detail-base-info :good="good"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-common-info :common-info="commonInfo" @imgLoad="imageLoad"/>
      <detail-params ref="params" :detail-params="detailParams"/>
      <detail-comment ref="comment" :comment-list="commentList"/>
      <detail-recommend ref="recommend" :recommend="recommend"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
    <detail-bottom-bar/>
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
import DetailComment from './childrenComponents/DetailComment'
import DetailRecommend from './childrenComponents/DetailRecommend'
import DetailBottomBar from './childrenComponents/DetailBottomBar'

import { getGoodDetail, Good, ShopInfo, Parm, recommend } from 'network/details'
import { itemListenerMixins, backTopMixins } from 'common/mixins'
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
    DetailParams,
    DetailComment,
    DetailRecommend,
    DetailBottomBar
  },
  mixins: [itemListenerMixins, backTopMixins],
  data () {
    return {
      id: '',
      topImages: [],
      good: {},
      shopInfo: {},
      commonInfo: {},
      detailParams: {},
      commentList: [],
      recommend: [],
      themeTopY: [],
      currentIndex: 0
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getDetail(this.id)
    this.getRecommend()
  },
  mounted () {

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
        this.commentList = data.rate.list
      })
    },
    imageLoad () {
      this.$refs.imageScroll.refresh()
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopY.push(Number.MAX_VALUE)
    },
    getRecommend () {
      recommend().then(res => {
        this.recommend = res.data.list
      })
    },
    titleClick (index) {
      this.$refs.imageScroll.scrollTop(0, -this.themeTopY[index] + 33)
    },
    contentScroll (position) {
      this.showBackTop(position)
      const positionY = -position.y
      const length = this.themeTopY.length
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && (positionY >= this.themeTopY[i] - 32 && positionY < this.themeTopY[i + 1] - 32)) {
          this.currentIndex = i
          this.$refs.detailNav.currentIndex = this.currentIndex
        }
      }
    }
  },
  destroyed () {

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
    height: calc(100% - 93px);
    overflow: hidden;
  }
}
</style>
