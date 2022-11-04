<template>
  <div class="baseInfo" v-show="Object.keys(good).length !== 0">
    <p class="baseInfo__title">{{good.title}}</p>
    <div class="baseInfo__price">
      <span class="baseInfo__price__now">{{good.price}}</span>
      <span class="baseInfo__price__old">{{good.oldPrice | getPrice}}</span>
      <span class="baseInfo__price__disc" :style="{background: good.discountBgColor}" v-show="good.discountDesc">{{good.discountDesc}}</span>
    </div>
    <div class="baseInfo__desc" v-if="good.columns">
      <div v-for="index in good.columns.length - 1" :key="index">{{good.columns[index]}}</div>
      <div>{{good.services[good.services.length - 1].name}}</div>
    </div>
    <div class="baseInfo__service">
      <div class="baseInfo__service__detail" v-for="(item,index) in good.services" :key="index">
        <img v-show="item.icon" :src="item.icon"/>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    good: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    getPrice (price) {
      return '￥' + price
    }
  }
}
</script>

<style lang="scss" scoped>
.baseInfo{
  padding: 0 8px;
  border-top: 16px solid #eee;
  border-bottom: 4px solid #eee;
  font-size: 12px;
  &__title{
    font-size: 16px;
    color: #222;
    text-indent: 2em;
    padding: 6px 0 10px;
    // margin: 0 -8px;
  }
  &__price{
    margin-bottom: 16px;
    &__now{
      font-size: 18px;
      color: #FF5777;
    }
    &__old{
      display: inline-block;
      margin: 0 4px;
      color: #999;
      text-decoration: line-through;
    }
    &__disc{
      color: #fff;
      border-radius: 5px;
      padding:4px;
      position: relative;
      top: -6px;
    }
  }
  &__desc{
    display: flex;
    justify-content: space-between;
    color: #999;
    line-height: 24px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  &__service{
    display: flex;
    justify-content: space-between;
    &__detail{
      color: #333;
      line-height: 50px;
      img{
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
