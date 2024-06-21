const LeftMobileMenu = () => {
  return (
    <div className='flex items-center justify-evenly border-b border-orange p-[1.25rem] text-[17px] lg:hidden'>
      <button className='text-orange'>Tutorials</button>
      <button className='hover:text-orange'>Gif</button>
      <button className='hover:text-orange'>Mentors</button>
      <button className='hover:text-orange'>Blog</button>
    </div>
  )
}

export default LeftMobileMenu
