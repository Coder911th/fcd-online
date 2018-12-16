<template>
  <div></div>
</template>

<script>
export default {
  title: 'Администратирование',
  beforeMount() {
    this.$emit('pageChanged', '/admin/products')
  }
}
</script>
