import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  get() {
    return apiHelper.get('/users', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}