import React from 'react'
import { Navbar } from '../navbar/navbar'
import './Header.css'


export const Header = () => {
    return (
        <>
            <header className='header-bar'>
                <div className='title'>
                    <h1>PORTFOLIO</h1>
                </div>
                    <Navbar/>
            </header>
        </>
    )
}