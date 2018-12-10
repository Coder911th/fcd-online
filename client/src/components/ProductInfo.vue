<template>
  <Card>
    <p slot="title">{{ product.name }}</p>
    <Form>
      <FormItem label="Артикул" :label-width="90">{{ product.code }}</FormItem>
      <FormItem label="Цена" :label-width="90">{{ product.price }}</FormItem>
      <FormItem label="Скидка" :label-width="90">{{ product.discount }} %</FormItem>
      <FormItem label="Количество" :label-width="90">
        <Input class="ProductInfo__counter" v-model="amount">
            <Button slot="prepend" icon="md-remove" @click="amount--"></Button>
            <Button slot="append" icon="md-add" @click="amount++"></Button>
        </Input>
      </FormItem>
      <FormItem label="Сумма" :label-width="90">{{ sum }} Руб.</FormItem>
    </Form>
  </Card>
</template>

<script>
export default {
  model: {
    prop: 'product',
    event: 'update'
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      amount: 1
    }
  },
  computed: {
    sum() {
      return this.product.price * this.amount * (1 - this.product.discount / 100);
    }
  }
}
</script>

<style>
.ProductInfo__counter input {
  text-align: center;
}
</style>
