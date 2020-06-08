import axios from 'axios'
export default {
  getResume(headers) {
    return axios.get('/api/resume/', headers).then(responce => responce).catch(err => err.response);
  },
  saveResume(requestBody, headers) {
    return axios.post('/api/resume/generate', requestBody, headers).then(responce => responce).catch(err => err.response);
  },
  updateResume(requestBody, headers) {
    return axios.put('/api/resume/edit/0', requestBody, headers).then(responce => responce).catch(err => err.response);
  }
}