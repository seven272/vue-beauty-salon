<template>
  <form class="rating__form">
    <label for="rating-select">Рейтинг сотрудников // {{showPeriod}}</label>
    <select name="time" id="rating-select" v-model="period">
      <option value="">-- Выберите период --</option>
      <option value="day">День</option>
      <option value="week">Неделя</option>
      <option value="month">Месяц</option>
      <option value="all">Все время</option>
    </select>
  </form>
</template>

<script>
export default {
  name: 'AppSelect',
  data () {
    return {
      period: ''
    }
  },
  computed: {
    showPeriod () {
      console.log(this.period)
      return this.period
    }
  }

}
</script>

<style>

</style>
