import axios from 'axios'

const baseUrl = 'https://medical-notebook-2022.herokuapp.com/'

export const axiosClient = axios.create({
  baseURL: baseUrl
})

export function setupAxios(store) {

  // Add a request interceptor
  axiosClient.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      // const { auth: { accessToken } } = store.getState()
      //
      // if (accessToken) {
      //   config.headers.Authorization = `Bearer ${accessToken}`
      // }
      return config
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error)
    },
  )

  // Add a response interceptor
  axiosClient.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data
    },
    async function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error)
    },
  )
}
