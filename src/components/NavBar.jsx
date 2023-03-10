import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1, 
            name: 'home'
        },
        {
            id: 2, 
            name: 'about'
        },
        {
            id: 3, 
            name: 'projects'
        },
        {
            id: 4, 
            name: 'experience'
        },
        {
            id: 5, 
            name: 'contact'
        }
    ]

  return (
    <div className="flex justify-between items-center w-full h-20 text-yellow-300 fixed bg-black px-4">
        <div>
            <h1 className="text-5xl font-signature ml-2">Cody Doll</h1>                                              {/* find different font */}
        </div>

        <ul className="hidden md:flex">
            {links.map((link) => (
                <li key={link.id} className="px-4 cursor-pointer capitalize font-medium text-yellow-200 hover:scale-105 duration-200">
                    <Link to={link.name} smooth duration={500}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-indigo-900 to-purple-800 text-yellow-200'> 
            {links.map((link) => (
                <li key={link.id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                    <Link onClick={() => setNav(!nav)} to={link.name} smooth duration={500}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
        )}
    </div>
  )
}

export default NavBar