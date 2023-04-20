<template>
  <form class="form-person" name="test" method="post" action="" @submit.prevent='sendDataPerson'>
    <label for="profit" class="form-person__label">
      Доход за день, руб:
      <input class="form-person__input input__profit" id="profit" type="text" v-model="values.profit">
    </label>
     <label for="boss" class="form-person__label">
      <span class="form-person__like-text">Лайк от босса</span>
       <div class="form-person__like-buttons">
        <button class="like__btn form-person__like-minus" :disabled="values.like === 0" @click.prevent="minusLike">-</button>
        <span class="form-person__like-value">
          {{ values.like }}
        </span>
         <button class="like__btn  form-person__like-plus"  @click.prevent="plusLike">+</button>
       </div>
    </label>
    <div class="form-person__buttons">
      <AppButton
      :classBtn="'form-person__button btn__dark'"
      >Отправить</AppButton>
      <AppButton
      :classBtn="'form-person__button btn__dark'"
      @clickBtn='clearInputs'
      >Очистить</AppButton>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AppFormPerson',
  emits: ['close', 'onDataPerson'],
  props: {
    onIdPerson: {
      type: [Number, String],
      required: false
    }
  },
  data () {
    return {
      values: {
        profit: 0,
        like: 0,
        bonus: 0
      },
      precentNail: 0.5,
      prefentHair: 1
    }
  },
  methods: {
    clearInputs () {
      Object.keys(this.values).forEach((key) => {
        this.values[key] = 0
      })
      this.$emit('close')
    },
    sendDataPerson () {
      const newObj = {
        ...this.values,
        id: this.onIdPerson
      }
      this.$emit('onDataPerson', newObj)
      this.$emit('close')
    },
    minusLike () {
      if (this.values.like > 0) {
        this.values.like -= 1
      }
    },
    plusLike () {
      this.values.like += 1
    },
    countBonus () {
      const value = (this.prefentHair * this.values.profit) / 100
      // console.log(value)
      this.values.bonus = Math.ceil(value)
    }
  },
  watch: {
    'values.profit' (newValue, oldValue) {
      this.countBonus()
    }
  }

}
</script>

<style>

</style>
