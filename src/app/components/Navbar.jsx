'use client'
import { useState, useEffect } from 'react';
import { Antonio } from 'next/font/google'
import NavLink from './NavLinks';
import '../globals.css'
const antonio = Antonio({ weight: ['400'], subsets: ['latin'] })

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isOutOfHero, setIsOutOfHero] = useState(false);
    const heroHeight = 600; // Adjust this value based on your hero section's height

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;
            const outOfHero = currentScrollPos > heroHeight;

            setPrevScrollPos(currentScrollPos);
            setIsVisible(visible);
            setIsOutOfHero(outOfHero);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={`flex flex-col items-center justify-center ${isVisible && isOutOfHero ? 'active' : ''}`}>
            <div className='flex justify-between md:justify-center pl-5 w-full md:pl-0'>
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
            <div className={`bg-black w-full md:w-auto relative md:rounded-full md:top-24 px-[0.3rem] py-[0.65rem] flex flex-col md:fixed z-20 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">Project</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar