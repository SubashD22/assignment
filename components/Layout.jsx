import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Head>
                <meta name="description" content="web solutions" />
                <meta name="keywords" content="HTML, CSS, JavaScript,react,
                Website design and development,E-commerce development,
                Web application development,Content management systems development,
                Search engine optimization" />
                <title>WEB SERVICE</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
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