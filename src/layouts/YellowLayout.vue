<template>
<AppHeader :headerClass="'header__yellow'"></AppHeader>
    <slot></slot>
 <AppFooter :footerClass="'footer__yellow'"></AppFooter>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
export default {
  components: {
    AppFooter,
    AppHeader
  },
  name: 'YellowLayout'

}
</script>

<style>

</style>
