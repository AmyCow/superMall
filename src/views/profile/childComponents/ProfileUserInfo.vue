<template>
  <div class="userInfo">
    <div class="userInfo__login">
      <img class="userInfo__login__img" src="~assets/img/profile/avatar.svg" alt="">
      <div class="userInfo__login__text">
        <p class="name">登录/注册</p>
        <p class="phone">暂无绑定手机号</p>
      </div>
      <i class="userInfo__login__more"></i>
    </div>
    <div class="userInfo__desc">
      <div class="userInfo__desc__grid">
        <p><span class="count">0.0</span>元</p>
        <p class="text">我的余额</p>
      </div>
      <div class="userInfo__desc__grid">
        <p><span class="count">0</span>个</p>
        <p class="text">我的优惠</p>
      </div>
      <div class="userInfo__desc__grid">
        <p><span class="count">0</span>分</p>
        <p class="text">我的积分</p>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'ProfileUserInfo',
  props: {
    info: {
      type: Object,
      default () {
        return {}
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.userInfo{
  &__login{
    background-color: #FF8198;
    height: 78px;
    display: flex;
    align-items: center;
    padding: 13px;
    &__img{
      width: 51px;
      height: 51px;
      margin-right: 8px;
    }
    &__text{
      flex: 1;
      color: #fff;
      .name{
        font-size: 16px;
        line-height: 21px;
        margin-bottom: 4px;
      }
      .phone{
        font-size: 12px;
        line-height: 16px;
        background: url(~assets/img/profile/phone.svg) no-repeat -104px 0;
        background-size: 100% 100%;
        padding-left: 15px;
      }
    }
    &__more{
      display: block;
      width: 13px;
      height: 17px;
      background: url(~assets/img/common/arrow-left.svg) no-repeat;
      background-size: 100% 100%;
    }
  }
  &__desc{
    color: #666;
    display: flex;
    text-align: center;
    &__grid{
      padding: 15px;
      height: 78px;
      flex: 1;
      font-size: 12px;
      border-right: 1px solid #f2f2f2;
      &:last-child{
        border-right: none;
      }
      .count{
        font-size: 20px;
        color: #ff5f3e;
      }
      .text{
        font-size: 16px;
        margin-top: 6px;
      }
    }
  }
}
</style>
