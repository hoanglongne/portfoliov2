import RootLayout from './layout'
import Navbar from './components/Navbar'
import ScrollDown from '../../public/ScrollDown.svg'
import Image from 'next/image';

export default function Home() {

  return (
    <RootLayout>
      <Navbar />
      <div className='relative flex flex-col md:block'>
        <h1 className='text-[16vw] leading-[90%] tracking-[-0.275rem] font-semibold ml-[20px] mt-[45px] md:mt-[100px] md:ml-[60px] lg:ml-[112px]'>
          Websites& <br />Branding
        </h1>
        <div className='w-full absolute right-0 bottom-0 flex justify-end mt-8'>
          <div className='inline-flex rounded-full bg-gray-100 p-5 md:p-8 pr-15 flex-row gap-2 items-center'>
            <p className='hidden md:block'>
              SCROLL DOWN
            </p>
              <Image src={ScrollDown} alt="Scrolldown image" width={15} height={15} />
          </div>
        </div>
      </div>
    </RootLayout>
  )
}