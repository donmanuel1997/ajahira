import Image from 'next/image'
import Script from 'next/script'
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Welcome = () => {
    
  return (
    <main className="dark:bg-gray-800 bg-white relative ">
       <Script 
        id="Adsense-id" data-ad-client="ca-pub-6226686827399321"
        async={true} strategy="afterInteractive"
        onError={ (e) => { console.error('Script failed to load', e) }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
     crossOrigin="anonymous" />
    <Header />
    <div className="bg-white flex relative z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
            <div className="flex flex-col">
                
            <div className='lg:flex justify-between items-center'>
                
                <div className='p-1 lg:p-3 pb-10 lg:pb-1'>
                <h1 className="font-light w-full  text-center text-4xl sm:text-5xl  text-gray-800">
                    AJAHIRA MYSTERIES
                </h1>
                <p className=' text-center text-gray-800'>ABULAH | BASATA | USIBAL | LABISU | ALUBAH</p>
                   
                <h2 className="font-light max-w-2xl mx-auto w-full text-xl  text-gray-500 text-center py-8">
                   In the beginning was nothing, but the principle of energy says it cannot be created nor destroyed, but be converter from one form to the other through a means which is a mystery.<br></br>
                   <br></br>
                   In the beginning was darkness, but his spirits surmoned him and he created a great light,  up until this day the greatest mysteries lives in the darkness.
                </h2>
                <h3 className='font-light max-w-2xl mx-auto w-full text-xl  text-gray-500 text-center py-1'>
                    Do you will to know what is to come? 
                </h3>
                <div className="flex items-center justify-center mt-4">
                    <a href="#" className="uppercase py-2 px-4 border border-gray-800 text-gray-900   hover:text-white text-md mr-4 hover:bg-gray-900">
                        Get started
                    </a>
                </div>
                </div>
                <div className='relative  text-center border border-gray-800 p-2 lg:p-3'>
                <Image src="/malim.jpeg" alt="Vercel Logo" width={350} height={500} />
                </div>
                
            </div>

            </div>
        </div>
    </div>
    <Footer />
</main>
  )
}

export default Welcome