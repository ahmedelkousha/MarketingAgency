import './styles/herosection.css'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="hero-container">
        {/*Hero Box*/}
        <div className='hero-box'>
            <h2 className='heading-hero-box'>Start Building Amazing Marketing Product</h2>
            <p className='paragraph-hero-box'>Build complete awesome marketing website with amazing landing-page template</p>
            <div className='buttons-box-hero-box flex flex-row gap-4 mt-6'>

                <button className='button1 flex flex-row items-center rounded-full bg-orange-600 w-40 h-12 text-white justify-center gap-3 transition-transform duration-300 transform hover:scale-105 cursor-pointer text-lg'>
                <img className='w-4' src="/Frame.png" alt="" />
                <p>Video Tour</p>
                </button>

                <button className='button2 flex flex-row items-center rounded-full bg-blue-600 w-40 h-12 text-white justify-center gap-3 transition-transform duration-300 transform hover:scale-105 cursor-pointer text-lg'>
                    <img className='w-4' src="/Vector.png" alt="" />
                    <p>Download</p>
                    </button>
            </div>
        </div>
        {/*image*/}
        <div className='images-container flex justify-center'>
            <div className='icons-master mb-60 pl-2 pr-2'>
            {/* <Image src="/businessman.png" width="300" height="400" alt="icons-master" className='absolute' /> */}
            <Image src="/masthead-icon.png" width="380" height="400" alt="icons-master" />
            </div>
        </div>
    </div>
  )
}
