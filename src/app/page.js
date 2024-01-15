import RootLayout from './layout'
import Navbar from './components/Navbar'
import ScrollDown from '../../public/ScrollDown.svg'
import Image from 'next/image';

export default function Home() {

  return (
    <RootLayout>
      <Navbar />
      <div className='flex justify-center flex-col md:block'>
        <h1 className='text-[16vw] leading-[90%] tracking-[-0.275rem] font-semibold ml-[20px] mt-[45px] md:mt-[100px] md:ml-[112px]'>
          Websites& <br />Branding
        </h1>
        <div className='w-full flex justify-center mt-8'>
          <div className='inline-flex rounded-full bg-gray-100 p-8 flex-row gap-2 items-center space-y-2'>
          SCROLL DOWN
          <Image src={ScrollDown} alt="Scrolldown image" width={15} height={15} />
          </div>
        </div>
      </div>
    </RootLayout>
  )
}