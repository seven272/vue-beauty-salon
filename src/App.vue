
<template>
  <component :is="chooseLayout">
     <router-view></router-view>
  </component>

</template>

<script>
import GreenLayout from '@/layouts/GreenLayout.vue'
import YellowLayout from '@/layouts/YellowLayout.vue'
import PinkLayout from '@/layouts/PinkLayout.vue'

export default {
  name: 'App',
  components: {
    GreenLayout,
    YellowLayout,
    PinkLayout
  },
  computed: {
    chooseLayout () {
      const layoutName = this.$route.meta.layout || 'GreenLayout'
      return layoutName
    }
  }
}
</script>

<style>
@import url('./style/index.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
