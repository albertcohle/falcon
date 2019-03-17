<template lang="pug">
  div
    Greet
    PageLogin
</template>

<script>
import Greet from '@/components/home/Greet.vue'
import PageLogin from '@/components/home/PageLogin.vue'

export default {
  name: 'home',
  components: {
    Greet,
    PageLogin
  }
}

</script>
