// composables/axios.js
import axios from 'axios'

const useAxios = () => {
  const API_KEY = '3936591fc75b5e2188667252f3c3fac9'
  const request = (method, url, data, params) => {
    return new Promise((resolve, reject) => {
      axios({
        method,
        url,
        data,
        params // Add params to the Axios request
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error.response || error)
        })
    })
  }

  return {
    request,
    API_KEY
  }
}

export default useAxios
