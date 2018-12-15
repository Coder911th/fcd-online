<template>
  <div>
    <Input
        clearable
        enter-button
        v-model="search"
        placeholder="Введите название продукта"/>
    <Table
        highlight-row
        :columns="columns"
        :data="filteredProducts"
        no-data-text="Список товаров пуст"
        style="margin-top: 10px"
        @on-row-click="$emit('select', $event)"/>
  </div>
</template>

<script>
export default {
  props: {
    hideList: Array,
    default() {
      return []
    }
  },
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
      return this.products.filter(product =>
        !this.hideList.find(item => item.id == product.id) &&
        (product.name.toLowerCase().includes(this.search) || product.code == this.search))
    }
  },
  beforeMount() {
    // Выкачиваем все товары из БД
    this.products = [
      {id: 1, name: 'Молоко', price: 75, code: 102302, discount: .3},
      {id: 2, name: 'Мандарины', price: 120, code: 402302, discount: .1},
      {id: 3, name: 'Апельсины', price: 80, code: 102302, discount: .0525},
      {id: 4, name: 'Курочка', price: 250, code: 9302, discount: .05},
      {id: 5, name: 'Барашек', price: 7500, code: 82302, discount: 0}
    ]
  }
}
</script>

<style>

</style>
