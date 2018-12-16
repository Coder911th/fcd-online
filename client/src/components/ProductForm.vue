<template>
  <div>
    <Spin
        fix
        v-if="loading"
        size="large"/>
    <Form
        v-if="!loading"
        class="ProductForm"
        ref="form"
        :model="item"
        :rules="validators"
        label-position="left">
      <FormItem label="Штрих-код" prop="barcode">
        <Input v-model="item.barcode"/>
      </FormItem>
      <FormItem label="Название" prop="name">
        <Input v-model="item.name"/>
      </FormItem>
      <FormItem
          label="Цена"
          :label-width="70"
          prop="price">
        <InputNumber
            v-model="item.price"
            :min="0"
            size="small"/> Руб.
      </FormItem>
      <FormItem
          label="Скидка"
          :label-width="70"
          prop="discount">
        <InputNumber
            v-model="item.discount"
            :max="1"
            :min="0"
            :step="0.01"
            size="small"/> %
      </FormItem>
      <FormItem label="Измеряется в" prop="amount_type_id">
        <Select v-model="item.amount_type_id">
          <Option
              v-for="item in amountTypes"
              :key="item.id"
              :value="item.id">{{ item.name }}</Option>
        </Select>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import query  from '../libs/query'

export default {
  props: {
    item: Object
  },
  data() {
    return {
      loading: true,
      amountTypes: [],
      validators: {
        barcode: [{required: true, message: 'Заполните обязательное поле', trigger: 'blur'}],
        name: [{required: true, message: 'Заполните обязательное поле', trigger: 'blur'}],
        price: [{required: true, message: 'Заполните обязательное поле'}],
        discount: [{required: true, message: 'Заполните обязательное поле'}],
        amount_type_id: [{required: true, message: 'Выберите элемент списка'}]
      }
    }
  },
  methods: {
    getEmptyRecord() {
      return 
    },
    validate() {
      return this.$refs.form.validate()
    }
  },
  async beforeMount() {
    this.amountTypes = await query('ReadTable', 'amount_types')
    this.loading = false
  }
}
</script>

<style>
.ProductForm .ivu-form-item-label {
  font-size: 13px;
}
</style>
