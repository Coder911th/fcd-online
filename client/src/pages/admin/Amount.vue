<script>
import AdminPage from '../../components/AdminPage'
import AmountDrawer from '../../components/AmountDrawer'

export default {
  title: 'Администратирование',
  extends: AdminPage,
  data() {
    return {
      table: 'amount_types',
      editingTemplate: AmountDrawer,
      columns: [
        {
          title: 'Идентификатор',
          key: 'id',
          width: 130
        },
        {
          title: 'Название',
          key: 'name'
        },
        {
          title: 'Сокращение',
          key: 'short'
        }
      ]
    }
  }
}
</script>
