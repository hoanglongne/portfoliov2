import RootLayout from './layout'
import Navbar from './components/Navbar'
import ScrollDown from '../../public/ScrollDown.svg'
import Image from 'next/image';

export default function Home() {

  return (
    <RootLayout>
      <Navbar />
      <div className=" flex flex-col relative z-0 gap-20 px-5 md:px-8 lg:px-12">
        <div className='relative flex flex-col'>
          <h1 className='text-[16vw] leading-[90%] tracking-[-0.275rem] font-semibold mt-[45px] md:mt-[100px]'>
            Websites& <br />Branding
          </h1>
          <div className='w-full absolute right-0 bottom-0 flex pr-8 md:pr-12 justify-end mt-20'>
            <div className='inline-flex rounded-full bg-gray-100 p-5 md:p-8 flex-row gap-2 items-center'>
              <p className='hidden lg:block'>
                SCROLL DOWN
              </p>
              <Image src={ScrollDown} alt="Scrolldown image" width={15} height={15} />
            </div>
          </div>
        </div>
      
        <div className='flex justify-between gap-[10vw] md:gap-[20vw] lg:gap-[40vw] md:px-12'>
          <div className='flex flex-col justify-center gap-2'>
            <h4 className='text-xl lg:text-2xl'>Contact Me</h4>
            <p className='text-sm lg:text-lg'>ngytrhoanglong61@gmail.com</p>
          </div>
          <p className='text-sm md:text-base lg:text-lg'>
            Enthusiastic Full-Stack Dev | 2+ years building web apps. Always learning, thriving on cutting-edge tech!  Eyeing a pivot to DevOps soon & currently exploring the exciting world of blockchain projects.
          </p>
        </div>

        <div className='md:px-12 flex relative lg:mt-10'>
          <div className='flex flex-col gap-5'>
            <h4 className='text-4xl'>Projects</h4>
            <p className='w-[30vw]'>Forget the ordinary, embrace the extraordinary. My passion for cutting-edge design will forge a brand that stands out from the crowd and sets your imagination ablaze.</p> 
          </div>            
          <div className='absolute right-0 bottom-0'>
            <a href='#' className='text-sm lg:pr-12'>View All</a>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[-50px] md:px-12">
          <div className='w-auto'></div>
          <div className='w-auto'></div>
          <div className='w-auto'></div>
          <div className='w-auto'></div>
        </div>
      </div>
    </RootLayout>
  )
}