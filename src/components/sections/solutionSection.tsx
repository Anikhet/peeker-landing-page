
import React from 'react'

const SolutionSection = () => {
  return (
    <div className='min-h-[600px] lg:min-h-[800px] flex flex-col justify-center items-center py-12 lg:py-20 px-4 lg:px-0'>
     <div className="flex flex-col justify-center opacity-40 text-white font-['Inter:Medium',_sans-serif] font-medium leading-[1.2] lg:leading-[0] text-[32px] sm:text-[40px] md:text-[50px] lg:text-[70px] text-center tracking-[-2px] sm:tracking-[-2.5px] md:tracking-[-3px] lg:tracking-[-4px] mb-6 lg:mb-8 px-2 lg:px-0">
        <p className="leading-[1.2] lg:leading-[normal] text-nowrap whitespace-pre">Struggle with Spam No Longer</p>
      </div>
      <div className="text-center px-2 lg:px-0"
           style={{ 
             fontFamily: 'Inter',
             fontStyle: 'normal',
             fontWeight: '500',
             fontSize: 'clamp(32px, 8vw, 70px)',
             lineHeight: '1.2',
             letterSpacing: '-0.05em',
             background: 'linear-gradient(177.56deg, #FFBF7E 27.53%, #FFA041 54.43%, #FFBF7E 85.38%, #FFFFFF 118.96%)',
             WebkitBackgroundClip: 'text',
             WebkitTextFillColor: 'transparent',
             backgroundClip: 'text'
           }}>
           <p className="leading-[1.2] lg:leading-[normal]"> Introducing Self Healing Inboxes</p>
      </div>
    </div>
  )
}

export default SolutionSection