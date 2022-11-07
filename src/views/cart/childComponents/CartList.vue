<template>
  <div class="cart">
    <cart-list-item v-for="(item,index) in cartsList" :key="index" :product="item"></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem'
export default {
  name: 'CartList',
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(['cartsList'])
  }
}
</script>

<style lang="scss" scoped>
.cart{
  height: 100%;
}
</style>
