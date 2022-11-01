<template>
  <div class="tabControl">
    <div class="tabControl__item" :class="{active: index === currentIndex}" v-for="(item,index) in titles" :key="item" @click="changeTab(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeTab (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.tabControl{
  display: flex;
  text-align: center;
  line-height: 40px;
  height: 40px;
  font-size: 16px;
  color: #000;
  background: #fff;
  &__item{
    flex: 1;
    span{
      padding: 5px;
    }
  }
  .active{
    color: #FF5777;
  }
  .active span{
    border-bottom: 2px solid #FF5777;
  }
}
</style>
