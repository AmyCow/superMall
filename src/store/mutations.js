import { ADD_COUNT, ADD_TO_CART } from './mutations-type'

export default {
  [ADD_COUNT] (state, payload) {
    payload.count += 1
  },
  [ADD_TO_CART] (state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
