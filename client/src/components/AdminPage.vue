<template>
  <div class="admin-page">
    <Layout class="admin-page__layout">
      <Sider width="230">
        <Menu
            class="admin-page__menu"
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
                @click="createNewItem"/>
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
                @click="createNewItem"/>
          </MenuItem>
          <MenuItem name="/admin/amount">
            <Icon type="ios-cafe"/> Типы количеств
            <Button
                v-if="currentPath == '/admin/amount'"
                class="admin-page__add"
                icon="md-add"
                type="primary"
                shape="circle"
                size="small"
                @click="createNewItem"/>
          </MenuItem>
        </Menu>
      </Sider>
      <Content>
        <Card class="admin-page__content" dis-hover>
          <Table
              :columns="extendedColumns"
              :data="items"
              :no-data-text="noDataText"
              :loading="loading"
              @on-row-click="onEdit"/>
          </Card>
      </Content>
    </Layout>
    <Drawer
        v-model="editing"
        :title="editingTitle"
        :width="250"
        :mask-closable="false">
      <RecordDrawer
          v-if="editing"
          :id="editingItemId"
          :form="editingTemplate"
          :table="table"
          @close="onCloseEditing"
          :format="format"/>
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
      editingTitle: '',
      editingItemId: null
    }
  },
  methods: {
    async updateList() {
      this.loading = true
      try {
        this.items = await query('ReadTable', this.table)
      } catch(errMessage) {
        this.$Modal.error({
            title: 'При чтении данных произошла ошибка',
            content: errMessage
        })
      }
      this.loading = false
    },
    createNewItem() {
      this.editingTitle = 'Создание новой записи'
      this.editingItemId = 0
      this.editing = true
    },
    onEdit(record) {
      this.editingTitle = 'Редактирование записи'
      this.editingItemId = record.id
      this.editing = true
    },
    onCloseEditing() {
      this.editing = false
      this.updateList()
    },
    async onRemove(id) {
      this.loading = true
      await query('RemoveRecord', this.table, id)
      this.updateList()
    }
  },
  computed: {
    extendedColumns() {
      return [...this.columns, {
        title: ' ',
        width: 100,
        align: 'center',
        render: (h, params) => {
          return h('Button', {
            props: {
              type: 'error',
              size: 'small'
            },
            on: {
              click: (ev) => {
                event.stopPropagation()
                this.$Modal.confirm({
                  title: 'Удаление записи',
                  content: 'Вы уверены, что хотите удалить эту запись?',
                  onOk: () => this.onRemove(params.row.id)
                });
              }
            }
          }, 'Delete')
        }
      }]
    }
  },
  beforeMount() {
    this.updateList()  
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

.admin-page__menu {
  height: calc(100vh - 84px);
}
</style>
