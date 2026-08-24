import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <header className='m-3'>
      <nav className="flex justify-between">
        <span className='text-700'>CAMEWEGO</span>
        <div className='flex gap-5'>
          <Link className="cursor-pointer" href="/dashboard">
            <span>Dashboard</span>
          </Link>
          <Link href="/inventory">
            <span>Inventory</span>
          </Link>
          <Link href="/orders">
            <span>Orders</span>
          </Link>
          <Link href="/settings">
            <span>Settings</span>
          </Link>
        </div>
        <div className='flex'>
          <img src="./notifications.svg" alt="notifications"/>
          <img src="./help.svg" alt="help"/>
          <img src="./account-circle.svg" alt="profile_pic"/>
        </div>
      </nav>
      </header>
    </>
  )
}

export default Navbar