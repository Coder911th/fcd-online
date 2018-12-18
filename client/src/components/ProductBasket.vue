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
          width: 160
        },
        {
          title: 'Количество',
          key: 'amount',
          width: 140
        },
        {
          title: 'Цена',
          key: 'fullPrice',
          width: 90
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
          fullPrice: buy.getTotalPrice().toFixed(2)
        }))
    }
  }
}
</script>

<style>

 td:nth-child(3) .ivu-table-cell,
 .ivu-table th:nth-child(3),
 td:nth-child(4) .ivu-table-cell,
 .ivu-table th:nth-child(4),
 td:nth-child(2) .ivu-table-cell,
 .ivu-table th:nth-child(2)
  {
    text-align: center;
  }
</style>
