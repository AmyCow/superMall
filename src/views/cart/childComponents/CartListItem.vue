<template>
  <div class="cartItem">
    <check-button :is-checked="product.checked"
                  class="cartItem__button"
                  @click.native="buttonClick"
    />
    <img class="cartItem__img" :src="product.image" alt="">
    <div class="cartItem__info">
      <p class="cartItem__info__title">{{product.title}}</p>
      <p class="cartItem__info__desc">商品描述：{{product.desc}}</p>
      <div class="cartItem__info__bottom">
        <span class="price">{{product.price}}</span>
        <span class="num">×{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    buttonClick () {
      // eslint-disable-next-line vue/no-mutating-props
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style lang="scss" scoped>
.cartItem{
  height: 98px;
  display: flex;
  padding: 4px;
  border-bottom: 1px solid #eee;
  &__button{
    width: 30px;
  }
  &__img{
    width: 70px;
    padding: 4px;
    border-radius: 10px;
  }
  &__info{
    flex: 1;
    padding: 4px 8px;
    font-size: 14px;
    color: #333;
    width: 0;
    &__desc{
      font-size: 12px;
      color: #666;
      margin: 12px 0 8px;
      line-height: 18px;
    }
    &__title, &__desc{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .price{
      color: #ff4500;
    }
    &__bottom{
      line-height: 24px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
