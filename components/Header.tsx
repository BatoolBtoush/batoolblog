import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header  className="flex justify-between p-5 mx-auto max-w-7xl">
    <div className='flex items-center space-x-5'>
        <Link href="/">
          <h1 className="font-serif text-4xl cursor-pointer">BatoolBlog</h1>
        </Link>

        <div className="items-center hidden space-x-5 md:inline-flex ">
              <h3 className="rounded-full cursor-pointer hover:bg-gray-200 ">About</h3>
              <h3 className="rounded-full cursor-pointer hover:bg-gray-200">Contact</h3>
          </div>
    </div>
    <div className="flex items-center space-x-5 text-black">
             <h3 className="px-4 py-1 border border-black rounded-full cursor-pointer">Get Started</h3>
    </div>
    
    </header>

    
  )
}

export default Header