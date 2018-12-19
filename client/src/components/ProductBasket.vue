<template>
  <div>
    <Input
        clearable
        enter-button
        v-model.trim="search"
        placeholder="Введите название или штрих-код товара"/>
    <Table
        highlight-row
        :columns="columns"
        :data="filteredProducts"
        :no-data-text="search.length ? 'Не найдено ни одного товара' : 'Корзина пуста'"
        style="margin-top: 10px"
        @on-row-click="$emit('select', $event)"/>
  </div>
</template>

<script>
export default {
  props: {
    buys: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: '',
      columns: [
        {
          title: 'Название',
          key: 'name'
        },
        {
          title: 'Штрих-код',
          key: 'barcode',
          width: 130
        },
        {
          title: 'Количество',
          key: 'amount',
          width: 110
        },
        {
          title: 'Цена',
          key: 'fullPrice',
          width: 100
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      return this.buys.filter(buy =>
        buy.product.name.toLowerCase().includes(this.search) ||
        buy.product.barcode == this.search).map(buy => ({
          name: buy.product.name,
          barcode: buy.product.barcode,
          amount: buy.amount,
          amount_type_id: buy.product.amount_type_id,
          id: buy.product.id,
          discount: buy.product.discount,
          price: buy.product.price,
          fullPrice: buy.getTotalPrice().toFixed(2)
        }))
    }
  }
}
</script>
