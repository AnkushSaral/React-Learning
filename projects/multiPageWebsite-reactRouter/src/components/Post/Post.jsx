import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const {postname} = useParams();
    
  return (
    <div className='bg-gray-600 text-3xl text-white text-center p-4'> {postname} </div>
  )
}

export default Post