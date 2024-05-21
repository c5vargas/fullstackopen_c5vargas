import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const baseURL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

const getWeather = (lat, lon) => {
	const request = axios.get(`${baseURL}&lat=${lat}&lon=${lon}`)
	return request.then(response => response.data)
}

export default { getWeather }