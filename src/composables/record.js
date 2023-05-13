import { ref } from 'vue'
import useAxios from '../composables/axios'

const useRecord = (method, url,) => {
  const axios = useAxios()
  
  const loading = ref(false)
  const error = ref('')
  const record = ref([])

  const getData = (val) => {
    loading.value = true
    error.value = ''

    axios
      .request(method, `${url}`, {}, {
          api_key: axios.API_KEY,
          query: val
      })
      .then((response) => {
        (response, 'get data')
        record.value = response.results || response;
        (record.value)
      })
      .catch((errors) => {
        error.value = 'Error searching movies.'
        console.error(errors)
      })
      .finally(() => 
      loading.value = false)
  }

  return {
    loading,
    error,
    record,
    getData
  }
}

export default useRecord
