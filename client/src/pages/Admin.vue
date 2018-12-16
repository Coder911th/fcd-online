<template>
  <div></div>
</template>

<script>
export default {
  beforeMount() {
    this.$emit('pageChanged', '/admin/products')
  }
}
</script>
