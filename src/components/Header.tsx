import LeftMenu from './LeftMenu'
import LeftMobileMenu from './LeftMobileMenu'
import Logo from './Logo'
import RightMenu from './RightMenu'
import RightMobileMenu from './RightMobileMenu'

const Header = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between border-b border-orange-accent'>
        <div className='flex gap-3'>
          <Logo />
          <LeftMenu />
        </div>
        <RightMenu />
        <RightMobileMenu />
      </div>
      <LeftMobileMenu />
    </div>
  )
}

export default Header
