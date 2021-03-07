import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  users: {
    get() {
      return apiHelper.get('/users', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
  user: {
    get(userId) {
      return apiHelper.get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
  addFollowing({ id }) {
    return apiHelper.post('/followships', { id }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFollowing({ followingId }) {
    return apiHelper.delete(`/followships/${followingId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addLiked(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteLiked(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}