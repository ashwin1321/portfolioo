import React from 'react'
import MenuItem from '../MenuItems'
import Style from './Menu.module.css'

const index = () => {
    return (
        <div className={Style.menuList}>
            <MenuItem menuItem="Home" />
            <MenuItem menuItem="About" />
            <MenuItem menuItem="Education" />
            <MenuItem menuItem="Projects" />
            <MenuItem menuItem="Skills" />
            <MenuItem menuItem="Contact" />
        </div>
    )
}

export default index