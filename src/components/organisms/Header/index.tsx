'use client'
import React from "react";
import { If } from "@/components/atoms";
import { Cart } from "@/components/molecules";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { logIn } from "@/redux/features/auth-slice";

export function Header(){
    const [isCartOpen, setIsCartOpen] = useState(false);
    const dispatch = useAppDispatch()
    const username = useAppSelector(state => state.authReducer.value.username)

  const handleLogin = () => {
    dispatch(logIn("Alexander"))
  }
    return (
        <header className="w-full z-10 fixed top-0 text-neutral-200 bg-slate-700 flex items-center justify-between p-4">
            <Link href={"/"}>
                <h1 className="hover:text-neutral-400 duration-200 cursor-pointer font-bold text-2xl">Redux Shopping</h1>
            </Link>
            <div className="actions text-lg flex items-center gap-4">
                <If condition={username}>
                    <p className="hover:text-neutral-400 duration-200 cursor-pointer">{username}</p>
                </If>
                <If condition={!username}>
                    <p onClick={handleLogin} className="hover:text-neutral-400 duration-200 cursor-pointer">Login</p>
                </If>
                <ShoppingCartIcon onClick={() => setIsCartOpen(!isCartOpen)} className="hover:text-neutral-400 duration-200 cursor-pointer" width={25}/>
            </div>
            <If condition={isCartOpen}>
                <Cart setIsCartOpen={setIsCartOpen}/>
            </If>
        </header>
    )
}