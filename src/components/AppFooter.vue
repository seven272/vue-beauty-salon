<template>
  <footer class="footer" :class="footerClass">
    <span class="footer__text">&#169; Разработка приложение WebSeven, <AppDate></AppDate></span>
  </footer>
</template>

<script>
import AppDate from '@/components/AppDate.vue'
export default {
  name: 'AppFooter',
  props: {
    footerClass: {
      type: String,
      required: false
    }
  },
  components: {
    AppDate
  }
}
</script>

<style>

</style>
