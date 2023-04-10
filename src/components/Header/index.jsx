import React from 'react'
import Style from './Navbar.module.css'
import Logo from '../Logo'
import Menu from '../Menu'

const index = () => {
    return (
        <div className={Style.navItems}>
            <Logo />
            <Menu />
        </div>
    )
}

export default index