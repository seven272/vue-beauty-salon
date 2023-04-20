<template>
  <AppSelect></AppSelect>

  <ul class="rating__people">
    <li class="rating__person" v-for="person in people" :key="person.id">
      <AppPersonRating
        :objPerson="person"
      ></AppPersonRating>
    </li>
  </ul>
</template>

<script>
import people from '@/seeders/people.json'
import AppPersonRating from '@/components/AppPersonRating.vue'
export default {
  name: 'RatingPage',
  components: {
    AppPersonRating
  },
  data () {
    return {
      people
    }
  }

}
</script>

<style>

</style>
