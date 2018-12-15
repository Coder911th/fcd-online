<template>
  <AdminPage
      :columns="columns"
      table="products"/>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'Идентификатор',
          key: 'id',
          width: 130
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
