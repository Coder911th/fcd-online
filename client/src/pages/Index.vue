<template>
  <div class="Index">
    <div class="Index__aside">
      <ProductInfo :product="selectedProduct" class="Index__block"/>
      <ProductPayment :buyList="buyList" class="Index__block"/>
    </div>
    <Card class="Index__main Index__block">
      <Tabs>
        <TabPane label="Все товары">
          <ProductSearch @select="selectedProduct = $event"/>
        </TabPane>
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
      selectedProduct: {
        name: 'Молоко',
        price: 80,
        code: 102302,
        discount: 30
      },
      buyList: []
    }
  }
}
</script>

<style>
.Index {
  display: flex;
  width: 900px;
  margin: 0 auto;
}

.Index__main {
  flex-grow: 1;
}

.Index__aside {
  width: 250px;
  flex-shrink: 0;
}

.Index__block {
  margin: 10px;
}
</style>
