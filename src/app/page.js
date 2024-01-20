import RootLayout from './layout'
import Navbar from './components/Navbar'
import ScrollDown from '../../public/ScrollDown.svg'
import Image from 'next/image';

export default function Home() {

  return (
    <RootLayout>
      <Navbar />
      <container className="px-5 md:px-8 lg:px-12">
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
        <div className='flex justify-between gap-10'>
          <div className='flex flex-col justify-between'>
            <h5>Contact me</h5>
            <p>ngytrhoanglong61@gmail.com</p>
          </div>
          <p>
            Enthusiastic Full-Stack Dev | 2+ years building web apps. Always learning, thriving on cutting-edge tech!  Eyeing a pivot to DevOps soon & currently exploring the exciting world of blockchain projects.
          </p>
        </div>
      </container>
    </RootLayout>
  )
}