<template>
   <ul class="person__buttons">
      <li class="person__button" :class="nameBtn === 'achievment' ?'person__button-active' : ''" @click="addActiveClass('achievment')">
        Достижения
      </li>
      <li class="person__button" :class="nameBtn === 'statistics' ?'person__button-active' : ''" @click="addActiveClass('statistics')">
       Статистика
      </li>
     <li class="person__button" :class="nameBtn === 'info' ?'person__button-active' : ''" @click="addActiveClass('info')">
        Инфо
      </li>
    </ul>
</template>

<script>
export default {
  name: 'AppPersonButtons',
  data () {
    return {
      isActive: true,
      nameBtn: 'achievment'
    }
  },
  methods: {
    addActiveClass (value) {
      this.nameBtn = value
    }
  }
}
</script>

<style>

</style>
