'use client'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProjectsHeader() {

    useEffect(() => {
        AOS.init({
          duration: 500,
        });
      }, []);

    return (
        <div className='md:px-12 flex relative lg:mt-10' data-aos="fade-left">
            <div className='flex flex-col gap-5'>
                <h4 className='text-xl md:text-2xl font-semibold text-blue-900 lg:text-6xl'>Projects</h4>
                <p className='w-[70vw] md:w-[50vw] lg:w-[30vw] text-sm md:text-base lg:text-lg'>Forget the ordinary, embrace the extraordinary. My passion for cutting-edge design will forge a brand that stands out from the crowd and sets your imagination ablaze.</p>
            </div>
            <div className='absolute right-0 top-0 md:bottom-0 md:top-auto'>
                <a href='#' className='text-sm lg:pr-12'>View All</a>
            </div>
        </div>
    );
}