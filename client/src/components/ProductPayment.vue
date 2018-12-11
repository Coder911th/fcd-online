<template>
  <Card>
    <Form>
      <FormItem label="Стоимость без скидки" :label-width="150">{{ price }} Руб.</FormItem>
      <FormItem label="Скидка" :label-width="150">{{ discount }} Руб.</FormItem>
      <FormItem label="К оплате" :label-width="150">{{ totalPrice }} Руб.</FormItem>
    </Form>
    <div class="ProductPayment__buttons">
      <Button
          type="primary"
          shape="circle">Оплатить</Button>
      <Button
          class="ProductPayment__cancel"
          shape="circle">Отмена</Button>
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
      return this.buyList.reduce((sum, buy) => sum + buy.getPrice(), 0)
    },
    discount() {
      return this.buyList.reduce((sum, buy) => sum + buy.getDiscount(), 0)
    },
    totalPrice() {
      return this.buyList.reduce((sum, buy) => sum + buy.getTotalPrice(), 0)
    }
  }
}
</script>

<style>
.ProductPayment__buttons {
  display: flex;
  justify-content: flex-end;
}

.ProductPayment__cancel{
  margin-left: 10px;
}
</style>
