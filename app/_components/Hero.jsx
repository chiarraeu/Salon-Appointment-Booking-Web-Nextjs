import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt=""
          src="/doctors.jpg"
          width={800}
          height={800}
          className="absolute inset-0 h-full
          rounded-3xl 
          w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-4xl font-bold sm:text-4xl">
<<<<<<< HEAD
            Намери & Резервирай 
            <span className='text-primary'> Посещение </span> 
            за Любимото си 
            <span className='text-primary '> Място</span></h2>
=======
            Find & Book 
            <span className='bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent'> Appointment </span> 
            with your Fav 
            <span className='bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent '> Doctors</span></h2>
>>>>>>> 420c89f7e65cbda6b66c904f87d0deadcaae927c

        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <Button className="mt-10">Explore Now</Button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero