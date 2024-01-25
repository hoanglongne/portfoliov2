import React from 'react'

function SkillWrap({children}) {
  return (
    <div className='pl-5 mt-auto flex flex-row gap-2 md:gap-3 flex-wrap'>
        {children} 
    </div>
  )
}

export default SkillWrap