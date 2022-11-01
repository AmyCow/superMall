<template>
  <div class="navBar">
    <div class="navBar__left">
      <slot name="left"></slot>
    </div>
    <div class="navBar__center">
      <slot name="center"></slot>
    </div>
    <div class="navBar__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
.navBar{
  display: flex;
  line-height: 44px;
  text-align: center;
  &__left, &__right{
    width: 60px;
  }
  &__center{
    flex: 1;
  }
}
</style>
