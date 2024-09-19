import bg from '../assets/hotelLogo/HawaMahall.png'
const Hero = () => {
  return (
    <div className=" -mt-2">
      <div className="bg-[#5F3900] pb-16">
        <div className="container mx-auto flex flex-col gap-2 ">
            <h1 className="text-4xl text-[#FF9900] font-bold fontu ">Find your Oasis !</h1>
            <p className="text-2xl text-[#FF9900] ">Search low prices on hotels for your dream <br/>vacation...</p>
            <img className='absolute right-56 hidden lg:block ' src={bg}/>

        </div>

      </div>
    </div>
  )
}

export default Hero
