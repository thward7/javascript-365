import LogoAuthor from '../assets/logo-author.png'

const Footer = () => {
  return (
    <div className='mx-auto flex w-3/5 flex-col items-center gap-y-6 p-3 text-[12px]'>
      <div className='text-center'>
        By visiting this site, you confirm that you have no claims against the
        author for this performance. All videos on the site are staged, all
        videos are taken from open Internet sources.
      </div>
      <div className='text-orange flex justify-center text-center max-lg:flex-col max-lg:gap-2 lg:gap-4'>
        <p>Outsidë</p>
        <p>Rëal six</p>
        <p>Nvr again</p>
        <p>Luh gëek</p>
        <p>Rackz got më</p>
        <p>Doublë</p>
        <p>On tha linë</p>
      </div>
      <img className='w-44' src={LogoAuthor} />
    </div>
  )
}

export default Footer
