import React from 'react'
import MenuItem from '../MenuItems'
import Style from './Menu.module.css'
import { RxCross1 } from "react-icons/rx"

const DesktopView = ({ items }) => {

    return (
        <div className={Style.menuList}>
            {Object.keys(items).map((item, index) => {
                return <MenuItem key={index} menuItem={item} reference={items[item]} />
            })}
        </div>
    )
}

const MobileView = ({ setShowMenu, items }) => {
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