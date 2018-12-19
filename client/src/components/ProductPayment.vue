<template>
  <Card dis-hover>
    <Form>
      <Label :width="80" label="Без скидки">{{ price }} Руб.</Label>
      <Label :width="80" label="Скидка">{{ discount }} Руб.</Label>
      <Label :width="80" label="К оплате">{{ totalPrice }} Руб.</Label>
    </Form>
    <div class="ProductPayment__buttons">
      <Button
          type="primary"
          shape="circle"
          @click="modal = true">Оплатить</Button>
    </div>
    <Modal
        v-model="modal"
        title="Оплата прошла успешно!"
        @on-ok="ok"
        @on-cancel="cancel"
        cancel-text="Отмена">
        <p>Перейти к созданию нового чека?</p>
    </Modal>
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
  },
  data () {
    return {
      modal: false
    }
  },
  methods: {
    ok () {
      this.$parent.buyList = [];
      this.$parent.selectedProduct = null;
      this.$parent.currentProductMode = null;
      this.$Message.success('Новый чек');
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
