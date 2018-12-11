<template>
  <Card>
    <p slot="title">{{ product.name }}</p>
    <Label label="Артикул" :width="80">{{ product.code }}</Label>
    <Label label="Цена" :width="80">{{ product.price }} руб./шт.</Label>
    <Label label="Скидка" :width="80">{{ product.discount }} %</Label>
    <Label label="Количество" :width="80">
      <Input class="ProductInfo__counter" v-model.number="amount" size="small">
          <Button slot="prepend" icon="md-remove" size="small" @click="amount--"></Button>
          <Button slot="append" icon="md-add" size="small" @click="amount++"></Button>
      </Input>
    </Label>
    <Label label="Сумма" :width="80" highlight>{{ sum }} Руб.</Label>
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
      return this.product.price * (100 - this.product.discount) / 100 * this.amount;
    }
  }
}
</script>

<style>
.ProductInfo__counter input {
  text-align: center;
}
</style>
