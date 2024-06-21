import IconBurger from '../assets/icon-burger.svg'

const RightMobileMenu = () => {
  return (
    <div className='hidden items-center max-xl:flex'>
      <input
        type='text'
        className='gray-box hidden h-1/2 w-72 md:block'
        placeholder='Search'
        name='search-input'
      />
      <div className='m-3 gap-y-4 border border-gray-transparent bg-gray-accent p-2'>
        <img className='size-6' src={IconBurger} />
      </div>
    </div>
  )
}

export default RightMobileMenu
