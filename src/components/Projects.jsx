/*
    fix styling
*/

import React from 'react'
import SignUp from '../assets/projects/SignUp.PNG'
import ManagerHome from '../assets/projects/ManagerHome.PNG'
import SignIn from '../assets/projects/SignIn.PNG'
// import Update from '../assets/projects/Update.PNG'
// import AssociateHome from '../assets/projects/AssociateHome.PNG'
// import Image from '../assets/projects/Image.PNG'

const Projects = () => {

    const projects = [
        {
          id: 1,
          src: SignUp,
          desc: 'Inventory Management System (Full Stack web app made with react, node, mysql)'
        },
        {
          id: 2,
          src: SignIn,
          desc: 'Inventory Management System (Full Stack web app made with react, node, mysql)'
        },
        {
          id: 3,
          src: ManagerHome,
          desc: 'Inventory Management System (Full Stack web app made with react, node, mysql)'
        }
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
            {projects.map(({ id, src, desc }) => (
            <div 
                key={id} 
                className="shadow-md shadow-gray-600 rounded-lg p-2 "
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
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        Demo
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        Code
                    </button>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Projects