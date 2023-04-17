import React, { useState } from 'react'
import Style from './Navbar.module.css'
import Logo from '../Logo'
import { DesktopView, MobileView } from '../Menu'
import BurgerButton from '../Button/BurgerButton'

const index = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <div className={Style.navItems}>
                <Logo />
                <div className={Style.spacer} >
                    <DesktopView  {...props} />
                    <div onClick={() => setShowMenu(true)}>
                        <BurgerButton />
                    </div>
                </div>
            </div >
            {console.log(showMenu)}
            {showMenu && <MobileView {...props} setShowMenu={setShowMenu} />}
        </>
    )
}

export default index