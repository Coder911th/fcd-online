<template>
  <div class="Index">
    <Row>
      <Col span="10">
        <ProductInfo :product="selectedProduct" class="Index__block"/>
      </Col>
      <Col span="14">
        <ProductPayment :buyList="buyList" class="Index__block"/>
      </Col>
    </Row>
    <Row>
      <Col span="10">
        <ProductSearch @select="selectedProduct = $event" class="Index__block"/>
      </Col>
      <Col span="14">
      
      </Col>
    </Row>
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
  width: 700px;
  margin: 0 auto;
}

.Index__block {
  margin: 10px;
}
</style>
