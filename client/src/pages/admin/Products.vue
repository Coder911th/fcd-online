<script>
import AdminPage from '../../components/AdminPage'
import ProductForm from '../../components/ProductForm'

export default {
  title: 'Администрирование',
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
          key: 'barcode',
          width: 130
        },
        {
          title: 'Название',
          key: 'name'
        },
        {
          title: 'Цена',
          key: 'price',
          width: 120
        },
        {
          title: 'Скидка',
          key: 'discount',
          width: 80
        },
        {
          title: 'Единицы',
          key: 'amount_type_id',
          width: 100
        }
      ]
    }
  }
}
</script>
