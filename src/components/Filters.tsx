const Filters = () => {
  return (
    <div className='flex items-center justify-between p-2 max-sm:flex-col max-sm:gap-y-2'>
      <div className='text-lg'>Tutorials</div>
      <div className='flex gap-3'>
        <button className='gray-box hover:underline'>New</button>
        <button className='gray-box hover:underline'>Top rate</button>
        <button className='gray-box hover:underline'>Top views</button>
      </div>
    </div>
  )
}

export default Filters
