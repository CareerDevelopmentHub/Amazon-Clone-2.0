// "use client";

import { async } from '@firebase/util';
import Image from 'next/image'
import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase';

const CartCard = ({image, name, description, price, id}) => {
    const deleteItem = async () => {
        await deleteDoc(doc(db, "cart", id));
    }
  return (
    <div className="w-full p-5 border shadow-sm mb-5 rounded-xl flex space-x-5 overflow-hidden relative">
        <button className="absolute right-5 top-3 text-red-500 text-2xl" onClick={deleteItem}><AiFillDelete /></button>
        <div>
            <Image src={image} alt="" width={150} height={150} priority={true} />
        </div>
        <div className="space-y-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <h2 className="text-sm">{description.slice(0, 220)}...</h2>
            <h2 className="text-xl font-semibold">&#8377;{price}</h2>
        </div>
    </div>
  )
}

export default CartCard