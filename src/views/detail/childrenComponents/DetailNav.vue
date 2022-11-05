<template>
  <div class="detailNav">
    <nav-bar>
      <div class="detailNav__left" slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detailNav__center">
        <div class="detailNav__center__title"
             v-for="(item,index) in titleList"
             :key="index"
             :class="{active: currentIndex === index}"
             @click="titleClick(index)"
        >
        {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  name: 'DetailNav',
  components: {
    NavBar
  },
  data () {
    return {
      titleList: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick (index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.detailNav{
  &__left{
    padding-top: 5px;
  }
  &__center{
    display: flex;
    font-size: 14px;
    &__title{
      flex: 1;
    }
  }
  .active{
    color: #FF5777;
  }
}
</style>
