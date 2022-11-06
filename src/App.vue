<script setup lang="ts">
import WoGroupCalendar from "./components/GroupCalendar.vue"
function time(params: any) {
  console.log(params);
}
</script>

<template>
  <wo-group-calendar @click:time="time"></wo-group-calendar>
</template>

<style scoped>
</style>
