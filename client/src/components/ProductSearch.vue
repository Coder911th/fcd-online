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
          title: 'Цена',
          key: 'price'
        },
        {
          title: 'Артикул',
          key: 'code'
        },
        {
          title: 'Скидка',
          key: 'discount'
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        !this.hideList.find(item => item.id == product.id) &&
        product.name.includes(this.search))
    }
  },
  async beforeMount() {
    // Выкачиваем все товары из БД
    this.products = await query('ReadTable', 'products')
    this.loading = false
  }
}
</script>

<style>

</style>
