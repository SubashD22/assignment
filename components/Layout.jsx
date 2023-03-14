import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <NavBar />
            <main className='body'>
                {children}
            </main>
            <footer>
                <p> &copy; Subash 2023 </p>
            </footer>
        </div>
    )
}
export default Layout