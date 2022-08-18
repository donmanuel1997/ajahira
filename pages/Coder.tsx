import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Coder = () => {
  return (
    <main className="dark:bg-gray-800 bg-white relative ">
    <Header />
    <div className="bg-white flex relative z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
            <div className="flex flex-col">
                
            <div className='lg:flex justify-between items-center'>
                
                <div className='p-1 lg:p-3 pb-10 lg:pb-1'>
                <h1 className="font-light w-full  text-center text-4xl sm:text-5xl  text-gray-800">
                    THE CODER
                </h1>
                   
                <h2 className="font-light max-w-2xl mx-auto w-full text-xl  text-gray-500 text-center py-8">
                   If the world could live and survive under the influence of technology, the new age interference of computer,
                   accompanied by great intelligent humans.<br></br><br></br> One of, Son of a Prophet, Born Adelakun Emmanuel. 
                   
                   a decendant of Orunmila, from the Land of Oduduwa, a Full Stack Developer and a Spiritualist. 
                   <br></br>
                   
                </h2>
                <h3 className='font-light max-w-2xl mx-auto w-full text-xl  text-gray-500 text-center py-1'>
                   I love business meetings. Get in touch:
                </h3>
                <div className="flex items-center justify-center mt-4">
                    <a href="#" className="uppercase py-2 px-4 border border-gray-800 text-gray-900   hover:text-white text-md mr-4 hover:bg-gray-900">
                        primeumatonltd@gmail.com
                    </a>
                </div>
                </div>
                <div className='relative  text-center border border-gray-800 p-2 lg:p-3'>
                <Image src="/coder.jpg" alt="Vercel Logo" width={250} height={500} />
                </div>
                
            </div>

            </div>
        </div>
    </div>
    <Footer />
</main>
  )
}

export default Coder