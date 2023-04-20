<template>
  <ul class="staff__people">
    <li class="staff__person" v-for="person in people" :key="person.id">
      <AppPerson
      :objPerson="person"
      :showData ="setData"
      ></AppPerson>
    </li>
  </ul>
</template>

<script>
import people from '@/seeders/people.json'
import AppPerson from '@/components/AppPerson.vue'
export default {
  name: 'AppStaff',
  components: {
    AppPerson
  },
  data () {
    return {
      people
    }
  },
  computed: {
    setData () {
      const nameRoute = this.$route.name
      let bool = true
      if (nameRoute === 'Home') {
        bool = true
      } else if (nameRoute === 'Rating') {
        bool = false
      }
      return bool
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
