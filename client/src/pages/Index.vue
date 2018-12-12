<template>
  <div class="Index">
    <div class="Index__aside">
      <ProductInfo :product="selectedProduct" class="Index__block"/>
      <ProductPayment :buyList="buyList" class="Index__block"/>
    </div>
    <Card class="Index__main Index__block">
      <Tabs v-model="selected">
        <TabPane label="Все товары" name="all-products">
          <ProductSearch @select="selectedProduct = $event"/>
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
      selectedProduct: {
        name: 'Молоко',
        price: 80,
        code: 102302,
        discount: 30
      },
      buyList: [],
      selected: 'all-products'
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
