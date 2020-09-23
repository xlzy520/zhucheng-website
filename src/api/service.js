import baseFetch from './base'
const fetch = (url, ...arg) => baseFetch('/car/' + url, ...arg)

export default {
  getCar(data) {
    return fetch('list', data)
  },
  getBanners(data) {
    return fetch('list', data)
  },
  getList(data) {
    return fetch('list', data)
  },
  contactUs(data) {
    return fetch('contactUs', data)
  },
}
