import { useEffect, useState } from 'react'
import { fetchVideos } from '../api'

interface ItemResponse {
  snippet: {
    title: string
    thumbnails: { medium: { url: string } }
  }
}

const useVideos = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchVideos().then((response) => {
      setVideos(
        response.data.items.map((item: ItemResponse) => ({
          title: item.snippet.title,
          preview: item.snippet.thumbnails.medium.url,
        })),
      )
    })
  }, [])

  return videos
}

export default useVideos
