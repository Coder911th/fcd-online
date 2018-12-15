<template>
  <Card dis-hover>
    <Form>
      <Label label="Без скидки">{{ price }} Руб.</Label>
      <Label label="Скидка">{{ discount }} Руб.</Label>
      <Label label="К оплате">{{ totalPrice }} Руб.</Label>
    </Form>
    <div class="ProductPayment__buttons">
      <Button
          type="primary"
          shape="circle">Оплатить</Button>
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    buyList: {
      type: Array,
      required: true
    }
  },
  computed: {
    price() {
      return this.buyList.reduce((sum, buy) => sum + buy.getPrice(), 0).toFixed(2)
    },
    discount() {
      return this.buyList.reduce((sum, buy) => sum + buy.getDiscount(), 0).toFixed(2)
    },
    totalPrice() {
      return this.buyList.reduce((sum, buy) => sum + buy.getTotalPrice(), 0).toFixed(2)
    }
  }
}
</script>

<style>
.ProductPayment__buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
