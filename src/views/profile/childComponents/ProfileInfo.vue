<template>
  <div class="profileInfo">
    <div class="profileInfo__good">
      <div class="profileInfo__good__item">
        <img src="~assets/img/profile/message.svg" alt="">
        <span>我的消息</span>
      </div>
      <div class="profileInfo__good__item">
        <img src="~assets/img/profile/shopping.svg" alt="">
        <span>积分商城</span>
      </div>
      <div class="profileInfo__good__item">
        <img src="~assets/img/profile/vip.svg" alt="">
        <span>会员卡</span>
      </div>
    </div>
    <div class="profileInfo__cart">
      <div class="profileInfo__good__item">
        <img src="~assets/img/profile/cart.svg" alt="">
        <span>我的购物车</span>
      </div>
      <div class="profileInfo__good__item">
        <img src="~assets/img/profile/pointer.svg" alt="">
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo'
}
</script>

<style lang="scss" scoped>
.profileInfo{
  font-size: 15px;
  color: #333;
  &__good{
    border-top: 10px solid #f2f2f2;
    border-bottom: 10px solid #f2f2f2;
  }
  &__good, &__cart{
    &__item{
      display: flex;
      line-height: 38px;
      align-items: center;
      img{
        width: 17px;
        height: 17px;
        margin: 0 8px 0 12px;
      }
      span{
        flex: 1;
        border-bottom: 1px solid #f2f2f2;
      }
    }
  }
}
</style>
