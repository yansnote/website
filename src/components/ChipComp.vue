<template>
  <div class="chip">
    <img
      :src="icon"
      :alt="title"
      :style="{ background: color }"
    >
    <p v-text="title" />
  </div>
</template>

<script>
export default {
  name: "ChipComp",
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.chip {
  border: 2px solid var(--bold-color);
  border-radius: 45em;
  padding: 5px 15px 5px 5px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;

  img {
    width: 28px;
    height: 28px;
    padding: 3px;
    border: 2px solid var(--bold-color);
    border-radius: 45em;
    margin-right: 5px;
  }

  p {
    display: inline-block;
    margin: 0;
    font-weight: 700;
  }
}
</style>
