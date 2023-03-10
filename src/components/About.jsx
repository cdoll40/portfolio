import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-purple-900 via-gray-900 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-300'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                I recently graduated from the University of Southern Mississippi with a Bachelor of Science in Computer Science. Most of my course work while in school was taught using high level programming languages such as C, C++, C#, and Python so I am competent with these languages. Also through my course work I taught data structures and database managment which has proved to be useful in web development.
            </p>
            <br />
            <p className='text-xl'>
                I enjoy learning and using new technologies for software development and I have a particular interest in web development. For my senior project my group was tasked with creating an inventory managment system, and our solution for this task was a web application. I've been hooked on web development since. 
            </p>
        </div>
    </div>
  )
}

export default About