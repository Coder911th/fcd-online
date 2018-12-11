<template>
  <div class="label" :class="highlight ? 'label__highlight' : ''">
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
    },
    highlight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.label {
  display: flex;
  align-items: center;
  line-height: 26px;
}

.label__name {
  margin-right: 10px;
  text-align: right;
  color: #808695;
  /* font-variant: small-caps; */
  flex-shrink: 0;
}

.label__value {
  flex-shrink: 1;
}

.label__highlight {
  font-weight: bold;
}
</style>
