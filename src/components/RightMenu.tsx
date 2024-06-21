const RightMenu = () => {
  return (
    <div className='flex items-center gap-6 text-[14px] max-xl:hidden'>
      <input
        type='text'
        className='gray-box h-1/2 w-72'
        placeholder='Search'
        name='search-input'
      />
      <div className='second-menu flex items-center justify-center gap-6'>
        <button>Bookmarks [0]</button>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  )
}

export default RightMenu
