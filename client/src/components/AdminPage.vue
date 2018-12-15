<template>
  <div class="admin-page">
    <Card>
      <Layout>
        <Header>Администратирование</Header>
        <Content>
          <Layout>
            <Content>
              <Table
                  highlight-row
                  :columns="columns"
                  :data="items"
                  :no-data-text="noDataText"
                  :loading="loading"/>
            </Content>
            <Sider>

            </Sider>
          </Layout>
        </Content>
      </Layout>
    </Card>
  </div>
</template>

<script>
import query from '../libs/query'
window.q = query
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    table: {
      type: String,
      required: true
    },
    noDataText: {
      type: String,
      default: 'Нет данных'
    }
  },
  data() {
    return {
      loading: true,
      items: []
    }
  },
  async beforeMount() {
    this.loading = true
    try {
      this.items = await query('ReadTable', this.table)
    } catch(errMessage) {
      this.$Modal.error({
          title: 'При чтении данных произошла ошибка',
          content: errMessage
      });
    }
    this.loading = false
  }
}
</script>

<style>
.admin-page {
  max-width: 700px;
  margin: 20px auto;
}
</style>
