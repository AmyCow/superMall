<template>
  <div class="bottomBar">
    <div class="bottomBar__item">
      <div>
        <i class="bottomBar__item__service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="bottomBar__item__shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="bottomBar__item__select"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottomBar__cart" @click="addCart">加入购物车</div>
    <div class="bottomBar__buy">购买</div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addCart () {
      this.$emit('addCart')
    }
  }
}
</script>

<style lang="scss" scoped>
.bottomBar{
  display: flex;
  height: 49px;
  font-size: 13px;
  color: #000;
  text-align: center;
  background: #fff;
  &__item{
    flex: 1;
    display: flex;
    justify-content: space-around;
    padding-top: 6px;
    span{
      display: block;
      margin-top: -4px;
    }
    i{
      display: block;
      width: 20px;
      height: 20px;
      margin: 0 0 6px 3px;
      background: url(~assets/img/detail/detail_bottom.png) no-repeat 0 0/100%;
    }
    &__service{
      background-position: 0 -48px!important;
    }
    &__shop{
      background-position: 0 -89px!important;
    }
  }
  &__cart{
    background-color: #ffe817;
    color: #333;
  }
  &__buy{
    background-color: #f69;
    color: #fff;
  }
  &__cart, &__buy{
    width: 80px;
    line-height: 49px;
  }
}
</style>
