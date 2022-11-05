<template>
  <div id="profile" class="profile">
    <nav-bar class="profile__nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <profile-user-info :info="info"/>
    <profile-info/>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

import ProfileUserInfo from './childComponents/ProfileUserInfo'
import ProfileInfo from './childComponents/ProfileInfo'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  components: {
    NavBar,

    ProfileUserInfo,
    ProfileInfo
  },
  data () {
    return {
      info: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.profile{
  &__nav{
    background: #FF8198;
    color: #fff;
  }
}
</style>
