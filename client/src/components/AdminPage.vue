<template>
  <div class="admin-page">
    <Layout>
      <Sider class="admin-page__sider">
        <Menu theme="dark" width="auto" active-name="/products">
          <MenuItem name="/products">
            <Icon type="md-pizza"/> Товары
          </MenuItem>
          <MenuItem name="/users">
            <Icon type="md-people"/> Пользователи
          </MenuItem>
          <MenuItem name="/amout_types">
            <Icon type="ios-cafe"/> Типы количеств
          </MenuItem>
        </Menu>
      </Sider>
      <Content>
        <Card class="admin-page__content" dis-hover>
          <Table
              highlight-row
              :columns="columns"
              :data="items"
              :no-data-text="noDataText"
              :loading="loading"/>
          </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
import query from '../libs/query'

export default {
  title: 'Администратирование',
  data() {
    return {
      table: '',
      columns: '',
      noDataText: 'Нет данных',
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
  max-width: 920px;
  margin: 0 auto;
}

.admin-page__content {
  margin: 10px;
}

.admin-page__sider {
  margin-top: 10px;
  /* height: calc(100vh - 64px); */
}
</style>
