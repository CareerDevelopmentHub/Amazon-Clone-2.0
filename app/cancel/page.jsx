import React from 'react'
import Image from 'next/image';

const Page = () => {
  return (
    <div className="w-full flex items-center justify-center h-[70vh] overflow-hidden flex-col">
        <div>
            <h1 className="text-3xl font-bold">❌ Opps! Something Went Wrong.</h1>
        </div>
        <Image src={"/gifs/cancel.gif"} alt="success image" width={500} height={500} priority={true} />
    </div>
  )
}

export default Page