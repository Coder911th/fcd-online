<template>
  <div></div>
</template>

<script>
export default {
  title: 'Администрирование',
  beforeMount() {
    this.$emit('pageChanged', '/admin/products')
  }
}
</script>
