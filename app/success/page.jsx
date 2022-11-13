"use client";

import React from 'react'
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';
import { collection, deleteDoc, doc} from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

const Page = () => {
  const [user, loading] = useAuthState(auth);
  const cartsRef = collection(db, "cart");
  const [cartSnapshots, loading2] = useCollection(cartsRef);

  for (let i = 0; i < cartSnapshots?.docs?.filter((data) => data?.data()?.uid === user?.uid)?.length; i++) {
    const item = cartSnapshots?.docs?.filter((data) => data?.data()?.uid === user?.uid)?.[i];
    const id = item?.id;
    deleteDoc(doc(db, "cart", id));
  }
  return (
    <div className="w-full flex items-center justify-center h-[70vh] overflow-hidden flex-col">
        <div>
            <h1 className="text-3xl font-bold">✅ Congratulations! Your Order Was Successful.</h1>
        </div>
        <Image src={"/gifs/success.gif"} alt="success image" width={500} height={500} priority={true} />
    </div>
  )
}

export default Page