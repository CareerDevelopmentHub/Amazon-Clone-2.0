import React from 'react'
import LoaderCards from '../components/LoaderCards'

const Loading = () => {
  return (
    <div className="w-full p-5 flex flex-wrap justify-center items-center">
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
    </div>
  )
}

export default Loading