import axios from 'axios'

export default {
  login(requestBody) {
    return axios.post('/api/auth/login', requestBody)
      .then(responce => responce)
      .catch(err => err.response);
  },
  register(requestBody) {
    return axios.post('/api/auth/register', requestBody)
      .then(responce => responce)
      .catch(err => err.response);
  }
}