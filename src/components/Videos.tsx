import PreviewFirst from '../assets/tutorials/item-1.jpg'
import PreviewSecond from '../assets/tutorials/item-2.jpg'

const Videos = () => {
  return (
    <div className='border-orange-accent flex flex-col items-center border-b'>
      <div className='grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1'>
        <div className='border-gray-transparent cursor-pointer border'>
          <div className='preview relative'>
            <img src={PreviewFirst} />
            <div className='top-0'>93%</div>
            <div className='bottom-0'>154,211</div>
            <div className='hover:bg-orange right-0 top-0'>Like</div>
            <div className='bottom-0 right-0'>14:03</div>
          </div>
          <div className='preview-title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi distinctio
          </div>
        </div>
        <div className='border-gray-transparent cursor-pointer border'>
          <div className='preview relative'>
            <img src={PreviewSecond} />
            <div className='top-0'>53%</div>
            <div className='bottom-0'>12,023</div>
            <div className='hover:bg-orange right-0 top-0'>Like</div>
            <div className='bottom-0 right-0'>14:03</div>
          </div>
          <div className='preview-title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi distinctio
          </div>
        </div>
        <div className='border-gray-transparent cursor-pointer border'>
          <div className='preview relative'>
            <img src={PreviewFirst} />
            <div className='top-0'>93%</div>
            <div className='bottom-0'>154,211</div>
            <div className='hover:bg-orange right-0 top-0'>Like</div>
            <div className='bottom-0 right-0'>14:03</div>
          </div>
          <div className='preview-title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi distinctio
          </div>
        </div>
        <div className='border-gray-transparent cursor-pointer border'>
          <div className='preview relative'>
            <img src={PreviewSecond} />
            <div className='top-0'>53%</div>
            <div className='bottom-0'>12,023</div>
            <div className='hover:bg-orange right-0 top-0'>Like</div>
            <div className='bottom-0 right-0'>14:03</div>
          </div>
          <div className='preview-title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi distinctio
          </div>
        </div>
        <div className='border-gray-transparent cursor-pointer border'>
          <div className='preview relative'>
            <img src={PreviewFirst} />
            <div className='top-0'>93%</div>
            <div className='bottom-0'>154,211</div>
            <div className='hover:bg-orange right-0 top-0'>Like</div>
            <div className='bottom-0 right-0'>14:03</div>
          </div>
          <div className='preview-title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi distinctio
          </div>
        </div>
        <div className='border-gray-transparent cursor-pointer border'>
          <div className='preview relative'>
            <img src={PreviewSecond} />
            <div className='top-0'>53%</div>
            <div className='bottom-0'>12,023</div>
            <div className='hover:bg-orange right-0 top-0'>Like</div>
            <div className='bottom-0 right-0'>14:03</div>
          </div>
          <div className='preview-title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi distinctio
          </div>
        </div>
      </div>
      <button className='gray-box text-orange my-4 w-1/6 max-lg:w-1/3'>
        Show more
      </button>
    </div>
  )
}

export default Videos
