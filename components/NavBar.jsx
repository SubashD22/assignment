import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const NavBar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <nav>
            <div className="logo">WS</div>
            <div className="menu-button">
                {showNav ? <ImCross onClick={() => setShowNav(false)} /> :
                    <GiHamburgerMenu onClick={() => setShowNav(true)} />}
            </div>
            <div className={`nav-links ${showNav ? 'active' : ''}`}>
                <Link href='/' onClick={() => setShowNav(false)}>Home</Link>
                <Link href='/about' onClick={() => setShowNav(false)}>About</Link>
                <Link href='/services' onClick={() => setShowNav(false)}>Services</Link>
                <Link href='/blog' onClick={() => setShowNav(false)}>Blog</Link>
                <Link href='/contact' onClick={() => setShowNav(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar