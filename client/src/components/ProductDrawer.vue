<template>
  <div class="ProductDrawer">
    <Spin
        fix
        v-if="loading"
        size="large"/>
    <Form label-position="left">
      <FormItem label="Штрих-код">
        <Input v-model="item.barcode"/>
      </FormItem>
      <FormItem label="Название">
        <Input v-model="item.name"/>
      </FormItem>
      <FormItem
          label="Цена"
          :label-width="60">
        <InputNumber
            v-model="item.price"
            size="small"/> Руб.
      </FormItem>
      <FormItem
          label="Скидка"
          :label-width="60">
        <InputNumber
            v-model="item.discount"
            :max="1"
            :min="0"
            :step="0.01"
            size="small"/> %
      </FormItem>
      <!-- <Select v-model="item.amount_type_id">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select> -->
    </Form>
  </div>
</template>

<script>
import query  from '../libs/query'

export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: null,
          barcode: '',
          name: '',
          price: 0,
          discount: 0.0,
          amount_type_id: 1
        }
      }
    }
  },
  data() {
    return {
      loading: true,
      amount_types: []
    }
  },
  async beforeMount() {
    this.loading = true
    this.amount_types = await query('ReadTable', 'amount_types')
  }
}
</script>

<style>
.ProductDrawer .ivu-form-item-label {
  font-size: 13px;
}
</style>
