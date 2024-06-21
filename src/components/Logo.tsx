import Snowfall from 'react-snowfall'
import ImageLogo from '../assets/logo.png'

const Logo = () => {
  return (
    <div className='relative flex items-center'>
      <Snowfall
        snowflakeCount={20}
        radius={[0.5, 1.0]}
        speed={[-1, 0]}
        changeFrequency={400}
      />
      <button>
        <img src={ImageLogo} className='w-36 min-w-36' />
      </button>
    </div>
  )
}

export default Logo
