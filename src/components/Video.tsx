import { IVideo } from '../types'

interface VideoProps {
  data: IVideo
}

const Video = ({ data }: VideoProps) => {
  return (
    <div className='cursor-pointer border border-gray-transparent'>
      <div className='preview relative'>
        <img src={data.preview} className='size-full' />
        <div className='top-0'>{Math.floor(Math.random() * 100)}%</div>
        <div className='bottom-0'>
          <div className='bottom-0'>
            {Math.floor(Math.random() * 200000)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        <div className='right-0 top-0 hover:bg-orange'>Like</div>
        <div className='bottom-0 right-0'>
          {' '}
          {`${Math.floor(Math.random() * 60)
            .toString()
            .padStart(2, '0')}:${Math.floor(Math.random() * 60)
            .toString()
            .padStart(2, '0')}`}
        </div>
      </div>
      <div className='preview-title'>{data.title}</div>
    </div>
  )
}

export default Video
