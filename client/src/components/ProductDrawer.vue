<template>
  <div>
    <Form>
      <FormItem label="Штрих-код">
        <Input v-model="product.barcode"/>
      </FormItem>
      <FormItem label="Название">
        <Input v-model="product.name"/>
      </FormItem>
      <FormItem label="Цена">
        <Input v-model.number="product.price"/>
      </FormItem>
      <FormItem label="Скидка">
        <InputNumber v-model="product.discount"/>
      </FormItem>
      <!-- <Select v-model="product.amount_type_id">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select> -->
    </Form>
  </div>
</template>

<script>
export default {
  props: {
    product: {
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
  }
}
</script>

<style>

</style>
