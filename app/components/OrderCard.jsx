import Image from 'next/image'
import React from 'react'
import { v4 } from 'uuid'

const OrderCard = ({order}) => {
    const date = new Date(order?.data()?.createdAt?.seconds * 1000).toDateString();
  return (
    <div className="w-full p-5 bg-white border shadow rounded-xl space-y-5">
        <div className="w-full flex items-center justify-between">
            <div>
                <p className="uppercase font-semibold">Order Id</p>
                <p className="font-light">#{order?.id}</p>
            </div>
            <div>
                <p className="uppercase font-semibold">Placed On</p>
                <p className="font-light">{date}</p>
            </div>
        </div>
        <div className="flex items-center space-x-5 flex-wrap w-full">
            {
                JSON.parse(order?.data()?.images)?.map((image) =>{
                    return(
                        <Image key={v4()} src={image} alt="" width={130} height={130} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default OrderCard