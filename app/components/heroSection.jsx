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

                <button className='button1 flex flex-row items-center justify-center gap-3'>
                <img className='w-4' src="/frame.png" alt="" />
                <p>Video Tour</p>
                </button>

                <button className='button2 flex flex-row items-center justify-center gap-3'>
                    <img className='w-4' src="/vector.png" alt="" />
                    <p>Download</p>
                    </button>
            </div>
        </div>
        {/*image*/}
        <div className='images-container'>
            {/* <Image src="/businessman.png" width="300" height="400" alt="icons-master" className='absolute' /> */}
            <Image src="/masthead-icon.png" width="400" height="400" alt="icons-master" />
        </div>
    </div>
  )
}
