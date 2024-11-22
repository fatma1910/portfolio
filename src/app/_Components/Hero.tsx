"use client"

import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';


    

const Hero = () => {
  return (
    <section className='container mx-auto '>
        <div className='flex flex-col sm:justify-between sm:flex-row  gap-16 sm:gap-7  '>
            <div className='col-span-7 place-self-center sm:text-left text-center flex-1'>
                <h1 className='text-white text-3xl   lg:text-6xl font-extrabold mb-4 '><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">Hello, I'm </span> 
                <TypeAnimation
                sequence={[

                    'Fatma Saleh',
                    1000, 
                    "Frontend developer",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                
                repeat={Infinity}
                /> </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>is a skilled front-end developer specializing in Next.js, React, Typescript , and Tailwind CSS.</p>
                <div className="place-self-center sm:place-self-start">
                    <a href='Fatma-Saleh.pdf' download >
                    <button className="w-full sm:w-fit  px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white  ">Download CV</button>
                    </a>
                    
                </div>
            </div>
            

                <div className="place-self-center " >
                    <Image src='/hero.jpeg' alt="my photo" width={300} height={300}
                    className="rounded-full "
                    />
                </div>

        </div>
        
        
    </section>
  )
}

export default Hero