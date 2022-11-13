'use client';

import Link from "next/link";
import React from "react";
import { MdWindow } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import { IoLogoGoogle } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import {v4} from "uuid";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth"
const Sidebar = () => {
  const Login = async () => {
    await signInWithPopup(auth, provider);
  }
  const Logout = async () => {
    await signOut(auth);
  }
  let categories = ['Electronics', 'Home and Garden', 'Fashion', 'Beauty Products', 'Automotive', 'Books', 'Games', 'Watch']
 const [user, loading] = useAuthState(auth);

  return (
    <div className="w-[500px] h-[80vh] bg-white border shadow-sm rounded-xl py-5 relative xl:block hidden">
      <div className="flex items-center space-x-10">
        <div className="w-1 h-10 bg-[#ff9900]"></div>
        <div className="flex items-center space-x-3">
          <span className="text-3xl">
            <MdWindow />
          </span>
          <span className="uppercase text-2xl tracking-widest font-light">
            categories
          </span>
        </div>
      </div>
      <div className="px-[88px] py-4">
        {
          categories.map((category)=> (
            <Link href={`/category/${category.toLocaleLowerCase()}`} key={v4()}>
              <button className="text-xl hover:text-[#ff9900] block py-2">{category}</button>
            </Link>
          ))
        }
      </div>
      <div className="px-10">
        <Link href={"/orders"}>
          <button className="flex items-center text-2xl space-x-2 uppercase font-light hover:bg-[#ff990062] w-full py-3 px-5 rounded-xl">
            <span className="text-3xl"><RiBillFill /></span>
            <span>Orders</span>
          </button>
        </Link>
      </div>
      <div className="absolute w-full mx-auto bottom-10">
        {
          user ? <button className="flex items-center w-[85%] mx-auto space-x-2 text-xl uppercase text-white bg-black rounded-md justify-center py-2 px-4" onClick={Logout}>
          <span><FiLogOut /></span>
          <span>logout</span>
        </button>
        : <button className="flex items-center w-[85%] mx-auto space-x-2 text-xl uppercase text-white bg-black rounded-md justify-center py-2 px-4" onClick={Login}>
        <span><IoLogoGoogle /></span>
        <span>login with google</span>
      </button>
        }
      </div>
    </div>
  );
};

export default Sidebar;
