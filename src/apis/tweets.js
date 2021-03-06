import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  tweets: {
    get() {
      return apiHelper.get('/tweets', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    post({ description }) {
      return apiHelper.post('/tweets', { description }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
  tweet: {
    get({ tweet_id }) {
      return apiHelper.get(`/tweets/${tweet_id}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  }
}