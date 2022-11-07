<template>
  <div class="recommand">
    <div class="recommand__item" v-for="item in recommand" :key="item.title">
      <a :href="item.link">
        <img v-lazy="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommandView',
  props: {
    recommand: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.recommand{
  display: flex;
  width: 100%;
  &__item{
    width: 25%;
    text-align: center;
    font-size: 12px;
    color: #666;
    padding: 8px;
    & img{
      width: 100%;
      margin-bottom: 4px;
    }
  }
}
</style>
