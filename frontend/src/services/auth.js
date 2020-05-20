import api from '@/services/api'

export default {
  login () {
    return api().post('/api/auth/login')
  }
}