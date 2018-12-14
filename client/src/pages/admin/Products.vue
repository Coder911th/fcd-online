<template>
  <AdminPage
      :columns="columns"
      list="GetAllProducts"
      read="ReadProduct"
      save="SaveProduct"/>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'Идентификатор товара',
          key: 'id'
        },
        {
          title: 'Штрих-код',
          key: 'barcode' 
        },
        {
          title: 'Название',
          key: 'name'
        },
        {
          title: 'Цена',
          key: 'price'
        },
        {
          title: 'Скидка',
          key: 'discount'
        },
        {
          title: 'Единицы',
          key: 'amount_type_id'
        }
      ]
    }
  }
}
</script>

<style>

</style>
