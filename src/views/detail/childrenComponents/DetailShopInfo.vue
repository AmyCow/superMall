<template>
  <div class="shopInfo">
    <div class="shopInfo__logo">
      <img class="shopInfo__logo__img" :src="shopInfo.logo" alt="">
      <p class="shopInfo__logo__name">{{shopInfo.name}}</p>
    </div>
    <div class="shopInfo__desc">
      <div class="shopInfo__desc__num">
        <div>
          <p class="num">{{(shopInfo.allSell/10000).toFixed(1)}}万</p>
          <p>总销量</p>
        </div>
        <div>
          <p class="num">{{shopInfo.totalNum}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shopInfo__desc__evaluation">
        <div class="shopInfo__single__desc" v-for="item in shopInfo.score" :key="item.name">
          <span>{{item.name}}</span>
          <span class="score" :style="{color: item.isBetter ? red : green}">{{item.score}}</span>
          <span class="evaluation" :style="{backgroundColor: item.isBetter ? red : green}">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <p class="shopInfo__info">进店逛逛</p>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      green: '#5ea732',
      red: '#f13e3a'
    }
  }
}
</script>

<style lang="scss" scoped>
.shopInfo{
  padding: 20px 8px;
  font-size: 12px;
  color: #333;
  border-bottom: 4px solid #eee;
  &__logo{
    display: flex;
    &__img{
      width: 38px;
      height: 38px;
    }
    &__name{
      font-size: 16px;
      color: #000;
      line-height: 38px;
      margin-left: 10px;
    }
  }
  &__desc{
    display: flex;
    margin: 6px 0 10px;
    height: 84px;
    justify-content: center;
    align-items: center;
    &__num, &__evaluation{
      flex: 1;
    }
    &__num{
      height: 44px;
      display: flex;
      justify-content: space-evenly;
      border-right: 1px solid rgba(100, 100, 100, .1);
      & > div{
        text-align: center;
      }
      .num{
        font-size: 16px;
        margin-bottom: 12px;
      }
    }
    &__evaluation{
      padding-left: 24px;
      .score{
        display: inline-block;
        margin: 8px;
        width: 24px;
        text-align: right;
      }
      .evaluation{
        color: #fff;
        font-size: 12px;
        padding: 1px;
      }
    }
  }
  &__info{
    background-color: #f2f5f8;
    color: #000;
    width: 128px;
    text-align: center;
    line-height: 26px;
    margin: 0 auto;
    border-radius: 6px;
  }
}

</style>
