<template>
<div class="staff__person-wrap">
  <h3 class="staff__person-name">{{ objPerson.name }}</h3>
  <p  class="staff__person-profession">{{ objPerson.profession }}</p>
  <div class="staff__photo-wrap">
    <img  class="staff__person-photo" :src="require(`@/assets/images/${objPerson.photo}.jpg`)" alt="фото сотрудника салона">
  </div>
</div>

      <div v-if="showData">
        <AppAchievement
        :idPerson="objPerson.id"
        :objValues="values"
        ></AppAchievement>
        <AppButton
        :classBtn="'staff__button'"
        @clickBtn="showInputs"
        >Внести данные</AppButton>
        <AppFormPerson
        v-if="isShow"
        :onIdPerson="objPerson.id"
        @close="closeInputs"
        @onDataPerson="setDataForPerson"
        ></AppFormPerson>
      </div>
</template>

<script>
import AppAchievement from '@/components/AppAchievement.vue'
import AppFormPerson from '@/components/AppFormPerson.vue'
export default {
  name: 'AppPerson',
  components: {
    AppAchievement,
    AppFormPerson
  },
  props: {
    objPerson: {
      type: Object,
      required: true
    },
    showData: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isShow: false,
      values: {}
    }
  },
  methods: {
    showInputs () {
      this.isShow = !this.isShow
    },
    closeInputs () {
      this.isShow = !this.isShow
    },
    setDataForPerson (val) {
      Object.keys(val).forEach((key) => {
        this.values[key] = val[key]
      })
      console.log(this.values)
    }
  }

}
</script>

<style scoped>
@import '../style/people.css'
/* @import url(./people.css); */

</style>
