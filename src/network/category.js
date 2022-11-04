import { request } from './request'

export function category () {
  return request({
    url: '/category'
  })
}

export function subcategory (maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function detail (miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
