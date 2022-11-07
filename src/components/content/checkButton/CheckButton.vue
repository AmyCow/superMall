<template>
  <div class="checkButton">
    <img src="~assets/img/cart/tick.svg" :class="{check: isChecked}" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.checkButton{
  position: relative;
  img{
    border-radius: 50%;
    border: 1px solid #eee;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
  .check{
    background-color: #ff8198;
    border-color: #ff8198;
  }
}
</style>
