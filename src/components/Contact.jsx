import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-neutral-900 via-gray-900 to-purple-900 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-300'>
                    Contact
                </p>
                <p className='py-6'>Complete the form below to contact me directly.</p>
            </div>

            <div className='flex justify-center items-center'>
                <form 
                    action=''
                    className='flex flex-col w-full md:w-3/4'
                >
                    <input 
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input 
                        type="text"
                        name='email'
                        placeholder='Enter your email'
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea 
                        name='message' 
                        rows='10' 
                        placeholder='Enter your message'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <button className='text-black bg-yellow-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact