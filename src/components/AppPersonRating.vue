<template>

  <div class="rating__person-info" >
    <div class="rating__person-photo-wrap">
      <img  class="rating__person-photo" :src="require(`@/assets/images/${objPerson.photo}.jpg`)" alt="фото сотрудника салона">
    </div>
    <div class="rating__person-wrapper">
      <h3 class="rating__person-name">{{ objPerson.name }}</h3>
      <p  class="rating__person-profession">{{ objPerson.profession }}</p>
    </div>
  </div>
  <div  class="rating__person-statistics">
    <div class="rating__person-money"><span class="icon__money rating__icon"></span>Заработано 450 <i>модернкоинов</i></div>
    <div class="rating__progress-container">
      <span class="rating__progress-text">70%</span>
      <progress class="rating__progress-bar"  min=0 max=100 value=70 ></progress>
    </div>
  </div>
   <router-link class="rating__person-link" :to="'/rating/' + objPerson.id">
   <AppButton class="rating__person-btn"
   :classBtn="'rating__person-btn'"
    @clickBtn="1"
   >Смотреть подробнее</AppButton>
      <!-- <button class="rating__person-btn btn">Смотреть подробнее</button> -->
    </router-link>
</template>
<script>
export default {
  name: 'AppPersonRating',
  props: {
    objPerson: {
      type: Object,
      required: true
    }
  }

}
</script>
