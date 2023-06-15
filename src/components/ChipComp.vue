<template>
  <div class="chip">
    <div class="chip-main">
      {{ title }}
    </div>
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
  border-radius: 5px;
  padding: 5px;
  display: inline-block;
  background: #ffffff;
}
</style>
