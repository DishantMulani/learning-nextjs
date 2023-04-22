import Link from 'next/link'
import React from 'react'

const Newproduct = () => {
  return (
    <div className="container px-20 py-3 ">
      <h1 className='text-5xl text-green-700 font-semibold'>Create New Product</h1>
      <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit obcaecati nobis, odit, earum nisi nemo quasi recusandae numquam dolorum facere consequuntur nesciunt commodi iure dolore a adipisci repellat ratione. Maiores.</p>
      <div class="my-7">
        <div class=" bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className=''>
            <div className='font-semibold text-3xl text-white bg-green-700 rounded px-6 py-3' >
              New Product
            </div>
            <form class="space-y-4 p-6 md:space-y-6" action="#">
              <div>
                <input type="text" name="sno" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Serial Number" required="" />
              </div>
              <div>
                <input type="text" name="name" id="password" placeholder="Product Name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <input type="text" name="category" id="password" placeholder="Product Category" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <input type="text" name="img" id="password" placeholder="Product Image" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <input type="text" name="price" id="password" placeholder="Product Price" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <input type="text" name="qty" id="password" placeholder="Product Qty" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <button>
                <Link class="bg-green-500 hover:bg-green-900 py-2 px-9 rounded-lg text-white border-b-4 border-green-900 hover:border-green-500 transition duration-300 font-semibold" href="#">Create</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Newproduct