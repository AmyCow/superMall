<template>
  <div class="params">
    <table class="params__table" v-if="detailParams.sizes">
      <tr v-for="item in detailParams.sizes[0]" :key="item.key">
        <td v-for="size in item" :key="size">{{size}}</td>
      </tr>
    </table>
    <table class="params__table">
      <tr v-for="item in detailParams.info" :key="item.key">
        <td class="params__table__title">{{item.key}}</td>
        <td class="params__table__info">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParams',
  props: {
    detailParams: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.params{
  padding: 16px 8px;
  border-bottom: 3px solid #eee;
  font-size: 14px;
  color: #606266;
  &__table{
    width: 100%;
    tr{
      td {
        padding: 8px;
        line-height: 24px;
        border-bottom: 1px solid #EBEEF5;
      }
    }
    &__title{
      width: 26%;
    }
    &__info{
      color: rgb(235, 72, 104);
    }
  }
}
</style>
