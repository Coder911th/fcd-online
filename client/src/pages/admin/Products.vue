<script>
import AdminPage from '../../components/AdminPage'
import ProductDrawer from '../../components/ProductDrawer'

export default {
  title: 'Администратирование',
  extends: AdminPage,
  data() {
    return {
      table: 'products',
      editingTemplate: ProductDrawer,
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
