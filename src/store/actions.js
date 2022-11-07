import { ADD_COUNT, ADD_TO_CART } from './mutations-type'

export default {
  addToCart ({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      const oldProduct = state.cartList.find(item => {
        return item.iid === payload.iid
      })
      if (oldProduct) {
        commit(ADD_COUNT, oldProduct)
        resolve('当前商品数量加1')
      } else {
        payload.count = 1
        commit(ADD_TO_CART, payload)
        resolve('当前商品加入购物车')
      }
    })
  }
}
