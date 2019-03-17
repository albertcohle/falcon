<template lang="pug">
  section
    <Strip />
</template>

<script>
import Strip from '@/components/app/Strip'

export default {
  name: 'app',
  components: {
    Strip
  }
}
</script>

<style lang="sass" scoped>
section
  display: flex
  margin: 0 auto
  width: 1000px
</style>
