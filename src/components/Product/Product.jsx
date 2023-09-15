import React from 'react'
import './Porduct.css'
import { Header  } from '../Header/Header'
import { Footer } from '../Footer/Footer'
const img3 = './public/img/snagg.png'
const img1 = './public/img/Netflic.png'
const img2 = './public/img/cooking.png'



export const Product = () => {
  return (
    <>
        <Header/>

        <h2 className='title2'>MY PROJECTS</h2>

      <div className='product'>
        <div className='flex items-center justify-center' >
          <div className='w-96 mt-6 color rounded-lg p-3 bg-purple-500 shadow-lg shadow-purple-600/50 '>
            <div className='bg-white rounded-lg p-5 flex items-center
                 flex-col '>

              <img src={img2} alt="" className='h-60 w-72 mb-8 rounded-lg' />

              <h2 className='flex items-center justify-center text-sm  text-purple-500'>PROJECT</h2>
              <h1 className='flex items-center justify-center text-xl  text-purple-500'>|! COOKING + KATE ¡|</h1>

              <p className='mt-6 text-center text-current text-sm mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum officiis accusamus ullam placeat, esse delectus in praesentium iure ducimus tempora, dolor facilis magni exercitationem nostrum quos commodi repudiandae earum.</p>

            </div>
            <div className='p-3 bg-purple-500 flex justify-evenly text-white mt-2'>
              <button className='pl-6 pr-6 font-semibold hover:bg-white hover:text-purple-500 hover:rounded-lg'></button>
              <hr />
              <button className='border-x-2 pl-6 pr-6 pt-2 pb-2 font-semibold hover:bg-white hover:text-purple-500 hover:rounded-lg'> GIT HUB </button>
              <hr />
              <button className='pl-6 pr-6 font-semibold hover:bg-white hover:text-purple-500 hover:rounded-lg'></button>
            </div>
          </div>
        </div>


        <div className='flex items-center justify-center' >
          <div className='w-96 mt-6 color rounded-lg p-3 bg-purple-500 shadow-lg shadow-purple-600/50 '>
            <div className='bg-white rounded-lg p-5 flex items-center
                 flex-col '>

              <img src={img1} alt="" className='h-60 w-72 mb-8 rounded-lg' />

              <h2 className='flex items-center justify-center text-sm  text-purple-500'>PROJECT</h2>
              <h1 className='flex items-center justify-center text-xl  text-purple-500'>|! NETFLIX ¡|</h1>

              <p className='mt-6 text-center text-current text-sm mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum officiis accusamus ullam placeat, esse delectus in praesentium iure ducimus tempora, dolor facilis magni exercitationem nostrum quos commodi repudiandae earum.</p>


            </div>
            <div className='p-3 bg-purple-500 flex justify-evenly text-white mt-2'>
              <button className='pl-6 pr-6 font-semibold hover:bg-white hover:text-purple-500 hover:rounded-lg'> </button>
              <hr />
              <button className='border-x-2 pl-6 pr-6 pt-2 pb-2 font-semibold hover:bg-white hover:text-purple-500 hover:rounded-lg'> GIT HUB </button>
              <hr />
              <button className='pl-6 pr-6 font-semibold hover:bg-white hover:text-purple-500 hover:rounded-lg'> </button>
            </div>
          </div>
        </div>


        <div className='flex items-center justify-center' >
          <div className='w-96 mt-6 color rounded-lg p-3 bg-purple-500 shadow-lg shadow-purple-600/50 '>
            <div className='bg-white rounded-lg p-5 flex items-center
                 flex-col '>

              <img src={img3} alt="" className='h-60 w-72 mb-8 rounded-lg' />

              <h2 className='flex items-center justify-center text-sm  text-purple-500'>PROJECT</h2>
              <h1 className='flex items-center justify-center text-xl  text-purple-500'>|! SNAGGY ¡|</h1>

              <p className='mt-6 text-center text-current text-sm mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum officiis accusamus ullam placeat, esse delectus in praesentium iure ducimus tempora, dolor facilis magni exercitationem nostrum quos commodi repudiandae earum.</p>


            </div>
            <div className='p-3 bg-purple-500 flex justify-evenly text-white mt-2'>
              <button className='pl-6 pr-6 font-semibold hover:bg-white hover:text-purple-500 hover:rounded-lg'></button>
              <hr />
              <button className='border-x-2 pl-6 pr-6 pt-2 pb-2 font-semibold hover:bg-white hover:text-purple-500 hover:rounded-lg'> GIT HUB</button>
              <hr />
              <button className='pl-6 pr-6 font-semibold hover:bg-white hover:text-purple-500 hover:rounded-lg'></button>
            </div>
          </div>
        </div>

      </div>

      <Footer/>

    </>
  )
}
