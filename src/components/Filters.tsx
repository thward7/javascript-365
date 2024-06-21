import { useState } from 'react'
import DropdownList from './DropdownList'

const Filters = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className='flex items-center justify-between p-2 max-sm:flex-col max-sm:gap-y-2'>
      <div className='text-lg max-sm:hidden'>Tutorials</div>
      <div className='flex gap-3'>
        <button className='gray-box text-orange hover:underline'>New</button>
        <div
          className='dropdown'
          onMouseOut={() => setShowDropdown(false)}
          onMouseOver={() => setShowDropdown(true)}
        >
          <button className='gray-box'>Top rate</button>
          {showDropdown && <DropdownList />}
        </div>
        <div
          className='dropdown'
          onMouseOut={() => setShowDropdown(false)}
          onMouseOver={() => setShowDropdown(true)}
        >
          <button className='gray-box'>Top views</button>
          {showDropdown && <DropdownList />}
        </div>
      </div>
    </div>
  )
}

export default Filters
