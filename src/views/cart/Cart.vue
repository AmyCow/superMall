<template>
  <div class="cart">
    <nav-bar class="cart__nav">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <scroll class="cart__scroll" ref="imageScroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar v-if="cartList.length !== 0"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CartList from './childComponents/CartList'
import CartBottomBar from './childComponents/CartBottomBar'

import { mapGetters } from 'vuex'
import { itemListenerMixins } from 'common/mixins'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cart',
  components: {
    NavBar,
    Scroll,

    CartList,
    CartBottomBar
  },
  mixins: [itemListenerMixins],
  computed: {
    // 方法一：直接使用
    // ...mapGetters(['cartNum', 'cartList'])
    // 方法二：取别名
    ...mapGetters({
      length: 'cartNum',
      cartList: 'cartsList'
    })
  },
  activated () {
    this.$refs.imageScroll.refresh()
  }
}
</script>

<style lang="scss" scoped>
.cart{
  height: 100vh;
  &__nav{
    background-color: #ff8198;
    color: #fff;
  }
  &__scroll{
    height: calc(100% - 133px);
    overflow: hidden;
  }
}
</style>
