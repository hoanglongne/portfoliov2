import React from 'react'
import exp from '../../../public/exp'

function Exp() {
    return (
        <div className='w-auto flex flex-col'>
            {/* Header */}
            <div className='mb-10 m-auto text-6xl font-semibold text-pink-800'>
                <h1>My Work Experience</h1>
            </div>
            {/* body */}
            <div className='body flex flex-col relative w-auto gap-6'>
                {/* absolute svg */}
                <div className='absolute md:top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <svg className='w-10 h-80' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" />
                </div>
                {exp.map((e, index) => (
                    <div className='flex flex-col md:flex-row justify-between md:px-12 md:gap-56'>
                        <div className='flex flex-col flex-1'> 
                            <h3 className='font-semibold text-xl lg:text-2xl'>
                                {e.company}
                            </h3>
                            <p className='text-base lg:text-lg'>
                                {e.date}
                            </p>
                        </div>
                        <div className='flex flex-col gap-3 flex-1'>
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