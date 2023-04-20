<template>
  <ul class="staff__person-icons">
        <li class="staff__person-icon">
          <span class="icon__achievement icon__money"></span>
          <span class="icon__description">доход</span>
          <span class="icon__sum">{{getData.profit}} <span class="name__currency" v-show="getData.profit">МодернКоинов</span></span>
        </li>
        <li class="staff__person-icon">
          <span class="icon__achievement icon__heart"></span>
          <span class="icon__description">лайк от босса </span>
          <span class="icon__sum">{{getData.like}}</span>
        </li>
        <li class="staff__person-icon">
          <span class="icon__achievement icon__donate"></span>
          <span class="icon__description">премиальные </span>
          <span class="icon__sum">{{getData.bonus}} <span class="name__currency" v-show="getData.bonus">МодернКоинов</span></span>
        </li>

      </ul>
</template>

<script>
export default {
  name: 'AppAchievement',
  props: {
    idPerson: {
      type: Number,
      required: true
    },
    objValues: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    getData () {
      let obj = {}
      if (this.idPerson === this.objValues.id) {
        obj = {
          ...this.objValues
        }
      }
      return obj
    }
  }

}
</script>

<style>

</style>
