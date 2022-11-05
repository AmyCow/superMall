<template>
  <div id="home" class="home">
    <nav-bar class="home__nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="home__tab"
                ref="tab"
                :titles="titleList"
                @tabClick="changeTabItem"
                v-show="isTabShow"
    />
    <scroll class="home__center"
            ref="imageScroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore"
            >
      <home-swiper :banner="banner" @imageLoad="imageLoad"/>
      <recommand-view :recommand="recommend"/>
      <feature-view/>
      <tab-control class="home__tab"
                  ref="tabControl"
                  :titles="titleList"
                  @tabClick="changeTabItem"
                  :class="{ fixed: isTabShow }"
      />
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import HomeSwiper from './childComponents/HomeSwiper'
import RecommandView from './childComponents/RecommandView'
import FeatureView from './childComponents/FeatureView'

import { getHomeMultidata, getHomeGoods } from 'network/home'

import { debounce } from 'common/utils'
import { itemListenerMixins, backTopMixins } from 'common/mixins'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,

    HomeSwiper,
    RecommandView,
    FeatureView
  },
  mixins: [itemListenerMixins, backTopMixins],
  data () {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      titleList: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabShow: false,
      scrollPosition: 0
    }
  },
  created () {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {

  },
  methods: {
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.imageScroll.finishPullUp()
      })
    },
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        const result = res.data
        this.banner = result.banner.list
        this.dKeyword = result.dKeyword.list
        this.keywords = result.keywords.list
        this.recommend = result.recommend.list
      })
    },
    changeTabItem (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl.currentIndex = index
      this.$refs.tab.currentIndex = index
    },
    backTop () {
      this.$refs.imageScroll.scrollTop(0, 0)
    },
    contentScroll (position) {
      this.showBackTop(position)
      this.isTabShow = (-position.y) >= this.tabOffsetTop
    },
    loadMore () {
      debounce(this.getHomeGoods(this.currentType), 5)
    },
    imageLoad () {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  activated () {
    this.$refs.imageScroll.scrollTop(0, this.scrollPosition, 1)
    this.$refs.imageScroll.refresh()
  },
  deactivated () {
    this.scrollPosition = this.$refs.imageScroll.scrollY()
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100vh;
  &__nav{
    background: #ff8198;
    color: #fff;
    width: 100%;
  }
  &__tab{
    // position: sticky;
    // top: 44px;
  }
  &__center{
    height: calc(100% - 49px);
    overflow: hidden;
  }
  .fixed{
    position: fixed;
    top: 44px;
  }
}
</style>
