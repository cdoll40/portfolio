import React from 'react'
import heroImage from '../assets/heroImage.PNG'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900'>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    Hi, I'm a Web Developer
                </h2>
                <p className='text-white py-4 max-w-md'>
                    I am a recent computer science graduate with an interest in developing web applications. I have experience working with the front end and back end of web applications. Currently I am most familiar with technologies such as React, Nodejs, and Tailwind.
                </p>
                <div>
                    <Link 
                        to='projects'
                        smooth
                        duration={500}
                        className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-yellow-400"
                    >
                        Projects 
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img 
                    src={heroImage} 
                    alt='hImg'
                    className='rounded-2xl mx-auto w-2/3 md:w-full'
                />
            </div>
        </div>
    </div>
  )
}

export default Home