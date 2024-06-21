import axios from 'axios'

export const fetchVideos = () => {
  return axios.get(import.meta.env.VITE_REQUEST_YOUTUBE_API_URL)
}
