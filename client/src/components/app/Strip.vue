<template lang="pug">
  .strip
    div(id="preBox" v-on:mousemove="startRange($event)" v-on:click="timeStart")
      #box
        #boxTable
        #boxShadow
    h1(v-text="total")
    .resetT
      span(id="reset" v-on:click="resetTimer()") To Hell
</template>

<script>
export default {
  name: 'strip',
  data: function () {
    return {
      value: '25:00',
      minute: '25',
      second: '00',
      x: 0,
      block: false,
      timer: null
    }
  },
  methods: {
    testNotify: function () {
      if (Notification.premission !== 'denied') {
        Notification.requestPermission(function (premission) {
          console.log('Success')
          return true
        })
      }
    },
    notify () {
      return new Notification('こけの一年岩をとおす', {
        dir: 'auto',
        icon: 'https://pp.userapi.com/c840234/v840234665/302df/EFnxoLbHk_Y.jpg',
        body: '前進'
      })
    },
    resetTimer: function () {
      this.minute = 25
      let stripWidth = document.getElementById('boxShadow')
      stripWidth.style.width = `350px`
      clearInterval(this.timer)
      this.block = false
      this.second = '00'
    },
    startRange: function (event) {
      if (this.block === true) {
        return
      }

      let result = event.offsetX
      result = result.toFixed(0)
      let num = (result / 15).toFixed(0)
      this.value = `${num}:00`
      this.minute = `${num}`
      let stripWidth = document.getElementById('boxShadow')
      stripWidth.style.width = `${result}px`
    },
    timeStart: function () {
      this.preTimeSetting()

      this.timer = setInterval(() => {
        this.second = this.second - 1

        if (this.second <= 0) {
          this.minute = this.minute - 1
          this.second = 59
        }

        if (this.minute === -1) {
          this.notify()
          this.minute = 25
          let stripWidth = document.getElementById('boxShadow')
          stripWidth.style.width = `350px`
          clearInterval(this.timer)
          this.block = false
          this.second = '00'
        }
      }, 1000)
    },
    preTimeSetting: function () {
      this.testNotify()
      this.block = true
      this.second = 59

      if (this.minute > 0) {
        this.minute = this.minute - 1
      }
    }
  },
  computed: {
    total: function () {
      return `${this.minute}:${this.second}`
    }
  }
}
</script>

<style lang="sass" scoped>
.strip
  display: flex
  flex-direction: column
  margin: 5rem auto

h1
  font-size: 10rem
  line-height: 0
  display: flex
  justify-content: center
  margin-top: 10rem
  font-weight: 100

.resetT
  display: flex
  justify-content: center

#reset
  font-size: 3rem
  text-transform: uppercase
  cursor: pointer
  background: #2B0F23
  color: #fff
  border-radius: 9px
  padding: 0.5rem 1rem
  margin-top: 2rem

#box, #preBox
  border: 1px solid #2B0F23
  // border: 1px solid #E15F76
  height: 90px
  width: 900px
  display: flex

#boxTable
  display: flex
  width: 100%
  height: 90px
  position: relative

.boxTableSpan
  display: flex
  border: 1px solid pink
  width: 100%
  position: relative
  z-index: 150

#boxShadow
  height: 90px
  background: #2B0F23
  // background: #E15F76
  position: absolute
  z-index: 99
  width: 360px
</style>
