<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goodItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  padding: 0 6px;
  justify-content: space-between;
}
</style>
