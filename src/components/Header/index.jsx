import React from 'react'
import Style from './Navbar.module.css'
import Logo from '../Logo'
import Menu from '../Menu'
import BurgerButton from '../Button/BurgerButton'

const index = (props) => {
    return (
        <>
            <div className={Style.navItems}>
                <Logo />
                <div className={Style.spacer} >
                    <Menu  {...props} />
                    <BurgerButton />
                </div>
            </div >
        </>
    )
}

export default index