<template>
  <Card>
    <Input
        clearable
        enter-button
        v-model="search"
        placeholder="Введите название продукта"/>
    <Table
        highlight-row
        :columns="columns"
        :data="filteredProducts"
        no-data-text="Товар не найден"
        style="margin-top: 10px"
        @on-row-click="$emit('select', $event)"/>
  </Card>
</template>

<script>
export default {
  data() {
    return {
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
      return this.products.filter(product => product.name.includes(this.search))
    }
  },
  beforeMount() {
    // Выкачиваем все товары из БД
    this.products = [
      {name: 'Молоко', price: 75, code: 102302, discount: 30},
      {name: 'Мандарины', price: 120, code: 402302, discount: 10},
      {name: 'Апельсины', price: 80, code: 102302, discount: 5.25},
      {name: 'Курочка', price: 250, code: 9302, discount: 5},
      {name: 'Барашек', price: 7500, code: 82302, discount: 0}
    ]
  }
}
</script>

<style>

</style>
