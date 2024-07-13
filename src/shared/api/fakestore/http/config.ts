import axios from 'axios'

export const BASE_URL = 'https://fakestoreapi.com'
export const fakeStoreHttp = axios.create({
	baseURL: BASE_URL,
})
