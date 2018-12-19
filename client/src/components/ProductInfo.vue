<template>
  <Card dis-hover>
    <p slot="title">{{ product ? product.name : 'Просматриваемый товар' }}</p>
    <Label label="Штрих-код" :width="80">{{ product ? product.barcode : '-' }}</Label>
    <Label label="Без скидки" :width="80">{{ product ? product.price.toFixed(2) : '-' }} руб./{{ amountType }}</Label>
    <Label label="Скидка" :width="80">{{ product ? (product.discount * 100).toFixed(2) : '-' }} %</Label>
    <Label label="Со скидкой" :width="80">{{ product ? (product.price * (1 - product.discount)).toFixed(2) : '-' }} руб./{{ amountType }}</Label>
    <Label label="Количество" :width="80">
      <Input v-if="mode == 'remove'" class="ProductInfo__counter" v-model.number="product.amount" v-on:input="chageAmount" size="small" :disabled="mode == 'remove'">
        <Button slot="prepend" icon="md-remove" size="small" :disabled="mode == 'remove'"/>
        <Button slot="append" icon="md-add" size="small" :disabled="mode == 'remove'"/>
      </Input>
      <Input v-else class="ProductInfo__counter" v-model.number="amount" v-on:input="chageAmount" size="small" :disabled="!product">
        <Button slot="prepend" icon="md-remove" size="small" @click="reduceAmount" :disabled="!product || amount<=1"/>
        <Button slot="append" icon="md-add" size="small" @click="amount++" :disabled="!product"/>
      </Input>
    </Label>
    <Label label="Сумма" :width="80" highlight>{{ sum }} Руб.</Label>
    <Label>
      <Button
          v-if="mode == 'add'"
          type="primary"
          shape="circle"
          :disabled="sum == 0"
          @click="addNewBuy">Добавить</Button>
      <Button v-else-if ="mode == 'remove'" shape="circle" @click="removeBuy">Удалить</Button>
    </Label>
  </Card>
</template>

<script>
import Buy from '../libs/Buy'
import query from '../libs/query'

export default {
  props: {
    product: {
      type: Object,
      default: null
    },
    mode: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      amount: 1,
      loading: true,
      amountTypes: []
    }
  },
  computed: {    
    sum() {
      return this.product
        ? (this.product.price * (1 - this.product.discount) * this.amount).toFixed(2)
        : '-'
    },
    amountType() {
      return this.product
        ? (this.amountTypes.find(item => item.id == this.product.amount_type_id)).short
        : '-'
    },
    amount: {
      get: function() {
        return this.amount
      },
      set: function(newValue) {
        (newValue < 0) ? this.amount = 0 : this.amount = newValue
      }
    }
  },
  methods: {
    addNewBuy() {
      this.$emit('newBuy', new Buy(this.product, this.amount))
      this.amount = 1
    },
    removeBuy() {
      this.$emit('removeBuy', this.product)
      for (var i = 0; i < this.$parent.buyList.length; i++) {
        if (this.$parent.buyList[i].product.id === this.product.id) {
          this.$parent.buyList.splice(i, 1);
        }
      }
      
    },
    reduceAmount() {
      if (this.amount > 1 ) this.amount--
    },
    chageAmount() {
      if (this.amount < 0 || typeof this.amount != 'number') this.amount = 0
    }
  }, 
  async beforeMount() {
    this.amountTypes = await query('ReadTable', 'amount_types')
    this.loading = false
  }
}
</script>

<style>
.ProductInfo__counter input {
  text-align: center;
}
</style>
