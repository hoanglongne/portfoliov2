import { Antonio } from 'next/font/google'
import RootLayout from './layout'
const antonio = Antonio({ weight: ['400'], subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
      <div className='flex justify-center w-full'>
        <div className={antonio.className}>
          <h3 className='text-[36px] mt-4 text-gray-800'>HLong</h3>
        </div>
          <div className="bg-black rounded-full top-24 px-[0.3rem] py-[0.65rem] fixed">
          <a href="#" className="nav-link text-gray-300 px-3 py-2 rounded-full bg-black active:bg-white active:text-black hover:bg-white hover:text-black">Home</a>
          <a href="#" className="nav-link text-gray-300 px-3 py-2 rounded-full bg-black active:bg-white active:text-black hover:bg-white hover:text-black">Project</a>
          <a href="#" className="nav-link text-gray-300 px-3 py-2 rounded-full bg-black active:bg-white active:text-black hover:bg-white hover:text-black">About</a>
          <a href="#" className="nav-link text-gray-300 px-3 py-2 rounded-full bg-black active:bg-white active:text-black hover:bg-white hover:text-black">Contact</a>
        </div>
      </div>
      <h1 className='text-[220px] leading-[90%] tracking-[-0.275rem] font-semibold mt-[100px] ml-20'>
        Websites& <br />Branding
      </h1>
    </RootLayout>
  )
}