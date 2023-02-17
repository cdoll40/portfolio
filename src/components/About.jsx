import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde saepe distinctio excepturi. Consequuntur obcaecati dignissimos ab id, mollitia aliquam aperiam iste sint ducimus tempore atque nostrum, facere ad, hic minus?
            </p>
            <br />
            <p className='text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem perferendis aliquid est delectus! Hic velit facere provident recusandae? Sit fugit quod est laudantium blanditiis illo saepe ipsam consequatur dicta.
            </p>
        </div>
    </div>
  )
}

export default About