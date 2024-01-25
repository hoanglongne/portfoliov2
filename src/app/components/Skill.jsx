import React from 'react'

function Skill({skill}) {
  return (
    <div className='bg-gray-200 text-sm md:text-base p-2 md:p-3 rounded-full'>
        {skill}
    </div>
  )
}

export default Skill