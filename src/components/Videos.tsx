import useVideos from '../hooks/useVideos'
import Video from './Video'

const Videos = () => {
  const videos = useVideos()

  return (
    <div className='flex flex-col items-center border-b border-orange-accent'>
      <div className='grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1'>
        {videos.map((video, index) => (
          <Video key={index} data={video} />
        ))}
      </div>
      <button className='gray-box my-4 w-1/6 text-orange max-lg:w-1/3'>
        Show more
      </button>
    </div>
  )
}

export default Videos
