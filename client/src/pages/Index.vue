<template>
  <div class="Index">
    <div class="Index__aside">
      <ProductInfo
          class="Index__block"
          :product="selectedProduct"
          :mode="currentProductMode"
          @newBuy="onNewBuy"/>
      <ProductPayment
          class="Index__block"
          :buyList="buyList"/>
    </div>
    <Card class="Index__main Index__block">
      <Tabs v-model="selectedTab">
        <TabPane label="Все товары" name="all-products">
          <ProductSearch
              :hideList="hideList"
              @select="onSelectedProduct"/>
        </TabPane>
        <TabPane label="Корзина" name="basket">В разработке...</TabPane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
import ProductInfo from '../components/ProductInfo'
import ProductBasket from '../components/ProductBasket'
import ProductPayment from '../components/ProductPayment'
import ProductSearch from '../components/ProductSearch'

export default {
  components: {
    ProductInfo,
    ProductBasket,
    ProductPayment,
    ProductSearch
  },
  data() {
    return {
      selectedProduct: null,
      buyList: [],
      selectedTab: 'all-products',
      currentProductMode: null
    }
  },
  methods: {
    onSelectedProduct($event) {
      this.selectedProduct = $event
      this.currentProductMode = 'add'
    },
    onNewBuy($event) {
      this.selectedProduct = null
      this.buyList.push($event)
      this.currentProductMode = null
    }
  },
  computed: {
    hideList() {
      return this.buyList.map(buy => buy.product)
    }
  }
}
</script>

<style>
.Index {
  box-sizing: border-box;
  display: flex;
  width: 920px;
  margin: 0 auto;
}

.Index__main {
  box-sizing: border-box;
  width: 650px;
  flex-grow: 1;
}

.Index__aside {
  box-sizing: border-box;
  width: 250px;
  flex-shrink: 0;
}

.Index__block {
  margin: 10px;
}
</style>
