<template>
  <div class="menu" ref="menu">
    <ul>
      <li class="menu__item"
          :class="{active: index === currentIndex}"
          v-for="(item, index) in typeList"
          :key="item.mainKey"
          @click="changeMenu(index, item)"
      >
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  props: {
    typeList: {
      type: Array,
      defult () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0,
      list: this.typeList
    }
  },
  methods: {
    changeMenu (index, item) {
      this.currentIndex = index
      this.$emit('changeSubCategory', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu__item{
  line-height: 38px;
  text-align: center;
  background-color: #F6F6F6;
}
.active{
  color: #FF5777;
  background-color: #fff;
  border-left: 3px solid #FF5777;
  font-size: 14px;
}
</style>
