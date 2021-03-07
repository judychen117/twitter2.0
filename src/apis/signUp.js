import { apiHelper } from './../utils/helpers'

export default {
    signUp({ formData }) {
        return apiHelper.post('/users', formData)
    }
}