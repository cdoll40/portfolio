/*
    fix styling
*/

import React from 'react'
import { Link } from 'react-router-dom';
import ManagerHome from '../assets/projects/ManagerHome.PNG'
import Jesco from '../assets/projects/Jesco.png'
import Portfolio from '../assets/projects/Portfolio.PNG'


const Projects = () => {

    const projects = [
        {
            id: 1,
            src: ManagerHome,
            desc: 'Inventory Management System (Full Stack web app made with react, node, mysql)',
            link: 'https://github.com/cdoll40/Inventory-Management-System'
        },
        {
            id: 2,
            src: Jesco,
            desc: 'Commercial flooring showcase site (MERN stack web app, styled using MaterialUI)',
            link: 'https://github.com/cdoll40/Jesco'
        },
        {
            id: 3,
            src: Portfolio,
            desc: 'Personal portfolio (Front End web app made with react and styled with tailwind)',
            link: 'https://github.com/cdoll40/portfolio'
        },
    ];

  return (
    <div
        name="projects"
        className="bg-gradient-to-b from-black via-gray-900 to-purple-900 w-full text-white md:h-screen"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-300">
            Projects
            </p>
            <p className="py-6">Check out some of my previous and current projects.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src, desc, link }) => (
            <div 
                key={id} 
                className="shadow-md shadow-yellow-300 rounded-lg p-2 "
            >
                <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                />
                <p
                    className='pt-2'
                >
                    {desc}
                </p>
                <div className="flex items-center justify-center">
                    <Link to={link} target="_blank" rel="noopener noreferrer">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Code
                        </button>
                    </Link>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Projects