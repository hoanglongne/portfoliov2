import React from 'react'
import exp from '../../../public/exp'
import Image from 'next/image'
function Exp() {
    return (
        <div className='w-auto flex flex-col mb-20'>
            {/* Header */}
            <div className='mb-10 md:mb-20 m-auto text-6xl font-semibold text-pink-800'>
                <h1>My Work Experience</h1>
            </div>
            {/* body */}
            <div className='body flex flex-col relative w-auto gap-[46px]'>
                {/* absolute svg */}
                <div className='absolute top-1/2 left-4 md:top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <Image src='/ExpSVG.svg' width={40} height={40} layout='responsive' />
                </div>
                {exp.map((e, index) => (
                    <div key={index} className='flex flex-col pl-14 md:pl-0 md:flex-row justify-between md:px-12 md:gap-56'>
                        <div className='flex flex-col md:pl-24 flex-1'> 
                            <h3 className='font-semibold text-xl lg:text-2xl'>
                                {e.company}
                            </h3>
                            <p className='text-base lg:text-lg'>
                                {e.date}
                            </p>
                        </div>
                        <div className='flex flex-col gap-3 md:gap-0 flex-1'>
                            <h3 className='md:font-semibold text-base lg:text-2xl'>
                                {e.role}
                            </h3>
                            <p className='text-base lg:text-lg'>
                                {e.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Exp