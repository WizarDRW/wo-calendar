<template>
  <div class="wo-container">
    <div class="wo-page">
      <div class="wo-head">
        <div class="wo-time"></div>
        <div class="wo-category">
          <div
            v-for="(item, index) in resources"
            :key="index"
            class="wo-category-cell"
          >
            {{ item["name"] }}
          </div>
        </div>
      </div>
      <div class="wo-body">
        <div class="wo-time">
          <div class="wo-time-cell"><div class="wo-time-cell-text"></div></div>
          <div v-for="item in time" :key="item" class="wo-time-cell">
            <div class="wo-time-cell-text">{{ item }}</div>
          </div>
        </div>
        <div class="wo-category-item">
          <div
            v-for="(col, index) in resources"
            :key="index"
            class="wo-category-column"
          >
            <div class="wo-category-row"></div>
            <div v-for="row in time" :key="row" class="wo-category-row"></div>
            <div class="wo-cotegory-columns">
              <div class="wo-cotegory-column">
                <div class="wo-category-container">
                  <div
                    v-for="(e, i) in col.events"
                    :key="i"
                    :style="getCss(e)"
                    class="wo-event"
                  >
                    <strong></strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import date from "../utils/interval";
export default {
  props: {
    resources: {
      type: Array,
      default: [
        { name: "Category1" },
        {
          name: "Category2",
          events: [
            {
              name: "Deneme",
              start: {
                date: "2022-10-30",
                time: "09:35",
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
              end: {
                date: "2022-10-30",
                time: "09:35",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 10,
                minute: 30,
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
                time: "09:35",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 11,
                minute: 35,
                hasDay: true,
                hasTime: true,
                past: false,
                present: true,
                future: false,
              },
              end: {
                date: "2022-10-30",
                time: "09:35",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 12,
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
          events: [
            {
              name: "Deneme",
              start: {
                date: "2022-10-30",
                time: "09:35",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 12,
                minute: 35,
                hasDay: true,
                hasTime: true,
                past: false,
                present: true,
                future: false,
              },
              end: {
                date: "2022-10-30",
                time: "09:35",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 13,
                minute: 0,
                hasDay: true,
                hasTime: true,
                past: false,
                present: true,
                future: false,
              },
            },
          ],
        },
      ],
    },
    "time-type": {
      type: String,
    },
  },
  data() {
    return {
      time: [
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ],
    };
  },
  created() {
    console.log(
      date.intervalFormatter()(
        {
          date: "2022-10-30",
          time: "21:45",
          year: 2022,
          month: 10,
          day: 30,
          weekday: 0,
          hour: 21,
          minute: 45,
          hasDay: true,
          hasTime: true,
          past: false,
          present: false,
          future: true,
        },
        true
      )
    );
  },
  methods: {
    getCss(e) {
      const top = date.timeToY(e.start);
      const bottom = date.timeToY(e.end);
      const height = Math.max(20, bottom - top);
      console.log(`top: ${top}px; height: ${height+10}px; left: 0%; width: 100%;`);
      return `top: ${top}px; height: ${height+10}px; left: 0%; width: 100%;`;
    },
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
.wo-container {
  width: 100%;
  height: auto;
  background: #fff;
}
.wo-head {
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #ddd;
  display: flex;
}
.wo-body {
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #ddd;
  display: flex;
}
.wo-time {
  width: 100px;
  border-right: 1px solid #ddd;
}
.wo-category {
  width: 100%;
  display: flex;
}
.wo-category-cell {
  padding: 10px;
  flex: 1 1 200px;
  text-align: center;
  border-right: 1px solid #ddd;
}
.wo-category-item {
  width: 100%;
  display: flex;
  position: relative;
}
.wo-time-cell {
  height: 60px;
  text-align: right;
  border-bottom: 1px solid #fff;
}
.wo-time-cell-text {
  display: block;
  position: relative;
  top: -6px;
  font-size: 10px;
}
.wo-category-column {
  flex: 1;
  width: 0;
  position: relative;
  text-align: center;
  border-right: 1px solid #ddd;
}
.wo-category-row {
  height: 60px;
  border-bottom: 1px solid #ddd;
}
.wo-cotegory-columns {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
}
.wo-cotegory-column {
  flex: 1 1 auto;
  width: 0;
  position: relative;
}
.wo-category-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-right: 10px;
  pointer-events: none;
}
.wo-event {
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  cursor: pointer;
  border-radius: 4px;
  pointer-events: all;
  background-color: red;
}
</style>
