<template>
  <div>
    <Input
        clearable
        enter-button
        v-model="search"
        placeholder="Введите название продукта"/>
    <Table
        :loading="loading"
        highlight-row
        :columns="columns"
        :data="filteredProducts"
        no-data-text="Список товаров пуст"
        style="margin-top: 10px"
        @on-row-click="$emit('select', $event)"/>
  </div>
</template>

<script>
import query from '../libs/query'

export default {
  props: {
    hideList: Array,
    default() {
      return []
    }
  },
  data() {
    return {
      loading: true,
      search: '',
      products: [],
      columns: [
        {
          title: 'Название',
          key: 'name'
        },
        {
          title: 'Штрих-код',
          key: 'barcode',
          width: 140
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        !this.hideList.find(item => item.id == product.id) &&
        (product.name.toLowerCase().includes(this.search) || product.barcode == this.search))
    }
  },
  async beforeMount() {
    this.products = await query('ReadTable', 'products')
    this.loading = false
  }
}
</script>

<style>

</style>
