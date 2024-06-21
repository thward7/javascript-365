import data from '../data/index.json'

const Sections = () => {
  return (
    <div className='sections max-lg:hidden'>
      {data.sections.map((button, index) => (
        <button key={index}>{button}</button>
      ))}
    </div>
  )
}

export default Sections
