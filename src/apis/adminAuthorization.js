import { apiHelper } from '../utils/helpers'

export default {
  signIn({ email, password }) {
    return apiHelper.post('/admin/signin', {
      email,
      password
    })
  }
}