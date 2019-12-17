import api from '@/services/api'

export default {
  fetchUser () {
    return api().get('users')
  },
  addNewUser (params) {
    return api().post('sign_in', params)
  }
}
