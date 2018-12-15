<template>
  <div class="admin-page">
    <Layout class="admin-page__layout">
      <Sider width="230">
        <Menu
            theme="dark"
            width="230"
            :active-name="currentPath"
            @on-select="$emit('pageChanged', $event)">
          <MenuItem name="/admin/products">
            <Icon type="md-pizza"/> Товары
            <Button
                v-if="currentPath == '/admin/products'"
                class="admin-page__add"
                icon="md-add"
                type="primary"
                shape="circle"
                size="small"
                @click="newItem"/>
          </MenuItem>
          <MenuItem name="/admin/users">
            <Icon type="md-people"/> Пользователи
            <Button
                v-if="currentPath == '/admin/users'"
                class="admin-page__add"
                icon="md-add"
                type="primary"
                shape="circle"
                size="small"
                @click="newItem"/>
          </MenuItem>
          <MenuItem name="/admin/amout_types">
            <Icon type="ios-cafe"/> Типы количеств
            <Button
                v-if="currentPath == '/admin/amout_types'"
                class="admin-page__add"
                icon="md-add"
                type="primary"
                shape="circle"
                size="small"
                @click="newItem"/>
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
    <Drawer
        :title="editingTitle"
        v-model="editing"
        :width="720"
        :mask-closable="false">
      <component :is="editingTemplate"/>
    </Drawer>
  </div>
</template>

<script>
import query from '../libs/query'

export default {
  props: {
    currentPath: String,
    pageTitle: String
  },
  data() {
    return {
      table: '',
      columns: '',
      editingTemplate: null,
      noDataText: 'Нет данных',
      loading: true,
      items: [],
      editing: false,
      editingTitle: ''
    }
  },
  methods: {
    newItem() {
      this.editingTitle = 'Создание новой записи'
      this.editing = true
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
  margin: 0 auto;
}

.admin-page__layout {
  padding: 10px;
}

.admin-page__content {
  margin-left: 10px;
}

.admin-page__add {
  float: right;
  position: relative;
  top: -1.5px;
}
</style>
