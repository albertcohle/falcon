<template lang="pug">
  header
    router-link(to="/" class="header-logo")
      img(src="@/assets/girl.svg" class="logo")
      h1 Ninja Dojo
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TheHeader',
  methods: {
    ...mapMutations([
      'SET_PAGELOGINISVISIBLE'
    ]),
    openPageLogin: function () {
      this.SET_PAGELOGINISVISIBLE()
    }
  },
  computed: {
    pageLoginIsVisible () {
      return this.$store.getters.pageLoginIsVisible
    }
  }
}
</script>

<style lang="sass" scoped>
header
  display: flex
  max-width: 900px
  margin: auto
  margin-top: 1rem

.header-logo
  display: flex
  height: 80px
  img
    width: 3rem
    position: relative
    bottom: 3px
  h1
    font-size: 2rem
    padding-left: 0.5rem

</style>
