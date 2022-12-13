<template lang="pug">
div
  h1 Компонент просмотра задания {{ $route.params.todo }}
  button(
    type="button"
    @click="goBack"
  ) Back
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss"></style>
