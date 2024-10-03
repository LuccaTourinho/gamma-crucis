import React from 'react'
import Houses from './Houses'
import Roads from './Roads'

export default function City() {
  return (
    <div className='flex bg-white h-[70%]'>
      <Houses />
      <Roads />
      <Houses />
      <Roads />
      <Houses />
    </div>
  )
}
