<template>
  <div>
    <Input
        clearable
        enter-button
        v-model.trim="search"
        placeholder="Введите название или штрих-код товара"/>
    <Table
        :loading="loading"
        highlight-row
        :columns="columns"
        :data="filteredProducts"
        :no-data-text="search.length ? 'Не найдено ни одного товара' : 'Список товаров пуст'"
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
      let search = this.search.toLowerCase()
      return this.products.filter(product =>
        !this.hideList.find(item => item.id == product.id) &&
        (product.name.toLowerCase().includes(search) || product.barcode == search))
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
