import { apiHelper } from './../utils/helpers'

const getToken = () => localStorage.getItem('token')

export default {
    getFollower({ id }) {
        return apiHelper.get(`/users/${id}/followers`, { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    getFollowing({ id }) {
        return apiHelper.get(`/users/${id}/followings`, { headers: { Authorization: `Bearer ${getToken()}` } })
    }

}