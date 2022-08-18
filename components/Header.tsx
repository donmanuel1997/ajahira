import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                
            <div className='relative  text-center border border-gray-800 p-2 lg:p-3'>
                <Image src="/logo.jpg" alt="Vercel Logo" width={250} height={50} />
                </div>
            </div>
            <div className="flex items-center">
                <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                    <a href="Welcome" className="py-2 px-6 flex text-indigo-500 border-b-2 border-indigo-500">
                        Home
                    </a>
                    <a href="Coder" className="py-2 px-6 flex hover:text-indigo-500">
                        THE CODER
                    </a>
                    <a href="About" className="py-2 px-6 flex hover:text-indigo-500">
                        ABOUT
                    </a>
                    <a href="Contact" className="py-2 px-6 flex hover:text-indigo-500">
                        CONTACT
                    </a>
                </nav>
                <button className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header