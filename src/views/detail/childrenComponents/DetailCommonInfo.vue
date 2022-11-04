<template>
  <div class="commonInfo">
    <div class="commonInfo__desc" v-if="commonInfo.desc">
      <p class="commonInfo__desc__detail">{{commonInfo.desc}}</p>
      <span class="square"></span>
      <span class="square"></span>
    </div>
    <div class="commonInfo__img" v-if="commonInfo.detailImage">
      <p class="commonInfo__img__desc">
        {{commonInfo.detailImage[0].key}}
      </p>
      <div class="commonInfo__img__info" v-for="item in commonInfo.detailImage[0].list" :key="item">
        <img :src="item" alt="" :key="item" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCommonInfo',
  props: {
    commonInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      length: 0,
      counter: 0
    }
  },
  watch: {
    commonInfo () {
      this.length = this.commonInfo.detailImage[0].list.length
    }
  },
  methods: {
    imgLoad () {
      if (++this.counter === this.length) {
        this.$emit('imgLoad')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.commonInfo{
  padding: 18px 8px;
  border-bottom: 3px solid #eee;
  font-size: 12px;
  color: #000;
  &__desc{
    position: relative;
    padding: 12px 0;
    &::before{
      content: '';
      height: 1px;
      width: 84px;
      background-color: #333;
      position: absolute;
      left: 0;
      top: 0;
    }
    &::after{
      content: '';
      height: 1px;
      width: 84px;
      background-color: #333;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .square{
      position: absolute;
      width: 4px;
      height: 4px;
      background-color: #333;
      &:first-of-type{
        left: 0;
        top: -4px;
      }
      &:last-of-type{
        right: 0;
        bottom: 1px;
      }
    }
  }
  &__img{
    &__desc{
      line-height: 34px;
      color: #333
    }
    &__info{
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
}
</style>
