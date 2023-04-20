<template>
<AppHeader :headerClass="'header__pink'"></AppHeader>
    <slot></slot>
 <AppFooter :footerClass="'footer__pink'"></AppFooter>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
export default {
  components: {
    AppFooter,
    AppHeader
  },
  name: 'PinkLayout'

}
</script>

<style>

</style>
