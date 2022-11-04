<template>
  <div class="subCategory">
    <div class="subCategory__item" v-for="(item,index) in subCategory" :key="index">
      <a :href="item.link">
        <img class="subCategory__item__img" :src="item.image" alt="">
        <p class="subCategory__item__title">{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubCategoryList',
  props: {
    subCategory: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.subCategory{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 8px;
  margin-bottom: 10px;
  &__item{
    width: 74px;
    height: 96px;
    text-align: center;
    &__img{
      width: 56px;
      height: 56px;
      margin: 10px 0;
    }
    &__title{
      font-size: 12px;
      color: #666;
      text-align: center;
    }
  }
}
</style>
