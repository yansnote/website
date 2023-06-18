<template>
  <div class="timeline">
    <div class="line"></div>

    <div class="event">
      <img :src="icon" :style="`background: ${color}`">
    </div>

    <div class="activity">
      <p>{{ date }}</p>
      <h4>{{ title }}</h4>
    </div>
  </div>
</template>

<script>

export default {
  name: "TimelineComp",
  props: {
    title: String,
    date: String,
    icon: String,
    color: String
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  display: flex;
  flex-direction: row;
  position: relative;

  .line {
    height: calc(100% - 20px);
    width: 2px;
    background: var(--bold-color);
    opacity: 0.5;
    position: absolute;
    left: 15px;
    bottom: -15px;
  }
}

.event {
  margin-right: 15px;

  img {
    width: 20px;
    height: 20px;
    border: 2px solid var(--bold-color);
    padding: 4px;
    border-radius: 3rem;
  }
}
.activity {
  border: 2px solid var(--bold-color);
  border-radius: 1.15em;
  padding: 10px 20px;
  background: #ffffff;
  display: inline-block;

  p {
    margin: 0 0 10px 0;
    color: rgba(51, 52, 47, 0.7);
    font-size: 0.95rem;
    font-weight: 700;
  }

  h4 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: normal;
  }
}
</style>
