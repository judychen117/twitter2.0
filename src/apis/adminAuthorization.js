import { apiHelper } from '../utils/helpers'

export default {
  // 帶入參數
  signIn({ email, password }) {
    // axios 回傳一個 Promise物件
    return apiHelper.post('/admin/signin', {
      email,
      password
    })
  }
}