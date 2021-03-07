import { apiHelper } from './../utils/helpers'

const getToken = () => localStorage.getItem('token')

export default {
    tweets: {
        getTweets() {
            return apiHelper.get('/admin/tweets', { headers: { Authorization: `Bearer ${getToken()}` } })
        },
        deleteTweets({ tweetId }) {
            return apiHelper.delete(`/api/admin/tweets/${tweetId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
        }
    },
    users: {
        getUsers() {
            return apiHelper.get('/admin/users', { headers: { Authorization: `Bearer ${getToken()}` } })
        }
    }
}