import Link from 'next/link'
import React from 'react'

const Admin = () => {
    return (
        <div className="container px-20 py-3 ">
            <h1 className='text-5xl text-green-700 font-semibold'>Product Details</h1>
            <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit obcaecati nobis, odit, earum nisi nemo quasi recusandae numquam dolorum facere consequuntur nesciunt commodi iure dolore a adipisci repellat ratione. Maiores.</p>
            <Link href='/components/Newproduct'>
                <button className='uppercase px-8 py-2 rounded-xl font-semibold bg-green-700 text-white'>Create New</button></Link>
        </div>
    )
}

export default Admin