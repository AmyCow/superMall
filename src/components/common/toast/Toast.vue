<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Toast',
  data () {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show (message, duration = 2000) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style lang="scss" scoped>
.toast{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, .75);
  color: #fff;
  font-size: 14px;
}
</style>
