<template lang="pug">
  section(v-if="pageLogin")
    img(src="@/assets/fan.svg" class="logo")
    form(action="/" v-if="isLogin")
      h1 Welcome. Great things await!
      input(type="email" placeholder="Email" name="email")
      br
      input(type="password" name="password" placeholder="password")
      p(class="already") No account? <a href="#" v-on:click="isLogin = !isLogin">Create one.</a>
      button(type="submit" class="btn") Login
    form(action="/register" v-else)
      h1 Hi, join the ninja ranks.
      input(type="email" placeholder="Email" name="email")
      br
      input(type="password" name="password" placeholder="password")
      p(class="already") Already have an account? <a href="#" v-on:click="isLogin = !isLogin">Sign in.</a>
      button(type="submit" class="btn") Register
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'PageLogin',
  data: function () {
    return {
      isLogin: true
    }
  },
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
section
  display: flex
  width: 240px
  margin: 50px auto
  flex-direction: column
  align-items: center
  img
    width: 10rem
  h1
    margin-top: 0rem
    text-align: center

input
  margin-top: 1rem
  border: none
  background: #fff
  padding: 10px 10px
  font-size: 1rem
  color: #333
  border-radius: 7px
  width: 200px
  &::placeholder
    color: #eaeaea

:active, :hover, :focus
  outline: 0
  outline-offset: 0

.already
  margin: 1rem 0rem
  font-size: 14px
  a
    color: #111
    text-decoration: underline

.btn
  cursor: pointer
  border: none
  padding: 10px 20px
  font-size: 13px
  margin-top: 1rem
  border-radius: 3px
  background: #2B0F23
  color: #fff
  font-weight: 700
  text-transform: uppercase

</style>
