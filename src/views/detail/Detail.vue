<template>
  <div class="detail">
    <detail-nav/>
    <scroll class="detail__content" ref="imageScroll">
      <detail-swiper :top-images="topImages" @imageLoad="imageLoad"/>
      <detail-base-info :good="good"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-common-info :common-info="commonInfo" @imgLoad="imageLoad"/>
      <detail-params :detail-params="detailParams"/>
      <detail-comment :comment-list="commentList"/>
      <detail-recommend :recommend="recommend"/>
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
import DetailComment from './childrenComponents/DetailComment'
import DetailRecommend from './childrenComponents/DetailRecommend'

import { getGoodDetail, Good, ShopInfo, Parm, recommend } from 'network/details'
import { itemListenerMixins } from 'common/mixins'
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
    DetailRecommend
  },
  mixins: [itemListenerMixins],
  data () {
    return {
      id: '',
      topImages: [],
      good: {},
      shopInfo: {},
      commonInfo: {},
      detailParams: {},
      commentList: [],
      recommend: []
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
    },
    getRecommend () {
      recommend().then(res => {
        this.recommend = res.data.list
      })
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
    height: calc(100% - 44px);
    overflow: hidden;
  }
}
</style>
