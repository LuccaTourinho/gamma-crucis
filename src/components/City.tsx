import React from 'react'
import Houses from './Houses'
import Roads from './Roads'
// Estou aqui de novo
//Bom dia
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
