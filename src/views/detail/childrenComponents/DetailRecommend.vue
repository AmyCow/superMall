<template>
  <div class="recommend">
    <p class="recommend__title">热门推荐</p>
    <goods-list :goods="recommend"/>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'

export default {
  name: 'DetailRecommend',
  props: {
    recommend: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsList
  }
}
</script>

<style lang="scss" scoped>
.recommend{
  padding: 16px 8px;
  border-bottom: 3px solid #eee;
  &__title{
    font-size: 15px;
    color: #333;
    line-height: 40px;
  }
}
</style>
