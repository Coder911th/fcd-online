<script>
export default {
  beforeMount() {
    this.$emit('pageChanged', '/admin/products')
  }
}
</script>
