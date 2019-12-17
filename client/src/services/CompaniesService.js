import api from '@/services/api'

export default {
  fetchCompanies () {
    return api().get('companies')
  },
  addNewCompany (params) {
    return api().post('companies', params)
  }
}
