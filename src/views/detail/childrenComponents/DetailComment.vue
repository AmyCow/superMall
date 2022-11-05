<template>
  <div class="comment" v-if="commentList.length !== 0">
    <div class="comment__title">
      <div class="comment__title__info">用户评价</div>
      <div class="comment__title__more">
        <span>更多</span>
        <img class="comment__title__img" src="~assets/img/common/back.svg" alt="">
      </div>
    </div>
    <div class="comment__item" v-for="(item,index) in commentList" :key="index">
      <div class="comment__item__userInfo">
        <img class="comment__userInfo__logo" :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="comment__item__good">
        <p class="comment__item__detail">{{item.content}}</p>
        <span>{{item.created | showDate}}</span>
        <span>{{item.style}}</span>
        <div v-if="item.images">
          <img class="comment__photo" :src="photo" alt="" v-for="photo in item.images" :key="photo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'
export default {
  name: 'DetailComment',
  props: {
    commentList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  filters: {
    showDate (value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style lang="scss" scoped>
.comment{
  padding: 16px 8px;
  border-bottom: 3px solid #eee;
  font-size: 12px;
  color: #333;
  &__title{
    line-height: 42px;
    display: flex;
    &__more{
      width: 46px;
      display: flex;
    }
    &__info{
      flex: 1;
    }
    &__img{
      transform: rotate(180deg);
      width: 14px;
      margin-left: 8px;
    }
  }
  &__item{
    &__userInfo{
      display: flex;
      align-items: center;
      padding: 8px 0 4px;
      border-top: 1px solid #f2f5f8;
      .comment__userInfo__logo{
        width: 34px;
        height: 34px;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
    &__good{
      .comment__item__detail{
        color: #777;
        margin-bottom: 8px;
        line-height: 24px;
      }
      span{
        color: #999;
        display: inline-block;
        margin: 0 8px 8px 0;
      }
      .comment__photo{
        width: 56px;
        height: 56px;
        margin-right: 4px;
      }
    }
  }
}
</style>
