<template>
  <div>
    <Row>
      <Col>
        <ProductInfo :product="selectedProduct" style="margin: 10px"/>
      </Col>
      <Col>
        
      </Col>
    </Row>
    <Row>
      <Col>
        <ProductSearch @select="x" style="margin: 10px"/>
      </Col>
      <Col>
      
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
      }
    }
  },
  methods: {
    x($event) {
      this.selectedProduct = $event
    }
  }
}
</script>

<style>

</style>
