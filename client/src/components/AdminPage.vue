<template>
  <div class="admin-page">
    <Card>
      <Table
          highlight-row
          :columns="columns"
          :data="items"
          :key="noDataText"/>
    </Card>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    noDataText: {
      type: String,
      default: 'Нет данных'
    },
    list: {
      type: String,
      required: true
    },
    read: {
      type: String,
      required: true
    }
  },
  computed: {
    items() {
      return []
    }
  }
}
</script>

<style>
.admin-page {
  max-width: 700px;
  margin: 20px auto;
}
</style>
