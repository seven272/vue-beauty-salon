<template>
  <div class="person__content">
      <ul class="person__achievements">
        <li class="person__achievement" v-for="(elem, ind) in 8" :key="ind">
          <div class="person__achievement-item">
            <span class="person__achievement-icon"></span>
          </div>
        </li>
      </ul>
    </div>

</template>

<script>
export default {
  name: 'AppPersonContent'

}
</script>

<style>

</style>
