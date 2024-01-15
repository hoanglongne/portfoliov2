'use client'

import { useState, useEffect } from 'react';
import { Antonio } from 'next/font/google'
const antonio = Antonio({ weight: ['400'], subsets: ['latin'] })

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-between pb-3 md:pb-0 md:justify-center w-full ml-10'>
                <div className={antonio.className}>
                    <h3 className='text-[36px] md:mt-4 text-gray-800'>HLong</h3>
                </div>
                <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline  mr-10" onClick={() => setIsOpen(!isOpen)}>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        {isOpen && <path fillRule="evenodd" d="M4 9h12V11H4V9ZM4 5h12V7H4V5ZM4 13h12V15H4V13Z" clipRule="evenodd" />}
                        {!isOpen && <path fillRule="evenodd" d="M3 5h14V7H3V5ZM3 11h14V13H3V11ZM3 17h14V19H3V17Z" clipRule="evenodd" />}
                    </svg>
                </button>
            </div>
            <div className={`bg-black w-full md:w-auto relative md:rounded-full md:top-24 px-[0.3rem] py-[0.65rem] flex flex-col md:fixed ${isOpen ? 'block' : 'hidden'} md:block`}>
                <a href="#" className="nav-link text-gray-300 px-3 py-2 rounded-full bg-black active:bg-white active:text-black hover:bg-white hover:text-black">Home</a>
                <a href="#" className="nav-link text-gray-300 px-3 py-2 rounded-full bg-black active:bg-white active:text-black hover:bg-white hover:text-black">Project</a>
                <a href="#" className="nav-link text-gray-300 px-3 py-2 rounded-full bg-black active:bg-white active:text-black hover:bg-white hover:text-black">About</a>
                <a href="#" className="nav-link text-gray-300 px-3 py-2 rounded-full bg-black active:bg-white active:text-black hover:bg-white hover:text-black">Contact</a>
            </div>
        </div>
    )
}

export default Navbar