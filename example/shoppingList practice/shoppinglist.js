const app = new Vue({
  el: '#app',
  data: {
    books: [
      {id: 1, name: '《算法导论》', date: '2006-09', price: 86.00, count: 1},
      {id: 2, name: '《UNIX编程》', date: '2009-03', price: 96.00, count: 2},
      {id: 3, name: '《编程珠玑》', date: '2016-05', price: 186.00, count: 4},
      {id: 4, name: '《编程大师》', date: '2008-12', price: 126.00, count: 6}
    ]
  },
  methods: {
    //     getPrice(price) {
    //         return '￥' + price.toFixed(2)
    //     }

    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeBook(index) {
      this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      // 方法1：普通循环
      //     for (let i = 0; i < this.books.length; i++) {
      //         totalPrice += this.books[i].price * this.books[i].count
      //     }
      //     return '￥' + totalPrice
      // }

      // 方法2：

      // for (let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      // 方法3：
      // for (let i of this.books) {
      //   totalPrice += i.price * i.count
      // }
      // return totalPrice

      // 方法4:
      return this.books.reduce(function (pre, book) {
        return pre + book.price * book.count
      }, 0)
    }
  }
})