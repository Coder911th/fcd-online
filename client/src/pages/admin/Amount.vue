<script>
import AdminPage from '../../components/AdminPage'
import AmountForm from '../../components/AmountForm'

export default {
  title: 'Администратирование',
  extends: AdminPage,
  data() {
    return {
      table: 'amount_types',
      editingTemplate: AmountForm,
      format: {
        id: null,
        name: '',
        short: ''
      },
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
