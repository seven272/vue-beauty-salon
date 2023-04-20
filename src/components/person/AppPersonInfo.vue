<template>

  <div class="person">
    <div class="person__photo-wrap">
      <img  class="person__photo" :src="require(`@/assets/images/${person.photo}.jpg`)" alt="фото сотрудника салона">
    </div>
    <div class="person__name-wrap">
      <h3  class="person__name">{{person.name}}</h3>
      <p class="person__profession">{{person.profession}}</p>
    </div>

    <AppPersonAchievment></AppPersonAchievment>

    <AppPersonButtons></AppPersonButtons>

    <AppPersonContent></AppPersonContent>

    <AppButton @clickBtn="goBack">Вернуться назад</AppButton>
  </div>

</template>

<script>
import people from '@/seeders/people.json'
import AppPersonContent from './AppPersonContent.vue'
import AppPersonButtons from './AppPersonButtons.vue'
import AppPersonAchievment from './AppPersonAchievment.vue'
export default {
  name: 'AppPersonInfo',
  components: {
    AppPersonContent,
    AppPersonButtons,
    AppPersonAchievment
  },
  data () {
    return {
      people,
      id: this.$route.params.personId,
      isActiveSection: true
    }
  },
  methods: {
    goBack () {
      this.$router.push('/rating')
    }
  },
  computed: {
    person () {
      return people.find((elem) => elem.id === +this.id)
    }
  }

}
</script>

<style>

</style>
