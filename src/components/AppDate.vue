<template>
  <i>{{ getYear }}</i>
</template>

<script>
export default {
  name: 'AppDate',
  computed: {
    getYear () {
      const dateObj = new Date()
      const year = dateObj.getUTCFullYear()
      return year
    }
  }

}
</script>

<style>

</style>
