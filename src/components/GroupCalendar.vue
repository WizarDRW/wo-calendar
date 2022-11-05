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
            <div v-for="(row, i) in time" :key="i" class="wo-category-row">
              {{ row }}
            </div>
            <div class="wo-cotegory-columns">
              <div class="wo-cotegory-column">
                <div @mousedown="selectDate" class="wo-category-row"></div>
                <div
                  v-for="(row, i) in time"
                  :key="i"
                  class="wo-category-row"
                  @mousedown="selectDate"
                ></div>
                <div class="wo-category-container">
                  <div
                    v-for="(e, i) in col.events"
                    :key="i"
                    :style="getCss(e)"
                    class="wo-event"
                  >
                    <strong>{{ e.name }}</strong>
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
                time: "10:00",
                year: 2022,
                month: 10,
                day: 30,
                weekday: 0,
                hour: 10,
                minute: 0,
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
                minute: 5,
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
      ],
    },
    "time-type": {
      type: String,
    },
  },
  data() {
    return {
      time: [
        "08:15",
        "08:30",
        "08:45",
        "09:00",
        "09:15",
        "09:30",
        "09:45",
        "10:00",
        "10:15",
        "10:30",
        "10:45",
        "11:00",
        "11:15",
        "11:30",
        "11:45",
        "12:00",
        "12:15",
        "12:30",
        "12:45",
        "13:00",
        "13:15",
        "13:30",
        "13:45",
        "14:00",
        "14:15",
        "14:30",
        "14:45",
        "15:00",
        "15:15",
        "15:30",
        "15:45",
        "16:00",
        "16:15",
        "16:30",
        "16:45",
        "17:00",
        "17:15",
        "17:30",
        "17:45",
        "18:00",
        "18:15",
        "18:30",
        "18:45",
        "19:00",
        "19:15",
        "19:30",
        "19:45",
        "20:00",
        "20:15",
        "20:30",
        "20:45",
        "21:00",
        "21:15",
        "21:30",
        "21:45",
        "22:00",
        "22:15",
        "22:30",
        "22:45",
        "23:00",
        "23:15",
        "23:30",
        "23:45",
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
      const colors = "linear-gradient(118deg, #2979ff, #82b1ff)";
      console.log(
        `top: ${top}px; height: ${height - 1}px; left: 0%; width: 100%;`
      );
      return `top: ${top}px; height: ${
        height - 1
      }px; left: 0%; width: 100%;background:${colors}!important`;
    },
    selectDate(e) {
      console.log(e);
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
  height: 59px;
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
  height: 59px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}
.wo-time-cell-text:hover,
.wo-category-row:hover {
  background-color: #dbdbdb;
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
  text-align: left;
  color: white;
  letter-spacing: 1px;
}
</style>
