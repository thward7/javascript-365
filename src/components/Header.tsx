import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='border-orange-accent flex justify-between border-b'>
      <div className='flex gap-3'>
        <button>
          <img src={Logo} className='w-56' />
        </button>
        <div className='main-menu flex items-center justify-center'>
          <button>Video</button>
          <button>Gif</button>
          <button>Mentors</button>
          <button>Blog</button>
        </div>
      </div>
      <div className='flex items-center gap-6 text-[14px]'>
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
    </div>
  )
}

export default Header
