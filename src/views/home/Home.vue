<template>
  <div id="home" class="home">
    <nav-bar class="home__nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"/>
    <recommand-view :recommand="recommend"/>
    <feature-view/>
    <tab-control class="home__tab" :titles="titleList"/>

    <ul>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './childComponents/HomeSwiper'
import RecommandView from './childComponents/RecommandView'
import FeatureView from './childComponents/FeatureView'

import { getHomeMultidata } from 'network/home'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    NavBar,
    TabControl,

    HomeSwiper,
    RecommandView,
    FeatureView
  },
  data () {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      titleList: ['流行', '新款', '精选']
    }
  },
  created () {
    getHomeMultidata().then(res => {
      const result = res.data
      this.banner = result.banner.list
      this.dKeyword = result.dKeyword.list
      this.keywords = result.keywords.list
      this.recommend = result.recommend.list
    })
  }
}
</script>

<style lang="scss" scoped>
.home{
  padding-top: 44px;
  &__nav{
    background: #ff8198;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
  }
  &__tab{
    position: sticky;
    top: 44px;
  }
}
</style>
