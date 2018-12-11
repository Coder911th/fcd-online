<template>
  <div class="label">
    <div class="label__name" :style="{width: `${width}px`}">{{ label }}</div>
    <div class="label__value"><slot/></div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 100
    }
  }
}
</script>

<style>
.label {
  display: flex;
  align-items: center;
  line-height: 24px;
}

.label__name {
  margin-right: 10px;
  text-align: right;
  flex-shrink: 0;
}

.label__value {
  flex-shrink: 1;
}
</style>
