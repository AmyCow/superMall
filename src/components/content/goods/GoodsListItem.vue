<template>
  <div class="goodItem" @click="detail" v-if="Object.keys(goodItem).length !== 0">
    <img v-lazy="showPic" :key="goodItem.shopId || goodItem.tradeItemId" alt="" @load="imageLoad">
    <div class="goodItem__content">
      <p class="goodItem__content__title">{{goodItem.title}}</p>
      <span class="goodItem__content__price">{{goodItem.price}}</span>
      <span class="goodItem__content__cfav">{{goodItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    imageLoad () {
      this.$bus.$emit('itemImgLoaded')
    },
    detail () {
      if (this.goodItem.iid) {
        this.$router.push('/detail/' + this.goodItem.iid)
      }
    }
  },
  computed: {
    showPic () {
      return this.goodItem.image || this.goodItem.img || this.goodItem.show.img
    }
  }
}
</script>

<style lang="scss" scoped>
.goodItem{
  width: 48%;
  text-align: center;
  img{
    width: 100%;
    border-radius: 5px;
  }
  &__content{
    font-size: 12px;
    margin-bottom: 4px;
    &__title{
      color: #333;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-bottom: 4px;
    }
    &__price{
      color: #FF5777;
      margin-right: 20px;
    }
    &__cfav{
      position: relative;
      z-index: -1;
      &::before{
        content: '';
        width: 14px;
        height: 14px;
        position: absolute;
        left: -16px;
        top: -1px;
        background: url('~assets/img/common/collect.svg') no-repeat;
        background-size: 14px 14px;
      }
    }
  }
}
</style>
