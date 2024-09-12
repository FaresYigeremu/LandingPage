import React from 'react'
import Image from './Hero.jpg'
import Feature from './Hero1.jpg'
import Feature2 from './Hero2.jpg'
import Feature3 from './Hero3.jpg'
function Hero() {
  return (
    <div>
      <img src={Image} alt="Cover Image" className="w-full h-[500px] object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-6xl font-bold text-white">E-commerce</h1>
        <p className="text-2xl text-white">Seamless shopping, delivered.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-black rounded-lg p-6 hover:scale-110 transition-all 
                ease-in-out duration-300 cursor-pointer">
            <img src={Feature} className="w-full h-auto" alt="Feature Image" />
            <h2 className="text-2xl font-bold mt-4 color-black">Easy Product Management</h2>
            <p className="mt-2">Easily add, remove, and manage products in your store with our intuitive interface.</p>
          </div>
          <div className="bg-black rounded-lg p-6 hover:scale-110 transition-all 
                ease-in-out duration-300 cursor-pointer">
            <img src={Feature2} className="w-full h-auto" alt="Feature Image" />
            <h2 className="text-2xl font-bold mt-4 color-black">Fast Checkout</h2>
            <p className="mt-2">Our checkout process is designed to be fast and easy, so your customers can complete their purchase quickly and easily.</p>
          </div>
          <div className="bg-black rounded-lg p-6 hover:scale-110 transition-all 
                ease-in-out duration-300 cursor-pointer">
            <img src={Feature3} className="w-full h-auto" alt="Feature Image" />
            <h2 className="text-2xl font-bold mt-4 color-black">Reliable Payment Integration</h2>
            <p className="mt-2">We integrate with popular payment providers, Stripe to make sure your customers can make payments quickly and efficiently.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero