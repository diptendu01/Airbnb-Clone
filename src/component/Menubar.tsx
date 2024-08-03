import React from 'react'
import house from '../images/house.png'
import camping from '../images/camping.png'
import cabin from '../images/cabin.png'
import farm from '../images/farm.png'
import container from '../images/container.png'
import skiing from '../images/skiing.png'
import mansions from '../images/mansions.png'
import swimmingPools from '../images/swimming-pool.png'



const Menubar = () => {
  return (
    <div className='flex pt-8'>
      <div className='ml-11 cursor-pointer'>
        <img src={house} className='w-7 h-7' />
        <h1 className = 'text-xs font-semibold hover:underline'>House</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={camping} className='w-7 h-7' />
        <h1 className = 'text-xs font-semibold hover:underline'>Camping</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={cabin} className='w-7 h-7' />
        <h1 className = 'text-xs font-semibold hover:underline'>Cabin</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={farm} className='w-7 h-7' />
        <h1 className = 'text-xs font-semibold hover:underline'>farm</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={container} className='w-7 h-7' />
        <h1 className = 'text-xs font-semibold hover:underline'>Container</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={skiing} className='w-7 h-7' />
        <h1 className = 'text-xs font-semibold hover:underline'>Skiing</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={mansions} className='w-7 h-7' />
        <h1 className = 'text-xs font-semibold hover:underline'>Mansions</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={swimmingPools} className= 'w-7 h-7' />
        <h1 className = 'text-xs font-semibold hover:underline'>Swimming Pools</h1>
      </div>
    </div>
  )
}

export default Menubar