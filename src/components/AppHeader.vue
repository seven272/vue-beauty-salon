<template>
  <header class="header" :class="headerClass">
    <ul class="header__items">
      <li class="header__item">
        <router-link class="header__item-href" to="/">Главная</router-link>
      </li>
      <li class="header__item">
        <router-link class="header__item-href" to="/result">О салоне</router-link>
      </li>
      <li class="header__item">
        <router-link class="header__item-href" to="/rating">Рейтинг сотрудников</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    headerClass: {
      type: String,
      required: false
    }
  }

}
</script>

<style>

</style>
