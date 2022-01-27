import axios from 'axios'

const api = (url = '', method = 'GET', data = {}) => {
  const options:any = {
    method,
    headers: {
      'content-type': 'multipart/form-data'
    },
     data,
    url: `${process.env.REACT_APP_BASE_URL}=${url}`,
  }
  return axios(options)
}

export default api
