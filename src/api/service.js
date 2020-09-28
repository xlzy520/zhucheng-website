import fetch from './base'
// const fetch = (url, ...arg) => baseFetch('/car/' + url, ...arg)

export default {
  getImgs(data) {
    return fetch('/index/img', data, 'get')
  },
  getCompanyList(data) {
    return fetch('/index/company', data, 'get')
  },
  getCompanyDetail({id}) {
    return fetch('/index/company/'+id, null, 'get')
  },
  getEmployeeList(data) {
    return fetch('/index/employee', data, 'get')
  },
  getEmployeeDetail({id}) {
    return fetch('/index/employee/'+id, null, 'get')
  },
  addFeedback(data) {
    return fetch('/index/message', data)
  },
  getFeedBackList(data) {
    return fetch('/index/message', data, 'get')
  },
  getFeedBackDetail({id}) {
    return fetch('/index/message/'+id, null, 'get')
  },
  getNewsList(data) {
    return fetch('/index/news', data, 'get')
  },
  getNewsDetail({id}) {
    return fetch('/index/news/'+id, null, 'get')
  },
  getProductsList(data) {
    return fetch('/index/products', data, 'get')
  },
  getProductDetail({id}) {
    return fetch('/index/products/'+id, null, 'get')
  },
  getSchemeList(data) {
    return fetch('/index/scheme', data, 'get')
  },
  getSchemeDetail({id}) {
    return fetch('/index/scheme/'+id, null, 'get')
  },
  getSchemeImgList(data) {
    return fetch('/index/schemeImg', data, 'get')
  },
  getSchemeImgDetail({id}) {
    return fetch('/index/schemeImg/'+id, null, 'get')
  },
  
}
