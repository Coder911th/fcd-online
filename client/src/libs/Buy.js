export default class Buy {
  constructor(product, amount) {
    this.product = product
    this.amount = amount
  }

  getPrice() {
    return this.product.price * this.amount
  }

  getDiscount() {
    return this.getPrice() * this.product.discount
  }

  getTotalPrice() {
    return this.getPrice() * getDiscount()
  }
}
