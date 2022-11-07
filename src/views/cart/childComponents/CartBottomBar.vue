<template>
  <div class="cartBottomBar">
    <div class="cartBottomBar__btn">
      <check-button class="cartBottomBar__btn__detail"
                    @click.native="clickButton"
                    :is-checked="isTotalChecked"
      />
      <span>全选</span>
    </div>
    <div class="cartBottomBar__price">合计：{{totalPrice}}</div>
    <div class="cartBottomBar__num" @click="caculateClick">去计算({{countLength}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'
export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartsList']),
    totalPrice () {
      return '￥' + this.cartsList.filter(item => item.checked).reduce((sum, item) => {
        return sum + item.price * item.count
      }, 0)
    },
    countLength () {
      return this.cartsList.filter(item => item.checked).length
    },
    isTotalChecked () {
      if (this.cartsList.length === 0) {
        return false
      }
      return !this.cartsList.find(item => !item.checked)
    }
  },
  methods: {
    clickButton () {
      if (this.isTotalChecked) {
        this.cartsList.forEach(item => {
          item.checked = false
        })
      } else {
        this.cartsList.forEach(item => {
          item.checked = true
        })
      }
    },
    caculateClick () {
      if (this.countLength === 0) {
        this.$toast.show('请选择要结算的商品')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cartBottomBar{
  height: 40px;
  display: flex;
  background-color: #eee;
  font-size: 12px;
  &__btn{
    width: 60px;
    color: #888;
    &__detail{
      width: 30px;
      top: 20px;
    }
    span{
      display: inline-block;
      padding-left: 30px;
      line-height: 40px;
    }
  }
  &__price{
    flex: 1;
    color: #666;
    line-height: 40px;
    font-size: 14px;
  }
  &__num{
    width: 80px;
    background-color: #ff4500;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
