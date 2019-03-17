<template lang="pug">
  main(v-if="!pageLogin")
    h1 Be as flexible as bamboo in the wind
    div
      a(href="#" v-on:click="openPageLogin") Get Stated
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Greet',
  methods: {
    ...mapMutations([
      'SET_PAGELOGIN'
    ]),
    openPageLogin: function () {
      this.SET_PAGELOGIN()
    }
  },
  computed: {
    pageLogin () {
      return this.$store.getters.PAGELOGIN
    }
  }
}
</script>

<style scoped lang="sass">
main
  display: flex
  flex-direction: column
  max-width: 900px
  margin: auto
  h1
    font-size: 7.3rem
    margin-top: 3rem
    font-weight: 600
    margin-bottom: 5rem
  a
    background: #FE6B71
    text-transform: uppercase
    padding: 20px 30px
    border-radius: 3px

</style>
