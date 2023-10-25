"use client"
import React, { useState } from 'react'
import { logIn } from "@/redux/features/auth-slice"
import { useAppDispatch, useAppSelector } from '@/redux/store'
import Link from 'next/link'

function Login() {
  const [username, setUsername] = useState<string>("")
  const dispatch = useAppDispatch()
  const name = useAppSelector(state => state.authReducer.value.username)

  const handleLogin = () => {
    dispatch(logIn(username))
  }

  return (  
    <div className="w-full h-screen flex items-center justify-center">
        <div className="container rounded-lg grid justify-center max-w-lg h-auto py-4 shadow-lg border border-neutral-300/50 gap-3">
            <h2 className='text-center font-bold text-2xl'>Login</h2>
            <input onChange={(e) => setUsername(e.target.value)} className='border border-neutral-300/50 px-4 py-2 rounded-lg' type="text" placeholder='Username' />
            <input className='border border-neutral-300/50 px-4 py-2 rounded-lg' type="text" placeholder='Password' />
            <Link href={"/"}>
              <button onClick={handleLogin} className='w-full border border-neutral-400/50 rounded-full py-1.5 hover:bg-neutral-400 hover:text-neutral-100 transition-all duration-200'>Login</button>
            </Link>
        </div>
    </div>
  ) 
}

export default Login    