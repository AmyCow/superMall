import { request } from './request'

export function getGoodDetail (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Good {
  constructor (itemInfo, columns, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.highPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}

export class ShopInfo {
  constructor (shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.totalNum = shopInfo.cGoods
    this.allSell = shopInfo.cSells
    this.score = shopInfo.score
  }
}

export class Parm {
  constructor (info, rule) {
    this.sizes = rule.tables || {}
    this.info = info.set
  }
}
