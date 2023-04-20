<template>
<AppHeader :headerClass="'header__green'"></AppHeader>
    <slot></slot>
 <AppFooter :footerClass="'footer__green'"></AppFooter>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
export default {
  components: {
    AppFooter,
    AppHeader
  },
  name: 'GreenLayout'

}
</script>

<style>

</style>
