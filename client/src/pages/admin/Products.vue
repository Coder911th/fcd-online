<script>
import AdminPage from '../../components/AdminPage'
import ProductForm from '../../components/ProductForm'

export default {
  title: 'Администратирование',
  extends: AdminPage,
  data() {
    return {
      table: 'products',
      editingTemplate: ProductForm,
      format: {
        id: null,
        barcode: '',
        name: '',
        price: 0,
        discount: 0.0,
        amount_type_id: null
      },
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
