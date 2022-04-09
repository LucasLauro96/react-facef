import axios from 'axios';

export const getPrice = async () => {
  return axios.request({
      baseURL: 'https://economia.awesomeapi.com.br/',
      url: 'json/all'
    })
}