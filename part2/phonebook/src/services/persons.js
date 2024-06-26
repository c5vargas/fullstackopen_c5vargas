import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
	const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (payload) => {
  const request = axios.post(baseUrl, payload)
  return request.then(response => response.data)
}

const update = (id, payload) => {
  const request = axios.put(`${baseUrl}/${id}`, payload)
  return request.then(response => response.data)
}

const destroy = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, create, update, destroy }