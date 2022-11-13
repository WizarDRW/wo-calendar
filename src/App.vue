<script setup lang="ts">
import WoGroupCalendar from "./components/GroupCalendar.vue"
let events = [
        { name: "Category1" },
        {
          name: "Category2",
          events: [
            {
              name: "Deneme",
              start: {
                date: "2022-10-30",
                time: "10:00",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 9,
                minute: 28,
                hasDay: true,
                hasTime: true,
                past: false,
                present: true,
                future: false,
              },
              end: {
                date: "2022-10-30",
                time: "11:00",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 9,
                minute: 35,
                hasDay: true,
                hasTime: true,
                past: false,
                present: true,
                future: false,
              },
            },
            {
              name: "Deneme",
              start: {
                date: "2022-10-30",
                time: "10:00",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 10,
                minute: 5,
                hasDay: true,
                hasTime: true,
                past: false,
                present: true,
                future: false,
              },
              end: {
                date: "2022-10-30",
                time: "11:00",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 10,
                minute: 10,
                hasDay: true,
                hasTime: true,
                past: false,
                present: true,
                future: false,
              },
            },
            {
              name: "Deneme",
              start: {
                date: "2022-10-30",
                time: "10:00",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 10,
                minute: 10,
                hasDay: true,
                hasTime: true,
                past: false,
                present: true,
                future: false,
              },
              end: {
                date: "2022-10-30",
                time: "11:00",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 10,
                minute: 15,
                hasDay: true,
                hasTime: true,
                past: false,
                present: true,
                future: false,
              },
            },
          ],
        },
        {
          name: "Category3",
          events: [],
        },
      ];
function time(params: any) {
  console.log(params);
}
</script>

<template>
  <wo-group-calendar :resources="events" @click:time="time"></wo-group-calendar>
</template>

<style scoped>
</style>
