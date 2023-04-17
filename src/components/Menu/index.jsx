import React from 'react'
import MenuItem from '../MenuItems'
import Style from './Menu.module.css'
import { RxCross1 } from "react-icons/rx"

const DesktopView = ({ homeRef, aboutRef, contactRef, skillsRef, projectRef }) => {
    const items = {
        "Home": homeRef,
        "About": aboutRef,
        "Projects": projectRef,
        "Skills": skillsRef,
        "Contact": contactRef
    }

    return (
        <div className={Style.menuList}>
            {Object.keys(items).map((item, index) => {
                return <MenuItem key={index} menuItem={item} reference={items[item]} />
            })}
        </div>
    )
}

const MobileView = ({ homeRef, aboutRef, contactRef, skillsRef, projectRef, setShowMenu }) => {
    const items = {
        "Home": homeRef,
        "About": aboutRef,
        "Projects": projectRef,
        "Skills": skillsRef,
        "Contact": contactRef
    }

    return (
        <div className={Style.menuListMobile}>
            <div className={Style.closeButton} onClick={() => setShowMenu(false)}>
                <RxCross1 />
            </div>
            {Object.keys(items).map((item, index) => {
                return <MenuItem key={index} menuItem={item} reference={items[item]} setShowMenu={setShowMenu} />
            })}
        </div>
    )
}


export { DesktopView, MobileView }