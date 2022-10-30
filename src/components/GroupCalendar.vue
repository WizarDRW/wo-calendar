<template>
  <div class="wo-container">
    <div class="wo-page">
      <div class="wo-head">
        <div class="wo-time">Time Head</div>
        <div class="wo-category">Categories of Name</div>
      </div>
      <div class="wo-body">
        <div class="wo-time">01:00</div>
        <div class="wo-category">Eventss</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resources: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
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
  padding: 10px;
  width: 100px;
  border-right: 1px solid #ddd;
}
.wo-category {
  padding: 10px;
  width: 20%;
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
