import Snowfall from 'react-snowfall'
import IconBurger from '../assets/icon-burger.svg'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='flex flex-col'>
      <div className='border-orange-accent flex justify-between border-b'>
        {/* <button className='gray-box min-md:block hidden'>Sections</button> */}
        <div className='flex gap-3'>
          <div className='relative flex items-center'>
            <Snowfall
              snowflakeCount={20}
              radius={[0.5, 1.0]}
              speed={[-1, 0]}
              changeFrequency={400}
            />
            <button>
              <img src={Logo} className='w-36' />
            </button>
          </div>
          <div className='main-menu flex items-center justify-center max-lg:hidden'>
            <button>Tutorials</button>
            <button>Gif</button>
            <button>Mentors</button>
            <button>Blog</button>
          </div>
        </div>
        <div className='flex items-center gap-6 text-[14px] max-lg:hidden'>
          <input
            type='text'
            className='gray-box h-1/2 w-72'
            placeholder='Search'
          />
          <div className='second-menu flex items-center justify-center gap-6'>
            <button>Bookmarks [0]</button>
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
        <div className='hidden max-lg:block'>
          <div className='bg-gray-accent border-gray-transparent m-3 gap-y-4 border p-2'>
            <img className='size-6' src={IconBurger} />
          </div>
        </div>
      </div>
      <div className='border-orange flex items-center justify-evenly border-b p-[1.25rem] text-[17px] lg:hidden'>
        <button className='hover:text-orange'>Tutorials</button>
        <button className='hover:text-orange'>Gif</button>
        <button className='hover:text-orange'>Mentors</button>
        <button className='hover:text-orange'>Blog</button>
      </div>
    </div>
  )
}

export default Header
