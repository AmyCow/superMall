<template>
  <swiper class="detailSwiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" @load="imageLoad">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad () {
      if (!this.isLoad) {
        this.isLoad = true
        this.$emit('imageLoad')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.detailSwiper{
  height: 256px;
}
</style>
