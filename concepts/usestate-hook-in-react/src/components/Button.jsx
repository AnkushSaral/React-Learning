import React from 'react'

export function Button({text, onClick}) {
  return (
    <div className='bg-green-700 w-50 h-10 flex items-center justify-center text-white rounded-full cursor-pointer mt-4' onClick={onClick}>
      {text}
    </div>
  )
}



export function ChangeBgColorButton({text, setBgColor, currentBgColor}) {
  return (
    <div  className={`${currentBgColor} text-black outline-1 w-50 h-10 flex items-center justify-center rounded-full cursor-pointer mt-4`} onClick={setBgColor}>
      {text}
    </div>
  )
}

 