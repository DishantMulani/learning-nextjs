import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-green-700 text-white flex justify-between items-center px-10 py-5">
            <div className="logo flex items-center">
                <div className="text-2xl font-bold">Big Basket</div>
                <div className="left-links mt-1 ml-5 font-semibold">
                    <Link href="/" className='mx-2 '>Home</Link>
                    <Link href="/components/Product" className='mx-2'>Product</Link>
                </div>
            </div>
            <div className="right-links mt-1 font-semibold">
                <Link href="/components/Admin" className='mx-4'>Admin</Link>
                <Link href="/components/Login" className='mx-4'>Login</Link>
            </div>
        </div >
    )
}

export default Navbar
