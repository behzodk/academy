import React from 'react'
import { StarIcon } from "@heroicons/react/solid"
import img1 from '../img/img-1.jpg'
import { Link } from 'react-router-dom'

function Course({ item }) {
  return (
    <div className='flex flex-col items-start space-y-[1px]'>
        <img src={img1} alt="girl" className='h-32 w-full'/>
        <Link to='/blog' className='font-bold text-md pt-1'>{item.title}</Link>
        <h2 className='text-xs text-gray-700'>{item.username}</h2>
        <div className='flex space-x-1'>
            <h3 className='text-orange-800 font-bold text-sm'>{item.vote}</h3>
            <div className='flex items-center'>
                <StarIcon className='w-4 text-orange-400'/>
                <StarIcon className='w-4 text-orange-400'/>
                <StarIcon className='w-4 text-orange-400'/>
                <StarIcon className='w-4 text-orange-400'/>
                <StarIcon className='w-4 text-orange-400'/>
            </div>
            <h3 className='text-xs'>{item.students}</h3>
        </div> 
        <div className='flex space-x-4 items-start'>
            <h3 className='text-black font-bold'>{item.price}</h3>
            <h3 className='text-gray-800 text-sm line-through'>{item.oldPrice}</h3>
        </div>
    </div>
  )
}

export default Course