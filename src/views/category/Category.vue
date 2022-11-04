<template>
  <div class="category">
    <nav-bar class="category__nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div class="category__content">
      <scroll class="category__content__height" ref="menuScroll">
        <menu-bar class="category__content__menu"
                  :type-list="menuList"
                  @changeSubCategory="changeSubCategory"
        />
      </scroll>
      <scroll class="category__info__height" ref="infoScroll">
        <div class="category__content__info">
          <sub-category-list :subCategory="subcategory"/>
          <tab-control :titles="titleList" @tabClick="changeTabItem"/>
          <goods-list :goods="showGoods"/>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import MenuBar from './childrenComponents/MenuBar'
import SubCategoryList from './childrenComponents/SubCategoryList'

import { category, subcategory, detail } from 'network/category'
import { debounce } from 'common/utils'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Category',
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,

    MenuBar,
    SubCategoryList
  },
  data () {
    return {
      menuList: [],
      maitKey: '',
      miniWallkey: '',
      subcategory: [],
      titleList: ['综合', '新品', '销量'],
      categorys: {
        pop: [],
        sell: [],
        new: []
      },
      currentType: 'pop',
      infoScrollPosition: 0,
      menuScrollPosition: 0
    }
  },
  created () {
    this.category()
  },
  mounted () {
    const refresh = debounce(this.$refs.infoScroll.refresh)
    this.$bus.$on('itemImgLoaded', () => {
      refresh()
    })
  },
  methods: {
    getSubcategory (maitKey) {
      subcategory(maitKey).then(res => {
        this.subcategory = res.data.list
      })
      this.getDetail(this.miniWallkey, 'pop')
      this.getDetail(this.miniWallkey, 'sell')
      this.getDetail(this.miniWallkey, 'new')
    },
    category () {
      category().then(res => {
        this.menuList = res.data.category.list
        this.maitKey = this.menuList[0].maitKey
        this.miniWallkey = this.menuList[0].miniWallkey
        this.getSubcategory(this.maitKey)
      })
    },
    changeSubCategory (item) {
      this.maitKey = item.maitKey
      this.miniWallkey = item.miniWallkey
      this.getSubcategory(this.maitKey)
    },
    getDetail (miniWallkey, type) {
      detail(miniWallkey, type).then(res => {
        this.categorys[type] = res
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
    }
  },
  computed: {
    showGoods () {
      return this.categorys[this.currentType]
    }
  },
  watch: {
    menuList () {
      this.$nextTick(() => {
        this.$refs.menuScroll.refresh()
      })
    }
  },
  activated () {
    this.$refs.menuScroll.scrollTop(0, this.menuScrollPosition, 1)
    this.$refs.menuScroll.refresh()
    this.$refs.infoScroll.scrollTop(0, this.infoScrollPosition, 1)
    this.$refs.infoScroll.refresh()
  },
  deactivated () {
    this.menuScrollPosition = this.$refs.menuScroll.scrollY()
    this.infoScrollPosition = this.$refs.infoScroll.scrollY()
  }
}
</script>

<style lang="scss" scoped>
.category{
  width: 100%;
  height: 100vh;
  &__nav{
    background: #ff8198;
    color: #fff;
    width: 100%;
  }
  &__content{
    display: flex;
    height: calc(100% - 93px);
    &__height{
      height: 100%;
      overflow: hidden;
    }
    &__menu{
        width: 86px;
        // height: 100%;
        font-size: 12px;
        // overflow: hidden;
        color: #000;
    }
    &__info{
      flex: 1;
    }
  }
  .category__info__height{
    height: 100%;
    overflow: hidden;
    width: calc(100% - 86px);
  }
}
</style>
