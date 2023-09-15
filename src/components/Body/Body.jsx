import React from 'react'
import './Body.css'
import { Product } from '../Product/Product';

// const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMFv8b9L3cMLIrx-HRThsHB2rpK0Iw2gqgvZTVqM&s';
const img = 'public/img/Valen.jpeg'
const facebook = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png'
const twitter = 'https://play-lh.googleusercontent.com/J8k5q78xv4R8Smi4vOE6iUphLvOz0efC-0lzoyGfd0KRUlAv4ekuCtlss6KBN-tMvEw'
const instagram = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'
const linkedIn = 'https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw'
const github = 'https://cdn-icons-png.flaticon.com/512/38/38401.png?w=360'


export const Body = () => {
    return (
        <>
            <div className='content-body'>
                <div className='content-text'>
                    <h2>Hello, It's Me</h2>
                    <h1>Valen Ramirez</h1>

                    <div className='content'>
                        <h2>And I'm a</h2>
                        <h2 className='frontEnd'>FrontEnd |</h2>
                    </div>

                    <p>Passionate about programming and new technologies. I am dedicated to the development an innovation of applications that meet the needs of customers</p>

                    <div className='social'>
                        <a href=""><img src={facebook} alt="" /></a>
                        <a href=""><img src={instagram} alt="" /></a>
                        <a href=""><img src={linkedIn} alt="" /></a>
                        <a href=""><img src={github} alt="" /></a>
                    </div>
                </div>

                <div className='content-text.'>
                    <img src={img} alt="ButterFly" width={300} height={300} />
                </div>
            </div>
            {/* <hr/> */}

            {/* <section className='product'>
                <Product/>
                <Product/>
                <Product/>
            </section> */}
        </>
    )
}
